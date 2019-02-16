import React from 'react'
import Header from './Header'
import Items from './ItemsList'
import StyledWrapper from './index.style'

const Wrapper = ({videos, active, nightMode}) => (
	<StyledWrapper>
		<Header active={active} total={videos.length} nightMode={nightMode}/>
		<Items videos={videos} active={active} />
	</StyledWrapper>
)

export default Wrapper