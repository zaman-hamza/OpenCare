import React from 'react';

import './About.css';

const About = () => {
    return (
        <div>
            <h1 className="center about__title">About Us</h1>
            <hr />
            <div className='about__sections'>
              <section className='what-container'>
                <h2>What is OpenCare?</h2>
                <p>OpenCare is an online Q&A forum designed to help people get reliable answers quick. <br/> At OpenCare, we want to solve the problem of healthcare inaccessibility.<br/><br/>
                The consequences of healthcare inaccessibility can be severe, including delayed treatment, worsened health outcomes, and increased healthcare costs in the long run.<br/>
                To address this issue, policymakers and healthcare providers need to work together to find solutions that ensure everyone has access to the healthcare services they need.<br/><br/>
                This app allows for accessible healthcare based on an online Q&A for medical advice and is a valuable tool for people who have limited access to healthcare services.<br/>
                This app could provide users with a platform to ask medical questions and receive answers from qualified healthcare professionals.<br/><br/>
                The app has a user-friendly interface that makes it easy for users to navigate and find the information they need.<br/>
                To use the app, users input their medical questions, and the app would match them with qualified healthcare professionals who are best equipped to provide an accurate answers.<br/>
                The healthcare professionals could include doctors, nurses, and other medical professionals.<br/><br/>
                The Q&A feature could also include a search function that allows users to look up previously asked questions and answers.<br/>
                This could be particularly helpful for people who have common medical conditions and want to learn more about managing their symptoms.<br/><br/>
                In addition to the Q&A feature, this app also has an upvote and downvote feature.<br/>
                This allows experts to critique others' opinions enabling a more targeted response to ensure the best type of care possible is provided to the patient.<br/>
                This app could help bridge the gap between patients and medical professionals and provide users with the information they need to manage their health.
                </p>
                <h2>FAQ</h2>
                <div className="faq-accordion">
                    <div className="faq-question">
                      Is OpenCare free to use? What does Healthcare include?
                    </div>
                    <div className="faq-answer">
                      Yes! We want to make Healthcare more accessible. That means OpenCare will be open and free for all to use.<br/>Healthcare services include primary care, specialty care, emergency care, hospital care, mental health care, dental care, and other related services.
                    </div>
                    <div className="faq-question">
                      How do we know the answers are reliable?
                    </div>
                    <div className="faq-answer">
                      Most answers on this platform will be anonymous.<br/>However, we ask healthcare professional to login and verify that they are experts. This enables us to mark their answers as "most appropriate" for a given question.
                  </div>
                    <div className="faq-question">
                      How can I find a healthcare providers near me?
                    </div>
                    <div className="faq-answer">
                      You can find healthcare providers by searching online, asking for recommendations from friends or family or visiting a nearby hospital to seek professional advice.
                    </div>
                </div>
             </section>
           </div>
        </div>
    );
};

export default About;
