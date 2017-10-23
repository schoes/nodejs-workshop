/**
 * @author Sven Koelpin
 */

const printFn = (what) => {
    console.log(what);
};

printFn('hello');

//1. convert printFn to a fat arrow function. call the function and log the result


const sumFn = (a, b) => {
    return a + b;
}

let result = sumFn(2, 1);
console.log(result);

//2. convert sumFn to a fat arrow function. call the function and log the result


let complexFn = () => {
    const random = Math.random();
    return random > 0.5;

}
console.log(complexFn());

//3. convert complexFn to a fat arrow function. call the function and log the result


let creatorFn = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

console.log(creatorFn(1)(2)(3));
//4. convert creatorFn to a fat arrow function. call the function and log the result
