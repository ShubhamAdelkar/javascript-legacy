const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function sortByMonth(events) {
  events.sort(function (a, b) {
    indexA = MONTHS.indexOf(a.month);
    indexB = MONTHS.indexOf(b.month);
    return indexA - indexB;
  });
  return events;
}

console.log(
  sortByMonth([
    { event: "parade", month: "JAN" },
    { event: "snowball fight", month: "FEB" },
    { event: "dance", month: "MAR" },
    { event: "farmers market", month: "JUN" },
    { event: "picnic", month: "SEP" },
    { event: "haunted hayride", month: "OCT" },
    { event: "holiday party", month: "DEC" },
  ])
);
