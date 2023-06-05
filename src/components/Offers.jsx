import { Offer } from "./Offer";
import "../styles/Offers.css";
export const Offers = ({ offer }) => {
  return (
    <div className="offerSection">
      {offer.map((item, idx) => (
        <Offer key={item.image} idx={idx} src={item.image} link={item.url} />
      ))}
    </div>
  );
};
