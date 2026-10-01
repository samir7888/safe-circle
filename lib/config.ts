// ---------------------------------------------------------------
// Edit this file to change the app name, text and links everywhere.
// ---------------------------------------------------------------

export const siteConfig = {
  // TODO: replace with your real app name
  name: "SafeCircle",
  tagline: "Reach your trusted people in seconds",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  downloadUrl:
    "https://drive.google.com/file/d/1F4_sqeye-yL1beHkIAU9R_S3RBAdZdJA/view",
  description:
    "A personal safety app that keeps you connected with your trusted people. Trigger SOS, share your live location, tell family you're safe, and get a loud alert when someone needs help.",
  keywords: [
    "safety app",
    "SOS app",
    "emergency alert app",
    "personal safety app",
    "share live location with family",
    "family safety app",
    "I am safe notification",
    "emergency contacts app",
    "help alert app",
    "mobile safety app download",
  ],
  // Optional: add your contact email to show it in the footer
  contactEmail: "",
};

export const features = [
  {
    title: "One-tap SOS",
    body: "Hold the SOS button and every trusted person you chose is notified at once. No menus, no typing.",
  },
  {
    title: "Share your location",
    body: "Send where you are along with your alert, so family can find you instead of guessing.",
  },
  {
    title: "Tell them you're safe",
    body: "Reached home? Got through it? One tap lets everyone know you are okay, so nobody keeps worrying.",
  },
  {
    title: "Alert that rings",
    body: "When a help notification arrives, your phone rings an alert so you don't miss it, even when you aren't looking at the screen.",
  },
  {
    title: "Your trusted circle",
    body: "Pick the family and friends who get your alerts. You decide who is in your circle.",
  },
  {
    title: "Built for speed",
    body: "A simple app with very few steps, because when every second matters, less is better.",
  },
];

export const steps = [
  {
    title: "Add your trusted people",
    body: "Choose the family members and friends who should hear from you in an emergency.",
  },
  {
    title: "Press SOS when you need help",
    body: "Your alert and location go out together to everyone in your circle.",
  },
  {
    title: "They get a ringing alert",
    body: "Your people are notified and their phones ring, so the alert is hard to miss.",
  },
  {
    title: "Tell them you're safe",
    body: "Once things are okay, send an \"I'm safe\" update and let everyone relax.",
  },
];

export const faqs = [
  {
    q: `What is ${siteConfig.name}?`,
    a: "It is a mobile safety app that helps you stay connected with your trusted people. You can trigger an SOS, share your location, and tell your family whether you are safe or need help.",
  },
  {
    q: "How do I send an SOS?",
    a: "Open the app and hold the SOS button. Everyone in your trusted circle is notified immediately, with your location if you chose to share it.",
  },
  {
    q: "What happens when someone sends me a help alert?",
    a: "You get a notification and your phone rings an alert, so you do not miss it. You can then check their location and respond.",
  },
  {
    q: "Can I tell my family that I am safe?",
    a: "Yes. After an alert, or any time you want to check in, send an \"I'm safe\" update to your trusted people with one tap.",
  },
  {
    q: "How do I download and install the app?",
    a: "Tap the Download button on this page. It opens the app file on Google Drive. Download it, open the file on your phone, and follow the install prompts. If your phone asks, allow installs from your browser or file manager for this one install.",
  },
  {
    q: "Is the app free?",
    a: "Yes, you can download it for free from this page.",
  },
];
