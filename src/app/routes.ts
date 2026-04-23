import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import UniversityHistory from "./pages/UniversityHistory";
import Museum from "./pages/Museum";
import Management from "./pages/Management";
import AcademicCouncil from "./pages/AcademicCouncil";
import News from "./pages/News";
import Rectorate from "./pages/Rectorate";
import Documents from "./pages/Documents";
import PublicInfo from "./pages/PublicInfo";
import Contacts from "./pages/Contacts";
import Institutes from "./pages/Institutes";
import Admissions from "./pages/Admissions";
import Science from "./pages/Science";
import NotFound from "./pages/NotFound";
import BachelorPage from './pages/BachelorPage';
import MasterPage from './pages/MasterPage';
import PhdPage from './pages/PhdPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "university/history", Component: UniversityHistory },
      { path: "university/museum", Component: Museum },
      { path: "university/management", Component: Management },
      { path: "university/council", Component: AcademicCouncil },
      { path: "university/news", Component: News },
      { path: "university/rectorate", Component: Rectorate },
      { path: "university/documents", Component: Documents },
      { path: "university/contacts", Component: Contacts },
      { path: "institutes", Component: Institutes },
      { path: "admissions", Component: Admissions },
      { path: "science", Component: Science },
      { path: "admissions/bachelor", Component: BachelorPage },
      { path: "admissions/master", Component: MasterPage },
      { path: "admissions/phd", Component: PhdPage },
      { path: "public-info", Component: PublicInfo }, 
      
      { path: "*", Component: NotFound },
    ],
  },
]);