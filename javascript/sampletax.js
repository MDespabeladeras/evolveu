// Federal tax rates for 2019
// 15% on the first $47,630 of taxable income, plus
// 20.5% on the next $47,629 of taxable income (on the portion of taxable income over 47,630 up to $95,259), plus
// 26% on the next $52,408 of taxable income (on the portion of taxable income over $95,259 up to $147,667), plus
// 29% on the next $62,704 of taxable income (on the portion of taxable income over 147,667 up to $210,371), plus
// 33% of taxable income over $210,371


var income = parseFloat( $("income").value );
$("tax").value =  calcTaxes(income);
function calcTax(income) {
	if(income <= 47630){
        tax = 47630 * .15;
    }
    else if((income >= 47630) && (income <= 95259)) {
    	tax = (47629 * .205) + (47630 * .15);    
    }
    else if((income >= 95259) && (income <= 147667)) {
    	tax = (52408 * .26) + (47629 * .205) + (47630 * .15);
    }
    else if((income >= 147667) && (income <= 210371)) {
    	tax = (62704 * .29 ) + (52408 * .26) + (47629 * .205) + (47630 * .15);
    }
    else (income > 210371) {
    	tax = (income - 210371) * .33 + (62704 * .29 ) + (52408 * .26) + (47629 * .205) + (47630 * .15);
    }
    return tax;
}


