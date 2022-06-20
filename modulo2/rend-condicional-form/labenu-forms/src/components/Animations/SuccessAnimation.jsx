import React from "react";
import Lottie from 'react-lottie';
import SuccessAnimationJSON from '../../animations/success.json';

export const SuccessAnimation = ({ }) => {
    const configAnimation = {
        loop: false,
        autoplay: true,
        animationData: SuccessAnimationJSON,
    }

    return <Lottie options={configAnimation} width={280} height={280} />
}