import { Suspense } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { classNames } from "./helpers/classNames/classNames";
import RootLayout from "./layouts/RootLayout";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

const App = () => {
  //themes
  const { theme, toggleTheme } = useTheme();
  const bool = true;
  //routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<MainPageAsync />} />
        <Route path="about" element={<AboutPageAsync />} />
      </Route>
    )
  );

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
