
let data: number | string;

interface ICar {
    color: string;
    model: string;
    topSpeed?: number;
}

const car1: ICar = {
    color: 'blue',
    model: 'bmw'
};

const car2: ICar = {
    color: 'black',
    model: 'Infinit',
    topSpeed: 180
};

const multiply = (x: number, y: number): void => {
    x * y;
};

multiply(6,7);


