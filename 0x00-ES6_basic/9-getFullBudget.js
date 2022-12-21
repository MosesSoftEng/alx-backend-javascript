import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    // eslint-disable-next-line no-shadow
    getIncomeInDollars: (income) => `$${income}`,
    // eslint-disable-next-line no-shadow
    getIncomeInEuros: (income) => `${income} euros`,
  };

  return fullBudget;
}
