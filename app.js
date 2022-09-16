const ratingDots = document.querySelectorAll('.rating-dot');
const submitBtn = document.getElementById('submit-btn');

let userSelectedValue;

ratingDots.forEach((dot) => {
    if (!dot.previousElementSibling)
        return;
    dot.addEventListener('mouseenter', () => {
        dot.previousElementSibling.classList.add('hover-previous');
    })
    dot.addEventListener('mouseleave', () => {
        dot.previousElementSibling.classList.remove('hover-previous');
    })
})

ratingDots.forEach(dot => {
    dot.addEventListener('click', event => {
        for (const ratingDot of ratingDots) {
            if (ratingDot.classList.contains('btn-click'))
                ratingDot.classList.remove('btn-click');
        }
        dot.classList.toggle('btn-click');
        userSelectedValue = dot.dataset.value;
        console.log(userSelectedValue);
    })
})

function submitBtnHandler(event) {
    if (userSelectedValue === undefined)
        return;
    event.preventDefault();
    const ratingText = document.querySelector('.feedback');
    ratingText.textContent = `You selected ${userSelectedValue} out of 5 Thank you!`;
    document.querySelector('.component1').classList.add('invisible');
    document.querySelector('.component2').classList.add('visible');
}

submitBtn.addEventListener('click', submitBtnHandler);