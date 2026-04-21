async function openUrl(base) {
  const el = document.getElementById("status");

  try {
    const text = await navigator.clipboard.readText();
    if (!text) throw new Error("Empty clipboard");

    let path = text.trim()
      .replace(/^\/+/, "")
      .replace(/^docs\//i, "")
      .replace(/\.mdx$/i, "");

    const url = base + path;

    el.textContent = "Opening: " + url;

    chrome.runtime.sendMessage({ url });
  } catch (e) {
    el.textContent = "Error: " + e.message;
  }
}

// Attach handler to all buttons
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const base = btn.getAttribute("data-base");
    openUrl(base);
  });
});