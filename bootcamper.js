export default function introduce(obj) {
    return `Hi, my name is ${obj.firstName} ${obj.lastName}. I'm ${obj.age} years old and ${obj.hasPets ? 'Im a pet owner.' : 'I have no pets.'}`
}

export const randomIntroduce = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);

    return `Hi, my name is ${arr[randomIndex].firstName} ${arr[randomIndex].lastName}. I'm ${arr[randomIndex].age} years old and ${arr[randomIndex].hasPets ? 'Im a pet owner.' : 'I have no pets.'}`
}
/*console.log(introduce({
    firstName: "Barney",
    lastName: "Rubble",
    age: 45,
    hasPets: true,
  }));*/