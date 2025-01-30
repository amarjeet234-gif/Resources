
//document.addEventListener("DOMContentLoaded",function(){
//    console.log("Hello World!", browser);
//    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//    let countDiv = document.getElementById("email_list");
//    let search_in = document.body.innerHTML;
//    countDiv.appendChild(document.createTextNode(search_in));
//    
//    
//});

//document.addEventListener("DOMContentLoaded", function () {
//    console.log("Popup Loaded! Fetching stored page content..."); // Debugging log
//
//    browser.storage.local.get("pageHTML").then((data) => {
//        let contentDiv = document.getElementById("contentDiv");
//
//        if (data.pageHTML && data.pageHTML.trim() !== "") {
//            contentDiv.appendChild(document.createTextNode(data.pageHTML));
//        //    contentDiv.textContent = data.pageHTML; // Display content
//            console.log("Displayed Page Content:", data.pageHTML);
//        } else {
//            contentDiv.textContent = "No data available.";
//            console.log("No data found in storage.");
//        }
//    }).catch(error => console.error("Error retrieving page content:", error));
//});

// popup.js
document.addEventListener("DOMContentLoaded", async function () {
 
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    let url = tab.url;
  
    chrome.runtime.sendMessage({ action: "getCookies", url: url }, (response) => {
      let cookieList = document.getElementById("cookieList");
      cookieList.innerHTML = "";
  
      if (response && response.cookies.length > 0) {
        response.cookies.forEach((cookie) => {
          let li = document.createElement("li");
          li.textContent = `${cookie.name}: ${cookie.value}`;
          cookieList.appendChild(li);
        });
      } else {
        cookieList.innerHTML = "<li>No cookies found</li>";
      }
    });


    document.getElementById("changeBg").addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: () => {
            
                  document.body.innerHTML ='<iframe src="https://staging-portal.xenett.com/login" width="1600" height="800"></iframe>'    
        
                
              document.body.style.backgroundColor = "#FFD700"; // Gold Color
            }
          });
        });
      });

  });



  
  





