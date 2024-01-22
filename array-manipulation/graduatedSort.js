function sortStudents(students) {
  students.sort(function (a, b) {
    if (a.graduated && !b.graduated) {
      return -1;
    } else if (!a.graduated && b.graduated) {
      return 1;
    } else {
      return b.grade - a.grade;
    }
  });
  return students;
}

console.log(sortStudents([
    { id: 1, graduated: true, grade: 86 },
    { id: 2, graduated: false, grade: 96 },
    { id: 3, graduated: false, grade: 78 },
    { id: 4, graduated: true, grade: 96 },
]));
