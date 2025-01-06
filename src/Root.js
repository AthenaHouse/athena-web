import { Outlet } from "react-router-dom";
import Banner from "./components/Banner/Banner.jsx";
import Main from "./components/Main/Main.jsx";

export default function Root() {
  return (
    <>
      <Banner />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
