import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../components/style.css'
export default function Header() {
  return (
    <div className="header">
      <NavLink to="/"><span>home</span></NavLink>
      <NavLink to="/settings"><span>settings</span></NavLink>
      <NavLink to="/users"><span>users</span></NavLink>
      <NavLink to="/usage"><span>usage</span></NavLink>
    </div>
  );
}
