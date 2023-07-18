import React from 'react';
import './App.css';
import { useState } from 'react';
import VideoPlayer from './Componets/VideoPlayer';

function App() {
    const [videoId, setVideoId] = useState(null);
    
    
    const playVideo =(e:any, videoId: any) => {
        e.preventDafault;
        setVideoId(videoId);
    }
  return (
    <div>
        {videoId && <VideoPlayer videoId={videoId}></VideoPlayer>} <br />
        <button onClick={(e)=> {playVideo(e, 'cdn')}}>Play video 1</button>
        <button onClick={(e)=> {playVideo(e, 'generate-pass')}}>Play video 2</button>
        <button onClick={(e)=> {playVideo(e, 'get-post')}}>Play video 3</button>
    </div>
  );
}

export default App;
