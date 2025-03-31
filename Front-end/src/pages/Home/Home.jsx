import React from 'react';

import Button from '../../components/Elements/Button';

import './Home.css';

const Home = () => {
    return (
        <div>
            <h1 className="home__hook">
                Interested in the inner workings of healthcare or looking for
                professional guidance?
            </h1>
            <h2 className="home__hook-subtitle">
                Unleash your queries, for which we have the solutions to all of
                them.
            </h2>
            <ul className="home__quick-actions center">
                <Button to="/about">Learn More</Button>
                <Button to="/threads">Threads</Button>
            </ul>
            <div class="custom-shape-divider-bottom-1676760329">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                        class="shape-fill"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default Home;
