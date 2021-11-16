import React from 'react';
import ProductCard from './ProductCard';

const Hero = () => {
	return (
		<div className='grid grid-cols-2 gap-6 px-4 mt-10 md:grid-cols-4 md:px-36'>
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
	);
};

export default Hero;
