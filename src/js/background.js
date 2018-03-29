import '../img/icon-128.png'
import '../img/icon-34.png'
import axios from 'axios'
import urls from './urls'
import actions from "./actions"

import "../img/flatter.icon128.png"
import "../img/flatter.icon48.png"
import "../img/flatter.icon16.png"

console.log("This is the background script! Waddup!")

chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
    console.log("Message received!", request);

    switch (request.action){
        case actions.QUERY_SHOULD_RUN:
            chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
                console.log("Queried tabs", tabs);
                sendResponse({ shouldRun: tabs[0].url.includes(urls.hanes) });
            })
            return true;
            break;

        // case actions.QUERY_ACTIVE_TAB:
        //     chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
        //         console.log("Queried tabs", tabs)
        //         sendResponse(tabs[0].url);

        //     });
        //     break;
        default:
            sendResponse(request);
    }

})


// chrome.pageAction.onClicked.addListener((tab) => {
//     console.log("Page action was clicked!", tab);
// })
// chrome.runtime.onInstalled.addListener(function() {
//     // chrome.storage.sync.set({color: '#3aa757'}, function() {
//     //   console.log("The color is green.");
//     // });

//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//         chrome.declarativeContent.onPageChanged.addRules([{
//             conditions: [
//                 new chrome.declarativeContent.PageStateMatcher({
//                         pageUrl: {hostEquals: 'hanes.com'},
//                     })
//             ],
//             actions: [new chrome.declarativeContent.ShowPageAction()]
//       }]);
//     });
// });
