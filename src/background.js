function toGitHubUrl(url) {
  const DOCS = "https://docs.kore.ai";
  const GH = "https://github.com/Koredotcom/docs-v2/blob/main";

  if (!url || !url.startsWith(DOCS)) return null;

  const clean = url.split(/[?#]/)[0];
  let path = clean.replace(DOCS, "").replace(/^\/+/, "");

  if (!path) return null;

  if (!/\.mdx$/i.test(path)) {
    path = path.replace(/\/$/, "");
    path += ".mdx";
  }

  return `${GH}/${path}`;
}

async function openFromActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const target = toGitHubUrl(tab?.url);
  if (target) chrome.tabs.create({ url: target });
}

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.url) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.update(tabs[0].id, { url: msg.url });
      }
    });
  }

  if (msg === "open-github") {
    openFromActiveTab();
  }
});