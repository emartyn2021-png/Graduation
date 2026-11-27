// All page copy lives here so it can be edited in one place.

export const graduate = {
  name: "Christiana Mariatu Conteh",
  degree: "Master of Science in Public Health Science",
  university: "UNIMARK",
  classOf: "CLASS OF 2026",
  attestedOn: "28/11/2026",
  // Files in /public are served from the site root.
  photo: "/new.jpg",
};

// Leave empty ("") to show "GIFT LINK COMING SOON" instead of a button link.
export const PAYMENT_LINK = "https://app.flotme.ai/paytag/39c87bec-2701-435f-8702-7ba1541d5117";

export const navLinks = [
  { href: "#attest", label: "ATTESTATION" },
  { href: "#journey", label: "JOURNEY" },
  { href: "#milestones", label: "MILESTONES" },
  { href: "#gallery", label: "GALLERY" },
  { href: "#thanks", label: "THANKS" },
  { href: "#gift", label: "GIFT" },
];

export const journey = [
  "It started with an application, a lot of nerves and a lecture hall full of strangers. Within weeks, those strangers became study partners, and long nights in the library became a shared routine.",
  "There were hard seasons: heavy workloads, tight deadlines and the long stretch of writing a dissertation. Every time, the support of family, friends and supervisors pulled me back to the page.",
  "Today, with the final submission behind me, I stand at the end of one chapter and the start of the next. This page is my record of that journey, and my thanks to everyone who walked it with me.",
];

export const milestones = [
  { title: "Admission", detail: `Started the programme at ${graduate.university}` },
  { title: "Coursework", detail: "Completed all taught modules" },
  { title: "Research proposal", detail: "Approved by my supervisor and the department" },
  { title: "Dissertation", detail: "Written, submitted and defended" },
  { title: "Graduation", detail: "Degree conferred, 2026" },
];

// `bg` shows while an image loads or if it is missing. `caption` is optional.
export const gallery: { image?: string; caption?: string; bg: string }[] = [
  { image: "/1.jpeg", bg: "linear-gradient(160deg,#1a2f5c,#5a7fc4)" },
  { image: "/2.jpeg", bg: "linear-gradient(160deg,#3a3f52,#a49a7c)" },
  { image: "/5.jpeg", bg: "linear-gradient(160deg,#142a54,#c9a45c)" },
  { image: "/4.jpeg", bg: "linear-gradient(160deg,#24427f,#9fb4dd)" },
];

export const thanks = [
  "To my family, for your patience and prayers. To my supervisors and lecturers, for your guidance. To my friends and course mates, for the laughter and the late-night messages that kept me going.",
  "This achievement belongs to all of you.",
];
