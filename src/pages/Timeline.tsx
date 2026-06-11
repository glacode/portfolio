import { timeline } from '../data/timeline';

const Timeline = () => {
  return (
    <div className="timeline-page">
      <h1>Career Timeline</h1>
      <p>A journey through over 30 years of software development.</p>
      
      <div className="timeline">
        {timeline.map((event, index) => (
          <div key={index} className="timeline-item">
            <h3>{event.title}</h3>
            {event.company && <p className="company"><strong>{event.company}</strong></p>}
            <p className="year">{event.year}</p>
            <p className="description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
