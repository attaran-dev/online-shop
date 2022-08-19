import AdminLayout from "../Layouts/AdminLayout/AdminLayout";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import AdminPage from "../Pages/AdminPage/AdminPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import HomePage from "../Pages/HomePage/HomePage";
import Orders from "../Pages/Orders/Orders";
import StockPriceManagement from "../Pages/StockPriceManagement/StockPriceManagement";
import ProductsManagement from "../Pages/ProductsManagement/ProductsManagement";
import Finalizing from "../Pages/Finalizing/Finalizing";
import Cart from "../Pages/Cart/Cart";
import PaymentResponse from "../Pages/PaymentResponse/PaymentResponse";
import Product from "../Pages/Product/Product";
import NotFound from "../Pages/NotFound/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminPage />
            </AdminLayout>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin/orders"
          element={<Navigate to="/admin/orders/page/1" replace />}
        />
        <Route
          path="/admin/orders/page/:id"
          // ?page=1
          element={
            <AdminLayout>
              <Orders />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/stock-price"
          element={<Navigate to="/admin/stock-price/page/1" replace />}
        />
        <Route
          path="/admin/stock-price/page/:id"
          element={
            <AdminLayout>
              <StockPriceManagement />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/products"
          element={<Navigate to="/admin/products/page/1" replace />}
        />
        <Route
          path="/admin/products/page/:id"
          element={
            <AdminLayout>
              <ProductsManagement />
            </AdminLayout>
          }
        />
        <Route path="/finalizing" element={<Finalizing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment-result" element={<PaymentResponse />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
