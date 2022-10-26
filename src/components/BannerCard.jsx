import React from 'react'

export const BannerCard = (props) => {
    const imgData = props.item.meta;
  return (
    <div style={{ display: "inline-block", width: "100%" }}>
        <div className="banner__slide">
            <div className="banner__content">
                <h2 className="banner__title">
                {props.item.title}</h2>
                <p className="banner__info">
                {imgData.map((item, index) => (<span key={index}  className="banner__meta__data">{item.data}</span>
                ))}
                </p>
                <p className="banner__description">
                {props.item.description}
                </p>
            </div>
            <div className="banner__slide__img">
                <img src={props.item.img} alt="" className="fluid" />
                <div className="banner__slide__overlay"></div>
            </div>
        </div>
    </div>
  )
}
