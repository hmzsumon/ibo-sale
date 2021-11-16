import React from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar({ fixed }) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-700'>
				<div className='container flex flex-wrap items-center justify-between px-4 mx-auto'>
					<div className='relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start'>
						<Link
							to='/'
							className='flex py-2 mr-4 font-bold leading-relaxed text-white text-md whitespace-nowrap'
						>
							<img src={Logo} alt='logo' className='w-44 ' />
						</Link>
						<button
							className='block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h7'
								/>
							</svg>
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow items-center' +
							(navbarOpen ? ' flex' : ' hidden')
						}
						id='example-navbar-danger'
					>
						<ul className='flex flex-col list-none lg:flex-row lg:ml-auto'>
							<li className='nav-item'>
								<Link
									to='/chat'
									className='flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75'
									href='#pablo'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-6 h-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
										/>
									</svg>
									<span className='ml-2'> চ্যাট </span>
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/login'
									className='flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75'
									href='#pablo'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-6 h-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
										/>
									</svg>
									<span className='ml-2'>লগ ইন</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
