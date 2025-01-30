//browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
//    console.log("Received response: ", response);
//});
//
//browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//    console.log("Received request: ", request);
//});


// Get the innerHTML of the current page
//(function () {
//    let pageContent = document.documentElement.innerHTML; // Get the entire HTML content
//    document.body.style.backgroundColor = "#ffcc00"; 
//    console.log("Extracted Page Content:", pageContent); // Debugging log
//
//    // Send the data to the background script
//    browser.runtime.sendMessage({
//        type: "PAGE_CONTENT",
//        content: pageContent
//    }).then(() => {
//        console.log("Message sent successfully!");
//    }).catch(error => console.error("Error sending message:", error));
//})();
// chrome.runtime.onMessage.addListener((message) => {
//     if (message.action === "changeBg") {
//     //  document.body.style.backgroundColor = "#FFD700"; // Gold Color
//     }
//   });
  




