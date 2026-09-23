function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isVip) {
  let total = quantity * basePrice;

  if (quantity >= 5) {
    total = total * 0.90;
  }

  if (isVip) {
    total = total * 1.50;
  }

  total = total - 10;

  return Math.round(total);
}

module.exports = { isValidQuantity, calculateTicketPrice }; 