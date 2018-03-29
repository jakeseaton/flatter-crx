import actions from "./actions"
import axios from 'axios'
import $ from 'jquery'

import "../img/paul.blue.jpg"
import "../img/paul.green.png"
import "../img/paul.purple.png"
import "../img/paul.yellow.png"

console.log("this is the content script, herr asdfasdf o!")

// const profilePictureUrl = "https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/24059483_10212934947067195_686594785522664926_o.jpg?_nc_cat=0&oh=1f7e3e28cf4a4bf36946224311056a17&oe=5B3EB965"
// const profilePictureUrl = "https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/22713467_10212853769512353_443941326985392112_o.jpg?_nc_cat=0&oh=f41d18f0cd7837ca2f4fe6ca2896ea4a&oe=5B6E2CF0"
// const profilePictureUrl = "https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/11692607_1625821830997727_6154666202623863482_n.jpg?_nc_cat=0&oh=8a9a3b1d5178a295937616d715084f59&oe=5B334D54"

const images = [
    "paul.blue.jpg",
    "paul.green.png",
    "paul.purple.png",
    "paul.yellow.png"
]

images.map(img => console.log(chrome.extension.getURL(img)))

const profilePictureUrl = "https://www.seas.harvard.edu/sites/default/files/styles/directory_large/public/images/Directory/pbottino_200x300.jpg?itok=zoBzqpl3"
chrome.runtime.sendMessage({action: actions.QUERY_SHOULD_RUN}, ({ shouldRun }) => {
    if (shouldRun){
        const imageUrls = []
        // have to use the parameters because the fat arrow autobinds
        $("img.product-listing-image").map((idx, img) => {
            const src = $(img).attr("src")
            imageUrls.push(src)

            const nextImageUrl = chrome.extension.getURL(images[idx % images.length])

            console.log("Setting url to be", nextImageUrl)
            // $(img).attr("src", chrome.extension.getURL(images[idx % images.length]))
            $(img).attr("src", nextImageUrl)
        })
        }
});


// console.log("HELLO FROM CONTENT");
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({farewell: "goodbye"});
//   });
//
//   // chrome
    // .runtime
    // .onMessage
    // .addListener((request, sender, sendResponse) =>{
    //     // decodedUrl = decodeURIComponent(request.url);
    //     // p = {};
    //     // [base, params] = decodedUrl.split("?");
    //     // console.log(params);
    //     // params.split("&").map((param)=>{
    //     //     [key, value] = param.split("=");
    //     //     p[key] = JSON.parse(value);
    //     // })

    //     console.log("Message received on content!", request);
    //     // if (OPENED_FOLLOWERS && !REQUESTED_FOLLOWERS){
    //     //     console.log("Requesting all the rest of your followers");
    //     //     console.log(p);


    //     //     if(p.variables.first != 20){
    //     //         alert("whoops!");
    //     //     }
    //     //     p.variables.first = 1000;

    //     //     newUrl = base + "?" + Object.keys(p).map((key) => key + "=" + (key == "variables" ? JSON.stringify(value) : value)).join("&")
    //     //     console.log("NEW URL!", newUrl);
    //     //     REQUESTED_FOLLOWERS = true;

    //     // }
    //     // if (OPENED_FOLLOWING && !REQUESTED_FOLLOWING){
    //     //     console.log("Requesting all the rest of your following");
    //     //     console.log(p);
    //     //     if (p.variables.first != 20){
    //     //         alert("whoops!");
    //     //     }
    //     //     p.variables.first = 1000;
    //     //     REQUESTED_FOLLOWERS = true;
    //     // }
    //     // sendResponse("Message Received!")
    // })
// $(document).ready(() => {
//     chrome
//         .runtime
//         .sendMessage({
//             action: actions.QUERY_SHOULD_RUN,
//         }, (response) => {
//             console.log("Query response", response)

//         })
//     // chrome.tabs.query({
//     //     active: true,
//     //     lastFocusedWindow: true,

//     // }, (tabs) => {
//     //     console.log("Content tabs", tabs);
//     // })
//     // chromeq
//     //     .runtime
//     //     .sendMessage({ action: actions.INIT }, (response) => {
//     //         console.log("Received init response", response);
//     //         // bind a click handler to the followers link
//     //         // $("a[href='/jakeseaton0/followers/']").on("click", (e)=>{
//     //         //     OPENED_FOLLOWERS = true;
//     //         //     chrome.runtime.sendMessage({type: actions.FOLLOWERS_BUTTON_CLICKED})
//     //         // })
//     //         // bind a click handler to the following link
//     //         // $("a[href='/jakeseaton0/following/']").on("click", (e)=>{
//     //         //     OPENED_FOLLOWING = true;
//     //         //     chrome.runtime.sendMessage({type: actions.FOLLOWING_BUTTON_CLICKED})
//     //         // })
//     //     })


// })
