// Selects canvas
const canvas = $("#pixel_canvas");

// Selects and sets color
const color = $("#colorPicker").attr("value", "#84B43D");

// Selects background color of the table
const prevColor = canvas.css("background-color");

// "Left-click to Apply" description color
let leftClickDescription = $("#leftClickDes").css("color", color.val());
color.change(function () {
    leftClickDescription.css("color", color.val());
});
// Set grid height
const gridHeight = $("#input_height").attr("value", "20");
gridHeight.attr("max", "60");

// Set grid width
const gridWidth = $("#input_width").attr("value", "20");
gridWidth.attr("max", "60");

// Selects colors, width, height, creates canvas
$("#sizePicker").on("submit", function (makeGrid) {
    // Adds color to the canvas
    canvas.css("background-color", color.val());

    // "Right-click to Undo" description color after submit click
    $("#rightClickDes").css("color", color.val());

    // Selects new color
    color.attr("value", "#ff0000");

    // "Left-click to Apply" description color after submit click
    leftClickDescription = $("#leftClickDes").css("color", color.val());

    // Resets canvas
    canvas.children().remove();

    // Selects grid height
    const height = $("#input_height").val();

    // Selects grid width
    const width = $("#input_width").val();

    // Creates canvas height
    for (let tr = 0; tr < height; tr++) {
        canvas.append("<tr></tr>");
    }

    // Creates canvas width
    for (let td = 0; td < width; td++) {
        $("#pixel_canvas tr").append("<td></td>");
    }

    // Cancels default actions
    makeGrid.preventDefault();
});

// Listens for the mouse left-clicks on canvas
canvas.on("click", "td", function () {
    // Sets color to the canvas cell
    $(this).css("background-color", color.val());
});

// Listens for the mouse right-clicks on canvas and disable context menu
canvas.on("contextmenu", "td", function () {
    // Sets color to the canvas cell
    $(this).css("background-color", prevColor);
    // Disable context menu
    return false;
});