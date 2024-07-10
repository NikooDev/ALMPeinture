const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer role="contentinfo" className="flex w-full justify-center mt-20 pb-5 leading-[1.5] relative -top-3">
			<p className="text-white text-sm font-medium">ALM Peinture © { year }</p>
			<p className="text-white text-sm font-medium">&nbsp;• Créé par <a href="https://www.nikolasdev.com" target="_blank" className="underline">NikolasDev</a></p>
		</footer>
	);
}

export default Footer;
