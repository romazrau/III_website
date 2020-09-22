
const myTarget = {  //監看目標
    name: 'David',
    age: 25
};

const myHandle = {  //處理方法
    get: function(target, prop){
        //target為被監看物件本身，prop為被操作屬性
        console.log(target, prop);
        if(!target[prop]){
            return "this prop no exsist"
        }
    },
    set: function(target, prop, value){
        console.log(target, prop, value);
        if(prop == 'age' && isNaN(value/1)){
            console.log('%c age 需為數字','color: red')
        }else{
            target[prop] = value;
        }
    },
}

//proxy物件，接收監看目標與處理方法
const myProxy = new Proxy(myTarget, myHandle);

//觸發get方法
const a = myProxy.name;
const b = myProxy.age;
const c = myProxy.ff;
console.log(c);

//觸發set方法
myProxy.name = "GGG";
myProxy.age = 333;
myProxy.age = "1感ˋ23";


//app
// import './myProxy';




