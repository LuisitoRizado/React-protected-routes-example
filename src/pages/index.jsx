import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
export const Landing = () => {
  return <h2>Landing Page (Public)</h2>;
};

export const Home = () => {

  return <h2>Home page (Private)</h2>;
};
export const Dashboard = () => {
  return <h2>DashBoard page (Private)</h2>;
};

export const Analytics = () => {
  return <h2>Analytics page (Private, permission: 'analize')</h2>;
};

export const Admins = () => {
    return <h2>Admin page (Private, permission: 'admin')</h2>;
  };