import React from 'react';
import StyledPlaylistItem from './styles/StyledPlaylistItem'
const PlaylistItem = ({video, active, played})=>(
    <StyledPlaylistItem active={active} played={played}>
       <div className="player_video_num">{video.num}</div>
       <div className="player_video_name">{video.name}</div>
       <div className="player_video_duration">{video.duration}</div>
    </StyledPlaylistItem>
)
export default PlaylistItem