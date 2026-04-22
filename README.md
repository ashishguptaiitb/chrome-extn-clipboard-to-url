When we want to view a help article corresponding to an mdx file, we take one of the following paths: 

- Search on our doc site.
- Search on Google.com.
- Copy-paste the file path in the browser address bar, add `docs.kore.ai/` string before it, and remove `.mdx` extension from the end.

That's too many clicks and keypresses, but not anymore!

This extension opens a help article after you copy its path. After copying a file's path, just click this extension's icon in Chrome. See [how to install](/how-to-install.md).

![](/graphics/image1.png)

It works in the following cases:

- Copied path contains `/` or doesn't.
- Copied path contains `.mdx` or doesn't. For example, relative path from VSCode tab.
- Copied path contains an anchor or doesn't. For example, from links created in an article.

---

A user click is still required on the pop-up button for security reasons. An extension can't copy clipboard contents and launch a URL (rightly so) without the user's input/consent.
