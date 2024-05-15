import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../Components/PrivateRoute";
import { CartPage } from "./CartPage";
import { Homepage } from "./Homepage";
import { Login } from "./Login";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* Provide all Routes here */}
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/cart" element={<PrivateRoute><CartPage/></PrivateRoute>}></Route>
      <Route path="/login" element={<Login/>}></Route> 
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
