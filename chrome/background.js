browser.webRequest.onBeforeRequest.addListener(
  redirectToYewTube,
  { urls: ["*://*.youtube.com/*"] },
  ["blocking"]
);

function redirectToYewTube(requestDetails) {
    console.log("Request intercepted:", requestDetails.url);
    // Modify the URL to redirect to https://yewtu.be/
    const redirectUrl = requestDetails.url.replace(/^(https?:\/\/)www\.youtube\.com/, "$1yewtu.be");
    console.log("Redirecting to:", redirectUrl);
    return { redirectUrl };
  }
