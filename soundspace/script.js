function featureUnavailable() {
    alert("This feature is unavailable.");
}
function featureTempUnavailable() {
    alert("This feature is temporarily unavailable. Please try again later.");
}

function gameDownload() {
    alert("The game is currently in development and will be released soon!");
    // windows.location.href = "download/index.html";
}

function deviceComingSoon() {
    alert("Support for this device isn't here yet :(");
}

function goHome() {
    window.location.href = "https://keystone-games.github.io/SoundSpace/";
}

function downloadForDevice(os) {
    if (os == "Win64") {
        window.location.href = "win64";
    } else if (os == "Win32") {
        window.location.href = "win32";
    } else if (os == "MacOS") {
        window.location.href = "macos";
    } else if (os == "Linux") {
        window.location.href = "linux";
    } else if (os == "Android") {
        window.location.href = "android";
    } else if (os == "iOS") {
        window.location.href = "ios";
    }
}
