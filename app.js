const pinkButton= document.getElementById('pink-button');
    pinkButton.addEventListener('click', () => {
        const header=document.getElementById('top');
        header.style.background= 'pink';
        const footer=document.getElementById('bottom');
        footer.style.background= 'pink';
    });
const greenButton= document.getElementById('light-green-button');
    greenButton.addEventListener('click', () => {
        const header=document.getElementById('top');
        header.style.background= 'lightgreen';
        const footer=document.getElementById('bottom');
        footer.style.background= 'lightgreen';
    });
const blueButton= document.getElementById('light-blue-button');
    blueButton.addEventListener('click', () => {
        const header=document.getElementById('top');
        header.style.background= 'lightblue';
        const footer=document.getElementById('bottom');
        footer.style.background= 'lightblue';
    })
const yourNameHere= document.getElementById('your-name-here');
    yourNameHere.addEventListener('click', () => {
        //get the input --document.getElemen
        const input=document.getElementById('your-name-here');
        //get input value --.value
        const value= yourNameHere.value;
        //get div
        const div=document.getElementById('display-name');
        //change the div --div.textContent=value
        div.textContent=value;

    })
