function addHideButton() {
  const menuItemSelector = "ytd-menu-service-item-renderer[role=\"menuitem\"]:nth-last-child(1)";

  const videos = document.querySelectorAll(".ytd-rich-item-renderer");

    videos.forEach(item => {
    if (!item.querySelector(".hide-button")) {
      const menuButton = item.querySelector("#button .yt-icon-button");
      
      if (menuButton) {
        const hideButton = document.createElement("button");

        hideButton.textContent = "X";
        hideButton.title = "Hide this video!";
        hideButton.className = "hide-button";
        hideButton.style.marginLeft = "10px";
        hideButton.onclick = () => {
          menuButton.click();
          setTimeout(() => {
            const hideMenuItem = document.querySelector(menuItemSelector);
            if (hideMenuItem) {
              hideMenuItem.click();
            }
          }, 500);
        };
        menuButton.parentElement.appendChild(hideButton);
      }
    }
  });
}

const observer = new MutationObserver(addHideButton);
observer.observe(document, { childList: true, subtree: true });
window.addEventListener("load", addHideButton);
