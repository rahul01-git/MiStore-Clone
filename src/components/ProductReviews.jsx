import {ProductReviewCard} from "./ProductReviewCard"
import '../styles/ProductReviews.css'

export const ProductReviews = ({productReviews}) => {
  return (
    <div className="productReviews">
        {
            productReviews.map((item,idx)=>(
                <ProductReviewCard price={item.price} name={item.name} key={item.image} image={item.image} review={item.review} index={idx}/>
            ))
        }
    </div>
  )
}