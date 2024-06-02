function calculateEllipseArea(){
 const ellipseWidthInput = document.getElementById('ellipse-width');
 const ellipseWidthText = ellipseWidthInput.value;
 const width = parseFloat(ellipseWidthText);

 const ellipseHeightInput = document.getElementById('ellipse-height');
 const ellipseHeightText = ellipseHeightInput.value
 const height = parseFloat(ellipseHeightText);

 const area = 3.1416* width*height;
 const ellipseAreaSpan = document.getElementById('ellipse-area');
 ellipseAreaSpan.innerText = "Area: " + area;
}