function showStatus(message) {
  document.getElementById("status").textContent = message;
}
async function openUrl(base) {
  try {
    // Read clipboard text
    const text = await navigator.clipboard.readText();

    if (!text) {
      throw new Error("Copy a valid root-relative path");
    }

    const raw = text.trim();

    // Allowed documentation root paths
    const validRoots = [
      "ai-for-service",
      "agent-platform",
      "ai-for-process",
      "ai-for-work"
    ];

    // Validate clipboard content against allowed roots
    const isValid = validRoots.some(root =>
      new RegExp(`^/?${root}(/|$)`, "i").test(raw)
    );

    // If clipboard content is invalid, open only the base URL
    if (!isValid) {
      chrome.runtime.sendMessage({ url: base });
      window.close();
      return;
    }

    // Clean and normalize the path
    let path = raw
      .replace(/^\/+/, "")
      .replace(/^docs\//i, "")
      .replace(/\.mdx$/i, "");

    // Construct final target URL
    const url = base + path;

    // Send URL to background.js for tab update
    chrome.runtime.sendMessage({ url });

    // Close popup after navigation
    window.close();

  } catch (e) {
    chrome.runtime.sendMessage({ url: base });
    window.close();
   }

}

// Handle all buttons with data-base attribute
document.querySelectorAll("button[data-base]").forEach(btn => {
  btn.addEventListener("click", () => {
    openUrl(btn.getAttribute("data-base"));
  });
});

// Open GitHub source for current docs page
document.getElementById("github").addEventListener("click", () => {
  chrome.runtime.sendMessage("open-github");
  window.close();
});

// Toggle current page between prod and stage
document.getElementById("toggle-env").addEventListener("click", () => {
  chrome.runtime.sendMessage("toggle-env");
  window.close();
});