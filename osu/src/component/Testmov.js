import React, { useEffect } from 'react';
import { MoreBtn } from '../styled/Btns';
import 'bootstrap/dist/css/bootstrap.min.css'

const Mov = () => {
    useEffect(() => {
        // This code loads the IFrame Player API code asynchronously.
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // This function creates an <iframe> (and YouTube player)
        // after the API code downloads.
        window.onYouTubeIframeAPIReady = () => {
            // Get the 'player' element by ID
            const playerElement = document.getElementById('player');

            // Create a new YouTube player
            new window.YT.Player(playerElement, {
                videoId: 'QDiZUF4HE3A', // Initial YouTube video ID
                playerVars: {
                    autoplay: 1, // Autoplay
                    loop: 1,     // Loop
                    playlist: 'QDiZUF4HE3A', // Playlist (same as videoId for a single video)
                },
                events: {
                    onReady: (event) => {
                        event.target.mute(); // Mute the player on ready
                    },
                },
            });
        };
    }, []);

    return (
        <section className="youtube position-relative">
            <div className=''>
                
            </div>
            <div className="youtube__area mb-5">
                <div id="player">
                </div>
            </div>
            <MoreBtn className='zup'>자세히보기</MoreBtn>
        </section>
    );
};

export default Mov;
