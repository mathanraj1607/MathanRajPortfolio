// To receive contact form submissions:
// 1. Go to https://formspree.io/ and sign up for a free account
// 2. Create a new form and get your endpoint URL (looks like: https://formspree.io/f/your-form-id)
// 3. Replace the value below with your actual Formspree endpoint
// 4. Form submissions will be emailed to the address associated with your Formspree account
//
// Alternative: You can replace this with your own backend endpoint if preferred

export const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/xrpeyvgn";

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
