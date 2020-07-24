const enableBtn = document.getElementById('enable');
const createSimpleNotifBtn = document.getElementById('create');

function setEnableButtonState() {
    // set the button to disabled or enabled, depending on what the user answers
    if (Notification.permission === 'denied' || Notification.permission === 'default') {
        enableBtn.disabled = false;
    } else {
        enableBtn.disabled = true;
    }
}

function askNotificationPermission() {
    // function to actually ask the permissions
    function handlePermission(permission) {
        // Whatever the user answers, we make sure Chrome stores the information
        if (!('permission' in Notification)) {
            Notification.permission = permission;
        }
        setEnableButtonState();
    }

    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
        const message = "This browser does not support notifications.";
        alert(message);
        console.error(message);
    } else {
        if (checkNotificationPromise()) {
            Notification.requestPermission()
                .then((permission) => {
                    handlePermission(permission);
                })
        } else {
            Notification.requestPermission(function (permission) {
                handlePermission(permission);
            });
        }
    }
}

// check whether the browser supports the promise version of notifs
function checkNotificationPromise() {
    try {
        Notification.requestPermission().then();
    } catch (e) {
        return false;
    }

    return true;
}

function createSimpleNotification() {
    var img = '/images/fit.png';
    var text = 'HEY! text';
    var title = 'HEY! title';
    const options = {
        body: text,
        icon: img,
        vibrate: [200, 100, 200], // A vibration pattern to run with the display of the notification.
        tag: "new-product", // An ID for a given notification that allows you to find, replace, or remove the notification using a script if necessary.
        image: img,
        badge: "https://spyna.it/icons/android-icon-192x192.png" // URL of an image to represent the notification when there is not enough space to display the notification itself
    };
    let notification = new Notification(title, options);

    // Notification api supports events. It is not very reliable - various results in various browsers.
    // Uncomment the code below to test it.
    // notification.addEventListener('click', function () {
    //     clicked('click');
    // });
    //
    // notification.addEventListener('close', function () {
    //     clicked('close');
    // });
    //
    // notification.addEventListener('error', function () {
    //     clicked('error');
    // });
    //
    // notification.addEventListener('show', function () {
    //     clicked('show');
    // })
}

function clicked(text) {
    alert(text);
}

enableBtn.addEventListener('click', askNotificationPermission);
setEnableButtonState();

createSimpleNotifBtn.addEventListener('click', createSimpleNotification);
