import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2).filter((a) => a !== "--reduced-motion");
const reducedMotion = process.argv.includes("--reduced-motion");
const url = args[0] || "http://localhost:5173";
const label = args[1];

const BREAKPOINTS = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

const outDir = path.resolve("./temporary screenshots");
fs.mkdirSync(outDir, { recursive: true });

const existing = fs
  .readdirSync(outDir)
  .map((f) => f.match(/^screenshot-(\d+)/))
  .filter(Boolean)
  .map((m) => parseInt(m[1], 10));
const next = existing.length ? Math.max(...existing) + 1 : 1;

const browser = await puppeteer.launch();
const page = await browser.newPage();

if (reducedMotion) {
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
}

for (const bp of BREAKPOINTS) {
  await page.setViewport({ width: bp.width, height: bp.height });
  await page.goto(url, { waitUntil: "networkidle0" });

  // fullPage:true captures beyond the viewport without actually scrolling,
  // so scroll-triggered (whileInView) animations never fire. Walk down the
  // page first so everything settles into its visible (once: true) state.
  await page.evaluate(async () => {
    const step = 400;
    const height = document.documentElement.scrollHeight;
    for (let y = 0; y < height; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    window.scrollTo(0, height);
    await new Promise((resolve) => setTimeout(resolve, 800));
    window.scrollTo(0, 0);
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Chromium can duplicate `position: fixed` elements when tiling a
    // fullPage capture beyond the viewport. Pin the sticky nav to the
    // document instead of the viewport so it renders exactly once.
    const header = document.querySelector("header");
    if (header) header.style.position = "absolute";
  });

  const suffix = [label, bp.name].filter(Boolean).join("-");
  const fileName = `screenshot-${next}-${suffix}.png`;
  const outPath = path.join(outDir, fileName);

  await page.screenshot({ path: outPath, fullPage: true });
  console.log(`Saved ${outPath}`);
}

await browser.close();
