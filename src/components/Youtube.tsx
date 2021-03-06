import React, { useState } from 'react';
import './Youtube.scss';
import videos from '../assets/youtube-videos.json';

const Youtube: React.FC = () => {
    const [currentVideo, setVideo] = useState('7rOIjEhhgNA');

    return (
        <div className="Youtube">
            <h2>Explore Our Video Collection</h2>
            <iframe title="alan watts playlist" src={`https://www.youtube.com/embed/${currentVideo}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <div>
                {
                    videos.map(video => {
                        return (
                            <div className="thumb" key={video} style={{
                                backgroundImage: `url(${`https://img.youtube.com/vi/${video}/0.jpg`})`
                            }} onClick={() => {
                                setVideo(video);
                            }}></div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Youtube;