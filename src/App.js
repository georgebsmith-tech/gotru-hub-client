import logo from "./logo.svg";
import React from "react";

// import { Signin } from "./pages/Signin";
import {
  Dashbaord,
  Signin,
  AttendanceHistory,
  StocksInventory,
  Attendance,
  CustomerProfile,
  ManageUsers,
  Messaging,
  ProductList,
  NewService,
  Notifications,
  Settings,
  Wallet,
  DeskMode,
  Home,
  BuisnessType,
  SignUpBigBiz,
  SignUpSmallBiz,
  SignUpReferral
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NewServiceBox } from "./pages/NewServiceBox";
import { CustomerReport, SalesRegister } from "./components";
import { SalesModal } from "./components/modals";
import { socket } from "./config/socket.config";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="dashboard" element={<Dashbaord />} />
        <Route path="stocks-inventory" element={<StocksInventory />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="product-list" element={<ProductList />} />
        <Route path="new-service" element={<NewService />} />
        <Route path="sales-register" element={<SalesRegister />} />
        <Route path="new-service-box" element={<NewServiceBox />} />
        <Route path="sales-modal" element={<SalesModal />} />
        <Route path="desk-mode" element={<DeskMode />} />
        <Route path="attendance-history" element={<AttendanceHistory />} />
        <Route path="customer-report" element={<CustomerReport />} />
        <Route path="customer-profile" element={<CustomerProfile />} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="messaging" element={<Messaging />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} />
        <Route path="wallet" element={<Wallet />} />

        {/* landing pages  */}

        <Route path="sign-up-biz-types" element={<BuisnessType />} />
        <Route path="sign-up-big-biz" element={<SignUpBigBiz />} />
        <Route path="sign-up-small-biz" element={<SignUpSmallBiz />} />
        <Route path="sign-up-referral" element={<SignUpReferral />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
