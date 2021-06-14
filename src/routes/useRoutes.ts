import { TRoutesWrapper } from "./RoutesContext";
import { MainScreen } from "../components/MainScreen/MainScreen";
export const useRoutes: TRoutesWrapper = {
  routes: [{ path: "/", exact: true, component: MainScreen, routes: [] }],
};
