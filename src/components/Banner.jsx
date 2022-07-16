import React from "react";
import { Carousel } from "../styled/Carousel";
import { BannerSlideCard } from "./BannerSlideCard";
import sbp75 from "../images/movies/sbp75.webp";
import moonKnight from "../images/movies/moonKnight.webp";
import {BsChevronRight, BsChevronLeft} from  "react-icons/bs";

export const Banner = () => {

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div className="slick-arrow slick__prev" onClick={onClick}>
                <BsChevronLeft style={{ fontSize: "40px" }}/>
            </div>
        );
    }

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <div className="slick-arrow slick__next" onClick={onClick}>
               <BsChevronRight style={{ fontSize: "40px" }}/>
            </div>
        );
    }


  var settings = {
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
      },
      {
        sno: 3,
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
      <section className="banner" style={{ marginBottom: '5px'}}>
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


