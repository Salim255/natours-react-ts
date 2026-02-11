import './_header.scss';

const Header = () => {
    return (
        <>
            <header className="header">
                <nav className='nav nav--tours'>
                    <a href='#'></a>
                </nav>
                <img  src='/img/logo-white.png' className='header__logo'/>
                <nav className='nav nav--users'  >
                    <ul className=''>
                        <li>
                            Login
                        </li>
                     
                        <li>
                            About
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;