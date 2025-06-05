import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div>
               <Outlet/>
            </div>
            <h2>Footer</h2>
        </div>
    );
};

export default MainLayout;