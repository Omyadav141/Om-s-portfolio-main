export type Engagement = {
  name: string;
  image: string | null;
  note: string;
  role?: string;
};

export const engagements: Engagement[] = [
  { name: "Shashi Tharoor", role: "Member of Parliament, India", image: "/portfolio/shashi.jpeg", note: "Met at AI Impact Summit 2026 — discussed open data governance, policy frameworks, and the future of responsible AI in India." },
  { name: "Harshil Mathur", role: "CEO & Co-founder, Razorpay", image: "/portfolio/harshil.jpeg", note: "Fintech innovation, digital payments, and the evolving Indian startup ecosystem." },
  { name: "Ashwini Vaishnaw", role: "Union Minister of Electronics & IT, India", image: null, note: "Conversation on India's semiconductor ecosystem, Lam Research, and the chip-manufacturing vision." },
  { name: "David Lammy", role: "Deputy Prime Minister, United Kingdom", image: null, note: "Inclusive AI session on linguistic diversity and global cooperation at AI Impact Summit 2026." },
  { name: "Sundar Pichai", role: "CEO, Google & Alphabet", image: null, note: "Attended the keynote on AI in everyday life, global progress, and the responsibility of frontier labs." },
  { name: "Ankur Vora", role: "Chief Strategy Officer, Gates Foundation", image: "/portfolio/ankurvora.jpeg", note: "Inclusive AI and its real-world social impact — humility and clarity in equal measure." },
  { name: "Jonathan Shock", role: "Interim Director, UCT AI Initiative", image: "/portfolio/jonathanshock.jpeg", note: "AI research, governance, and global collaboration across institutions." },
  { name: "Sahiba Bali", role: "Creator & Host", image: "/portfolio/sahibabali.jpeg", note: "Inspiring conversation about AI ethics and inclusive innovation." },
  { name: "Chandrasekar Vuppalapati", role: "AgriTech Researcher", image: "/portfolio/chandrashekhar.jpeg", note: "Building smart cow-bands and tech solutions for farmers — AgriTech with real impact." },
  { name: "Rohan", role: "AI Impact Summit Delegate", image: "/portfolio/rohan.jpeg", note: "Met at the AI Impact Summit — energy, positivity, and openness made the conversation memorable." },
  { name: "AI Impact Summit 2026", role: "Summit", image: "/portfolio/aisummit.jpeg", note: "Full of learning, new connections, and discussions about the future of AI." },
  { name: "U.S.–India PAXSILICA Signing", role: "Bilateral Moment", image: "/portfolio/aisummitmain.jpeg", note: "Bilateral tech-collaboration moment at the Impact AI Summit." },
];