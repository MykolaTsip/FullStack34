

console.log(2222);


let a: any  = 111;
let b: number;
let c: string = 'dssdg';
let d: boolean = true;
let e: null = null
let f: undefined = undefined;
// let g: symbol = Symbol(444);
// let h: object = {}
// let h: Object = {}


// // int a1 = 3252;
// // float a2 = 35435


// a = 'dsfsdfs'

// console.log(a);


c = '53453'
// c = true

b = 33;

console.log(b);
console.log(c);



let p1: number | string = 'wettrery';
console.log(p1);
p1 = 3333;
console.log(p1);

let p2: number | undefined | boolean = 43534;
p2 = undefined;
p2 = false


let p3: string | null = prompt('Enter num');

console.log(p3);


//  Object, object
let h: { a: number, a2: boolean | number, a3: string } = {
    a: 1,
    a2: true,
    a3: 'dfd'
}

// h.a = 'dsf'
// h.b1 = null
// h.a = 111
let h1: Record<string, number | boolean | string> = {
    a: 111,
    b1: 'sfsd',
    b2: true,
    // b3: null
}


h1.a = true
h1.b7 = 'sdfsdfsd'


interface IUser {
    id: number;
    name: string;
    isMarried: boolean;
    age: number;
    location: IUserLocation;
    wife?: IUserWife;
}

interface IUserLocation {
    city: string;
}

interface IUserWife {
    name: string;
    age: number;
    hasCar?: boolean
}

let user1: IUser = {
    id: 0,
    name: 'dfs',
    isMarried: false,
    age: 24,
    location: {
        city: 'ee'
    },
    // wife: {
    //     name: 'dsgsd',
    //     age: 43,
    // }
}


type Sex = 'male' | 'female';


enum SSS {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}

interface IUserAdmin extends IUser {
    login: string,
    pass: string,
    n?: 1 | 0
    // sex: Sex;
    sex: SSS;
}



let user2: IUserAdmin = {
    id: 1,
    name: 'dfs',
    isMarried: false,
    age: 44,
    location: {
        city: ''
    },
    login: 'dgfsd',
    pass: 'dsfsd',
    // sex: 'male'
    sex: SSS.FEMALE
}


let user3: IUserAdmin = {
    id: 1,
    name: 'dfs',
    isMarried: false,
    age: 44,
    location: {
        city: ''
    },
    login: 'dgfsd',
    pass: 'dsfsd',
    // sex: 'male'
    sex: SSS.FEMALE
}





type myType = number | null | undefined;

type Abetka = 'a' | 'b' | 'c' | 'd';



let n1: myType = null;

n1 = undefined;
n1 = 11

console.log(11);

let n2: Abetka = 'a'

n2 = 'b'

// n2 = 'r43t554'


type Ob = {} | {
    a: number,
    b: boolean
} | {
    c: null
}

let n3: Ob = {
    a: 1,
    b: true
}

n3 = { c: null }


type Ob2 = { a: 1}

type Ob3 = { b: 2 } & Ob2;



// let n5: never = 'dfd'


let n6: unknown = 44;

n6 = 'dsfsds';
n6 = null

if (typeof n6 === 'string') {
    n6.split('')
}


function f1 (a1: number, a2: number, a3?: number): number | string {
    if (a3) {
        return a1 + a2 + a3
    }

    return 'dsfs'
}

function f2 (a: boolean | number): void {
    console.log(a);  
}


type data = string | number

let n7: data[] = ['sdfsd', 'sdfsd', 5345];


let n8: Array<string | number> = [3453, 'dsfsd'];


let n9: [number, string] = [4354, '4534'];


