import { Outlet } from "react-router-dom";
import { FullscreenButton } from "../components/shared/FullscreenButton";

const MainLayout = () => {
    return (
        <>
        {/* Navigation */}
        
        {/* Fullscreen Button */}
        <FullscreenButton />

         <Outlet />
         
        {/* Footer */}
        </>
    )
}

export default MainLayout;