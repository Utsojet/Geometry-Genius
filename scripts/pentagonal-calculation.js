function calculatePentagonArea(){
    const pentagonPInput = document.getElementById('pentagon-p')
    const pentagonPtext = pentagonPInput.value;
    const p = parseFloat(pentagonPtext)
    // console.log(pentagonPtext)

   
    const pentagonBInput = document.getElementById('pentagon-b');
    const pentagonBText = pentagonBInput.value;
    const b = parseFloat(pentagonBText)
   

    const area = 0.5*p*b;

    //display pentagon area
    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = "Area: "+area;
}