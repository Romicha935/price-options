import React from 'react'
import { LineChart as LChart,Line } from 'recharts'

const LineChart = () => {

    // const mathMarksData = [
    //     {id:1,name: 'Alice',math:78},
    //     {id:2,name: 'Bob',math:80},
    //     {id:3,name: 'Charline',math:78},
    //     {id:4,name: 'Devid',math:95},
    //     {id:5,name: 'Emma',math:80},
    //     {id:6,name: 'Franc',math:68},
    //     {id:7,name: 'Grace',math:97},
    //     {id:8,name: 'Hannah',math:85},
    //     {id:9,name: 'Ian',math:84},
    //     {id:10,name: 'Jack',math:92},
    // ]
    const subjectMarksData = [
        { id: 1, name: 'Alice', physics: 78, chemistry: 82, math: 75 },
        { id: 2, name: 'Bob', physics: 80, chemistry: 85, math: 79 },
        { id: 3, name: 'Charline', physics: 78, chemistry: 80, math: 74 },
        { id: 4, name: 'Devid', physics: 95, chemistry: 88, math: 92 },
        { id: 5, name: 'Emma', physics: 80, chemistry: 84, math: 81 },
        { id: 6, name: 'Franc', physics: 68, chemistry: 72, math: 65 },
        { id: 7, name: 'Grace', physics: 97, chemistry: 91, math: 95 },
        { id: 8, name: 'Hannah', physics: 85, chemistry: 87, math: 83 },
        { id: 9, name: 'Ian', physics: 84, chemistry: 86, math: 80 },
        { id: 10, name: 'Jack', physics: 92, chemistry: 90, math: 89 },
      ];
      
  return (
    <div>
        <LChart width={500} height={400} data={subjectMarksData}>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey={"physics"} stroke='yellow'></Line>
        </LChart>
    </div>
  )
}

export default LineChart