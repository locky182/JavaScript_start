const warehous = {
   
   goods: [],
   findGoodsById: function(id){
      return this.goods
      .find(g => g.id == id);
      
     
   },
//Добавление товара
   addGoods: function(good){
      const existedGood = this.findGoodsById(good.id)
      if(existedGood){
         console.log(`Этот товар уже есть на складе`);
         return;
      
      }
         this.goods.push(good);
      

      
   },
   getWeightKg: function(){
      return this.goods.reduce((acc, el)=>{
         acc += el.weight?.kg ? el.weight.kg : 0;
         //если вес есть? то прибавляем вес если нет то прибавляем 0

      },0)
   }
};

/* goods */
const car = {
   id: 1,
   weight: {
      kg: 1000
   },
   brand: 'ford'

};

const chair = {
   id: 2,
   weight: {
      kg: 2
   }
};

const paper = {
   id: 3,
   color: 'red'
}; 

warehous.addGoods(car);
warehous.addGoods(car);
warehous.addGoods(chair);
let ourel = warehous.findGoodsById(1);
console.log(ourel);



console.log(warehous.goods);