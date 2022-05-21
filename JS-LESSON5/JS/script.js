//1)
let student = {
    name: 'Максим',
    surname: 'Муха',
    age: 16,
    classEducation: 1,
    levelEnglish: 'B1',
};
delete student.levelEnglish;
console.log(student);
//2)
let book = {
    numberOfPages: 545,
    cover: true,
    isTheAuthorAlive: false,
    isBestseller: true,
    booksEditions: 20000000,
};
for (let key in book) {
    if (typeof book[key] === 'boolean') {
        console.log(`${key} : ${book[key]}`);
    }
}
//3)
let myCar = {
    type: "Marsedec",
    color: 'black',
    amountDoors: 4,
    horsePower: 250,
    valueofDvig: '6литров',
    typeofBox: 'пятиступенчатая',
};
//1-ый способ
let copy1 = {};
for (let key in myCar) {
    copy1[key] = myCar[key];
}

//2-ой способ
let copy2 = {};
Object.assign(copy2, myCar);
console.log(copy2);

//4)
let animalObj = {
    name: "cat",
    legs: 4,
    color: "black",
}

function animalInfo(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs`;
}

console.log(animalInfo(animalObj));

//5)
let train = {
    locomotiveLength: 25,
    totalCoachCars: 4,
    coachLength: 15,
};

function trainLength(obj) {
    return obj.locomotiveLength + obj.totalCoachCars * obj.coachLength;
}
console.log(trainLength(train)); //85
//6)
let ourStudent = {
    name: "Джон",
    surname: 'Амиго',
    group: 1,
    studentInfo() {

        console.log(`Этот студент ${this.name} ${this.surname} из группы ${this.group}`);

    }

};
ourStudent.studentInfo();
//7)
function ourAnimal(animal, legs, predator, name) {
    this.animal = animal;
    this.legs = legs;
    this.predator = predator;
    this.name = name;
}
let dog = new ourAnimal('Dog', 4, true, 'Sharik');
let cat = new ourAnimal('Cat', 4, true, 'Murka');
console.log(dog);
console.log(cat);