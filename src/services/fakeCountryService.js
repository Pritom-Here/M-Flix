export const countries = [
  { _id: "c1", name: "Australia" },
  { _id: "c2", name: "Austria" },
  { _id: "c3", name: "Bengali" },
  { _id: "c4", name: "Canada" },
  { _id: "c5", name: "France" },
  { _id: "c6", name: "Germany" },
  { _id: "c7", name: "India" },
  { _id: "c8", name: "International" },
  { _id: "c9", name: "Iran" },
  { _id: "c10", name: "Italy" },
  { _id: "c11", name: "Japan" },
  { _id: "c12", name: "Korea" },
  { _id: "c13", name: "Mexico" },
  { _id: "c14", name: "Spain" },
  { _id: "c15", name: "UK" },
  { _id: "c16", name: "USA" },
];

export function getCountries() {
  return countries.filter((c) => c);
}
