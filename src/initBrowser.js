if (!window.browser) {
    window.browser = {};
}
if (!browser.alarms) {
    browser.alarms = {
        "create": () => {},
        "onAlarm": {
            "addListener": () => {}
        },
        "onClicked": {
            "addListener": () => {}
        },
        "onDeleted": {
            "addListener": () => {}
        }
    };
}
if (!browser.browserAction) {
    browser.browserAction = {
        "setBadgeText": () => {},
        "setBadgeBackgroundColor": () => {}
    };
}
if (!browser.notifications) {
    browser.notifications = {
        "onClicked": {
            "addListener": () => {}
        },
        "onClosed": {
            "addListener": () => {}
        }
    }
}