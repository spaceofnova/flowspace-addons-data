(function() {
  console.log("example addon loaded!");
  // Toast example: 

  // Create the event
  const event = new CustomEvent("toast", { detail: { message: "Example Add-on Loaded!", options: { duration: 1500 } } });

  // Send the event
  window.dispatchEvent(event);
})();
