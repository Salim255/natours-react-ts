import { useSelector } from 'react-redux';
import './_header.scss';
import type { RootState } from '../../../redux/store';
import { Link } from 'react-router-dom';

const Header = () => {
    const {user} = useSelector((store: RootState) => store.auth);
      console.log(user)
    return (
        <header className="header">
            <nav className='nav nav--tours'>
                <Link className='nav__el' to='/overview'> All tours </Link>
            </nav>
            <div className='header__logo'>
                <img  alt='Natours logo' src='/img/logo-white.png' />
            </div>
            <nav className='nav nav--user'>
                {
                    user ? 
                    <>
                        <a className='nav__el.nav__el--logout' href='#'>
                            Log out 
                        </a>
                        <a className='nav__el' href='#'></a>
                        <img className='nav__user-img' src={'/img/users/' + `${user.photo}`} />
                        <span> { user.name.split(' ')[0]  }</span>
                    </>
                    : 
                    <>
                     <Link className='nav__el' to='/login' > Login </Link>
                     <a className='nav__el nav__el--cta'> About </a>
                    </>
                }
               
        
            </nav>
        </header>
    )
}

/* header.header
 nav.nav.nav--tours 
  a.nav__el(href='/') All tours

 .header__logo 
  img(src='/img/logo-white.png' alt='Natours logo')
 nav.nav.nav--user
   if user
     a.nav__el.nav__el--logout Log out 
     a.nav__el(href='/me')
      img.nav__user-img(src=`/img/users/${user.photo}` alt=`Photo of ${user.name}`) 
      span= user.name.split(' ')[0] 
   else
     a.nav__el(href='/login')  Log in
     a.nav__el.nav__el--cta(href='#')  Sign up */
export default Header;