import React from 'react';
import { ResponsiveContainer, Bar, BarChart, Tooltip, XAxis, YAxis, Legend, CartesianGrid } from 'recharts'
import '@/Components/Charts/BarChart/activity.css'

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className='custom-tooltip'>
                <p> {payload[0].value}kg</p>
                <p> {payload[1].value}kcal</p>
            </div>
        )
    }
    return null
}

const Activity = ({ sessions }) => {

    sessions.dataModel.forEach((element, index) => {
        element.name = index + 1;
    });
    return (
        <ResponsiveContainer ResponsiveContainer width="100%" height="55%" >


            <BarChart data={sessions.dataModel} className="ActivityChart" >
                <Tooltip content={<CustomTooltip />} wrapperStyle={{ backgroundColor: '#E60000' }} />
                <Bar name='Poids (kg)' dataKey="kilogram" barSize={7} fill='#282D30' radius={[3, 3, 0, 0]} />
                <Bar name='Calories brûlées (kCal)' dataKey="calories" barSize={7} fill='#E60000' radius={[3, 3, 0, 0]} />

                <XAxis tickLine={false} />
                <YAxis orientation='right' tickLine={false} axisLine={false} />
                <Legend iconType="circle" verticalAlign='top' align='right' wrapperStyle={{ padding: '1rem' }} />
                <text x="32" y="1.5rem" dominantBaseline="hanging" fontSize="15" fontWeight="bold">Activité quotidienne</text>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Activity;