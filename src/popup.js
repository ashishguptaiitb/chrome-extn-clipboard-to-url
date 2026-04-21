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

// Prod
document.getElementById("prod").addEventListener("click", () => {
  openUrl("https://docs.kore.ai/");
});

// Staging
document.getElementById("staging").addEventListener("click", () => {
  openUrl("https://koreai-ai-for-service-dev.mintlify.app/");
});