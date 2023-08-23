import React, { useEffect } from 'react'

const Item = ({ item }) => {
	useEffect(() => {
		
	},[item])
	return (
		<div>
			<div>{item.productName }</div>
		</div>
	)
}

export default Item