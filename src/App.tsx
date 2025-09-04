import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Secondary App Pages
import { Home } from "./components/pages";
import Home2 from "./E-Commerce/pages/Home";
import { About, Contact, Services } from "./components/pages";
import ComingSoon from "./components/pages/ComingSoon";
import Scholarship from "./components/pages/Scholarship";
import ScholarshipInfo from "./components/pages/ScholarshipInfo";
import Course1 from "./components/pages/Course1";
import Course2 from "./components/pages/Course2";
import Course3 from "./components/pages/Course3";
import Course4 from "./components/pages/Course4";
import Course5 from "./components/pages/Course5";
import Course6 from "./components/pages/Course6";
import Course7 from "./components/pages/Course7";
import RootLayout from "./E-Commerce/layout/RootLayout";
import ExploreProduct from "./E-Commerce/pages/ExploreProducts";
import Product from "./E-Commerce/pages/Product";
import Checkout from "./E-Commerce/pages/Checkout";
import Category from "./E-Commerce/pages/Category";
import Wishlist from "./E-Commerce/pages/Wishlist";
import Order from "./E-Commerce/pages/Order";
import Login from "./E-Commerce/pages/Login";
import Register from "./E-Commerce/pages/Register";
import VendorRegister from "./E-Commerce/pages/VendorRegister";
import VendorDashboard from "./E-Commerce/pages/VendorDashboard";
import ProductForm from "./E-Commerce/component/VendorForm/ProductForm";
import ProtectedRoute from "./E-Commerce/auth/ProtectedRoute";
import { AuthProvider } from "./E-Commerce/auth/AuthProvider";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/soon" element={<ComingSoon />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/scholarshipInfo" element={<ScholarshipInfo />} />
          <Route path="/course1" element={<Course1 />} />
          <Route path="/course2" element={<Course2 />} />
          <Route path="/course3" element={<Course3 />} />
          <Route path="/course4" element={<Course4 />} />
          <Route path="/course5" element={<Course5 />} />
          <Route path="/course6" element={<Course6 />} />
          <Route path="/course7" element={<Course7 />} />
          <Route element={<RootLayout />}>
            <Route path="/home2" element={<Home2 />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/wishlist"
              element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              }
            />
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vendordashboard"
              element={
                <ProtectedRoute>
                  <VendorDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/productform"
              element={
                <ProtectedRoute>
                  <ProductForm />
                </ProtectedRoute>
              }
            />
            <Route path="/explore/:category" element={<ExploreProduct />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product/:id/" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/vendorRegister" element={<VendorRegister />} />
          </Route>
        </Routes>

        <Toaster
          toastOptions={{
            style: {
              padding: "16px",
              fontSize: "1.6rem",
            },
          }}
        />
      </div>
    </AuthProvider>
  );
};

export default App;
