import React from 'react';
import StyledItem from './Item.style'

const Item = ({video, active, played}) => (
    <StyledItem active={active} played={played}>
       <div className="player_video_num">{video.num}</div>
       <div className="player_video_name">{video.title}</div>
       <div className="player_video_duration">{video.duration}</div>
    </StyledItem>
)

export default Item