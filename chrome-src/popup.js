async function openUrl(base) {
  try {
    const text = await navigator.clipboard.readText();
    if (!text) throw new Error();

    let path = text.trim()
      .replace(/^\/+/, "")
      .replace(/^docs\//i, "")
      .replace(/\.mdx$/i, "");

    const url = base + path;

    chrome.runtime.sendMessage({ url });
    window.close();
  } catch (e) {
    console.error(e);
  }
}

// Docs buttons
document.querySelectorAll("button[data-base]").forEach(btn => {
  btn.addEventListener("click", () => {
    openUrl(btn.getAttribute("data-base"));
  });
});

// GitHub button
document.getElementById("github").addEventListener("click", () => {
  chrome.runtime.sendMessage("open-github");
  window.close();
});

// Switch between prod and stage
document.getElementById("toggle-env").addEventListener("click", () => {
  chrome.runtime.sendMessage("toggle-env");
  window.close();
});