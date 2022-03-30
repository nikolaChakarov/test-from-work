let greet: Function;

greet = () => {
    console.log('hello again');
    
}

const add = (a: number, b: number, c?: number) => {
    console.log((a + b));
    console.log(c);
}

add(5, 10);

const anchor = document.querySelector('a');

console.log(anchor?.href);


