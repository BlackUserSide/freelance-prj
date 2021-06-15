import { TRoutesWrapper } from "./RoutesContext";
import { MainScreen } from "../components/MainScreen/MainScreen";
import { MainRavinPage } from "../components/RevitPage/MainRavinPage";
export const useRoutes: TRoutesWrapper = {
  routes: [
    { path: "/", exact: true, component: MainScreen, routes: [] },
    { path: "/revit", exact: true, component: MainRavinPage, routes: [] },
  ],
};
