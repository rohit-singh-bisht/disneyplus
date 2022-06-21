
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

export const Header = () => {
  return (
      <div className='header'>
        <div className="header__dummy">
        </div>
        <header className='header__fixed'>
            <Link to="/"><img src={logo} alt="" /></Link>
            
            <div className="header__search">
                <input type="search" name="" className='header__search__input' placeholder="Search" id="" />
                <div className='header__search__btn'>
                    <AiOutlineSearch/>
                </div>
            </div>

            <Link to="/subscribe" className='header__subscribe'>
                Subscribe
            </Link>

            <Link to="/login" className='header__login'>Login</Link>
        </header>
      </div>
  )
}
