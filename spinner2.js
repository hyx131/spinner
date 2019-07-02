const cursor = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

const animation = function(arr) {
  let i = 0; 

  setTimeout(function spin() {
    process.stdout.write("\r" + arr[i] + "  ");
    if (i < (arr.length - 1)) {
      setTimeout(spin, 200);
    } else {
      process.stdout.write("\r" + arr[0] + "\n  ");
    }
    i++;
  }, 200);
};

animation(cursor);

// setTimeout(() => {
//   process.stdout.write("\r|  ");
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/  ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-  ");
// }, 500);

// setTimeout(() => {
//   process.stdout.write("\r\\  ");
// }, 700);

// setTimeout(() => {
//   process.stdout.write("\r|  ");
// }, 900);

// setTimeout(() => {
//   process.stdout.write("\r/  ");
// }, 1100);

// setTimeout(() => {
//   process.stdout.write("\r-  ");
// }, 1300);

// setTimeout(() => {
//   process.stdout.write("\r\\  ");
// }, 1500);

// setTimeout(() => {
//   process.stdout.write("\r|  ");
// }, 1700);

// setTimeout(() => {
//   process.stdout.write("\n  ");
// }, 1900);

