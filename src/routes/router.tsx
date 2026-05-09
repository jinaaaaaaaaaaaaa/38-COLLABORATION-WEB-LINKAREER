import { createBrowserRouter } from "react-router";
import HomePage from "../pages/home/homePage";
import RecruitPage from "../pages/recruit/recruitPage";
import RecruitDatailPage from "../pages/recruitDetail/recruitDetailPage";
import MentoPage from "../pages/mento/mentoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/recruit",
    element: <RecruitPage />,
  },
  {
    path: "/recruit/detail",
    element: <RecruitDatailPage />,
  },
  {
    path: "/mento",
    element: <MentoPage />,
  },
]);

export default router;
