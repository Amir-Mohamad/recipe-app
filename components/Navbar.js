import Link from "next/link";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";
function Navbar() {
	return (
		<div>
			<nav className="flex justify-between p-5">
				<div className="logo pt-1 mx-0 cursor-pointer">
					{/* <Image src="/logoo.png" alt="Recipe" width={50} height={30} /> */}
					<Typography variant="h6" component="h2" className="font-bold">
						Recipe
					</Typography>
				</div>
				<div className="flex justify-end">
					<Link href="/">
						<button class="btn">Login</button>
					</Link>
					<Link href="/about">
						<button class="btn">Sign Up</button>
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
