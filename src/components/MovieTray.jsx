import React from 'react'
import styled from "styled-components";
import { Carousel } from '../styled/Carousel';
import NineHours from '../images/tray/9Hours.webp';
import {BsChevronRight, BsChevronLeft} from  "react-icons/bs";
import { useState } from 'react';

export const MovieTray = (props) => {

    const [hovered, setHovered] = useState(false)

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div className="slick-arrow slick__prev" onClick={onClick}>
                <BsChevronLeft style={{ fontSize: "30px" }}/>
            </div>
        );
    }

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <div className="slick-arrow slick__next" onClick={onClick}>
               <BsChevronRight style={{ fontSize: "30px" }}/>
            </div>
        );
    }

    var settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 8,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  const trayHover = () => {
    setTimeout(() => {
        setHovered(true);
    }, 200)
  }

  const trayHoverOut = () => {
    setTimeout(() => {
        setHovered(false);
    }, 200)
  }

  return (
      <>
        <Movie>
            <h2 className='tray__heading'>{props.heading}</h2>
            <div>
                <Carousel {...settings}>
                    <div style={{ display: "inline-block" }}>
                        <div className={`tray__card` + (hovered ? ' expand' : '') } style={{  zIndex:hovered ? '5' : '' }} onMouseEnter={trayHover} onMouseLeave={trayHoverOut}>
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
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "inline-block" }}>
                        <div className='tray__card'>
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
                            </div>
                        </div>
                    </div>


                    <div style={{ display: "inline-block" }}>
                        <div className='tray__card'>
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
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "inline-block" }}>
                        <div className='tray__card'>
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
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "inline-block" }}>
                        <div className='tray__card'>
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
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "inline-block" }}>
                        <div className='tray__card'>
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
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "inline-block" }}>
                        <div className='tray__card'>
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
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "inline-block" }}>
                        <div className='tray__card'>
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
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "inline-block" }}>
                        <div className='tray__card'>
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
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "inline-block" }}>
                        <div className='tray__card'>
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
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </Movie>
      </>
  )
}

const Movie = styled.div`
    padding: 0 50px;
    margin-top: 30px;

    & > .tray__heading{
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 15px;
    }

    & .slick-list{
        overflow: visible;
    }

    & .slick-arrow{
        width: 4vw;
        justify-content: center;
    }

    & .slick__prev{
        left: -50px;
    }

    & .slick__next{
        right: -50px;
    }
`
