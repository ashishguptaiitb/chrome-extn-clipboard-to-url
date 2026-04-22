When we want to view a help article corresponding to an mdx file, we take one of the following paths: 

- Search on our doc site.
- Search on Google.com.
- Copy-paste the file path in the browser address bar, add `docs.kore.ai/` string before it, and remove `.mdx` extension from the end.

**That's too many clicks and keypresses, but not anymore**!

---

The extension opens a help article **after you copy an article's path** with just a click. See [how to install](/how-to-install.md).

![](/graphics/image1.png)

The following cases are supported:

- Copied path contains `/` or doesn't. No more fidgeting to copy the path down to the `/` character.
- Copied path contains `.mdx` or it doesn't. For example, relative path from VSCode tab may contain it but inline links won't contain it.
- Copied path contains an anchor or doesn't. For example, links to an articles *head* don't contain anchors but deeplinks to sub-headings do.

---

A user click is still required on the pop-up button for security reasons. An extension can't copy clipboard contents and launch a URL (rightly so) without the user's input/consent.
