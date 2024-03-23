let adviceNumber = document.getElementById('advice-num');
let advice = document.getElementById('advice');
let diceButton = document.getElementById('dice');
let diceIcon = document.getElementById('dice-icon');

diceButton.addEventListener('click', async() => {
    try {
        adviceNumber.style.color = 'hsl(150, 100%, 66%)';
        adviceNumber.innerHTML = 'Fetching Quotes 🧐';
        advice.style.display = 'none';
        
        let fetchData = await fetch('https://api.adviceslip.com/advice');
        
        let data = await fetchData.json();
        advice.style.display = 'block';
        adviceNumber.innerHTML = `Advice #${data.slip.id}`;
        advice.innerHTML = `"${data.slip.advice}"`;
        console.log(data);
    } catch (error) {
        console.log(error.message);
        
        adviceNumber.innerHTML = 'Error'
        adviceNumber.style.color = 'red';
        advice.style.display = 'block';
        advice.innerHTML = 'Something went wrong, try again'
    }
})