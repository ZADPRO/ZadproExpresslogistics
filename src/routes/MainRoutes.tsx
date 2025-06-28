import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Home from "../pages/01-Home/Home";
import About from "../pages/02-About/About";
import Modules from "../pages/03-Modules/Modules";
import Blogs from "../pages/04-Blogs/Blogs";
import Contact from "../pages/05-Contact/Contact";

// Admin Pages
import AdminHeader from "../pages/10-AdminHeader/AdminHeader";
import AdminLogin from "../pages/11-AdminLogin/AdminLogin";
import AdminBlogUpdate from "../pages/12-AdminBlogUpdate/AdminBlogUpdate";
import AdminHome from "../pages/13-AdminHome/AdminHome";
import AdminAchievements from "../pages/14-AdminAchievements/AdminAchievements";
import AdminRelease from "../pages/15-AdminRelease/AdminRelease";
import AdminFeedback from "../pages/16-AdminFeedback/AdminFeedback";

const AppLayout: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const isAdminRoute = path.startsWith("/admin");
  const isAdminLogin = path === "/admin/login";

  return (
    <>
      {!isAdminRoute ? <Header /> : !isAdminLogin ? <AdminHeader /> : null}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/auth/home" element={<AdminHome />} />
        <Route path="/admin/auth/blogPage" element={<AdminBlogUpdate />} />
        <Route
          path="/admin/auth/achievements"
          element={<AdminAchievements />}
        />
        <Route path="/admin/auth/release" element={<AdminRelease />} />
        <Route path="/admin/auth/feedback" element={<AdminFeedback />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
};

const MainRoutes: React.FC = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default MainRoutes;
