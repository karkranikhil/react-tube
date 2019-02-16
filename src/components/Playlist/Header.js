import React from 'react'
import {StyledJourney,StyledHeader} from './Header.style'

const Header = ({active, total, nightMode}) => (
	<StyledHeader nightMode={nightMode}>
		<p>{active.title}</p>
		<StyledJourney>
			{active.num}/{total}
		</StyledJourney>
	</StyledHeader>
)

export default Header
