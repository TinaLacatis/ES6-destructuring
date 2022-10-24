import cars from "./practice";

const [honda, tesla] = cars;
const {
  coloursByPopularity: [hondaTopColour], //show only the first color
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

export default function App() {
  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  );
}

//import animals, { useAnimals } from "./data";
//console.log(animals);
// // destructure the array
//const [cat, dog] = animals;
//console.log(cat);
// // destructure the object
// const { name, sound } = cat;
// console.log(sound);
// //rename the property names
// const { name: catName, sound: catSound } = cat;
// console.log(catSound);
// //give custom names in case the property is missing
// const { name = "Fluffy", sound = "Purr" } = cat;
// console.log(name);
// //extensive destructuring
// const {
//   name,
//   sound,
//   feedingRequirements: { food, water }
// } = cat;
// console.log(food);
// // destructure a function
// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();
