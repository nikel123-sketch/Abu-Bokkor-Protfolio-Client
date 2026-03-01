import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import HomeLayout from "../Layout/HomeLayout";
import About from "../Page/About";
import Skills from "../Page/Skills";
import Projects from "../Page/Projects";
import Experience from "../Page/Experience";
import Contact from "../Page/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
      {
        path: "About",
        Component: About,
      },
      {
        path: "Skills",
        Component: Skills,
      },
      {
        path: "Projects",
        Component: Projects,
      },
      {
        path: "Experience",
        Component:Experience
      },
      {
        path:"Contact",
        Component:Contact
      }
    ],
  },
]);