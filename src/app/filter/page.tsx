import React from 'react'
import { getData } from '@/utils/handleDatabase'
import FilterComponent from '../components/Select';

export default async function Filter() {
    const data = await getData();
    const sortedData = data.sort((a,b)=> a.id - b.id);
    console.log(sortedData);
    
    // const filteredData = data.filter((e)=> e.id < 20)
    // console.log(filteredData);
    
  return (
    <div>
        <FilterComponent data={data}/>

    </div>
  )
}
