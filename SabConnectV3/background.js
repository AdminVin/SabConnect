chrome.runtime.onInstalled.addListener(() => {
    console.log("SABconnect++ Updated: Ready for use!");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getBackgroundData") {
        console.log("Received request for background data");
        // Simulated data - replace with actual logic if needed
        const data = {
            message: "Background data loaded!"
        };
        sendResponse(data);
    }
});
