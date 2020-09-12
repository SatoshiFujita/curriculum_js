//関数定義
function createJuice (fruits){
console.log(fruits+"を受け取りました、ジュースにして返します");
let outjuice = fruits +"ジュース";
return outjuice;
}
//呼び出し
let orangeJuice =createJuice("みかん");
console.log(orangeJuice + "が届きました");