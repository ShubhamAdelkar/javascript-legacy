const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
];

// Goal: Group students by their grade.
const groupedByGrade = students.reduce((accumulator, student) => {
  const grade = student.grade;

  // 1. If the grade key doesn't exist in the accumulator, create an empty array.
  if (!accumulator[grade]) {
    accumulator[grade] = [];
  }

  // 2. Push the current student into that group's array.
  accumulator[grade].push(student);

  // 3. Always return the accumulator for the next iteration.
  return accumulator;
}, {}); // <--- Initial Value: An empty object {}

console.log(groupedByGrade);
/* Output:
{
  A: [ { name: 'Alice', grade: 'A' }, { name: 'Charlie', grade: 'A' } ],
  B: [ { name: 'Bob', grade: 'B' } ]
}
*/
