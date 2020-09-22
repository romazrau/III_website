const data = {
    name: 'shinder',
    age: 28,
    gender: 'male',
}

let {name, age} = data;

const data2 = data; // 設定參照
const data3 = {...data, gender: 'female'}; // 解開來設定
data.name = 'David';

console.log(name, age);
console.log(data);
console.log(data2);
console.log(data3);

let {name:myName, age: myAge} = data;
console.log(myName, myAge);
({name, age} = data3);
console.log(name, age);


//app
// import './myDestruct';