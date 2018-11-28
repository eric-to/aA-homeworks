console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
  type: 'GET',
  url: "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b",
  success(data) {
    console.log("Got your weather report:");
    console.log(data);
  },
  error() {
    console.error("Oh no. You dun goofed.");
  },
});

// Add another console log here, outside your AJAX request
console.log("Goodnight, it's time to sleep!");
