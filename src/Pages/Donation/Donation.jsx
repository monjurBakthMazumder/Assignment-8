import { useEffect, useState } from "react";
import useGetAllData from "../../Hock/useGetAllData";
import { getSaveDonation } from "../../Utility/localStogare";
import DonationCard from "../../Component/DonationCard/DonationCard";

const Donation = () => {
    const [donations, setDonations] = useState()
    const [dataLength, setDataLength] = useState(4)
    const [allData] = useGetAllData()

    useEffect(()=>{
        const saveDonationId = getSaveDonation()

        if(allData?.length > 0){
            const donationsArray =[];
            for(const id of saveDonationId){
                const donations = allData?.find(data=> data?.id === id)
                if(donations){
                    donationsArray.push(donations)
                }
                setDonations(donationsArray)
        }
        }
    },[allData])
    return (
        <>
            {
                !donations?.length < 1
                ?
                <div className="px-5 md:px-[10%] mt-10 mb-20">
                    {
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            {
                                donations?.slice(0,dataLength).map(donation=> 
                                    <DonationCard
                                        key={donation.id}
                                        donation={donation}
                                    />
                                )
                            }
                        </div>
                        
                    }
                    {
                        donations?.length > 4 
                        ?
                        <div className={`text-center my-5 ${dataLength === donations?.length && 'hidden'}`}>
                            <button 
                                onClick={()=> setDataLength(donations.length)}
                                className="btn btn-success bg-[#009444] text-white"
                            >See All</button>
                        </div>
                        :
                        ""
                    }
                </div>
                :
                <h1 className="flex justify-center items-center min-h-[80vh] text-2xl md:text-3xl lg:text-4xl font-bold">No data found</h1>
            }
        </>
    );
};

export default Donation;