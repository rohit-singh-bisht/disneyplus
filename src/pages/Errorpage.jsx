import React from 'react'
import ErrorImg from '../images/error.png'
import { Link } from 'react-router-dom'

const styles = {
    backgroundImage : `url(${ErrorImg})`
}

export const Errorpage = () => {
  return (
    <div className='errorPage'>
        <div className="errorPage__errorImg" style={styles}></div>
        <h2 className='errorPage__title'>404</h2>
        <p className='errorPage__info'>Oh! Page not found</p>
        <Link to="/" className='errorPage__homeBtn'>Disney+ Hotstar HOME</Link>
    </div>
  )
}
