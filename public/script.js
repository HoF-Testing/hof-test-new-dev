/* TODO: **INSERT CODE** Create button */ 

const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
	  // TODO: **INSERT CODE** Call the specified Open Source API (link in README.md) to get a random meal
      /* TODO: **UNCOMMENT BLOCK-- DO NOT REMOVE** to extact data from API call
		 .then(res => res.json())
		 .then(res => {
		 createMeal(res.meals[0]);
	 }); */
});

const createMeal = (meal) => {

	// TODO: **INSERT CODE** Create object to store list of ingredients
	// TODO: **INSERT CODE** Get first 5 ingredients from the object. 
	
		if(meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		
		}
		
		else {
			// TODO: **INSERT CODE** Print full ingredient list to console
			
		  break;
		}
		
	
	const newInnerHTML = `
		<div class="row">
			<div class="columns five">
				<img src="${meal.strMealThumb}" alt="Meal Image">
				${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
				${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
				${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
				<h5>Ingredients:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
			</div>
			<div class="columns seven">
				<h4>${meal.strMeal}</h4>
				<p>${meal.strInstructions}</p>
			</div>
		</div>
		${meal.strYoutube ? `
		<div class="row">
			<h5>Video Recipe</h5>
			<div class="videoWrapper">
				<iframe width="420" height="315"
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
				</iframe>
			</div>
		</div>` : ''}
	`;
	
	meal_container.innerHTML = newInnerHTML;
}

