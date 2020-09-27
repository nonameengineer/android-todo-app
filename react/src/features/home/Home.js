import React from 'react';
import './Home.scss';

export const Home = () => (
    <div className="wrapper">
        <input type="text" placeholder="New..." className="input__new" routerLink="new"/>
        <section>
            <div className="section-title">Today</div>
            <div className="item">
                <div className="text">Homework</div>
                <div className="buttons">
                    <img src="%PUBLIC_URL%/assets/svg/favorite_border-24px.svg" alt="Favourite"/>
                    <img src="%PUBLIC_URL%/assets/svg/access_time-24px.svg" alt="Favourite"/>
                </div>
            </div>
        </section>
        <section>
            <div className="section-title">Soon</div>
            <div className="item" style="border: 3px solid #05F5EA">
                <div className="text">Homework</div>
                <div className="buttons">
                    <img src="%PUBLIC_URL%/assets/svg/favorite_border-24px.svg" alt="Favourite"/>
                    <img src="%PUBLIC_URL%/assets/svg/access_time-24px.svg" alt="Favourite"/>
                </div>
            </div>
            <div className="item item--activated">
                <div className="text">2 days remaining...</div>
                <div className="buttons">
                    <img src="%PUBLIC_URL%/assets/svg/east-24px.svg" alt="Favourite"/>
                </div>
            </div>
        </section>
        <section>
            <div className="section-title">Favourites</div>
            <div className="item" style="border: 3px solid #777AFF">
                <div className="text">Homework</div>
                <div className="buttons">
                    <img src="assets/svg/favorite-24px.svg" alt="Favourite"/>
                    <img src="assets/svg/access_time-24px.svg" alt="Favourite"/>
                </div>
            </div>
        </section>
    </div>
);