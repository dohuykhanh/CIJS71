//BÀI 1
const users = [
    {
        firstName : "Susan",
        lastName: "Steward"
    },
    {
        firstName : "Daniel",
        lastName: "Longbottom"
    },
    {
        firstName : "Jacob",
        lastName: "Black"
    }
];

function mapMethod(arr) {
    let res = arr.map((arr) => (`${arr.firstName} ${arr.lastName}`));
    console.log('Bài 1',res);
}

mapMethod(users)

//BÀI 2
const creatures = [
    {
        name: "Shark",
        habitat: "Ocean"
    },
    {
        name: "Whale",
        habitat: "Ocean"
    },
    {
        name: "Lion",
        habitat: "Savanna"
    },
    {
        name: "Monkey",
        habitat: "Jungle"
    }
];

function filterMethod(arr) {
    let res = [...arr].filter((arr) => arr.habitat.includes('Ocean'));
    console.log('Bài 2',res);
}

filterMethod(creatures)
