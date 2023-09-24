import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeCard = ({data}) => {
    const {id, title, category, image, color} =  data || {}
    return (
        <Link to={`/${id}`} className="card shadow-xl rounded" style={{backgroundColor: color?.card_bg}}>
            <figure><img src={image} alt={`images of ${title}`} /></figure>
            <div className="card-body p-3">
                <span className='w-fit px-2 py-[2px] text-sm font-medium rounded' style={{backgroundColor: color?.category_bg, color: color?.text_color}}>{category}</span>
                <h2 className="text-lg font-semibold" style={{color: color?.text_color}}>{title}</h2>
            </div>
        </Link>
    );
};

HomeCard.propTypes = {
    data: PropTypes.object,
};

export default HomeCard;