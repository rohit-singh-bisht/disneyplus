import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Carousel } from "../styled/Carousel";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { VerticalMovieCard } from "./VerticalMovieCard";
import { addToWishlist, removeFromWishlist } from "../features/wishlist/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";

export const MovieTray = (props) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector(state => state.wishlist);

  function PrevArrow(props) {
    const { onClick, className } = props;
    return (
      <div className={"slick__prev " + className} onClick={onClick}>
        <BsChevronLeft style={{ fontSize: "30px" }} />
      </div>
    );
  }

  function NextArrow(props) {
    const { onClick, className } = props;
    return (
      <div className={"slick__next " + className} onClick={onClick}>
        <BsChevronRight style={{ fontSize: "30px" }} />
      </div>
    );
  }

  var settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 8,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const addingToWishlist = (movie) => {
    dispatch(addToWishlist(movie));
  };

  const deletingFromWishlist = (id) => {
    // setFeedback(feedback.filter((item) => item.id !== id));
    dispatch(removeFromWishlist(id));
  }

  return (
    <>
      <Movie>
        <h2 className="tray__heading">{props.heading}</h2>
        <div>
          {props.isCarousel ? (
            <Carousel {...settings}>
              {props.movieData &&
                props.movieData.map((movie, index) => {
                  return (
                    <VerticalMovieCard
                      key={index}
                      addToWishlist={addingToWishlist}
                      deleteFromWishlist={deletingFromWishlist}
                      data={movie}
                      type={props.type}
                    />
                  );
                })}
            </Carousel>
          ) : (
            <div className="flex__items__box">
              {props.movieData &&
                props.movieData.map((movie, index) => {
                  return (
                    <VerticalMovieCard
                      key={index}
                      addToWishlist={addingToWishlist}
                      deleteFromWishlist={deletingFromWishlist}
                      data={movie}
                      type={props.type}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </Movie>
    </>
  );
};

const Movie = styled.div`
  padding: 0 50px;
  margin-top: 30px;
  overflow-x: clip;

  & > .tray__heading {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 15px;
  }

  & .slick-list {
    overflow: visible;
  }

  & .slick-arrow {
    width: 4vw;
    justify-content: center;
    color: #fff;
  }

  & .slick-prev:before,
  & .slick-next:before {
    display: none;
  }

  & .slick-prev {
    left: -50px;
    background: linear-gradient(
      to left,
      transparent,
      rgba(12, 17, 27, 0.7),
      rgba(12, 17, 27, 0.9)
    );
  }

  & .slick-next {
    right: -50px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(12, 17, 27, 0.7),
      rgba(12, 17, 27, 0.9)
    );
  }

  & .slick-slide:nth-child(8n + 1) .tray__card {
    transform-origin: left;
  }

  & .slick-slide:nth-child(8n + 8) .tray__card {
    transform-origin: right;
  }
`;
