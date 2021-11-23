import React,{useState,useEffect} from 'react'

const ResourceList = ({name}) => {
    const [resources,setResources]=useState([]);
    const fetchResources = async (name) => {
        fetch(`https://jsonplaceholder.typicode.com/${name}`)
        .then(resp=>resp.json())
        .then(data=>setResources(data))
    }

    useEffect(()=>{
        fetchResources(name)
        console.log(resources)
    },[name])

    return (
    <ul>
        {
            resources.map(resource =>{
                return <li key={resource.id}>{resource.title}</li>
            })
        }
    </ul>
    
    )
}

export default ResourceList
