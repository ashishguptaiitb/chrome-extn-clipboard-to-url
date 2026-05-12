function toggleGitHubUrl(url) {
  const DOCS = "https://docs.kore.ai";
  const GH = "https://github.com/Koredotcom/docs-v2/blob/main";

  if (!url) return null;

  const clean = url.split(/[?#]/)[0];

  // Case 1: Prod docs -> GitHub source
  if (clean.startsWith(DOCS)) {
    let path = clean.replace(DOCS, "").replace(/^\/+/, "");

    if (!path) return null;

    if (!/\.mdx$/i.test(path)) {
      path = path.replace(/\/$/, "");
      path += ".mdx";
    }

    return `${GH}/${path}`;
  }

  // Case 2: GitHub source -> Prod docs
  if (clean.startsWith(GH)) {
    let path = clean
      .replace(GH, "")
      .replace(/^\/+/, "")
      .replace(/\.mdx$/i, "");

    if (!path) return null;

    return `${DOCS}/${path}`;
  }

  return null;
}




function toggleEnvUrl(url) {
  if (!url) return null;

  const clean = url.split(/[?#]/)[0];

  // Case 1: Stage and Prod switch
  if (/https:\/\/[^/]+\.mintlify\.app/i.test(clean)) {
    return clean.replace(/https:\/\/[^/]+\.mintlify\.app/i, "https://docs.kore.ai");
  }

  // Case 2: Prod to Stage for only the public docs.
  if (clean.startsWith("https://docs.kore.ai")) {
    const path = clean.replace("https://docs.kore.ai", "");

    if (path.startsWith("/ai-for-service")) {
      return "https://koreai-ai-for-service-dev.mintlify.app" + path;
    }

    if (path.startsWith("/agent-platform")) {
      return "https://koreai-agent-platform-dev.mintlify.app" + path;
    }

    if (path.startsWith("/ai-for-work")) {
      return "https://koreai-ai-for-work-dev.mintlify.app" + path;
    }

    if (path.startsWith("/ai-for-process")) {
      return "https://koreai-ai-for-process-dev.mintlify.app" + path;
    }
  }

  return null;
}



async function openFromActiveTab() {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  const target = toggleGitHubUrl(tab?.url);

  if (target && tab?.id) {
    chrome.tabs.update(tab.id, { url: target });
  }
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
if (msg === "toggle-env") {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    const target = toggleEnvUrl(tab?.url);

    if (target && tab?.id) {
      chrome.tabs.update(tab.id, { url: target });
    }
  });
}
}
);