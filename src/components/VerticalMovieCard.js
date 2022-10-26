import React, {useEffect} from 'react'
import { useState } from 'react'
import NineHours from '../images/tray/9Hours.webp';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const VerticalMovieCard = (props) => {

  const wishlistData = useSelector(state => state.wishlist.data);

    const [hovered, setHovered] = useState(false)
    const [addIndex, setAddIndex] = useState(false)

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

    // Checking If the Wishlist Aready Contains The Movie With Id 
    const foundMovieId = wishlistData.length > 0 && wishlistData.find(item => item.id === props.data.id);

    const watchlistDisabled = foundMovieId ? true : false;
    

  return (
    <div style={{ display: "inline-block" }}>
        <div className='tray__card' style={{  zIndex:addIndex ? '5' : '' }} onMouseOver={trayHover} onMouseOut={trayHoverOut}>
            <div className="tray__card__img">
            <Link to={`/detail/${props.data.id}`}>
                <img src={NineHours} alt="" />
            </Link>
            </div>
            <div className="tray__details">
                <h3 className="tray__title">
                {props.data.title}
                </h3>
                <p className="tray__subtitle">{props.data.subtitle}</p>
                <p className="tray__description ellipsize">
                {props.data.description}
                </p>
                {
                    props.type === 'wishlist' || watchlistDisabled ? 
                    <WhishlistButton onClick={() => props.deleteFromWishlist(props.data.id)}><AiOutlineMinus/> Remove From Wishlist </WhishlistButton>
                    :
                    <WhishlistButton onClick={() => props.addToWishlist(props.data)}><AiOutlinePlus/> Add to wishlist </WhishlistButton>
                }
                
                
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