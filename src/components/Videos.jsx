import {VideoCard} from "./VideoCard";
import '../styles/Videos.css'

export const Videos = ({ videos }) => {
  return (
    <div className="videos">
      {videos.map((item, idx) => (
        <VideoCard
          image={item.image}
          key={item.image}
          index={idx}
          name={item.name}
        />
      ))}
    </div>
  );
};

