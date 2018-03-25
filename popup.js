document.addEventListener('DOMContentLoaded', function() {
    let validateButton = document.getElementById('validatePage');
    validateButton.addEventListener('click', function() {
      //use the chrome tabs API
      chrome.tabs.getSelected(null, function(tab) {
          //get the current tab's URL
          let encodedUrl = encodeURIComponent(tab.url)
          //create a call to w3 validator with current url
          let validateUrl = `https://validator.w3.org/nu/?showsource=yes&doc=${encodedUrl}`;
          //create a new tab with this URL
          chrome.tabs.create({ url: validateUrl });
      });
    });
   });
   