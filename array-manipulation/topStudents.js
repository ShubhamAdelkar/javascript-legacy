// filtering objects
function topStudents(array) {
  const atLeast90 = array.filter((student) => student.grade >= 90);
  return atLeast90;
}

const students = [
  { name: "David", grade: 90 },
  { name: "Daisy", grade: 100 },
  { name: "Darcie", grade: 80 },
];

console.table(topStudents(students));

export default topStudents;
