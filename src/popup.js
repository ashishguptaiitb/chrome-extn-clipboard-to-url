async function openUrl(base) {
  try {
    const text = await navigator.clipboard.readText();
    if (!text) throw new Error("Empty clipboard");

    let path = text.trim()
      .replace(/^\/+/, "")
      .replace(/^docs\//i, "")
      .replace(/\.mdx$/i, "");

    const url = base + path;

    chrome.runtime.sendMessage({ url });

    // Close popup immediately
    window.close();

  } catch (e) {
    // Optional: keep silent or log only
    console.error(e);
  }
}

// Attach handler to all buttons
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const base = btn.getAttribute("data-base");
    openUrl(base);
  });
});