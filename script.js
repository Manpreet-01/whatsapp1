"use strict";

const firstChatItem = document.querySelector(".chats .chat-item");

let ind = 0;

function test() {
    const chats = document.querySelector(".chats");
    const chatItemCopy = firstChatItem.cloneNode(true);
    chatItemCopy.id = `chatItem${ind}`;
    firstChatItem.remove();

    const menuToggler = chatItemCopy.querySelector("#mini-menu-toggler");
    menuToggler.id = "mini-menu-toggler-" + ind;
    chats.appendChild(chatItemCopy);
    addClickEventsOnMiniMenu(ind);
}

let n = 15;
testLoop();

function testLoop() {
    while (ind < n) {
        test();
        ind++;

        if (ind == 0) {
            console.log("infinite loop prevented.");
            break;  // prevent infinite loop
        }
    }
}


function addClickEventsOnMiniMenu(idPostFix) {
    const ele = document.querySelector("#mini-menu-toggler-" + idPostFix);
    const container = document.querySelector(".menu-absolute#menu");

    ele.onclick = () => {
        const menu = document.createElement("div");
        menu.innerHTML = `
            <div class="menu-item">
                <div>Archive chat</div>
                <div>Delete chat</div>
                <div>Pin chat</div>
                <div>Mark as unread</div>
            </div>
        `;
        container.classList = "menu-absolute show";
        container.style.top = `${ele.getBoundingClientRect().top + 25}px`;
        container.style.left = `${ele.getBoundingClientRect().left - 5}px`;
        container.innerHTML = '';
        container.appendChild(menu);
    }
}



const mainMenuLeft = document.querySelector("#main-menu-l");
mainMenuLeft.onclick = () => {
    const container = document.querySelector(".menu-absolute#menu");
    const menu = document.createElement("div");
    menu.innerHTML = `
            <div class="menu-item">
                <div>New group</div>
                <div>New community</div>
                <div>Starred messages</div>
                <div>Selected chats</div>
                <div>Settings</div>
                <div>Log out</div>
            </div>
        `;
    container.classList = "menu-absolute show";
    container.style.top = "50px";
    container.style.left = `${mainMenuLeft.getBoundingClientRect().left - 170}px`;
    container.innerHTML = '';
    container.appendChild(menu);
}


const mainMenuRight = document.querySelector("#main-menu-r");
mainMenuRight.onclick = () => {
    const container = document.querySelector(".menu-absolute#menu");
    const menu = document.createElement("div");
    menu.innerHTML = `
            <div class="menu-item">
                <div>Contact info</div>
                <div>Selected messages</div>
                <div class="closeRightDiv">Close chat</div>
                <div>Disappearing messages</div>
                <div>Clear chat</div>
                <div>Delete chat</div>
            </div>
        `;
    container.classList = "menu-absolute show wide";
    container.style.top = "50px";
    container.style.left = 'auto';

    container.innerHTML = '';
    container.appendChild(menu);
}

const chatItems = document.querySelectorAll(".chat-item");
chatItems.forEach(item => {
    item.onclick = ({ target }) => {
        if (target.id.includes("chatItem")) {
            const mainLeftDiv = document.querySelector(".main-box-l");
            const mainRightDiv = document.querySelector(".main-box-r");
            mainLeftDiv.classList.add("d-none-xs");
            mainRightDiv.classList.add("d-initial-xs");
        }
    }
})

document.onclick = ({ target }) => {
    if (target.className.includes("closeRightDiv")) {
        const mainLeftDiv = document.querySelector(".main-box-l");
        const mainRightDiv = document.querySelector(".main-box-r");
        mainLeftDiv.classList.remove("d-none-xs");
        mainRightDiv.classList.remove("d-initial-xs");
    } 
    if (!target.id.includes("menu")) {
        const menu = document.querySelector('.menu-absolute');
        menu.classList.remove("show", "wide");
    }
}

document.oncontextmenu = function (e) {
    e.preventDefault();
}