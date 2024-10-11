var Animal1 = /** @class */ (function () {
    function Animal1() {
        this.height = 100;
        this.weight = 70;
        this.kind = 'Tiger';
        this.name = 'Koko'; // protected
        this.age = 10; // private
    }
    Animal1.prototype.addAge = function () {
        this.age += 1;
    };
    return Animal1;
}());
var Tiger1 = new Animal1();
console.log(Tiger1);
