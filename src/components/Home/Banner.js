import React from 'react';

const Banner = () => {
	return (
		<div className='flex items-center justify-center py-20 text-white bg-green-700'>
			<div className='flex items-center justify-center w-full px-20 pt-2 mx-auto text-gray-600 md:px-36 '>
				<input
					className='relative w-full h-16 pl-2 pr-16 bg-white border-2 border-gray-300 rounded-full text-md px-15 focus:outline-none'
					type='search'
					name='search'
					placeholder='আপনি কি খুঁজছেন?'
				/>
				<button type='submit' className='absolute right-32 md:right-36'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='p-3 w-14 h-14'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Banner;
