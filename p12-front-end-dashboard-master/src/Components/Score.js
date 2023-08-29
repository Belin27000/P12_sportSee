import React from 'react';
import { RadialBarChart, RadialBar } from 'recharts'

import '@/Components/score.css'


const Score = ({ user }) => {

    return (
        <RadialBarChart
            width={258}
            height={263}
            innerRadius='70%'
            // outerRadius='80%'
            data={user.mainData}
            startAngle={200}
            endAngle={90}
            // cx={200}
            // cy={200}
            barSize={10}

        >
            <RadialBar
                width='100%'
                height='100%'
                minAngle={15}
                label={{ position: 'center', fill: '#000000' }}
                background
                clockWise={true}
                dataKey="todayscore"
                cornerRadius={10}
                fill='#FF0000'
            />
            <text
                x={50}
                y={34}
                textAnchor="middle"
                dominantBaseline="middle"
                className="progress-label"
            >
                Score
            </text>
        </RadialBarChart>
    );
};

export default Score;