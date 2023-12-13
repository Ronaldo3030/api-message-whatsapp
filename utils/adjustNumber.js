module.exports = adjustNumber = (number) => {
  let newNumber = number.replace(/[()\/\-a-zA-Z ]/g, '');
  if(newNumber.length === 11){
    newNumber = newNumber.slice(0, 2) + newNumber.slice(3);
  }else if(newNumber.length >= 12 || newNumber.length <= 9){
    throw new Error("Invalid number. Exemple number: XX XXXX XXXX");
  }
  return `55${newNumber}@c.us`
}