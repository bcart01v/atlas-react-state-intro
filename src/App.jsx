import React, { createContext, useContext, useState } from "react";
import SchoolCatalog from "./SchoolCatalog";
import Header from "./Header";
import ClassSchedule from "./ClassSchedule";

const EnrolledCoursesContext = createContext();

export const EnrolledCoursesProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    if (!enrolledCourses.some((c) => c.courseNumber === course.courseNumber)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const dropCourse = (courseNumber) => {
    setEnrolledCourses(
      enrolledCourses.filter((course) => course.courseNumber !== courseNumber)
    );
  };

  return (
    <EnrolledCoursesContext.Provider value={{ enrolledCourses, enrollCourse, dropCourse }}>
      {children}
    </EnrolledCoursesContext.Provider>
  );
};

export const useEnrolledCourses = () => useContext(EnrolledCoursesContext);

export default function App() {
  return (
    <EnrolledCoursesProvider>
      <Header />
      <SchoolCatalog />
      <ClassSchedule />
    </EnrolledCoursesProvider>
  );
}