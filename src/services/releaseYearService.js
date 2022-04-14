import _ from "lodash";

const releaseYears = _.range(1980, new Date().getFullYear() + 1).map((y) => {
  return { _id: y, year: y };
});

export function getReleaseYears() {
  return _.orderBy(releaseYears, ["year"], ["desc"]);
}
