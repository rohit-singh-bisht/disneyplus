
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from '../firebase';
import { useState } from 'react';

export const Header = () => {

    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    const handleFirebaseLogin = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider).then((res) => {
            console.log(res);
            setUserLoggedIn(true);
            setUserName(res.user.displayName);
        }).catch((error) => {
            setUserLoggedIn(false);
            alert(error.message);
        })
    }

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

            { userLoggedIn ? 
            <div className='header__user'>
                <h4 className="header__user__name">
                    {userName}
                </h4>
            </div> :
            <Link to="#" onClick={handleFirebaseLogin} className='header__login'>Login</Link> }
        </header>
      </div>
  )
}
