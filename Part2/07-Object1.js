let rabbits = [
    {
        name: 'Mimi',
        breed: 'Lion Head',
        color: 'White',
        weight: 1.2
    },
    {
        name: 'Momo',
        breed: 'Netherland dwarf',
        color: 'White',
        weight: 1.2
    },
    {
        name: 'Mumu',
        breed: 'Mimi lop',
        color: 'White',
        weight: 1.2
    }
]

rabbits.forEach((rabbit) => {
    console.log(rabbit.name + ' , ' + rabbit.breed);
});