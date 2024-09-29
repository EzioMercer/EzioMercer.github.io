import { Metadata } from 'next';

const generateMetadata = (): Metadata => {
	const title = 'Projects';
	const productionLinkPrefix = 'https://EzioMercer.github.io';

	return {
		title: `${title} | EzioMercer`,
		metadataBase: new URL(productionLinkPrefix),
		openGraph: {
			url: productionLinkPrefix,
			title: title,
			description: 'Navigation through EzioMercer\'s projects',
			type: 'website',
			emails: 'rovsanbadirxanov@gamail.com',
			siteName: title,
			phoneNumbers: '+994558718079'
		}
	}
}

export default generateMetadata;