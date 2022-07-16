
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";

export const Carousel = styled(Slider)`

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
        transform: translate(0);
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

    $ .slick__prev.slick-disabled{
        display: none;
    }

    $ .slick__next.slick-disabled{
        display: none;
    }
`