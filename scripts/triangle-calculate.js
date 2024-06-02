/**
 * Objective: get base, height of a triangle. calculate the area by using the provied formula and then display the area.
 * step 1: get base value
 * step 2: added an id in the base input field
 * step 3: use get elementbyId to access the input field
 */
function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base')
    const triangleBasetext = triangleBaseInput.value;
    const base = parseFloat(triangleBasetext)
    // console.log(triangleBasetext)

    // get triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    // console.log(triangleHeightText)

    const area = 0.5*base * height;
    console.log("area of the triangle is " + area)

    //display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = "Area: "+area;
}