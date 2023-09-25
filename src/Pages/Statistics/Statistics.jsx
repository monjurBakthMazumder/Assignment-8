import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import useGetAllData from '../../Hock/useGetAllData'
import {getSaveDonation} from '../../Utility/localStogare'
const Statistics = () => {

    const [allData] = useGetAllData();
    const donations = getSaveDonation();
    const donated = donations?.length;
    const unDonated = allData?.length - donated

    const data = [
        { name: 'Group A', value: unDonated },
        { name: 'Group B', value: donated },
    ];
    

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <dic className="px-5 md:px-[10%] mb-20">
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10">
                <h1 className='flex items-center gap-2 md:text-lg'>Your Donation <p className='h-3 w-10 md:w-20 bg-[#00C49F]'></p></h1>
                <h1 className='flex items-center gap-2 md:text-lg'>Total Donation<p className='h-3 w-10 md:w-20 bg-[#FF444A]'></p></h1>
            </div>
        </dic>
    );
};

export default Statistics;