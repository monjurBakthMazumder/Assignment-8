import { useParams } from "react-router-dom";
import useGetAllData from "../../Hock/useGetAllData";
import { useEffect, useState } from "react";
import DetailsCard from "../../Component/DetailsCard/DetailsCard";

const Details = () => {
    const [allData] = useGetAllData();
    const [data, setData] = useState();
    const id = useParams()
    useEffect(()=>{
        const findData = allData?.find(data=> data?.id === Number(id?.id))
        setData(findData)
    },[allData, id])
    return (
        <div className="px-5 sm:px-[10%]  mb-20">
            <DetailsCard data={data}/>
        </div>
    );
};

export default Details;