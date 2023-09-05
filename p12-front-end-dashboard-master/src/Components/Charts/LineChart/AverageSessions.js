import React from 'react';
import { Tooltip, XAxis, YAxis, Rectangle, ResponsiveContainer, LineChart, Line } from 'recharts'
import '@/Components/Charts/LineChart/averageSessions.css'

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

function CustomizedCursor({ points }) {
    return (
        <Rectangle fill="black" opacity={0.1} x={points[0].x} width={1000} height={250} />
    )
}
const AverageSessions = ({ averageSessions }) => {
    return (
        <div className='Average'>
            <ResponsiveContainer ResponsiveContainer width="100%" height="100%" >
                <LineChart data={averageSessions.dataModel}>
                    <Line type="natural" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} activeDot={{ stroke: 'red', strokeOpacity: 0.7, strokeWidth: 2, r: 5, }} opacity={0.8} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} opacity={0.5} style={{ transform: 'scaleX(0.95)', transformOrigin: 'bottom', fontSize: '12px', stroke: 'white', }} padding={{ left: -3, right: -3 }} interval={'preserveStartEnd'} />
                    <YAxis hide={true} padding={{ top: 70, bottom: 30 }} domain={['dataMin', 'dataMax']} />
                    <Tooltip content={CustomTooltip} cursor={<CustomizedCursor />} />
                </LineChart>
            </ResponsiveContainer>
        </div>
        // <AreaChart data={averageSessions}  >
        //     <Area type="monotone" dataKey="sessionLength" stroke="White" fill='#FF0000' strokeWidth={2} />
        //     {/* <Title text="Title" /> */}
        //     <XAxis />
        //     <ReferenceArea x1={4} x2={6} label="to modify" />
        //     <Tooltip content={<CustomTooltip />} wrapperStyle={{ width: 39, backgroundColor: 'white' }} />
        // </AreaChart>
    );
};

export default AverageSessions;


