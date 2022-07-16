import React, {useEffect} from 'react'
import { useState } from 'react'
import NineHours from '../images/tray/9Hours.webp';
import { AiOutlinePlus } from 'react-icons/ai'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist } from '../features/wishlist/wishlistSlice';

export const VerticalMovieCard = () => {

    const [hovered, setHovered] = useState(false)
    const [addIndex, setAddIndex] = useState(false)

    const wishlistData = useSelector(state => state.wishlist);
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log(wishlistData);
    }, [wishlistData])
    

    const trayHover = () => {
        setTimeout(() => {
            setHovered(true);
            setAddIndex(true);
        }, 200)
    }

    const trayHoverOut = () => {
        setHovered(false);
        setTimeout(() => {
            setAddIndex(false);
        }, 200)
    }

    const addTooWishlist = (e) => {
        console.log(e);
        dispatch(addToWishlist(e.target));
    }

  return (
    <div style={{ display: "inline-block" }}>
        <div className='tray__card' style={{  zIndex:addIndex ? '5' : '' }} onMouseOver={trayHover} onMouseOut={trayHoverOut}>
            <div className="tray__card__img">
                <img src={NineHours} alt="" />
            </div>
            <div className="tray__details">
                <h3 className="tray__title">
                9 Hours
                </h3>
                <p className="tray__subtitle">Drama, Thriller, Hotstar Specials</p>
                <p className="tray__description ellipsize">
                In the pursuit of justice for her deceased mother, a fierce Sana Kapoor fights her father and uncove 
                </p>
                <WhishlistButton onClick={addTooWishlist}><AiOutlinePlus/> Add to wishlist </WhishlistButton>
            </div>
        </div>
    </div>
  )
}


const WhishlistButton = styled.button`
    font-size: 7px;
    line-height: 15px;
    display: block;
    width: 100%;
    background-color: rgba(0,0,0,0);
    border: 0px;
    color: rgba(255, 255, 255, 0.8);
    text-align: left;
    padding: 0px 5px;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 4px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover{
        background-color: rgba(255,255,255,0.15);
    }
`