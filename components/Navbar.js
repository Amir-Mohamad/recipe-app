import Link from "next/link";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";
function Navbar() {
	return (
		<div>
			<nav className="flex justify-between p-5 bg-gray-100c">
				<div className="logo pt-1 mx-0 cursor-pointer">
					{/* <Image src="/logoo.png" alt="Recipe" width={50} height={30} /> */}
					<h1 className="ml-5 text-2xl">Recipe</h1>
				</div>
				<div className="flex justify-end">
					<Link href="/">
						<button class="bg-green-400 px-6 mr-2 shadow-lg rounded w-full">
							Order
						</button>
					</Link>
					<Link href="/about">
						<button class="bg-gray-200 px-6 mr-2 shadow-lg rounded whitespace-nowrap">
							Login
						</button>
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
