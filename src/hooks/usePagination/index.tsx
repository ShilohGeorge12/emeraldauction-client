import { useState } from 'react';
import { PaginationType } from '../../types';
// import { useFetch } from '../useFetch';
// import { toast } from 'react-toastify';
// import { useMyContext } from '../../context';
// import { useQuery } from '@tanstack/react-query';

const usePagination: PaginationType = (options) => {
	const { data, limitPerPage, totalData } = options;
	// const { dispatch } = useMyContext();
	const [Page, setPage] = useState<number>(1);

	// const { status } = useQuery({
	// 	queryKey: [queryKey, { Page }],
	// 	queryFn: async () => {
	// 		const res = await useFetch(`${url}?page=${Page - 1}&perpage=${limitPerPage}`, 'GET', 'default');

	// 		if (isError(res)) {
	// 			const error = typeof res.error === 'string' ? res.error : res.error[0];
	// 			toast.error(error);
	// 			return error;
	// 		}

	// 		if (res && isJourneyDataArr(res)) {
	// 			dispatch({ type: 'Journey', payload: { Journey: res.journey } });
	// 			setTotalData(res.totalJourneys);
	// 			return res;
	// 		}

	// 		if (isMaintRequestArr(res)) {
	// 			dispatch({ type: 'MaintenanceRequest', payload: { MaintenanceRequest: res.maintRequest } });
	// 			setTotalData(res.totalMaintRequest);
	// 			return res;
	// 		}

	// 		if (isMaintRequestArr(res)) {
	// 			dispatch({ type: 'MaintenanceRequest', payload: { MaintenanceRequest: res.maintRequest } });
	// 			setTotalData(res.totalMaintRequest);
	// 			return res;
	// 		}

	// 		if (isMaintJobArr(res)) {
	// 			dispatch({ type: 'MaintenanceJobs', payload: { MaintenanceJobs: res.maintJobs } });
	// 			setTotalData(res.totalMaintJobs);
	// 			return res;
	// 		}

	// 		if (isFleetVehicleArr(res)) {
	// 			dispatch({ type: 'FleetVehicle', payload: { Fleet: res.vehicles } });
	// 			setTotalData(res.totalVehicles);
	// 			return res;
	// 		}

	// 		if (isFleetCategoryArr(res)) {
	// 			dispatch({ type: 'FleetCategory', payload: { FleetCategory: res.Category } });
	// 			setTotalData(res.totalFleetCategory);
	// 			return res;
	// 		}

	// 		if (isFleetGroupArr(res)) {
	// 			dispatch({ type: 'FleetGroup', payload: { FleetGroup: res.group } });
	// 			setTotalData(res.totalFleetGroup);
	// 			return res;
	// 		}

	// 		return null;
	// 	},
	// 	keepPreviousData: true,
	// });

	const startIndex = (1 - 1) * limitPerPage;
	const endIndex = startIndex + limitPerPage;
	const paginatedData = data.slice(startIndex, endIndex);
	const len = Math.ceil(totalData / limitPerPage);
	const pages = Array.from({ length: len }, (_, i) => i + 1);

	const PaginatedNav = () => {
		return (
			<ul className='flex mx-auto overflow-hidden rounded-lg w-fit last:border-r-0 last:border-white '>
				{pages.map((page) => (
					<li
						key={`PaginatedNav-${page}`}
						className={`flex items-center justify-center w-9 h-9 transition duration-700 ease-in-out text-lg hover:text-2xl ${
							page === Page ? 'bg-emerald-500  text-white' : 'bg-white  text-emerald-500'
						}`}>
						<button
							type='button'
							className='w-full h-full font-bold'
							onClick={() => setPage(page)}>
							{page}
						</button>
					</li>
				))}
			</ul>
		);
	};

	return [PaginatedNav, paginatedData, 'loading'];
};

export default usePagination;
