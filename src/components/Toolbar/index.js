import React from 'react'
import NightMode from './NightMode'
import StyledToolbar from './index.style'

const Toolbar = ({nightModeCallback, nightMode})=>(
  <StyledToolbar id="video-toolbar">
    <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode}/>
  </StyledToolbar>
)

export default Toolbar
