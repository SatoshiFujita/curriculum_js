let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
    console.log(num + 'は偶数です');
}

for (let i = 0 ; i< numbers.length; i++){
    if (numbers [i] %2 === 0){
        isEven(numbers [i]);
    }
}

//問2


class Car {
    constructor(gas,num){
        this.gas=gas;
        this.num=num;
    }
    getNumGas(){
        console.log("ガソリンは"+this.gas+"です。"+"ナンバーは"+this.num+"です。");

    }

}
let cars = new Car("ハイオク",1234);
cars.getNumGas();

function getNumGas(gas,num){
    console.log("ガソリンは"+gas+"です。"+"ナンバーは"+num+"です。");

}
getNumGas(cars.gas,cars.num);

