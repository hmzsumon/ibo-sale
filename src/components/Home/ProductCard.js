import React from 'react';
import MobileImg from '../../images/mobile.png';

const ProductCard = () => {
	return (
		<div className='flex space-x-5 cursor-pointer'>
			<img src={MobileImg} alt='a mobile' className='h-20' />
			<div className='space-y-2'>
				<h1 className='text-2xl font-bold text-gray-700'>মোবাইল </h1>
				<p>৪৫,০০০ টি বিজ্ঞাপন </p>
			</div>
		</div>
	);
};

export default ProductCard;
