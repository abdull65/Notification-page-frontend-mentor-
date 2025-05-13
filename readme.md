# Notifications Page Challenge

This is my solution to the Frontend Mentor **notifications page** challenge.

## What I Did
-  Built responsive notifications page built with **HTML**, **CSS**, and **JavaScript** practiced how to handle unread states and DOM updates.

- Users can:
  - See which notifications are unread
  - Click **"Mark all as read"** to clear unread notifications
  - See the number of unread notifications
  - Get responsive layout for mobile and desktop
  - Interact with hover and focus effects

## Tools Used

- HTML
- CSS (Flexbox & Media Queries)
- Vanilla JavaScript

## Getting Started

Just open the `index.html` file in your browser to see it in action.

---

- GitHub: https://github.com/abdull65
- Portfolio: https://usumtech.netlify.app

Challenge from Frontend Mentor: https://www.frontendmentor.io/





    <div class="notification unread">
        <div class="avatarBox">
            <img src="./images/avatar-anna-kim.webp" alt="avatar" class="avatar">
        </div>
        <div class="text-box">
            <p><strong>Angela Gray</strong> followed you <span class="red-label"></span></p>
            <span class="timestamp">5m ago</span>
        </div>
      </div>

      <div class="notification unread">
        <div class="avatarBox">
            <img src="./images/avatar-jacob-thompson.webp" alt="avatar" class="avatar">
        </div>
        <div class="text-box">
            <p><strong>Jacob Thompson</strong> has joined your group <strong style="color: #0c3178;">Chess Club</strong> <span class="red-label"></span></p>
            <span class="timestamp">1 day ago</span>
        </div>
      </div>
      <div class="notification unread">
        <div class="avatarBox">
            <img src="./images/avatar-jacob-thompson.webp" alt="avatar" class="avatar">
        </div>
        <div class="text-box">
            <p><strong>Jacob Thompson</strong> sent you a private message <strong style="color: #0c3178;">Chess Club</strong> <span class="red-label"></span></p>
            <p class="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, fugiat!</p>
            <span class="timestamp">1 day ago</span>
        </div>
      </div>
      <div class="notification unread">
        <div class="avatarBox">
            <img src="./images/avatar-kimberly-smith.webp" alt="avatar" class="avatar">
        </div>
        <div class="text-box">
            <p><strong>Kimberly Smith Thompson</strong> commented on your photo <span class="red-label"></span></p>
            <span class="timestamp">1 day ago</span>
        </div>
        <div class="avatarBox">
            <img src="./images/image-chess.webp" alt="avatar" class="avatar2">
        </div>
      </div>
      <div class="notification unread">
        <div class="avatarBox">
            <img src="./images/avatar-jacob-thompson.webp" alt="avatar" class="avatar">
        </div>
        <div class="text-box">
            <p><strong>Jacob Thompson</strong> has joined your group <strong style="color: #0c3178;">Chess Club</strong> <span class="red-label"></span></p>
            <span class="timestamp">1 day ago</span>
        </div>
      </div>