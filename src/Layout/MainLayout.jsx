import { Outlet } from "react-router-dom";
import Navbar from '../Component/Header/Navbar/Navbar'

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="px-5 md:px-[10%] my-10 min-h-[80vh]">
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;