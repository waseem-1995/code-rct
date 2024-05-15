// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

// Generics makes it easier to write reusable code.

const identity = <T>(arg: T): T=> {
    return arg;
};


let c: string ="hello world";
let b: number=1;
let d: boolean=false;

identity<string>(c);
identity<number>(b);
identity<boolean>(d);