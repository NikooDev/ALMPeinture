import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import Logo from '@/components/ui/logo';
import Footer from '@/components/partials/footer';

const Contact = () => {
	return (
		<>
			<Container>
				<Title className="relative z-40 text-slate-200 w-full text-center">Contactez-moi</Title>
				<div className="flex justify-around items-center w-full mt-16">
					<div className="flex items-center flex-col text-slate-200 text-2xl leading-[1.5]">
						<p>56250 Sulniac, France</p>
						<a href="mailto:almpeinture56@gmail.com">almpeinture56@gmail.com</a>
						<a href="tel:0698282549">06 98 28 25 49</a>
						<div className="mt-10">
							<Logo scrollHeader={false}/>
						</div>
					</div>
					<div className="w-1/2">
						<form method="POST" className="w-full">
							<div className="flex gap-5 w-full mb-5">
								<input type="text" placeholder="Nom" className="focus:outline-0 focus:border-2 focus:border-slate-500 border-2 border-slate-700 transition-all duration-200 text-white capitalize w-1/2 py-3 px-5 bg-white bg-opacity-10 shadow-md rounded-lg placeholder:text-slate-300"/>
								<input type="text" placeholder="Adresse e-mail" className="focus:outline-0 focus:border-2 focus:border-slate-500 border-2 border-slate-700 transition-all duration-200 text-white w-1/2 py-3 px-5 bg-white bg-opacity-10 shadow-md rounded-lg placeholder:text-slate-300"/>
							</div>
							<div className="flex gap-5 w-full mb-5">
								<input type="text" autoComplete="tel" placeholder="Téléphone" className="focus:outline-0 focus:border-2 focus:border-slate-500 border-2 border-slate-700 transition-all duration-200 text-white w-1/2 py-3 px-5 bg-white bg-opacity-10 shadow-md rounded-lg placeholder:text-slate-300"/>
								<input type="text" placeholder="Adresse" className="focus:outline-0 focus:border-2 focus:border-slate-500 border-2 border-slate-700 transition-all duration-200 text-white w-1/2 py-3 px-5 bg-white bg-opacity-10 shadow-md rounded-lg placeholder:text-slate-300"/>
							</div>
							<div className="mb-5">
								<input type="text" placeholder="Objet" className="focus:outline-0 focus:border-2 focus:border-slate-500 border-2 border-slate-700 transition-all duration-200 text-white w-full py-3 px-5 bg-white bg-opacity-10 shadow-md rounded-lg placeholder:text-slate-300"/>
							</div>
							<div>
								<textarea placeholder="Votre message" rows={6} className="resize-none focus:outline-0 focus:border-2 focus:border-slate-500 border-2 border-slate-700 transition-all duration-200 text-white w-full py-3 px-5 bg-white bg-opacity-10 shadow-md rounded-lg placeholder:text-slate-300"></textarea>
							</div>
							<div className="w-full mt-10">
								<button className="rainbow-button mx-auto" name="Envoyer"></button>
							</div>
						</form>
					</div>
				</div>
				<Footer/>
			</Container>
		</>
);
}

export default Contact;
