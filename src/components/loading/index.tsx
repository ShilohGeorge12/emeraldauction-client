export const LoadingCard = () => {
	return <div className='w-full h-[218px] animate-pulse rounded-lg bg-green-300' />;
};

export const LoadingHomeBG = () => {
	return (
		<div className='w-[80%] lg:w-3/4 h-[500px] object-cover bg-green-300 fixed right-1 top-[263px] md:top-auto bg-center -z-10 brightness-125 rounded-3xl animate-pulse' />
	);
};

export const LoadingNavImage = () => {
	return <div className='w-[144px] h-[47px] bg-green-300 animate-pulse rounded-2xl' />;
};

export const LoadingMainCar = () => {
	return <div className={`w-full h-full border-green-500 bg-green-300 animate-pulse rounded-2xl`} />;
};
export const LoadingOtherCar = ({ width, height }: { width: string; height: string }) => {
	return <div className={`${width} ${height} col-span-2 object-cover border-2 border-green-500 bg-green-300 animate-pulse rounded-2xl`} />;
};
