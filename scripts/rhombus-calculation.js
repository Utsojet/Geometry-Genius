function calculateRhombosArea(){
    const d1Input = document.getElementById('rhombus-d1');
    const d1Text =d1Input.value;
    const d1 = parseFloat(d1Text);
    
    const d2Input = document.getElementById('rhombus-d2');
    const d2Text = d2Input.value;
    const d2 = parseFloat(d2Text);

    const area = 0.5*d1*d2;
    //display rhombos area
    const parallelogramAreaSpan = document.getElementById('rhombus-area');
    parallelogramAreaSpan.innerText = "Area:"+area
}