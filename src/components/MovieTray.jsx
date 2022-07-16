import React from 'react'
import styled from "styled-components";
import { Carousel } from '../styled/Carousel';
import {BsChevronRight, BsChevronLeft} from  "react-icons/bs";
import { VerticalMovieCard } from './VerticalMovieCard';

export const MovieTray = (props) => {


    function PrevArrow(props) {
        const { onClick, className } = props;
        return (
            <div className={"slick__prev " + className} onClick={onClick}>
                <BsChevronLeft style={{ fontSize: "30px" }}/>
            </div>
        );
    }

    function NextArrow(props) {
        const { onClick, className } = props;
        return (
            <div className={'slick__next ' + className} onClick={onClick}>
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

  return (
      <>
        <Movie>
            <h2 className='tray__heading'>{props.heading}</h2>
            <div>
                <Carousel {...settings}>
                    <VerticalMovieCard />
                    <VerticalMovieCard />
                    <VerticalMovieCard />
                    <VerticalMovieCard />
                    <VerticalMovieCard />
                    <VerticalMovieCard />
                    <VerticalMovieCard />
                    <VerticalMovieCard />
                    <VerticalMovieCard />
                    <VerticalMovieCard />
                    <VerticalMovieCard />
                    <VerticalMovieCard />
                    <VerticalMovieCard />
                    <VerticalMovieCard />
                    <VerticalMovieCard />
                    <VerticalMovieCard />
                </Carousel>
            </div>
        </Movie>
      </>
  )
}

const Movie = styled.div`
    padding: 0 50px;
    margin-top: 30px;
    overflow-x: clip;

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
        color: #fff;
    }

    & .slick-prev:before,  & .slick-next:before{
        display: none;
    }

    & .slick-prev{
        left: -50px;
        background: linear-gradient(to left, transparent, rgba(12,17,27,0.7), rgba(12,17,27,0.9));
    }

    & .slick-next{
        right: -50px;
        background: linear-gradient(to right, transparent, rgba(12,17,27,0.7), rgba(12,17,27,0.9));
    }

    & .slick-slide:nth-child(8n + 1) .tray__card{
        transform-origin: left;
    }

    & .slick-slide:nth-child(8n + 8) .tray__card{
        transform-origin: right;
    }


`
