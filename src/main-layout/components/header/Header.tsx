import './_header.scss';

const Header = () => {
    return (
        <>
            <header className="header">
                <nav className='nav nav--tours'>
                    <a className='nav__el' href='/overview'> All tours </a>
                </nav>
                <img  alt='Natours logo' src='/img/logo-white.png' className='header__logo'/>
                <nav className='nav nav--users'  >
                    <a className='nav__el' href='/login' > Login </a>
                    <a className='nav__el nav__el--cta'> About </a>
                </nav>
            </header>
        </>
    )
}

export default Header;