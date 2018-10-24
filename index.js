module.exports.cardValidator = function cardValidator(card) {
  if (typeof card === 'undefined') {
    throw new RangeError('O argumento está vazio')
  }
  if (typeof card !== 'number'){
    throw new TypeError('O argumento deve ser um número')
  }
  
  card = (card).toString(10).split("").map(Number)

  if (card.length <14){
    throw new Error('não há números suficiente')
  }

  let digits = card.reverse();
  for (let i = 1; i < digits.length; i +=2){
    digits[i] *= 2;
    if (digits[i] >9){
      digits[i] -=9 ;
    }
  }
  let add = 0
  for (let i in digits){
    add += digits[i];
  }
  if (add % 10 === 0) {
    return true
  } else if (add % 10 !== 0){
    return false
  }
  }
  // valor true - 36490102462661
  //valor false - 36490106666666
