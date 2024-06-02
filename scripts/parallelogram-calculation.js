function calculateParallelogramArea(){
    const breathInput = document.getElementById('parallelogram-breath');
    const breathText =breathInput.value;
    const breath = parseFloat(breathText);
    
    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);

    const area = breath*height;
    //display parallelogram area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = "Area:"+area

}