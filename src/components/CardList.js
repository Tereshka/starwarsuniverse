import React from 'react';
import Card from '../containers/Card';

const CardList = ({ starwars}) => {

	return (
		<div className="row justify-content-center m-2">
			{
				starwars.map((sw, i) => {
					return (
						<Card 
							key={"sw_" + i} 
							id={i} 
							character={sw}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;