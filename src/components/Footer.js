import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
	return (
		<footer className='flex items-center justify-around py-10 mt-20 border-t-2 border-green-700'>
			<p className='font-medium'>Copyright &copy; 2021 All right reserved</p>
			<div className='flex space-x-4 text-2xl'>
				<FiFacebook className='cursor-pointer' />
				<FiInstagram className='cursor-pointer' />
				<FiTwitter className='cursor-pointer' />
			</div>
		</footer>
	);
};

export default Footer;
