import { Recipe } from './models/receipe.model';
import { Ingredient } from './models/modele.ingredient';


export const MOCK_RECIPES: Recipe[] = [
    {
        id: 0,
        name: 'Daiquiri',
        picture:
            'https://cdn.liquor.com/wp-content/uploads/2016/07/29105024/DAIQUIRI-226x248-mosaic1.jpg',
        description:
            `The classic Daiquiri is a super simple rum cocktail that’s well-balanced and refreshing.
      The combination of sweet, sour and spirit is refreshingly tangy and perfect for any occasion.`,
        ingredients: [
            {
                name: 'Dark rum (Appleton Estate Reserve)',
                quantity: 2,
                unit: 'oz'
            },
            {
                name: 'Fresh lime juice',
                quantity: 1,
                unit: 'oz'
            },
            {
                name: 'Simple sirup',
                quantity: 1,
                unit: 'oz'
            }
        ] as Ingredient[],
        instructions:
            'Add all the ingredients to a shaker and fi'
    },
];
