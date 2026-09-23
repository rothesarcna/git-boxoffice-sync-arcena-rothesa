function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isVip) {
  let total = quantity * basePrice;

  if (isVip) {
    total = total * 1.50;
  }

  return Math.floor(total);
}
module.exports = { isValidQuantity, calculateTicketPrice };
