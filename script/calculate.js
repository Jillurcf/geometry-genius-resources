function calculateTriangleArea() {
    //  get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);


    // get area
    const area = 0.5 * base * height;
    //    show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea() {
    // get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    //    get rectangle area
    const rectangleArea = width * length;

    // show rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}


// reuseable function --reduce duplicate
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const parallelogramArea = base * height;
    setElementInnerText('parallelogram-area', parallelogramArea);
}

function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');

    const minorRadius = getInputValue('ellipse-minor-radius');

    const ellipseArea = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', ellipseArea);

}

// reusable get input value field in number
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable set span or p or dive text
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}