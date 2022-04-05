import React from 'react';

export const About = (props) => {
    return (

        <div className='main'>
            <div className="about">{props.about}<span>Me</span></div>
            <section className="skills" id="skills">
                <div className="max-width">
                    <div className="skills-content">
                        <div className="column left">
                            <img src="../Images/gazan.jpg" alt="gazan" />
                            <div className="text">
                                <p>Name:</p>
                                <p>Age:</p>
                                <p>Qualification:</p>
                                <p>Position:</p>
                            </div>
                            <div className="texts">
                                <p>Md Gazanfar Ansari</p>
                                <p>21</p>
                                <p>Bachelor's in Information Technology</p>
                                <p>Software Developer</p>
                            </div>
                        </div>
                        <div className="column right">
                            <h3 className="skill">MySkills</h3>
                            <div className="bars">
                                <div className="info">
                                    <span>HTML</span>
                                    <span>90%</span>
                                </div>
                                <div className="line html"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>CSS</span>
                                    <span>85%</span>
                                </div>
                                <div className="line css"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>JavaScript</span>
                                    <span>80%</span>
                                </div>
                                <div className="line js"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>ReacJs</span>
                                    <span>95%</span>
                                </div>
                                <div className="line react"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Django</span>
                                    <span>30%</span>
                                </div>
                                <div className="line django"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

