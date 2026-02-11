import './_main-layout.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from 'react-router-dom';

const MainLayout = () => {

    return (
        <>  
            <main className="main-layout">
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </main>
        </>
    )
}

export default MainLayout;