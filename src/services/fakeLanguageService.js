export const languages = [
  { _id: "l1", shortCode: "en", name: "English" },
  { _id: "l2", shortCode: "hi", name: "Hindi" },
  { _id: "l3", shortCode: "bn", name: "Bengali" },
  { _id: "l4", shortCode: "ta", name: "Tamil" },
  { _id: "l12", shortCode: "ko", name: "Korean" },
  { _id: "l5", shortCode: "fr", name: "French" },
  { _id: "l6", shortCode: "de", name: "German" },
  { _id: "l7", shortCode: "es", name: "Spanish" },
  { _id: "l10", shortCode: "it", name: "Italian" },
  { _id: "l11", shortCode: "ja", name: "Japanese" },
];

export function getLanguages() {
  return languages.filter((l) => l);
}
