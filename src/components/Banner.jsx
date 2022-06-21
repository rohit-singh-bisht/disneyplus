import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import { BannerSlideCard } from "./BannerSlideCard";
import sbp75 from "../images/movies/sbp75.webp";
import moonKnight from "../images/movies/moonKnight.webp";
import {BsChevronRight, BsChevronLeft} from  "react-icons/bs";

export const Banner = () => {

    function PrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div className="slick-arrow slick__prev" onClick={onClick}>
                <BsChevronLeft style={{ fontSize: "40px" }}/>
            </div>
        );
    }

    function NextArrow(props) {
        const { className, onClick } = props;
        return (
            <div className="slick-arrow slick__next" onClick={onClick}>
               <BsChevronRight style={{ fontSize: "40px" }}/>
            </div>
        );
    }


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  const slideData = [
      {
        sno: 1,
        title: "SPB 75",
        meta: [
            {
                data: "StarPlus"
            },
            {
                data: "Hindi"
            },
            {
                data: "Reality"
            }
        ],
        description: "On the birth anniversary of the legendary singer, late Mr. SP Balasubrahmanyam, relive some of his evergreen melodies.",
        img: sbp75
      },
      {
        sno: 2,
        title: "Moon Knight",
        meta: [
            {
                data: "Marvel"
            },
            {
                data: "Superhero"
            }
        ],
        description: "Mild-mannered Steven Grant has dissociative identity disorder and shares a body with a mercenary.",
        img: moonKnight
      }
  ]

  return (
    <>
      <section className="banner">
          <Carousel className="banner__slider" {...settings}>
            {
                slideData.map((item, index) => {
                    return <BannerSlideCard key={index} item={item} />
                })
            }
          </Carousel>
      </section>
    </>
  );
};


const Carousel = styled(Slider)`

    &:hover > .slick-arrow{
        opacity: 1;
    }

    & > .slick-arrow{
        opacity: 0;
        z-index: 99;
        cursor: pointer;
        top: 0;
        z-index: 5;
        height: 100%;
        display: flex;
        align-items: center;
        position: absolute;
        transition: all 0.2s;
    }

    & > .slick__prev{
        left: 0;
        text-align: left;
    }

    & > .slick__next{
        right: 0;
        text-align: right;
    }

    & > .slick-prev::before{
        content: ""
    }
`