import { useState } from "react";
import Banner from "../../Component/Header/Banner/Banner";
import HomeCard from "../../Component/HomeCard/HomeCard";
import useGetAllData from "../../Hock/useGetAllData";

const Home = () => {
    const [allData] = useGetAllData()
    const [searchData, setSearchData] = useState([])
    const [isSearch, setIsSearch] = useState(false)
    const [notFound, setNotFound] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.search.value;
        const data = allData?.filter(data=> data?.category?.toLowerCase().includes(value?.toLowerCase().trim()));
          
        setSearchData(data)
        if(value?.trim()?.length === 0){
            setIsSearch(false)
            setNotFound(false)
        }
        if(value?.trim().length > 0 && data.length === 0){
            setNotFound(true)
        }
        else(
            setNotFound(false)
        )
    }
    return (
        <div>
            <Banner handleSubmit={handleSubmit} setIsSearch={setIsSearch}/>
            {
                !notFound
                ?
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mb-20 px-5 sm:px-[10%]">
                    {
                        isSearch
                        ?
                        searchData?.map(data=> 
                            <HomeCard
                                key={data.id}
                                data={data}
                            />
                        )
                        :
                        allData?.map(data=> 
                            <HomeCard
                                key={data.id}
                                data={data}
                            />
                        )
                    }
                </div>
                :
                <h1 className="text-center text-xl md:text-2xl lg:text-3xl my-20 font-bold">No data found</h1>
            }
        </div>
    );
};

export default Home;