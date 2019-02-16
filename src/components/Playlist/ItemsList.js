import React from 'react'
import Item from './Item'
import withLink from '../hoc/withLink'
import StyleditemsList from './ItemsList.style'

const ItemWithLink = withLink(Item)

const Items = ({videos, active}) => (
	<StyleditemsList>
		{videos.map(video=>(
			<ItemWithLink 
				key={video.id} 
				video={video} 
				active={video.id === active.id ? true: false}
				played={video.played}/>
		))}
	</StyleditemsList>     
)

export default Items
