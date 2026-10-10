// TODO: Replace with your real Formspree endpoint, e.g. "https://formspree.io/f/xxxxxxx"
export const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/REPLACE_ME";

export async function submitContactForm(data) {
  const res = await fetch(CONTACT_FORM_ENDPOINT, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Submission failed");
  }

  return res.json();
}
