import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


const Root = () => {
    return (
        //for width 1152px
        <div className="max-w-6xl mx-auto">
            {/* Egula Fix Thakbe */}
            <NavBar></NavBar>
            

            {/* Majkhane ja Change Hobe shegula Outlet ey Thakbe */}
            <Outlet></Outlet>


            {/* Egula Fix Thakbe */}
            <Footer></Footer>
        </div>
    );
};

export default Root;