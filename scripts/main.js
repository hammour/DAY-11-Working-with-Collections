


// 1. Show me how to calculate the average price of all items. Please console.log the average.

function  averageCalc(array) {

    var averagePrice = 0; var totalPrice = 0;
     for(var i=0; i<Object.keys(array).length; i++) {
      var totalPrice = totalPrice+items[i].price; 

     }
    averagePrice = totalPrice/Object.keys(array).length;
     return averagePrice;
 }

 console.log (averageCalc(items));



// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
//   "Items that cost between $14.00 USD and $18.00 USD:"
//   [
//    {
//       title: "1970s Coors Banquet Glass Beer Pitcher",
//       ...
//    },
//    {
//       title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
//       ...
//    },
//    {
//       title: "Hand Painted Colorful Feather Glass",
//       ...
//    }
//   ]
function getItemsCostBetween(array, highPrice, lowPrice){
  var list = [];
  for (var i=0; i<Object.keys(array).length; i++){
    if ((array[i].price < highPrice) && (array[i].price > lowPrice)) {
      list.push(items[i].title);
    }
  }
  return list;
}

console.log(getItemsCostBetween(items, 18, 14));

// 3. Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
//   1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18
function findByCurrency(array, currency){
  var nameTitle = [];
  var cost_currency = [];
  for (var i=0; i<Object.keys(array).length; i++){
    if (array[i].currency_code === currency) {
      nameTitle.push(items[i].title);
      cost_currency.push(items[i].price);
    }
  }
  return nameTitle +" That costs "+ cost_currency + "  "+currency ;
}


console.log(findByCurrency(items, 'GBP'));





// 4. Show me how to find which items are made of wood. Please console.log the ones you find.

//   SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
//   Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
//   Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
//   Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
//   Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.





function findByDescription(array, type){
  var nameTitle = [];
  
  for (var i=0; i<Object.keys(array).length; i++){
    if (array[i].description.search(type) != -1) {
      nameTitle.push(array[i].title);
      
    }
  }
  return nameTitle;
}


console.log(findByDescription(items, 'wood'));






// 5. Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
//   Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
//   wall mount bottle opener
//   wedding
//   man cave
//   christmas gift
//   guy gift
//   fathers day
//   home bar
//   beer
//   bar

//   The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:

//   glass
//   sandblast cabinet
//   vinyl
//   beer glass
//   pint glass
//   etched pint glass
//   etched glass
//   etched beer glass
//   16 oz pint
//   beer gift
//   etched harry potter glass
//   the three broomsticks glass
//   personalized harry potter glass

function numberOfMaterialCheck(array, nMaterial){
  var nameTitle = [];
  var indexFound = [];
  
  for (var i=0; i<Object.keys(array).length; i++){
    if (array[i].materials.length >= nMaterial) {
      indexFound.push(array[i].title);
      indexFound.push(array[i].materials);
      }
  }  
  return indexFound;

}
console.log(numberOfMaterialCheck(items, 8))






// Show me how to calculate how many items were made by their sellers 18 were made by their sellers



function sellerCheck(array){
  var indexFound = 0;
  
  for (var i=0; i<Object.keys(array).length; i++){
    if (array[i].who_made === 'i_did') {
        indexFound++;
      }
  }  
  return indexFound;

}
console.log(sellerCheck(items));

