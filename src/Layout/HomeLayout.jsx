import React from 'react';
import Banner from '../Page/Banner';
import About from '../Page/About';
import Skills from '../Page/Skills';
import Experience from '../Page/Experience';
import Projects from '../Page/Projects';
import Contact from '../Page/Contact';

const HomeLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default HomeLayout;