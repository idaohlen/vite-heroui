import { Route, Routes } from "react-router-dom";

import Index from "@/pages/Index";
import Contact from "@/pages/Contact";
import Dashboard from "@/pages/dashboard/Index";
import UserDashboard from "@/pages/dashboard/User";
import Pricing from "@/pages/Pricing";
import Register from "@/pages/Register";
import PaymentPage from "@/pages/PaymentPage";
import PaymentSuccess from "@/pages/PaymentSuccess";

function App() {
  return (
    <Routes>
      <Route element={<Index />} path="/" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Dashboard />} path="/dashboard">
        <Route element={<UserDashboard />} path="user" />
      </Route>
      <Route element={<Pricing />} path="/pricing" />
      <Route element={<Register />} path="/register" />
      <Route element={<PaymentPage />} path="/payment-page" />
      <Route element={<PaymentSuccess />} path="/payment-success" />
    </Routes>
  );
}

export default App;
