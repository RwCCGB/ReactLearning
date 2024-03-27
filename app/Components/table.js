'use client'
import React, {useState, useEffect } from 'react';
import LikeButton from './like-button';
import { SpinnerCircular } from 'spinners-react';


const Table = () => {
    const [posts, setPosts] = useState([]); // posts retrieved from API
    const sleepForSpinner = ms => new Promise(r => setTimeout(r, ms)); // sleep to allow for spinner
    const [style, setStyle] = useState(["hidden-text"]); // setting style for show/hide columns
    const changeStyle = () => {             // changing the style
        if(style !== "hidden-text") setStyle("hidden-text");
        else 
            setStyle("showing-text");
    }
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Main bulk below making an async fetch call to the API and setting the data for use in the table below.
    const handleFetch = async () => {
      try{
        await sleepForSpinner(2000); // fake delay as call is made instantly
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
        
        setLoading(false);
      }
      catch(error){
        setError(true);
      }
    }
    
    useEffect(() => {
      handleFetch();
    }, []);
    
    return (
  <div className="container">
    <div className="spinner">
      <SpinnerCircular size={75} thick={150} speed={100} color='rgba(57,132,172,1)' secondaryColor='rgba(0,0,0,0,0.44)' enabled={loading}/>
    </div>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th className={style}>Message</th>
            <th ><button className='buttonDesign' onClick={changeStyle}>Show/Hide Messages</button></th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td className={style}>{post.body}</td>
              <td className="hideTableBorder"><LikeButton/></td>
            </tr>

          ))}
        </tbody>
      </table>

    </div>
    );
};
export default Table;
    