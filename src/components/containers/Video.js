import React from 'react'
import ReactPlayer from 'react-player'
import Toolbar from '../Toolbar'
import {StyledVideo, StyledVideoWrapper}  from './Video.style'

const Video = ({autoplay, active, endCallback, nightModeCallback, nightMode, progressCallback})=>(
	<StyledVideo>
		<StyledVideoWrapper>
			<ReactPlayer
				width="100%" height="100%" style={{position:"absolute", top:"0"}}
				playing={autoplay}
				controls={true}
				url={active.video}
				onEnded={endCallback}
				onProgress={progressCallback}
			/>
		</StyledVideoWrapper>
		<Toolbar
			nightModeCallback={nightModeCallback}
			nightMode={nightMode}
		/>
	</StyledVideo>
)

export default Video
