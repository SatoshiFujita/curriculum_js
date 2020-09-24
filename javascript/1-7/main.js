//クラスとインスタンス
//問１
class Taiyaki {
    //コンストラクタ
 　 constructor(nakami){
      this.nakami = nakami;
    }
    //出力関数
 　 nakaOut () {
      console.log('中身は' + this.nakami + 'です');
    }
 }
 
 let anko = new Taiyaki('あんこ');
 anko.nakaOut();
 
 let cream = new Taiyaki('クリーム');
 cream.nakaOut();
 
 let chease = new Taiyaki('チーズ');
 chease.nakaOut();
 