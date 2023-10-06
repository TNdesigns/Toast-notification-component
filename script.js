document.addEventListener("DOMContentLoaded", function () {
    const successBtn = document.getElementById("success");
    const infoBtn = document.getElementById("info");
    const warningBtn = document.getElementById("warning");
    const errorBtn = document.getElementById("error");

    function showNotification(notification) {
        const container = document.querySelector(".notifications");
        container.insertBefore(notification, container.firstChild);
    
        updateNotificationOffsets();
    }
    
    function updateNotificationOffsets() {
        const visibleNotifications = Array.from(document.querySelectorAll('.notification:not([style*="display: none"])'));
        let topOffset = 15;
    
        visibleNotifications.forEach((notif, index) => {
            notif.style.top = `${topOffset}px`;
            topOffset += notif.offsetHeight + 15;
        });
    }

    function hideNotification(notification) {
        notification.style.display = "none";
        updateNotificationOffsets();
    }

    successBtn.addEventListener("click", () => {
        const successNotification = document.createElement("div");
        successNotification.className = "notification success";
        successNotification.style.height = "45px";
        successNotification.style.width = "300px";
        successNotification.style.backgroundColor = "white";
        successNotification.style.boxShadow = "0px 5px rgb(0, 197, 101)"
        successNotification.style.borderRadius = "5px";
        successNotification.style.position = "absolute";
        successNotification.style.top = "0px";
        successNotification.style.right = "0px";
        
        const image = document.createElement("img");
        image.src = "images/circle green checkmark.png"; // Set the image source
        image.style.height = "20px"; // Adjust the image height as needed
        image.style.width = "20px"; // Adjust the image width as needed
        image.style.position = "relative"; // Position the image
        image.style.left = "5px";
        image.style.top = "13px"
        successNotification.appendChild(image);

        const text = document.createElement("p");
        text.textContent = "Success toast Notification";
        text.style.position = "relative"; // Set position to relative
        text.style.left = "50px"; // Adjust left position as needed
        text.style.top = "-10px"; // Adjust top position as needed
        text.style.fontFamily = "Sans-serif";
        successNotification.appendChild(text);

        const closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&times;";
        closeBtn.style.position = "relative";
        closeBtn.style.top = "-29px";
        closeBtn.style.left = "280px";
        closeBtn.style.height = "15px";
        closeBtn.style.width = "15px";
        closeBtn.style.cursor = "pointer";
        successNotification.appendChild(closeBtn);

        closeBtn.addEventListener("click", function() {
            successNotification.style.display = "none";
        })
        showNotification(successNotification);
        setTimeout(() => hideNotification(successNotification), 5000);
    });

    infoBtn.addEventListener("click", () => {
        const infoNotification = document.createElement("div");
        infoNotification.className = "notification info";
        infoNotification.style.height = "45px";
        infoNotification.style.width = "300px";
        infoNotification.style.backgroundColor = "white";
        infoNotification.style.boxShadow = "0px 5px rgb(42, 129, 241)";
        infoNotification.style.borderRadius = "5px";
        infoNotification.style.position = "absolute";
        infoNotification.style.top = "0px";
        infoNotification.style.right = "0px";
        
        const infoImg = document.createElement("img");
        infoImg.src = "images/info-xxl.png";
        infoImg.style.height = "20px";
        infoImg.style.width = "20px";
        infoImg.style.position = "relative";
        infoImg.style.top = "13px";
        infoImg.style.left = "5px";
        infoNotification.appendChild(infoImg);

        const infoText = document.createElement("p");
        infoText.textContent = "Info Toast Notification";
        infoText.style.fontFamily = "Sans-serif";
        infoText.style.position = "relative";
        infoText.style.top = "-10px";
        infoText.style.left = "50px";
        infoNotification.appendChild(infoText);

        const closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&times;";
        closeBtn.style.position = "relative";
        closeBtn.style.top = "-29px";
        closeBtn.style.left = "280px";
        closeBtn.style.height = "15px";
        closeBtn.style.width = "15px";
        closeBtn.style.cursor = "pointer";
        infoNotification.appendChild(closeBtn);

        closeBtn.addEventListener("click", function() {
            infoNotification.style.display = "none";
        })

        /*document.querySelector(".notifications").appendChild(infoNotification);*/
        showNotification(infoNotification);
        setTimeout(() => hideNotification(infoNotification), 5000);
    });

    warningBtn.addEventListener("click", () => {
        const warningNotification = document.createElement("div");
        warningNotification.className = "notification warning";
        warningNotification.style.height = "45px";
        warningNotification.style.width = "300px";
        warningNotification.style.backgroundColor = "white";
        warningNotification.style.boxShadow = " 0px 5px rgb(255, 115, 43)";
        warningNotification.style.borderRadius = "5px";
        warningNotification.style.position = "absolute";
        warningNotification.style.top = "0px";
        warningNotification.style.right = "0px";

        const wImg = document.createElement("img");
        wImg.src = "images/orange-symbol3.png";
        wImg.style.height = "20px";
        wImg.style.width = "20px";
        wImg.style.position = "relative";
        wImg.style.top = "13px";
        wImg.style.left = "5px";
        warningNotification.appendChild(wImg);

        const wText = document.createElement("p");
        wText.textContent = "Warning Toast Notification";
        wText.style.fontFamily = "Sans-serif";
        wText.style.position = "relative";
        wText.style.top = "-10px";
        wText.style.left = "50px";
        warningNotification.appendChild(wText);

        const wcBtn = document.createElement("span");
        wcBtn.innerHTML = "&times;";
        wcBtn.style.position = "relative";
        wcBtn.style.top = "-29px";
        wcBtn.style.left = "280px";
        wcBtn.style.height = "15px";
        wcBtn.style.width = "15px";
        wcBtn.style.cursor = "pointer";
        warningNotification.appendChild(wcBtn);

        wcBtn.addEventListener("click", function() {
            warningNotification.style.display = "none";
        })

        /*document.querySelector(".notifications").appendChild(warningNotification);*/
        showNotification(warningNotification);
        setTimeout(() => hideNotification(warningNotification), 5000);
    });

    errorBtn.addEventListener("click", () => {
        const errorNotification = document.createElement("div");
        errorNotification.className = "notification error";
        errorNotification.style.height = "45px";
        errorNotification.style.width = "300px";
        errorNotification.style.backgroundColor = "white";
        errorNotification.style.boxShadow = " 0px 5px rgb(249, 68, 72)";
        errorNotification.style.borderRadius = "5px";
        errorNotification.style.position = "absolute";
        errorNotification.style.top = "0px";
        errorNotification.style.right = "0px";
        
        const eImg = document.createElement("img");
        eImg.src = "images/red circle x.png";
        eImg.style.height = "20px";
        eImg.style.width = "20px";
        eImg.style.position = "relative";
        eImg.style.top = "13px";
        eImg.style.left = "5px";
        errorNotification.appendChild(eImg);

        const eText = document.createElement("p");
        eText.textContent = "Error Toast Notification";
        eText.style.fontFamily = "Sans-serif";
        eText.style.position = "relative";
        eText.style.top = "-10px";
        eText.style.left = "50px";
        errorNotification.appendChild(eText);

        const eBtn = document.createElement("span");
        eBtn.innerHTML = "&times;";
        eBtn.style.position = "relative";
        eBtn.style.top = "-29px";
        eBtn.style.left = "280px";
        eBtn.style.height = "15px";
        eBtn.style.width = "15px";
        eBtn.style.cursor = "pointer";
        errorNotification.appendChild(eBtn);

        eBtn.addEventListener("click", function() {
            errorNotification.style.display = "none";
        })

        /*document.querySelector(".notifications").appendChild(errorNotification);*/
        showNotification(errorNotification);
        setTimeout(() => hideNotification(errorNotification), 5000);
    });
});
