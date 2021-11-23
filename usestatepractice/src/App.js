import React,{useState} from 'react'
import ResourceList from './ResourceList';
import './App.css';

function App() {
  const [resourceName,setResourceName]= useState('posts')
  return (
    <div className="App">
      <>
        <button onClick={()=>{setResourceName('posts')}}>Posts</button>
        <button onClick={()=>{setResourceName('todos')}}>Todos</button>
        <ResourceList name={resourceName}/>
      </>
    </div>
  );
}

export default App;
