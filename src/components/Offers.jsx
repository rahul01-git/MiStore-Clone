import Offer from './Offer'
import '../styles/Offers.css'
const Offers = ({offer}) => {
  return (
    <div className="offerSection">
        {
            offer.map((item,idx)=>(
                <Offer key={item.image} idx={idx} src={item.image} link={item.url} />
            ))
        }
    </div>
    )
}

export default Offers