function introduce(obj) {
    return `Hi, my name is ${obj.firstName} ${obj.lastName}. I'm ${obj.age} years old and ${obj.hasPets ? 'Im a pet owner.' : 'I have no pets.'}`
}

/*console.log(introduce({
    firstName: "Barney",
    lastName: "Rubble",
    age: 45,
    hasPets: true,
  }));*/