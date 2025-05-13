const notificationData = [
  {
    userAvater: "./images/avatar-angela-gray.webp",
    userName: "Mark Webber",
    message: "reacted to your post",
    timestamp: "1m ago"
    
  }
]


document.addEventListener('DOMContentLoaded', () => {
    const markAllBtn = document.getElementById('mark-all-read');
    const notifications = document.querySelectorAll('.notification');
    const unreadCount = document.getElementById('unread-count');
  
    function updateUnreadCount() {
      const unread = document.querySelectorAll('.notification.unread');
      unreadCount.textContent = unread.length;
    }
  
    markAllBtn.addEventListener('click', () => {
      notifications.forEach(notification => {
        notification.classList.remove('unread');
      });
      updateUnreadCount();
    });
  
    // Allow clicking each notification to toggle read/unread state
    notifications.forEach(notification => {
      notification.addEventListener('click', () => {
        notification.classList.toggle('unread');
        updateUnreadCount();
      });
    });
  
    // Initialize count on load
    updateUnreadCount();
  });
