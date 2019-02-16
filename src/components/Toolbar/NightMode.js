import React from 'react';
import StyledNightMode from './StyledNightMode'

const NightMode = ({nightModeCallback, nightMode})=>(
    <StyledNightMode>
        <span>NightMode</span>
        <label className="switch">
            <input type="checkbox" checked={nightMode} onChange={nightModeCallback}/>
            <span className="slider round"/>
        </label>
    </StyledNightMode>
)

export default NightMode
