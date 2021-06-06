import Head from "next/head";
import Layout from "../components/Layout";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
	return (
		<Layout>
			<div className="grid grid-cols-3 items-center">
				<RecipeCard
					title="first recipe"
					image="/pexels-pixabay-461198.jpg"
					time="2"
					description="Fugiat sit enim voluptate consequat nulla elit nisi quis."
				/>
				<RecipeCard
					title="second recipe"
					image="/pexels-pixabay-461198.jpg"
					time="2"
					description="Consequat reprehenderit magna aliqua ex esse dolore."
				/>
				<RecipeCard
					title="third recipe"
					image="/pexels-pixabay-461198.jpg"
					time="2"
					description="Sit ipsum laboris non occaecat voluptate ullamco nulla."
				/>
			</div>
		</Layout>
	);
}
