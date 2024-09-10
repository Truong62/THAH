import React from 'react';
import ReactPlayer from "react-player";
import Video from '../assets/intro.mp4'

const ImageSlider = () => {
    return (
        <div className="rounded-3xl relative">
            <ReactPlayer width='200' height='100' style={{borderRadius: '20px'}} url={Video} playing loop muted/>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-3xl"></div>
            <p className="text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-semibold text-white">Welcome
                to our sports shoe store – where we bring you stylish and high-quality sneakers to make every step stand
                out!</p>
        </div>
    );
};

export default ImageSlider;

