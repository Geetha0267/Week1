import React from 'react';

const courses = [
  { id: 1, name: "ReactJS Bootcamp", enrolled: true },
  { id: 2, name: "Advanced Java", enrolled: false },
];

const CourseDetails = () => {
  return (
    <div>
      <h2>📚 Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} — {course.enrolled ? "✅ Enrolled" : "❌ Not Enrolled"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
