const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirements: {
      food: 2,
      water: 3
    }
  },
  { name: "dog", sound: "woof" }
];

export function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ];
}

export default animals;
