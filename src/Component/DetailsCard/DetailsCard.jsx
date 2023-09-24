import PropTypes from 'prop-types';

const DetailsCard = ({data}) => {
    const {image, price, title, description, color} = data || {}
    console.log(data);
    return (
        <div>
            <div className="hero flex flex-col-reverse justify-between rounded-md my-10" style={{backgroundImage: `url(${image})`}}>
                <div className="hero-overlay bg-opacity-80 h-20 flex items-center px-[5%]">
                    <button className="btn text-white border-0" style={{backgroundColor: color?.text_color}}>Donate ${price}</button>
                </div>
                <div className="hero-content text-center text-neutral-content">
                <div className="h-48 sm:h-52 md:h-60 lg:h-72 xl:h-80">
                </div>
                </div>
            </div>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>{title}</h1>
            <p className='text-justify my-5'>{description}</p>
        </div>
    );
};

DetailsCard.propTypes = {
    data : PropTypes.object,
};

export default DetailsCard;