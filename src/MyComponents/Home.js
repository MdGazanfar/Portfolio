import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <section className="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Hello, my name is</div>
                        <div className="text-2">Md Gazanfar Ansari</div>
                        <div className="text-3">And I'm a Software Developer</div>
                        <Link to="/about">About Me</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

