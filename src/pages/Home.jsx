import React from 'react';
import HeroSection from '../components/HomeSection/HeroSection';
import Testimonials from '../components/HomeSection/Testimonials';
import QuizLauncher from '../components/HomeSection/QuizLauncher';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <QuizLauncher/>
            <Testimonials/>
        </div>
    );
};

export default Home;