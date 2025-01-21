import Image from "next/image";
import { recipes } from "./data";
export default function Home() {

    const recipe = recipes.map(recipe => (
        <div key={recipe.id}>

            <h2>{recipe.name}</h2>
            <ul>
                {recipe.ingredients.map(ingredient =>
                    <li key={ingredient}>{ingredient}</li>
                )}
            </ul>
        </div>
    ));

    return (
        <div>
            {recipe}
        </div>
    );
}
