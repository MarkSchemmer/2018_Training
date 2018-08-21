var HelloWorld = /** @class */ (function () {
    function HelloWorld(message) {
        this.message = message;
    }
    HelloWorld.prototype.SayHello = function () {
        console.log(this.message);
    };
    return HelloWorld;
}());
// enums 
var categoreys;
(function (categoreys) {
    categoreys[categoreys["Math"] = 0] = "Math";
    categoreys[categoreys["Science"] = 1] = "Science";
    categoreys[categoreys["History"] = 2] = "History";
})(categoreys || (categoreys = {}));
// arrays 
var strArray = ['s;ldk'];
var strArray2 = ['1', '2'];
// tuples 
var myTuple = [25, 'truck'];
// can also specify function definition...
// can specify what parameters and what function returns...
var publicMessage = function (name, Id) {
    return name + ' ' + Id;
};
var IdGenerator;
IdGenerator = publicMessage;
IdGenerator('Mark', 8888);
/*
    can mark a parameter optional with the ?
*/ 
