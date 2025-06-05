import React from 'react';
import HeroSection from '../components/HomeSection/HeroSection';
import Testimonials from '../components/HomeSection/Testimonials';
import QuizLauncher from '../components/HomeSection/QuizLauncher';
import JourneyTracker from '../components/HomeSection/JourneyTracker';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <JourneyTracker/>
            <QuizLauncher/>
            <Testimonials/>
        </div>
    );
};

export default Home;