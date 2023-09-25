import { PieChart } from 'react-minimal-pie-chart';
import useGetAllData from '../../Hock/useGetAllData';
import { getSaveDonation } from '../../Utility/localStogare';
const Statistics = () => {
    const [allData] = useGetAllData();
    const donations = getSaveDonation();
    const donated = donations?.length;
    const unDonated = allData?.length - donated
    const donatedPercentage = donated / .12
    const unDonatedPercentage = unDonated / .12
    return (
        <div className='px-5 sm:px-[10%] my-10'>
            <div className='px-[20%] sm:px-[30%]'>     
                <PieChart
                    label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                    data={[
                        { title: `${Math.round(unDonatedPercentage)}%`, value: unDonated, color: '#FF444A' },
                        { title: `${Math.round(donatedPercentage)}%` , value: donated, color: '#00C49F' },
                    ]}
                />
            </div>

            <div className="flex justify-center items-center gap-5 md:gap-10 flex-wrap my-10">
                <h1 className='flex items-center gap-2 text-lg'>Your Donation <p className='w-10 md:w-20 h-3 bg-[#00C49F]'></p></h1>
                <h1 className='flex items-center gap-2 text-lg'>Total Donation <p className='w-10 md:w-20 h-3 bg-[#FF444A]'></p></h1>
            </div>
        </div>
    );
};

export default Statistics;