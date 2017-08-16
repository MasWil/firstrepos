var favFoods = ["bacon", "lettuce", "Tomato"];
var newFood = prompt("What do you want to replace bacon with?");
//ask user for new food and replace with new food
favFoods[0] = newFood;
//replace index 0 with what user said
window.alert(favFoods[0] + " " + favFoods[1] + " " + favFoods[2])
//output all values of the array to the screen
