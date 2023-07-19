// import { defaultMaxListeners, } from 'prompt'
import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
export default function Api1() {
    const [data, setData] = useState([])
    const[message,setMessage]=useState('')
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            console.log(response.data)
            setData(response.data);
            setMessage('')
        })
        .catch(err=>{
            console.log(err,err.message)
            setMessage(err.message)
        })
    },[])

  
    
      
        return (
            <div className='w-full text-white  flex justify-center items-center '>
               
           <table className="border-collapse ">
    <thead>
      <tr>
      <th className="border border-white px-12 py-2">Email</th>
        <th className="border border-white px-12 py-2">Name</th>
        <th className="border border-white px-12 py-2">Username</th>
        <th className="border border-white px-12 py-2">Email</th>
      
      </tr>
    </thead>
    <p className='mt-12'>{message}</p>
    <tbody>
      {data.map(dat => (
        <tr key={dat.id}>
              <td className="border border-white px-12 py-2">{dat.id}</td>
          <td className="border border-white px-12 py-2">{dat.name}</td>
          <td className="border border-white px-12 py-2">{dat.username}</td>
          <td className="border border-white px-12 py-2">{dat.email}</td>
        </tr>
      ))}
    </tbody>
  </table>

  </div>
 );
      

  
}
