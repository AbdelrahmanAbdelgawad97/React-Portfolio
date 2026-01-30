import { useEffect, useState } from 'react'
import style from "./portfolio.module.css"
import StarLine from '../StarLine/StarLine'
import port1 from "../../assets/poert1.jpeg";
import port2 from "../../assets/port2.jpeg";
import port3 from "../../assets/port3.jpeg";
import car from "../../assets/car-logo.avif";
import factory from "../../assets/factory.avif";
import ship from "../../assets/ship.jpg";


export default function Portfolio() {

    const [image, setImage] = useState([port1, port2, port3, car, factory, ship]);
    let [singlImag, setSingleImage] = useState("");
    let [overLay, setOverLay] = useState("");

    useEffect(function(){

    },[singlImag])

    function handleStopPropagation(e)
    {
        setSingleImage("");
        setOverLay("");
        
    }

    function handleStopPropagationImag(e) {
        e.stopPropagation()
    }

  return (

    <>
        <div className={`${style.sectionHightPortfolio}`}>
            <title>Portfolio</title>
            <div className="top-15">
                <p className='fs-1 text-center fw-bold  text-uppercase text-dark-color'>portfolio component</p>
                <StarLine color="textDark" bgColor="darkColor"/>
                <div className='row w-100'>
                    {image.map((e,i)=> <div key={i} onClick={()=> {setSingleImage(e); setOverLay(style.fullImage);}} className={`col-12 col-md-6 col-lg-4 mb-4 ${style.imgEffect} ${style.wMiddle}`}><div className='p-1'><img className={`${style.width} w-100 rounded-3 overflow-hidden`} src={`${e}`} /></div></div>)}
                </div>
            </div>
        </div>
        <div onClick={(e)=> handleStopPropagation(e)} className={overLay}>
            <img src={singlImag} onClick={(e)=> handleStopPropagationImag(e)} alt="" />
        </div>
    </>
  )
}
