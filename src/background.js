chrome.runtime.onMessage.addListener((msg) => {
  if (msg.url) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.update(tabs[0].id, { url: msg.url });
      } else {
        chrome.tabs.create({ url: msg.url });
      }
    });
  }
});

// Optional: keyboard shortcut fallback (won’t read clipboard reliably)
chrome.commands.onCommand.addListener(() => {
  console.warn("Shortcut pressed, but clipboard access requires popup context.");
});