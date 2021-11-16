import React from 'react';
import Logo from '../../images/logo.png';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const MiddleContent = () => {
	return (
		<div className='flex flex-wrap items-center justify-center px-10 my-20 space-y-5 md:space-x-5'>
			<div className='space-x-5 text-center md:flex'>
				<div className='flex items-center'>
					<img src={Logo} alt='IBOsale' className='w-56 h-auto mx-auto' />
				</div>
				<div className='flex flex-col items-center '>
					<h1 className='my-5 font-bold text-gray-900 text-1xl'>
						অর্থ উপার্জন শুরু করুন!
					</h1>
					<p className='md:text-left md:w-80'>
						আপনার কাছে বিক্রি করার কিছু আছে? আপনার প্রথম বিজ্ঞাপনটি পোস্ট করুন
						এবং অর্থ আয় করুন!
					</p>
					<button className='flex items-center py-3 mt-5 space-x-2 font-bold bg-yellow-400 px-7 rounded-2xl'>
						<AiOutlinePlusCircle className='font-bold' /> &nbsp; ফ্রি বিজ্ঞাপন
						দিন{' '}
					</button>
				</div>
			</div>
			<div className='w-0.5 bg-green-100 h-44 hidden md:block'></div>
			<div className='space-x-5 text-center md:flex'>
				<div className='flex items-center'>
					<img src={Logo} alt='IBOsale' className='w-56 h-auto mx-auto' />
				</div>
				<div className='flex flex-col items-center '>
					<h className='my-5 font-bold text-left text-gray-900 '>
						অর্থ উপার্জন শুরু করুন!
					</h>
					<p className='md:text-left md:w-80'>
						আপনার কাছে বিক্রি করার কিছু আছে? আপনার প্রথম বিজ্ঞাপনটি পোস্ট করুন
						এবং অর্থ আয় করুন!
					</p>
					<button className='flex items-center py-3 mt-5 space-x-2 font-bold bg-yellow-400 px-7 rounded-2xl'>
						<AiOutlinePlusCircle className='font-bold' /> &nbsp; ফ্রি বিজ্ঞাপন
						দিন{' '}
					</button>
				</div>
			</div>
		</div>
	);
};

export default MiddleContent;
