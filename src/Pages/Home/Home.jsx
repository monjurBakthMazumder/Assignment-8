import { useState } from "react";
import Banner from "../../Component/Header/Banner/Banner";
import HomeCard from "../../Component/HomeCard/HomeCard";
import useGetAllData from "../../Hock/useGetAllData";

const Home = () => {
    const [allData] = useGetAllData()
    const [searchData, setSearchData] = useState([])
    const [isSearch, setIsSearch] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.search.value;
        const data = allData?.filter(data=> data?.category?.toLowerCase() === value?.toLowerCase()?.trim())
        setSearchData(data)
        if(value?.trim()?.length === 0){
            setIsSearch(false)
        }
    }
    return (
        <div>
            <Banner handleSubmit={handleSubmit} setIsSearch={setIsSearch}/>
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
        </div>
    );
};

export default Home;