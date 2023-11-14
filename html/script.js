const createNotification = (notificationType, time, message, sound) => {
    const type = notificationType.toLowerCase();
    const MainConatiner = document.querySelector('.notification-container')
    const NotifyDiv = document.createElement('div')
    NotifyDiv.classList.add('notify', `notify-${type}`)

    const NotifyIcon = document.createElement('i')
    NotifyIcon.classList.add(getIconClass(type), 'fa-solid')
    NotifyDiv.append(NotifyIcon)

    const NotifyTextDiv = document.createElement('div')
    NotifyTextDiv.classList.add('notify-text')
    NotifyDiv.append(NotifyTextDiv)

    const NotifyHeader = document.createElement('h5')
    NotifyHeader.textContent = type.toUpperCase()
    NotifyTextDiv.append(NotifyHeader)

    const NotifyContent = document.createElement('p')
    NotifyContent.innerHTML = message.toUpperCase()
    NotifyTextDiv.append(NotifyContent)

    MainConatiner.append(NotifyDiv)

    const AudioElement = document.createElement('audio')
    const AudioSRC = document.createElement('source')
    AudioSRC.setAttribute('src', 'sounds/sound.mp3')
    AudioSRC.setAttribute('type', 'audio/mpeg')
    AudioElement.append(AudioSRC)

    document.body.append(AudioElement)

    const showNotification = () => {
        NotifyDiv.style.display = "flex";
        if (sound === true) {
            AudioElement.play()
            AudioElement.volume = 0.5
        }
    };

    const deleteNotification = () => {
        NotifyDiv.style.animation = `slideOut .5s ease`
        setTimeout(() => {
            NotifyDiv.remove();
            AudioElement.remove()
        }, 450);
    };

    setTimeout(deleteNotification, time);

    return { showNotification, deleteNotification };
};

const getIconClass = (type) => {
    switch (type) {
        case "success":
            return "fa-circle-check";
        case "error":
            return "fa-circle-exclamation";
        case "info":
            return "fa-circle-info";
        case "warning":
            return "fa-triangle-exclamation";
        case "sms":
            return "fa-comment-sms";
        case "bank":
            return "fa-landmark";
        default:
            return "fa-message";
    }
};

function ShowNotification(type, time, message, sound) {
    const notification = createNotification(type, time, message, sound);
    notification.showNotification();
};

window.addEventListener("message", (e) => {
    if (e.data.action === 'notify') {
        ShowNotification(e.data.type, e.data.time, e.data.message, e.data.sound)
    }
})