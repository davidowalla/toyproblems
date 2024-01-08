
function formatInput(input) {
  // Assume text input is number input
  let value = input.value.replace(/[^\d]/g, '').replace(/^0+/, '');

  // Format with thousand separators
  input.value = Number(value).toLocaleString();
}

function calculateNetPay() {
  
 // The raw numeric value without separators for calculations
 let rawValue = document.getElementById('grossPay').value.replace(/[^\d]/g, '');
    
 // Converting the raw value to a number to perform calculations
 let grossPay = Number(rawValue);


  // Calculate NSSF deductions
  let nssfDeduction;
  if (grossPay <= 18000) {
    nssfDeduction = grossPay * 0.06;
  } else {
    nssfDeduction = 1080;
  }

  // Calculate Taxable Pay
  const taxablePay = grossPay - nssfDeduction;

   // NHIF Deductions based on gross pay bands
   let nhif;
  if (grossPay <= 5999) {
    nhif = 150;
  } else if (grossPay <= 7999) {
    nhif = 300;
  } else if (grossPay <= 11999) {
    nhif = 400;
  } else if (grossPay <= 14999) {
    nhif = 500;
  } else if (grossPay <= 19999) {
    nhif = 600;
  } else if (grossPay <= 24999) {
    nhif = 750;
  } else if (grossPay <= 29999) {
    nhif = 850;
  } else if (grossPay <= 34999) {
    nhif = 900;
  } else if (grossPay <= 39999) {
    nhif = 950;
  } else if (grossPay <= 44999) {
    nhif = 1000;
  } else if (grossPay <= 49999) {
    nhif = 1100;
  } else if (grossPay <= 59999) {
    nhif = 1200;
  } else if (grossPay <= 69999) {
    nhif = 1300;
  } else if (grossPay <= 79999) {
    nhif = 1400;
  } else if (grossPay <= 89999) {
    nhif = 1500;
  } else if (grossPay <= 99999) {
    nhif = 1600;
  } else if (grossPay >= 100000) {
    nhif = 1700;
  }

  // Calculate NHIF Relief
  const nhifRelief = nhif * 0.15;

  // Calculate Personal Relief 
  const personalRelief = 2400;


  // Calculate Taxable Pay
  let tax;
  if (taxablePay <= 24000) {
    tax = taxablePay * 0;
  } else if (taxablePay <= 24001) {
    tax = taxablePay * 0.1;
  } else if (taxablePay <= 32333) {
    tax = 24001 * 0.1 + ((taxablePay - 24001) * 0.25);
  } else if (taxablePay <= 500000) {
    tax = 24001 * 0.1 + 8333 * 0.25 + ((taxablePay - 32334) * 0.3);
  } else if (taxablePay <= 800000) {
    tax = 24001 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + ((taxablePay - 500000) * 0.325);
  } else if (taxablePay >= 800001) {
    tax = (24001 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + 300000 * 0.325 + ((taxablePay - 800000) * 0.35)); 
  } else {
    tax = (24001 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + 300000 * 0.325 + 800000 * 0.35 + ((taxablePay - 800001) * 0.35)) - nhifRelief - personalRelief;
  }

  // Calculate PAYE
  if (taxablePay <= 24000) {
    paye = 0;
  } else {
  paye = tax - nhifRelief - personalRelief;
  }

  // Calculate Pay After Tax 
  const payeAfterTax = taxablePay - paye;

  // Calculate Housing Levy
  const housingLevy = grossPay * 0.015;

  // Calculate Net Pay
  const netPay = payeAfterTax - nhif - housingLevy;

  // Display the results
  document.getElementById('grossPayResult').innerHTML = ` <strong> ${grossPay.toLocaleString(undefined, { maximumFractionDigits: 2})}</strong>`;
  document.getElementById('nssfDeductionResult').textContent = `- ${nssfDeduction.toLocaleString(undefined, { maximumFractionDigits: 2})}`;
  document.getElementById('taxablePayResult').innerHTML = `<strong> ${taxablePay.toLocaleString(undefined, { maximumFractionDigits: 2})}</strong>`;
  document.getElementById('InsuranceRelief').textContent = `- ${nhifRelief.toLocaleString(undefined, { maximumFractionDigits: 2})}`;
  document.getElementById('personalRelief').textContent = `- ${personalRelief.toLocaleString(undefined, { maximumFractionDigits: 2})}`;
  document.getElementById('paye').textContent = ` ${paye.toLocaleString(undefined, { maximumFractionDigits: 2})}`;
  document.getElementById('payeResult').textContent = ` ${tax.toLocaleString(undefined, { maximumFractionDigits: 2})}`;
  document.getElementById('payeAfterTax').innerHTML = ` <strong> ${payeAfterTax.toLocaleString(undefined, { maximumFractionDigits: 2})}</strong>`;
  document.getElementById('nhifResult').textContent = ` - ${nhif.toLocaleString(undefined, { maximumFractionDigits: 2})}`;
  document.getElementById('housingLevyResult').textContent = `- ${housingLevy.toLocaleString(undefined, { maximumFractionDigits: 2})}`;
  document.getElementById('netPayResult') .innerHTML = `<strong>KES ${netPay.toLocaleString(undefined, { maximumFractionDigits: 2})}</strong>`;

  }
