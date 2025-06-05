import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-397px)]'>
               <Outlet/>
            </div>
           <Footer/>
        </div>
    );
};

export default MainLayout;