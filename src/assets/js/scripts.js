function cardClick(event, action){ alert('in');return;
    const card_1 = document.getElementById('login-card');
    const card_2 = document.getElementById('forget-card');
    event.preventDefault();

    if(action == 'forget'){
        card_1.style.display = "none";
        card_2.style.display = "block";
    }
    else{
        card_1.style.display = "block";
        card_2.style.display = "none";
    }
}

function faqClick(event, index){
    console.log(event.target);

    event.preventDefault();
    const faq = document.getElementsByClassName('faq');
    const faq_icon = document.getElementsByClassName('faq-icon');


    if(faq[index-1].style.display == "none"){
        faq[index-1].style.display = "block";
        faq_icon[index-1].innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>`;
    }
    else{
        faq[index-1].style.display = "none";
        faq_icon[index-1].innerHTML= ` <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
    </svg>`;
    }
}

function buttonHandler() {
    const surveyForm = document.getElementById('survey-form');
    surveyForm.style.display = "block";
}   


function checkBoxChangeEvent(event) {
    const oneTimeSection = document.getElementById('one-time-section');
    const subscriptionSection = document.getElementById('subscription-section');

    if(event.target.checked){
        oneTimeSection.style.display = 'none';
        subscriptionSection.style.display = 'block';
    }
    else{
        oneTimeSection.style.display = 'block';
        subscriptionSection.style.display = 'none';
    }
}

function priceJumpHandeler(event){
    const button = event.target.innerHTML.trim();
    
    const quarterly = document.getElementById('quarterly-price');
    const yearly = document.getElementById('yearly-price');

    if (button == 'Quarterly'){
        quarterly.style.display = 'block';
        yearly.style.display = 'none';
    }
    else{
        quarterly.style.display = 'none';
        yearly.style.display = 'block';
    }

}