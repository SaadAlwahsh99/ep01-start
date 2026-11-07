const config = require('../config');
const { daysBetween } = require('../utils/dates');

// Late fee in cents for a loan returned (or about to be returned) on `returnedOn`.
// Uses the due date stored on the loan, so fees follow the period it was lent for.
function calculateLateFee(loan, returnedOn) {
  const daysLate = Math.max(0, daysBetween(loan.dueOn, returnedOn));
  return Math.min(daysLate * config.lateFeePerDay, config.maxLateFee);
}

module.exports = { calculateLateFee };
