import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
<footer className="mt-40 xs:mx-64 lg:mx-96 border-t border-indigo-300 border-opacity-60 fade-in text-indigo-300">
	<div></div>
	<div className="container flex flex-col justify-between px-6 py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
	 <div className="flex justify-center lg:justify-start lg:w-1/3">			
		<div className="flex items-center justify-center h-12 lg:justify-start">
        <img src="images/discord logo.png" width ="40" height ="40" className ="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" alt="discord logo"/>
        <span className="self-center text-2xl text-indigo-300 font-semibold ml-1">Canvas Bot</span>
		</div>				
			
	 </div>
	 <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase font-semibold">Product</h3>
				<ul className="space-y-1">
					<li>
						<a className="hover:underline" href="/#features">Features</a>
					</li>					
					<li>
						<Link to ="/about" className="hover:underline">Documentation</Link>
					</li>					
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase font-semibold">Developers</h3>
				<ul className="space-y-1">
					<li>
						<Link to="/about" className="hover:underline">About Us</Link>
					</li>
					<li>
						<a className="hover:underline" href="https://github.com/barrotbake/Canvas-Bot" target="_blank" rel="noopener noreferrer">Contact</a>
					</li>
					<li>
						<a className="hover:underline" href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" rel="noopener noreferrer">Terms of Service</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase font-semibold">Resources</h3>
				<ul className="space-y-1">
					<li>
						<a className="hover:underline" href="https://canvas.instructure.com/doc/api/all_resources.html" target="_blank" rel="noopener noreferrer">Canvas API</a>
					</li>
					<li>
						<a className="hover:underline" href="https://discord.bots.gg/" target="_blank" rel="noopener noreferrer">Discord Bots</a>
					</li>
					<li>
						<a className="hover:underline" href="https://discordjs.guide/#before-you-begin" target="_blank" rel="noopener noreferrer">Guides</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
			<h3 className="tracking-wide uppercase font-semibold">Contact Us</h3>			
			<div className="flex justify-start space-x-3 mt-12">
        		<a href="https://github.com/barrotbake/Canvas-Bot"> 
        		<img src="https://img.icons8.com/nolan/64/github.png" width="40" height="40" className="p-1 border-2 border-gray-200 rounded-full shadow-lg bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" alt="github footer"/>
        		</a>
        		<a href="https://discord.com/">
        		<img src="https://img.icons8.com/nolan/64/discord-logo.png" width="40" height="40" className="p-1 border-2 border-gray-200 rounded-full shadow-lg bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" alt="discord footer"/>  
        		</a>					
			</div>
			</div>
	</div>
	</div>
  <div className="pt-6 pb-2 text-sm items-center justify-center text-center border-t border-indigo-300 border-opacity-60">© CS 362 Group 8
  {/* <p className="py-2">Front end designed with: </p>
  <img className="mx-auto inline " width="70" height="70"src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="react logo"/>
  <img className="mx-auto inline" width="70" height="70"src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg" alt="tailwind logo"/> */}
  </div>
  
  
</footer>
    )
}

export default Footer
