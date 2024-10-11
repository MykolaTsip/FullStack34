
class Animal1 {
    public height = 100
    public weight = 70
    public kind = 'Tiger'
    protected name = 'Koko' // protected
    private age = 10 // private
    // override d 
    readonly dd = 3;
    
    addAge() {
        this.age += 1;
    }
}

class Cat extends Animal1 {


    showData() {
        console.log(this.weight);
        console.log(this.name);
        // console.log(this.age);
        
    }
}


let Tiger1 = new Animal1();
console.log(Tiger1);

// Tiger1.age
// Tiger1.name

let cat = new Cat()

