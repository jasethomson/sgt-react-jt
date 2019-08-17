import React from 'react';

function Grade(props) {
  const name = props.name;
  const course = props.course;
  const grade = props.grade;
  const noGrades = 'No grades recorded';

  if (name) {
    return (
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{course}</td>
          <td>{grade}</td>
        </tr>
      </tbody>
    );
  } else {
    return (
      <tbody>
        <tr>
          <td>{noGrades}</td>
        </tr>
      </tbody>
    );
  }
}

function GradeTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      {
        props.grades.map(grades => {
          return (
            <Grade
              key={grades.id}
              name={grades.name}
              course={grades.course}
              grade={grades.grade} />
          );
        })
      }
    </table>
  );
}
export default GradeTable;
