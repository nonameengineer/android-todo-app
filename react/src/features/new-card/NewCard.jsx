import React from 'react';
import './NewCard.scss';

export const NewCard = () => (
    <div className="wrapper">
        <div className="card">
            <div className="content">
                <div className="row">
                    <input type="text" placeholder="New..."/>
                    <div className="color-picker"></div>
                </div>
                <div className="row">
                    <div>Time widget</div>
                    <img src="%PUBLIC_URL%/assets/svg/access_time-24px.svg" alt="Favourite"/>
                </div>
            </div>
            <div className="card__bottom">
                <img src="%PUBLIC_URL%/assets/svg/clear-24px.svg" alt="Favourite"/>
                <img src="%PUBLIC_URL%/assets/svg/done-24px.svg" alt="Favourite"/>
            </div>
        </div>
    </div>

);