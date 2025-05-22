const notificationData = [
  {
    avatar: "./images/avatar-angela-gray.webp",
    userName: "Mark Webber",
    action: "reacted to your recent post",
    target: "My first tournament today!",
    timeAgo: "1m ago",
    message: "",
    targetImage: null,
    status: false,
  },
  {
    avatar: "./images/avatar-anna-kim.webp",
    userName: "Angela Gray",
    action: "followed you",
    target: "",
    timeAgo: "5m ago",
    message: "",
    targetImage: null,
    status: false,
  },
  {
    avatar: "./images/avatar-jacob-thompson.webp",
    userName: "Jacob Thompson",
    action: "has joined your group",
    target: "Chess Club",
    timeAgo: "1 day ago",
    message: "",
    targetImage: null,
    status: false,
  },
  {
    avatar: "./images/avatar-kimberly-smith.webp",
    userName: "Rizky Hasanuddin",
    action: "sent you a private message",
    target: "",
    timeAgo: "5 days ago",
    message: `Hello thank you for setting up the Chess Club. i've been a member 
    for a few weeks now and i'm already having lots of funand improving my game.`,
    targetImage: null,
    status: false,
  },
  {
    avatar: "./images/avatar-mark-webber.webp",
    userName: "Kimberly Smith",
    action: "commented on your picture",
    target: "",
    timeAgo: "1m ago",
    message: "",
    targetImage: "./images/image-chess.webp",
    status: false,
  },
  {
    avatar: "./images/avatar-nathan-peterson.webp",
    userName: "Nathan Peterson",
    action: "reacted to your recent post ",
    target: "5 end-game strategies to increase your win rate",
    timeAgo: "2 weeks ago",
    message: "",
    targetImage: null,
    status: false,
  },
  {
    avatar: "./images/avatar-rizky-hasanuddin.webp",
    userName: "Anna Kim",
    action: "left the group ",
    target: "Chess Club",
    timeAgo: "2 weeks ago",
    message: "",
    targetImage: null,
    status: false,
  }
]
document.addEventListener('DOMContentLoaded', () => {
  const markAllBtn = document.getElementById('mark-all-read');
  const notifications = document.querySelector('.notifications-list');
  const unreadCount = document.getElementById('unread-count');

  notificationData.forEach((notification) => {
      const innerDiv = document.createElement("div");
      const img = document.createElement("img");
      img.src = notification.avatar;
      img.alt = notification.userName;
      img.className = "avatar";

      const targetImageEl = document.createElement("img");
      targetImageEl.src = notification.targetImage;
      targetImageEl.className = "targetImage";
      targetImageEl.alt = "target Image";
     

      innerDiv.innerHTML = `
      <div class="notification unread">
          <div class="avatarBox"></div>
          <div class="text-box">
              <p><strong>${notification.userName}</strong> 
              <span>${notification.action}</span>
              <strong class=${"target"}>${notification.target}</strong> 
              <span class="red-label"></span></p>
              <span class="timestamp">${notification.timeAgo}</span>
              <p class="${notification.message === "" ? "" : "message"}">${notification.message}</p>
              </div>
              <div class="targetImageBox"></div>
      </div>
      `

      const avatarBox = innerDiv.querySelector(".avatarBox");
      avatarBox.appendChild(img);
      if(notification.targetImage) {
        const targetImageBox = innerDiv.querySelector(".targetImageBox");
        targetImageBox.appendChild(targetImageEl);
      }
      notifications.appendChild(innerDiv);

      // Handle click on individual notification
      const notificationEl = innerDiv.querySelector(".notification");
      notificationEl.addEventListener("click", () => {
      notification.status = !notification.status
          notificationEl.classList.toggle("unread", !notification.status);
      console.log(`${notification.userName}'s ${notification.status ? "notification marked as read" : "notification marked as unread" }`, notification);
          updateUnreadCount();
      });
  });

  // Mark all as read
  markAllBtn.addEventListener("click", () => {
      document.querySelectorAll('.notification.unread').forEach((notif) => {
          notif.classList.remove("unread");
      });
      notificationData.forEach(n =>  {
      n.status = true;
      console.log(`${n.userName}'s notification marked as read (bulk):`, n);
      console.log(n)
      });
      updateUnreadCount();
  });

  // Update unread count
  function updateUnreadCount() {
      const count = document.querySelectorAll('.notification.unread').length;
      unreadCount.textContent = count;
  }

  updateUnreadCount(); // Initial update
});
