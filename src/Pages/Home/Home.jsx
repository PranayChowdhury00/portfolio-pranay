import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Header from '../Header/Header';
import Projects from '../MyWork/Projects';
import Education from '../Education/Education';
 import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Experience></Experience>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;