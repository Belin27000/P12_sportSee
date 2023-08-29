import React from 'react';
import '@/Components/averageSessions.css'
import { AreaChart, Area, Tooltip, XAxis, ReferenceArea } from 'recharts'
import '@/Components/averageSessions.css'

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className='averageCustomTtip'>
                <p> {payload[0].value}min</p>
            </div>
        )
    }
    return null
}

const AverageSessions = ({ averageSessions }) => {
    // console.log(averageSessions);
    return (


        <AreaChart width={258} height={263} data={averageSessions} className='Average' >
            <Area type="monotone" dataKey="sessionLength" stroke="White" fill='#FF0000' strokeWidth={2} />
            {/* <Title text="Title" /> */}
            <XAxis />
            <ReferenceArea x1={4} x2={6} label="to modify" />
            <Tooltip content={<CustomTooltip />} wrapperStyle={{ width: 39, backgroundColor: 'white' }} />
        </AreaChart>
    );
};

export default AverageSessions;