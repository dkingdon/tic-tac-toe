// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var testVar
  var test = 'O'


  $('.col-md-4').click(function() {
        /* Grabs unique square id and places it in the var testVar */
    testVar = (this.id);
    /* Decideds if the square is clickable via an id check */
    if (testVar !== 'notAvail') {
        /* Contitional statement that determines whos turn it is X or O */
        if (test === 'O'){
            test = 'X';
        }
        else {
            test = 'O';
        }
        /* Change square text value */
        switch (testVar) {
            case 'topLeft':
                $('#topLeft').text(test);
                $('#topLeft').prop('id', 'notAvail')
                break;
            case 'topMiddle':
                $('#topMiddle').text(test);
                $('#topMiddle').prop('id', 'notAvail');
                break;
            case 'topRight':
                $('#topRight').text(test);
                $('#topRight').prop('id', 'notAvail');
                break;
            case 'midLeft':
                $('#midLeft').text(test);
                $('#midLeft').prop('id', 'notAvail');
                break;
            case 'midMiddle':
                $('#midMiddle').text(test);
                $('#midMiddle').prop('id', 'notAvail');
                break;
            case 'midRight':
                $('#midRight').text(test);
                $('#midRight').prop('id', 'notAvail');
                break;
            case 'botLeft':
                $('#botLeft').text(test);
                $('#botLeft').prop('id', 'notAvail');
                break;
            case 'botMiddle':
                $('#botMiddle').text(test);
                $('#botMiddle').prop('id', 'notAvail');
                break;
            case 'botRight':
                $('#botRight').text(test);
                $('#botRight').prop('id', 'notAvail');
                break;
            default:
                break;
            }
    }
 });
});


// alert('linked!');




// TEST CODE save for later
// var squares = $('.box');
//
// // this code listens for a click and logs response
// $('.col-md-4').on('click', handleClick);
//
// function handleClick(event){
//     if (event) {
//     console.log('you just clicked a box');
//     }
// }
//
// // successfully changes text in box to X, PROBLEM: changes ALL of the boxes, not just the one clicked on.
// $('.col-md-4').on('click', function handleClick() {
//     $(".col-md-4").text("X")
// } );
//
// // Kinda works
// $('.col-md-4').on('click', function handleClick() {
//     if ($("#topRight")){
//         $("#topRight").text("p");
//     }
