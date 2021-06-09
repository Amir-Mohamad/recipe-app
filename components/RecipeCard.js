import Image from "next/image";

function RecipeCard({ title, image, time, description }) {
	return (
		<>
			<div class="rounded overflow-hidden shadow-lg m-8">
				<Image
					src={image}
					className="w-full"
					alt={title}
					width={528}
					height={328}
				/>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">{title}</div>
					<p class="text-grey-darker text-base">{description}</p>
				</div>
				<div class="px-6 py-4">
					<span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
						#food
					</span>
				</div>
			</div>
		</>
	);
}

export default RecipeCard;
