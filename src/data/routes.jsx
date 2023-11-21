import Newcampain from "../Dahsboard/Content/Add/Newcampain";
import Credit from "../Dahsboard/Content/Credit/Credit";
import Notificatons from "../Dahsboard/Content/Notifications/Notificatons";
import Settings from "../Dahsboard/Content/Settings/Settings";
import Dashboard from "../Dahsboard/Dashboard";
import DashboardMenu from "../Dahsboard/Manu/DashboardMenu";
import Home from "../pages";
import Error from "../pages/Error";
import IndexFacebook from "../pages/FacebookAds/IndexFacebook";
import IndexGoogle from "../pages/GoogleAds/indexGoogle";
import IndexINS from "../pages/InstagramAds";
import IndexMCRS from "../pages/MicrosoftAds/IndexMicrosoft";
import Login from "../registration/login";

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "*",
        element: <Error />
    },
    {
        path: "google",
        element: <IndexGoogle />
    },
    {
        path: "facebook",
        element: <IndexFacebook />
    },
    {
        path: "insta",
        element: < IndexINS/>
    },
    {
        path: "mcrs",
        element: < IndexMCRS/>
    },
    {
        path: "dashboard",
        element: <Dashboard/>
    },
    {
        path: "login",
        element: <Login/>
    },
    {
        path: "dmenu",
        element: <DashboardMenu/>
    },
    {
        path: "dcredit",
        element: <Credit/>
    },
    {
        path: "notificatons",
        element: <Notificatons/>
    },
    {
        path: "settings",
        element: <Settings/>
    },
    {
        path: "newcampain",
        element: <Newcampain/>
    },


]