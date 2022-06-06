// Fire Event after any tab's loading finish and that tab matches that uelMAtches.
chrome.webNavigation.onCompleted.addListener(function (tab) {
    try {
        sendMessage(tab.tabId, { action: 'remove' }, (response) => {
            console.log("response");
        });
    } catch (error) {
        console.log("error", error);
    }
}, { url: [{ urlMatches: 'https://app.asana.com/*' }] })

function sendMessage(tabId, message, callback) {
    chrome.tabs.sendMessage(tabId, message, callback)
}