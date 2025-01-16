import React from "react";
import { useEnrolledCourses } from "./App";

export default function ClassSchedule() {
  const { enrolledCourses, dropCourse } = useEnrolledCourses();

  return (
    <div className="class-schedule">
      <h1>Class Schedule</h1>
      {enrolledCourses.length === 0 ? (
        <p>No classes enrolled yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Course Number</th>
              <th>Course Name</th>
              <th>Drop</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses.map((course, index) => (
              <tr key={index}>
                <td>{course.courseNumber}</td>
                <td>{course.courseName}</td>
                <td>
                  <button onClick={() => dropCourse(course.courseNumber)}>Drop</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}