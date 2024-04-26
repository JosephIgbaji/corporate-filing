import { Routes, Route, Navigate } from "react-router-dom";
import {
  Register,
  Login,
  ApplicationDetails,
  Cases,
  Overview,
  Reports,
  Settings,
  Help,
  UpcomingTasks,
} from "../page";
// import { ProtectedRoute } from "../guards";
import { AdminLayout } from "../layouts";

import * as routes from "./constants";

import ProtectedRoute from "../components/protected/ProtectedRoute";
import PublicRoute from "../components/protected/PublicRoute";

const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route path={routes.REGISTER} element={<Register />} />
        <Route
          path={routes.LOGIN}
          element={<PublicRoute component={Login} />}
        />
        <Route path={"/"} element={<Navigate to={"/signin"} />} />
        <Route
          path={routes.DASHBOARD}
          element={<ProtectedRoute component={AdminLayout} />}
        >
          <Route index element={<Navigate to={"/dashboard/overview"} />} />
          <Route path={routes.OVERVIEW} element={<Overview />} />
          <Route
            path={routes.APPLICATIONDETAIL}
            element={<ApplicationDetails />}
          />
          {/* <Route path={routes.UPCOMINGTASKS} element={<UpcomingTasks />} />
          <Route path={routes.CASES} element={<Cases />} /> */}
          {/* <Route path={routes.REPORTS} element={<Reports />} />
          <Route path={routes.NOTIFICATIONS} element={<Reports />} /> */}

          <Route path={"*"} element={<Navigate to={"/signin"} />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterConfig;
