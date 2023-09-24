import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({donation}) => {
    const {id, title, category, image2, color, price} =  donation || {}
    return (
        <div className="card shadow-xl rounded flex flex-row items-center" style={{backgroundColor: color?.card_bg}}>
            <figure className='rounded-r-none'><img src={image2} alt={`images of ${title}`} className='w-full'/></figure>
            <div className="card-body p-3 w-1/2">
                <span className='w-fit px-2 py-[2px] text-sm font-medium rounded' style={{backgroundColor: color?.category_bg, color: color?.text_color}}>{category}</span>
                <h2 className="text-lg lg:text-xl font-bold">{title}</h2>
                <span className='font-bold'  style={{color: color?.text_color}}>${price.toFixed(2)}</span>
                <Link to={`/${id}`} className='btn w-fit border-0 text-white btn-sm rounded' style={{backgroundColor: color?.text_color}}>View Details</Link>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    donation : PropTypes.object,
};

export default DonationCard;