import React, { useEffect, useRef, useMemo } from 'react';
import './../css/WhoAreWe.css'; // Import CSS file for styling
import ExperienceImage from './../assets/who-are-we-1.jpg'; // Import image for experience
import EventsImage from './../assets/who-are-we-2.jpg'; // Import image for events
import TeamImage from './../assets/who-are-we-3.jpg'; // Import image for team

const WhoAreWe = () => {

    const experienceRef = useRef(null);
    const eventsRef = useRef(null);
    const teamRef = useRef(null);

    const observerOptions = useMemo(() => ({
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the element is visible
    }), []);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers(entry.target);
                }
            });
        };

        const animateNumbers = (target) => {
            const startValue = 0;
            const endValue = parseInt(target.dataset.value);
            const duration = 1000; // Duration in milliseconds
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const animatedValue = Math.floor(progress * (endValue - startValue));

                target.textContent = animatedValue + '+';

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        const currentExperienceRef = experienceRef.current;
        const currentEventsRef = eventsRef.current;
        const currentTeamRef = teamRef.current;

        if (currentExperienceRef) {
            observer.observe(currentExperienceRef);
        }
        if (currentEventsRef) {
            observer.observe(currentEventsRef);
        }
        if (currentTeamRef) {
            observer.observe(currentTeamRef);
        }

        return () => {
            if (currentExperienceRef) {
                observer.unobserve(currentExperienceRef);
            }
            if (currentEventsRef) {
                observer.unobserve(currentEventsRef);
            }
            if (currentTeamRef) {
                observer.unobserve(currentTeamRef);
            }
        };
    }, [observerOptions]);


    return (
        <section className="who-are-we">
            <div className="who-are-we-container">
                <h2 className="section-heading">WHO ARE WE ?</h2>
                <div className="section-content">
                    <div className="mission">
                        <h3 className="sub-heading">OUR MISSION</h3>
                        <p className="description">"Bringing visions to life through seamless event management, creativity and passion for excellence."</p>
                    </div>
                    <div className="vision">
                        <h3 className="sub-heading">OUR VISION</h3>
                        <p className="description">"Creating Unforgettable experience that inspire and connect communities."</p>
                    </div>
                </div>
            </div>
            <div className="numbers-row">
                <div className="number-item">
                    <div className="number-background" style={{ backgroundImage: `url(${ExperienceImage})` }}>
                        <span className="animated-number" ref={experienceRef} data-value="10">0</span>
                        <div className="animated-numbers-title">Years of Experience</div>
                    </div>
                </div>
                <div className="number-item">
                    <div className="number-background" style={{ backgroundImage: `url(${EventsImage})` }}>
                        <span className="animated-number" ref={eventsRef} data-value="500">0</span>
                        <div className="animated-numbers-title">Events Per Year</div>
                    </div>
                </div>
                <div className="number-item">
                    <div className="number-background" style={{ backgroundImage: `url(${TeamImage})` }}>
                        <span className="animated-number" ref={teamRef} data-value="100">0</span>
                        <div className="animated-numbers-title">Team of Professionals</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoAreWe;
