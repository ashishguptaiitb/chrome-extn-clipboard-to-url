# Docs Tools — Google Chrome and Microsoft Edge Browser Extension

A lightweight browser extension that simplifies navigation between published Kore.ai help articles, their staged version, and their GitHub source files. Same extension works in Edge as well.

The extension is published from a paid/verified developer account and privacy policy is verified by Chrome's app validation team.

<a title="Doc Tools installation link" href="https://chromewebstore.google.com/detail/docs-tools/lmdkofjdkegcjmcfimhkejllkclebfgi"><img width="40" alt="Doc Tools installation link" src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Google_Chrome_Web_Store_icon_2022.svg/330px-Google_Chrome_Web_Store_icon_2022.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"></a>

## Why I built it

Technical writers move between a help article, its staged version, and its .mdx source multiple times a day. That's a lot of mousing around and clicks. Docs Tools extension reduces the repetitive copying, URL editing, and manual path conversion involved. Also, it improves review rate of staged content. It takes 2 clicks to go from VSCode authoring environment to staged URL.

**Use cases:**

- Circle between stage and prod - check how the differences look.
- View staged article while authoring it in 2 clicks. Copy relative path from VSCode tab.
- Check content on stage, while reviewing in GitHub PR in 2 clicks.
- To make a quick edit, go from the published article to its source file in 2 clicks.
- When linking to an article, quickly preview it or even copy an anchor in it.

The following usability enhancements are built-in:

- Copied path may or may not contain `/`. No more fidgeting to copy a file path or a URL down to the `/` character.
- Copied path may or may not contain `.mdx` extension. For example, relative path copied from VSCode contains it but the inline links don't.
- Copied path may or may not contain an anchor. For example, links to an articles *head* don't contain anchors but deeplinks to sub-headings do.

## Setup

1. [Install the extension](https://chromewebstore.google.com/detail/docs-tools/lmdkofjdkegcjmcfimhkejllkclebfgi).
1. Open `chrome://extensions`, select **Details**. Under **Site settings**, allow **Clipboard** access.
1. Optionally, pin Docs Tools to the toolbar for ease of access.

![Site settings in Chrome](/chrome-graphics/image4.png)

Use it from here in the browser:

![Pinned extension in Chrome](/chrome-graphics/image1.png)

## Privacy and implementation

- Built with Chrome Manifest V3.
- Reads clipboard content only after a user action.
- Processes navigation data locally in the browser.
- Uses limited permissions for tabs and supported documentation sites.
- Does not collect user data.

A user click is still required on the pop-up button for security reasons. An extension can't copy clipboard contents and launch a URL (rightly so) without the user's input/consent.
