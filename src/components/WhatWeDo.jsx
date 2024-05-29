// WhatWeDo.jsx

import React, { useState } from 'react';
import './../css/WhatWeDo.css'; // Import CSS file for styling
import event1ImageWithoutHover from './../assets/what-we-do-without-hover-1.png';
import event2ImageWithoutHover from './../assets/what-we-do-without-hover-2.png';
import event3ImageWithoutHover from './../assets/what-we-do-without-hover-3.png';
import event4ImageWithoutHover from './../assets/what-we-do-without-hover-4.png';
import event1ImageAfterHover from './../assets/what-we-do-after-hover-1.png';
import event2ImageAfterHover from './../assets/what-we-do-after-hover-2.png';
import event3ImageAfterHover from './../assets/what-we-do-after-hover-3.png';
import event4ImageAfterHover from './../assets/what-we-do-after-hover-4.png';

const WhatWeDo = () => {

    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);
    const [hovered4, setHovered4] = useState(false);


    return (
        <section className="what-we-do">
            <h2 className="what-we-do-heading yellow">WHAT WE DO</h2>
            <p className="what-we-do-description">With creativity and precision, we bring your ideas to life, ensuring every detail is perfect</p>
            <div className="image-row">
                <div className="what-we-do-image-container">
                    <img
                        src={hovered1 ? event1ImageAfterHover : event1ImageWithoutHover}
                        alt="Music Events"
                        onMouseEnter={() => setHovered1(true)}
                        onMouseLeave={() => setHovered1(false)}
                    />
                    <h3 className="event-type-heading white">Music Events</h3>
                    <div className="know-more">
                        <a href="/what-we-do" className="yellow">Know more</a><span className="arrow">&#10145;</span>
                    </div>
                </div>
                <div className="what-we-do-image-container">
                    <img
                        src={hovered2 ? event2ImageAfterHover : event2ImageWithoutHover}
                        alt="Music Events"
                        onMouseEnter={() => setHovered2(true)}
                        onMouseLeave={() => setHovered2(false)}
                    />
                    <h3 className="event-type-heading white">Corporate Events</h3>
                    <div className="know-more">
                        <a href="/what-we-do" className="yellow">Know more</a><span className="arrow">&#10145;</span>
                    </div>
                </div>
                <div className="what-we-do-image-container">
                    <img
                        src={hovered3 ? event3ImageAfterHover : event3ImageWithoutHover}
                        alt="Music Events"
                        onMouseEnter={() => setHovered3(true)}
                        onMouseLeave={() => setHovered3(false)}
                    />
                    <h3 className="event-type-heading white">Special Events</h3>
                    <div className="know-more">
                        <a href="/what-we-do" className="yellow">Know more</a><span className="arrow">&#10145;</span>
                    </div>
                </div>
                <div className="what-we-do-image-container">
                    <img
                        src={hovered4 ? event4ImageAfterHover : event4ImageWithoutHover}
                        alt="Music Events"
                        onMouseEnter={() => setHovered4(true)}
                        onMouseLeave={() => setHovered4(false)}
                    />
                    <h3 className="event-type-heading white">Sport Events</h3>
                    <div className="know-more">
                        <a href="what-we-do" className="yellow">Know more</a><span className="arrow">&#10145;</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
