// Server-side definition of every form on the site. The browser sends only
// field values; labels, required flags and limits come from here so the
// server never trusts the client's idea of what a form looks like.
export type FieldSpec = {
  name: string;
  label: string;
  required?: boolean;
  type?: "text" | "email" | "tel" | "textarea" | "choice";
  max?: number;
  choices?: string[];
};

export type FormSpec = {
  label: string;
  thanks: string;
  fields: FieldSpec[];
  nameFields: string[];
};

export const FORMS: Record<string, FormSpec> = {
  contact: {
    label: "Contact",
    thanks: "Thank you for getting in touch. We have received your message and will respond as soon as we can.",
    nameFields: ["name"],
    fields: [
      { name: "name", label: "Name", required: true, max: 120 },
      { name: "phone", label: "Phone Number", required: true, type: "tel", max: 40 },
      { name: "email", label: "Email Address", required: true, type: "email", max: 200 },
      { name: "message", label: "Message", required: true, type: "textarea", max: 4000 },
    ],
  },
  newsletter: {
    label: "Newsletter",
    thanks: "Thank you for subscribing to our newsletter.",
    nameFields: [],
    fields: [{ name: "email", label: "Email", required: true, type: "email", max: 200 }],
  },
  salvation: {
    label: "Salvation Contact Form",
    thanks: "Congratulations! You are now a child of God. We have received your details and will send you the book 'Now that you are born-again'.",
    nameFields: ["name"],
    fields: [
      { name: "name", label: "Name", required: true, max: 120 },
      { name: "phone", label: "Phone No.", required: true, type: "tel", max: 40 },
      { name: "email", label: "Email Address", required: true, type: "email", max: 200 },
    ],
  },
  "sunday-special": {
    label: "Sunday Special Registration",
    thanks: "Thank you for registering for the Sunday Special. We have received your registration.",
    nameFields: ["firstName"],
    fields: [
      { name: "firstName", label: "First Name", required: true, max: 80 },
      { name: "lastName", label: "Last Name", required: true, max: 80 },
      { name: "mobile", label: "Mobile Number", required: true, type: "tel", max: 40 },
      { name: "invitedBy", label: "Who invited you? (Type the person's name here)", required: true, max: 120 },
      { name: "member", label: "Are you a member of Christ Embassy Texas Virtual Church?", required: true, max: 120 },
      { name: "email", label: "Email Address", required: true, type: "email", max: 200 },
      { name: "prayerRequest", label: "Prayer Request", required: true, type: "textarea", max: 4000 },
    ],
  },
  "back-to-school": {
    label: "Back to School Registration",
    thanks: "Thank you for registering. We have received your Back to School registration.",
    nameFields: ["first"],
    fields: [
      { name: "first", label: "First", required: true, max: 80 },
      { name: "last", label: "Last", required: true, max: 80 },
      { name: "phone", label: "Phone", required: true, type: "tel", max: 40 },
      { name: "email", label: "Email", type: "email", max: 200 },
      { name: "level", label: "Select Category", required: true, type: "choice", choices: ["Elementary", "Middle", "High School"] },
      { name: "heardAbout", label: "How did you hear about us?", max: 300 },
      { name: "prayerRequest", label: "Prayer Request", type: "textarea", max: 4000 },
    ],
  },
};
