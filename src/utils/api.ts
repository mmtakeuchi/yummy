import axios from 'axios'

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

export const fetchRandomRecipes = async () => {
    try {
      const meals = [];
      for (let i = 0; i < 12; i++) {
        meals.push(
          await axios
            .get(`${BASE_URL}/random.php`)
            .then((response) => {
                return {...response.data.meals[0], liked: false}
            })
            .catch((error) => console.log(error))
        );
      }
      if (meals) {
        return meals;
      }
    } catch (error) {
      console.log(error);
    }
  };

  export const fetchSelectedRecipe = async (mealId: string | undefined) => {
    try {
        const response = await axios.get(`${BASE_URL}/lookup.php?i=${mealId}`)
        const data = {...response.data.meals[0], liked: false}

        if (data) return data
    } catch (error) {
        console.log(error)
    }
  }
