const ratingCard = document.getElementById('ratingCard');
const thanksCard = document.getElementById('thanksCard');
const submitBtn = document.querySelector("#submit");
const buttons = document.querySelectorAll('.btn');
const ratedDiv = document.getElementById('rating');

let rating = 0;

buttons.forEach((btn) => 
    btn.addEventListener('click', () => {
        rating = btn.id;        
    })
);

submitBtn.onclick = (evt) => {
    evt.preventDefault();
    ratingCard.classList.add('hidden');
    thanksCard.classList.remove('hidden');
    console.log(rating);
    ratedDiv.innerText=`You selected ${rating} out of 5`;
}