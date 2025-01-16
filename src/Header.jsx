import React from "react";
import { useEnrolledCourses } from "./App";
import logo from "./assets/logo.png";

export default function Header() {
  const { enrolledCourses } = useEnrolledCourses();

  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="enrollment">Classes Enrolled: {enrolledCourses.length}</div>
    </div>
  );
}