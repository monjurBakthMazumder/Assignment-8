import Banner from "../../Component/Header/Banner/Banner";
import HomeCard from "../../Component/HomeCard/HomeCard";
import useGetAllData from "../../Hock/useGetAllData";

const Home = () => {

    const [allData] = useGetAllData()
    console.log(allData);
    return (
        <div>
            <Banner/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mb-20 px-5 sm:px-[10%]">
                {
                    allData?.map(data=> 
                        <HomeCard
                            key={data.id}
                            data={data}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Home;