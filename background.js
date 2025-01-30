//browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//    console.log("Received request: ", request);
//
//    if (request.greeting === "hello")
//        return Promise.resolve({ farewell: "goodbye" });
//});
//browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
//    if (message.type === "PAGE_CONTENT") {
//        console.log("Received Page Content:", message.content); // Debugging log
//
//        // Store the page content so the popup can access it
//        browser.storage.local.set({ pageHTML: "message.content" }).then(() => {
//            console.log("Page content saved successfully!");
//        }).catch(error => console.error("Error storing page content:", error));
//    }
//});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getCookies") {
      chrome.cookies.getAll({ url: message.url }, (cookies) => {
        sendResponse({ cookies });
      });
      return true; // Keeps the response channel open
    }
  });
  
  



