import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Main/Home";
import Features from "./pages/Main/Features";
import Product from "./pages/Main/Product";
import NotFound from "./components/NotFound";
import Marketplace from "./pages/Main/Marketplace";
import Company from "./pages/Main/Company";
import Login from "./pages/Main/Login";
import Dashboard from "./pages/Main/Dashboard";
import Users from "./pages/Users";
import User from "./pages/USer";
import MainLayout from "./layouts/Main";
import DashboardLayout from "./layouts/Dashboard";
import Profile from "./pages/Dashboard/Profile";
import HomePage from "./pages/Homepage";
import UserProvider from "./context/UserProvider";

const App = () => {
  return (
    <UserProvider>
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
    </UserProvider>
  );
};
export default App;
