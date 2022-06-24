import React from "react";
import './Player.css';

/*Icons*/
import { RiPlayFill, RiPauseFill, RiSkipBackFill, RiSkipForwardFill } from "react-icons/ri";

export const Player = ({ playing, setPlaying }) => {

    /*Controla o estado do player*/
    const handleClick = () => {
        setPlaying(!playing);
    }

    /*onChange para play/pause*/
    const handleChange = (e) => {
        setPlaying(e.target.checked);
    }

    return (
        <div className="player">
            <img 
                src="https://media.istockphoto.com/vectors/music-note-icon-vector-illustration-vector-id1175435360?k=20&m=1175435360&s=612x612&w=0&h=1yoTgUwobvdFlNxUQtB7_NnWOUD83XOMZHvxUzkOJJs=" 
                alt="" 
                className="cover"    
            />

            <div className="name-control-box">
                <div className="music-name">
                    <h1>Music Name</h1>
                </div>

                <div className="control-buttons">
                    <button>
                        <RiSkipBackFill className="previous"/>
                    </button>

                    <input 
                        type="checkbox" 
                        id="play-pause-input"
                        checked={playing}
                        onClick={handleClick} 
                        onChange={handleChange}
                    />
                    <label htmlFor="play-pause-input">
                        <RiPlayFill className="play"/>
                        <RiPauseFill className="pause"/>
                    </label>

                    <button>
                        <RiSkipForwardFill className="next"/>
                    </button>
                </div>
            </div>
        </div>
    )
}