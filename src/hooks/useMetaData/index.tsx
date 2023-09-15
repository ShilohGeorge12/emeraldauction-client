import { Helmet } from 'react-helmet-async';

interface useMetaDataProps {
	title: string;
	description: string;
	urlPath: string;
}

export const UseMetaData = (props: useMetaDataProps) => {
	const { title, description, urlPath } = props;

	const fullUrlPath = import.meta.env.VITE_MODE === 'development' ? `http://localhost:33001${urlPath}` : `https://emeraldauction-api.netlify.app${urlPath}`;
	return (
		<Helmet>
			<title>{title}</title>
			<meta
				name='description'
				content={description}
			/>
			<meta
				name='color-scheme'
				content={'light'}
			/>
			<meta
				name='theme-color'
				content={'light'}
			/>
			<meta
				property={'og:title'}
				content={title}
			/>
			<meta
				property='og:description'
				content={description}
			/>
			<meta
				property='og:url'
				content={fullUrlPath}
			/>
			<meta
				name='twitter:title'
				content={title}
			/>
			<meta
				name='twitter:description'
				content={description}
			/>
			<link
				rel='canonical'
				href={fullUrlPath}
			/>
		</Helmet>
	);
};
