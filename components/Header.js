import Image from "next/image";

function Header() {
	return (
		<div className="header">
			{/* <Image src="/header.jpg" className="w-full h-full" width={} height={} /> */}
			{/* <img src="/header.jpg" alt="Header image" className="header" /> */}
			<p className="text-3xl font-bold text-center">Food Delivery</p>
			<button className="bg-green-400 px-6 mr-2 shadow-lg rounded mt-5 p-2">
				Order Now
			</button>
		</div>
	);
}

export default Header;
