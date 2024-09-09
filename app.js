// dropDownMenu
const bar = document.querySelector("#bar")
const close = document.querySelector("#close")
const dropdown = document.querySelector("#dropdown");


function dropDownMenu(){
    if( dropdown.style.display === "block" ){
        dropdown.style.display = 'none'
        bar.style.display = 'block';
    }else{
         dropdown.style.display = 'block'
         bar.style.display = 'none';
    }
 }

 bar.addEventListener('click', dropDownMenu);
 close.addEventListener('click', () => {
    dropdown.style.display = 'none';
    bar.style.display = 'block';
});





// Statik sehifeler
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const deyisenNtc = document.getElementById('deyisenNtc');

function updateNtc() {
    const pageValue = input1.value;
    const designValue = input2.value;
    let totalCost = 0;

    if (designValue == 50) {
        totalCost = pageValue * 50;
    } else if (designValue == 100) {
        totalCost = pageValue * 100;
    } else if (designValue == 150) {
        totalCost = pageValue * 150;
    }

    deyisenNtc.textContent = `Sehife: ${pageValue} / ₼${totalCost}`;
}

updateNtc();

input1.addEventListener('input', updateNtc);
input2.addEventListener('input', updateNtc);




// Veb sayt əlavələri
const checkboxes = document.querySelectorAll('#vebSayt input[type="checkbox"]');
    const deyisenNtc2 = document.getElementById('deyisenNtc2');
    const cost = 100; 
    let totalCost = 0;

    function calculateCost() {
        totalCost = 0; 

        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                totalCost += cost; 
            }
        });

        deyisenNtc2.textContent = `₼${totalCost}`;
    }

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', calculateCost);
    });

    calculateCost();




    // Axtarış motorunun 
    const seoCheckBoxes = document.querySelectorAll('#axtarisMotoDiv3 input[type="checkbox"]');
    const totalCostElement = document.getElementById('deyisenNtc3');
    const ccostSeo = 50; 

    function calculateTotalCost() {
        let totalCost = 0;

        seoCheckBoxes.forEach(checkBox => {
            if (checkBox.checked) {
                totalCost += ccostSeo; 
            }
        });

        totalCostElement.textContent = `₼ ${totalCost}`;
    }

    seoCheckBoxes.forEach(checkBox => {
        checkBox.addEventListener('change', calculateTotalCost);
    });

    calculateTotalCost();



 // Elektron ticarət əlavələri
 const electronCheckBoxes = document.querySelectorAll('#elektronTicaret input[type="checkbox"]');
const totalCostElement4 = document.getElementById('deyisenNtc4');
const costPerFeature = 75; 

function calculateElectronValue() {
    let totalCost = 0;

    electronCheckBoxes.forEach(checkBox => {
        if (checkBox.checked) {
            totalCost += costPerFeature; 
        }
    });

    totalCostElement4.textContent = `₼ ${totalCost}`;
}

electronCheckBoxes.forEach(checkBox => {
    checkBox.addEventListener('change', calculateElectronValue);
});

calculateElectronValue();





// Logo dizayni
const rangeInput = document.querySelector('#logoDizayn input[type="range"]');
const totalCostElement5 = document.getElementById('deyisenNtc5');

function calculateLogoCost() {
    const rangeValue = rangeInput.value;
    totalCostElement5.textContent = `₼ ${rangeValue}`; 
}

rangeInput.addEventListener('input', calculateLogoCost);

calculateLogoCost();










