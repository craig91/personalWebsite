import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import  profilePhoto from './craig-professional.JPEG'
import './profileCard.styles.css'

export function ProfileCard() {
    return (
        <>
            <div className='card'>
                <img src={profilePhoto} alt='Craig Dejean' className='profile-img' />
                <h1>Craig Dejean</h1>
                <p className='title'> IT Engineer </p>
                <p>Japan</p>

                <div className='card-icons'>
                    <a href="https://github.com/craig91" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/craigdejean/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin/>
                    </a>
                    <a href="mailto:cdejeantsuno@icloud.com">
                        <FaEnvelope />
                    </a>
                </div>
                 <p><button>Contact</button></p>
            </div>
        </>
    );
}