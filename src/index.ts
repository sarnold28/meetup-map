/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />


console.log('Script started successfully');
// WA.openCoWebSite('https://workadventu.re');
let currentPopup: any = undefined
const firstPopupText = 'Congratulations, you found a hidden item in them map. Welcome to AIR:Leben'
const secondPopupText = 'Congratulations, you found a hidden item in them map.'

WA.onEnterZone('firstPopup', () => {
    currentPopup = WA.openPopup("firstPopup", firstPopupText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            popup.close();
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('firstPopup', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('secondPopup', () => {
    currentPopup = WA.openPopup("secondPopup", secondPopupText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('secondPopup', () => {
    // currentPopup.close();
    closePopUp()
});



function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
