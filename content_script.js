chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "remove") removeTrial(sendResponse);
});

function removeTrial(sendResponse) {

    setTimeout(() => {
        const arr = document.getElementsByClassName("DecorativeModalLayer");
        for(var i =0 ; i< arr.length; i++) {
            arr[i].remove();
        }
    }, 3000);
    sendResponse({
        code: 200,
        action: 'removed'
    })
}