class HelloWorld {
    constructor(public message : string) {}

    SayHello(){
        console.log(this.message)
    }
}


// enums 

enum categoreys { Math, Science, History }


// arrays 


let strArray: string[] = ['s;ldk']


let strArray2: Array<string> = ['1','2']


// tuples 


let myTuple : [number, string] = [25,'truck']



// can also specify function definition...
// can specify what parameters and what function returns...
let  publicMessage = (name:string,Id:number) : string => {
    return name + ' ' + Id
}

let IdGenerator : (chars:string, Id:number) => string


IdGenerator = publicMessage


IdGenerator('Mark', 8888)


/*
    can mark a parameter optional with the ? 
*/