import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

interface State {
	hasError: boolean;
}
interface ErrorType {
	page: React.ReactNode;
}

class ErrorPage extends React.Component<ErrorType, State> {
	constructor(props: ErrorType) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(_error: Error) {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		toast.error(error.name);
		console.log({ error, errorInfo });
	}

	toHomePage = () => {};

	render() {
		if (this.state.hasError) {
			return (
				<section className='w-full h-full col-start-2 col-end-[10] flex items-center justify-center gap-4'>
					<img
						src='/images/error.png'
						className='w-1/4 transition transform hover:translate-y-3 hover:-translate-x-5 hover:scale-110'
						loading='eager'
						title='error Something went wrong'
						alt='error Something went wrong'
						width={''}
						height={''}
					/>
					<div>
						<p className='text-lg font-bold tracking-wider text-gray-500 capitalize duration-700 dark:text-gray-200 animate-pulse'> Something Went Wrong! </p>
						<button
							type='button'
							className='p-2 text-2xl text-white capitalize transition duration-300 ease-in-out bg-green-500 hover:bg-green-400 hover:scale-110 hover:rounded-md rounded-2xl'>
							<Link to={'/'}>home</Link>
						</button>
					</div>
				</section>
			);
		}
		return this.props.page;
	}
}
export default ErrorPage;
