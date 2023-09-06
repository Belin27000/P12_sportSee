import React from 'react';
import { RadarChart, ResponsiveContainer, PolarGrid, Radar, PolarAngleAxis } from 'recharts'
import '@/Components/Charts/RadarChart/intensity.css'
const Intensity = ({ kind }) => {
    return (
        <div className='Intensity'>
            <ResponsiveContainer ResponsiveContainer width="100%" height="100%" >
                <RadarChart cx="50%" cy="50%" data={kind} className='Radar' margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                    <PolarGrid gridType="polygon" radialLines={false} polarRadius={[0, 10, 27, 49, 72, 93]} stroke='white' />
                    <PolarAngleAxis dataKey="kind" stroke='#FFFFFF' />
                    <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer >
        </div>

    );
};

export default Intensity;