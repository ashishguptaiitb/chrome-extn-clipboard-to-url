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
  const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  const tab = tabs[0];

  const target = toGitHubUrl(tab?.url);
  if (target) {
    await browser.tabs.create({ url: target });
  }
}

browser.runtime.onMessage.addListener((msg) => {
  if (msg.url) {
    return browser.tabs.query({ active: true, currentWindow: true })
      .then((tabs) => {
        const tab = tabs[0];
        if (tab?.id) {
          return browser.tabs.update(tab.id, { url: msg.url });
        }
      });
  }

  if (msg === "open-github") {
    return openFromActiveTab();
  }
});