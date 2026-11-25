// All page copy lives here so it can be edited in one place.

export const graduate = {
  name: "Christiana Mariatu Conteh",
  degree: "Master of Science in Public Health Science",
  university: "UNIMARK",
  classOf: "Class of 2026",
  conferredOn: "8/11/2026",
  // Drop the photo into /public with this name (or change the path).
  photo: "/graduation-photo.jpg",
};

// Leave empty ("") to show "Gift link coming soon" instead of a button link.
export const PAYMENT_LINK = "https://pay.flotme.ai/mrcrispy";

export const navLinks = [
  { href: "#attest", label: "Attestation" },
  { href: "#journey", label: "Journey" },
  { href: "#milestones", label: "Milestones" },
  { href: "#gallery", label: "Gallery" },
  { href: "#thanks", label: "Thanks" },
  { href: "#gift", label: "Gift" },
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
  { title: "Graduation", detail: `Degree conferred, ${graduate.conferredOn}` },
];

// Add `image: "/gallery/xyz.jpg"` to any item to show a real photo.
export const gallery: { caption: string; bg: string; image?: string }[] = [
  { caption: "First day on campus", bg: "linear-gradient(160deg,#1a2f5c,#5a7fc4)" },
  { caption: "Library nights", bg: "linear-gradient(160deg,#3a3f52,#a49a7c)" },
  { caption: "Dissertation defence", bg: "linear-gradient(160deg,#142a54,#c9a45c)" },
  { caption: "Graduation day", bg: "linear-gradient(160deg,#24427f,#9fb4dd)" },
];

export const thanks = [
  "To my family, for your patience and prayers. To my supervisors and lecturers, for your guidance. To my friends and course mates, for the laughter and the late-night messages that kept me going.",
  "This achievement belongs to all of you.",
];
