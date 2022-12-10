import { Container } from '@mui/system';
import React from 'react';

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <Container>
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
            <img src="" className="max-w-sm rounded-full shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">Hi, I’m Mushfik Ahmed</h1>
            <h1 className="text-5xl font-bold">a Frontend Developer</h1>
            {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
            <button className="btn btn-primary mt-8">Explore Me</button>
            </div>
        </div>
            </Container>
        </div>
    );
};

export default Home;