import PropTypes from 'prop-types';

const Banner = ({handleSubmit, setIsSearch}) => {
    return (
        <div className="hero" style={{backgroundImage: 'url(./images/Clothing.png)'}}>
            <div className="hero-overlay bg-opacity-90 bg-white py-28 sm:py-36 md:py-40 lg:py-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="text-center text-black">
                <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold">I Grow By Helping People In Need</h1>



                <form onSubmit={handleSubmit} className="flex justify-center items-center px-[10%]">
                    <input type="text" placeholder="Type here" className="input input-bordered w-full rounded-r-none" name='search'/>
                    <input onClick={()=>setIsSearch(true)} type="submit" value="submit" className="btn btn-error bg-primary text-white rounded-l-none"/>
                </form>




                
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    handleSubmit : PropTypes.func,
    setIsSearch : PropTypes.func,
};
export default Banner;