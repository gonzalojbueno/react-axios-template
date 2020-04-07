import React from 'react';
import './App.css';
import useAxios from 'axios-hooks'



function App() {
 
    const [{ data, loading, error }, refetch] = useAxios(
    'https://gitconnected.com/v1/portfolio/gonzalojbueno')
   

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
   
    return (
      <div>
        <button onClick={refetch}>refetch</button>
        <pre>{JSON.stringify(data.basics, null, 2)}</pre>
        <pre>{JSON.stringify(data.education, null, 2)}</pre>
        
      </div>
     
  );
}

export default App;
