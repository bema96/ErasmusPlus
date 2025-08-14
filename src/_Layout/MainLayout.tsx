import { Outlet } from "react-router-dom";
// import { FullscreenButton } from "../components/shared/FullscreenButton";

const MainLayout = () => {
    return (
        <>
         {/* <FullscreenButton /> */}
         <Outlet />
        </>
    )
}

export default MainLayout;