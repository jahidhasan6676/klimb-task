import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div>
               <Outlet/>
            </div>
           <Footer/>
        </div>
    );
};

export default MainLayout;