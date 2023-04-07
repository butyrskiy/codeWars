// Todo. To find the volume (centimeters cubed) of a cuboid you use the formula:

// ? volume = Length * Width * Height

// Todo. But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// ? It's up to you to find out whether the cuboid has equal sides (= is a cube).
// ? Return true if the cuboid could have equal sides, return false otherwise.
// ? Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// ? Note: side will be an integer


var cubeChecker = function(volume, side){
  if(volume <= 0 || side <= 0) {
    return false;
  } else if (volume === side ** 3) {
    return true;
  } else return false;
};

cubeChecker(56.3, 1); // false
cubeChecker(-1, 2); // false
cubeChecker(8, 3); // false
cubeChecker(8, 2); // true
cubeChecker(0, 0); // false
cubeChecker(-8,-2); // false
cubeChecker(125, 5); // true
cubeChecker(125,-5); // false