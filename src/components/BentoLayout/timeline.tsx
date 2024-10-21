import React from 'react';
import './timeline.css'; // Importing CSS for styling

const Timeline = () => {
    const events = [
        { year: '2017', title: 'HZAU', subtitle: 'Plant Science and Technology' },
        { year: '2021', title: 'HAZU', subtitle: 'Crop Genetics and Breeding (Maize)' },
        { year: '2024', title: 'Westlake University', subtitle: 'Human Genomics/Genetics' },
    ];
    return (
        <div className="timeline">
            {events.map((event, index) => (
                <div className="timeline-item" key={index}>
                    <div className="timeline-year">{event.year}</div>
                    <div className="timeline-content">
                        <h4>{event.title}</h4>
                        <p>{event.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
