export const US_Currency = (price: any) => {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return USDollar.format(price);
};

// format number to British pounds
// let pounds = Intl.NumberFormat('en-GB', {
//     style: 'currency',
//     currency: 'GBP',
// });

// format number to Indian rupee
// let rupee = new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     currency: 'INR',
// });

// format number to Euro
// let euro = Intl.NumberFormat('en-DE', {
//     style: 'currency',
//     currency: 'EUR',
// });
