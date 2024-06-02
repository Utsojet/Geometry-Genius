function calculateRectangleArea(){
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText =lengthInput.value;
    const length = parseFloat(lengthText);
    
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);

    const area = length*width;
    //display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = "Area:"+area

}