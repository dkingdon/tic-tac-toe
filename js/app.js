// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var testVar
  var test = 'O'
  $('.col-md-4').click(function() {
        /* Grabs unique square id and places it in the var testVar*/
        testVar = (this.id);
        /* Contitional statement that determines whos turn it is X or O*/
        if (test === 'O'){
            test = 'X';
        }
        else {
            test = 'O';
        }
        /* Change square text value*/
               if (testVar === 'topLeft') {
                 $('#topLeft').text(test);
               }
               else if (testVar === 'topMiddle') {
                 $('#topMiddle').text(test);
               }
               else if (testVar === 'topRight') {
                 $('#topRight').text(test);
               }
               else if (testVar === 'midLeft') {
                 $('#midLeft').text(test);
               }
               else if (testVar === 'midMiddle') {
                 $('#midMiddle').text(test);
               }
               else if (testVar === 'midRight') {
                 $('#midRight').text(test);
               }
               else if (testVar === 'botLeft') {
                 $('#botLeft').text(test);
               }
               else if (testVar === 'botMiddle') {
                 $('#botMiddle').text(test);
               }
               else if (testVar === 'botRight') {
                 $('#botRight').text(test);
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
