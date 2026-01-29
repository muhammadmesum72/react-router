import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";
import Marketplace from "./Pages/Marketplace";
import Company from "./Pages/Company";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import User from "./Pages/USer";
import MainLayout from "./Layouts/Main";
import DashboardLayout from "./Layouts/Dashboard";
import Profile from "./Pages/Dashboard/Profile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/features" element={<Features />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/company" element={<Company />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
