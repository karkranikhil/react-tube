import React from 'react';
import {StyledJourney,StyledPlaylistHeader} from './styles/StyledPlaylistHeader'
const PlaylistHeader = ({active, total, nightMode})=>(
    <StyledPlaylistHeader nightMode={nightMode}>
        <p>{active.title}</p>
        <StyledJourney>
            {active.num}/{total}
        </StyledJourney>
    </StyledPlaylistHeader>
)
export default PlaylistHeader