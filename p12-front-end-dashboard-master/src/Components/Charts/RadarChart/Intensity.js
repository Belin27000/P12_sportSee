import React from 'react';
import { RadarChart, ResponsiveContainer, PolarGrid, Radar, PolarAngleAxis } from 'recharts'
import '@/Components/Charts/RadarChart/intensity.css'
const Intensity = ({ kind }) => {
    console.log(kind);
    return (
        <div className='Intensity'>
            <ResponsiveContainer ResponsiveContainer width="100%" height="100%" >
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={kind} className='Radar'>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" stroke='#FFFFFF' />
                    <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer >
        </div>

    );
};

export default Intensity;