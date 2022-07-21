import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CompleteOrder } from "./pages/CompleteOrder";
import { Home } from "./pages/Home";
import { OrderConfirmed } from "./pages/OrderConfirmed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeorder" element={<CompleteOrder />} />
        <Route path="/orderconfirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  );
}
