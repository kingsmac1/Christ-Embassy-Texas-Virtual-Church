import type { FieldDef } from "@/lib/forms";

/** Field lists copied from the WordPress forms (labels, placeholders, required fields). */
export const CONTACT_FIELDS: FieldDef[] = [
  { name: "name", label: "Name", placeholder: "Name", required: true },
  { name: "phone", label: "Phone Number", placeholder: "Phone Number", type: "tel", required: true },
  { name: "email", label: "Email Address", placeholder: "Email Address", type: "email", required: true },
  { name: "message", label: "Message", placeholder: "Message", type: "textarea", required: true },
];

export const SALVATION_FIELDS: FieldDef[] = [
  { name: "name", label: "Name", placeholder: "Name", required: true },
  { name: "phone", label: "Phone No.", placeholder: "Phone No.", type: "tel", required: true },
  { name: "email", label: "Email Address", placeholder: "Email Address", type: "email", required: true },
];

export const SUNDAY_SPECIAL_FIELDS: FieldDef[] = [
  { name: "firstName", label: "First Name", placeholder: "First Name", required: true },
  { name: "lastName", label: "Last Name", placeholder: "Last Name", required: true },
  { name: "mobile", label: "Mobile Number", placeholder: "Mobile Number", type: "tel", required: true },
  { name: "invitedBy", label: "Who invited you? (Type the person's name here)", placeholder: "Who invited you? (Type the person's name here)", required: true },
  { name: "member", label: "Are you a member of Christ Embassy Texas Virtual Church?", placeholder: "Are you a member of Christ Embassy Texas Virtual Church?", required: true },
  { name: "email", label: "Email Address", placeholder: "Email Address", type: "email", required: true },
  { name: "prayerRequest", label: "Prayer Request", placeholder: "Prayer Request", type: "textarea", required: true },
];

export const BACK_TO_SCHOOL_FIELDS: FieldDef[] = [
  { name: "first", label: "First", required: true },
  { name: "last", label: "Last", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "email", label: "Email", type: "email" },
  { name: "level", label: "Select Category", type: "radio", required: true, choices: ["Elementary", "Middle", "High School"] },
  { name: "heardAbout", label: "How did you hear about us?" },
  { name: "prayerRequest", label: "Prayer Request", type: "textarea" },
];
