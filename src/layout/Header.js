
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from '../firebase';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLoginDetails } from '../features/user/userSlice';

export const Header = () => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.user.name);
    const auth = getAuth();

    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [usersName, setUserName] = useState('');

    const handleFirebaseLogin = () => {
        signInWithPopup(auth, provider).then((res) => {
            console.log("Res", res);
            
            setUser(res.user);
            setUserLoggedIn(true);
            setUserName(res.user.displayName);
        }).catch((error) => {
            setUserLoggedIn(false);
            alert(error.message);
        })
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails(user))
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                console.log("User", user);
            }
        })
    }, [])

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

            { userName ? 
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
