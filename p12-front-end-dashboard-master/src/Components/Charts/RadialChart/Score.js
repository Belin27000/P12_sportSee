import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'

import '@/Components/Charts/RadialChart/score.css'


const Score = ({ user }) => {

    let Convertdata = [{ todayScore: user.todayScore }]

    return (
        <div className='Score'>

            <ResponsiveContainer className='radialChart' ResponsiveContainer width="100%" height="100%" >

                <RadialBarChart width={258} height={263} innerRadius='70%' data={Convertdata} startAngle={200} endAngle={90} barSize={10}>
                    <RadialBar width='100%' height='100%' minAngle={15} background clockWise={true} dataKey="todayScore" cornerRadius={10} fill='#FF0000' />
                    <text fontWeight="700" fontSize={26} fill="#282D30" x="50%" y="50%" textAnchor="middle">
                        {user.todayScore}%
                    </text>
                    <text fontSize="16" fontWeight="500" fill="#74798C" x="50%" y="60%" textAnchor="middle">
                        de votre
                    </text>
                    <text fontSize="16" fontWeight="500" fill="#74798C" x="50%" y="70%" textAnchor="middle">
                        objectif
                    </text>
                    <text x={50} y={34} textAnchor="middle" dominantBaseline="middle" className="progress-label"                    >
                        Score
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Score;