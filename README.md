To view a help article corresponding to an .mdx file, we take one of the following paths:

- Search on our doc site.
- Search on Google.com.
- Copy-paste the file path in the browser address bar, add domain name (`docs.kore.ai` or a stage link).
- Fidget to add or remove extra `/`, remove `.mdx` extension, and change `\` to `/`.
<br />
<br />

**That's too many clicks and keypresses, but not anymore**!
<br />
<br />

---
<br />

1. Install it from the [Chrome Web Store](https://chromewebstore.google.com/detail/docs-tools/lmdkofjdkegcjmcfimhkejllkclebfgi).
2. Remove any old versions that you sideloaded.
3. Go to chrome://extensions and click **Details** of Doc Tools extension.
4. Select **Pin to Toolbar** and optionally, select **Allow in Incognito**.
5. Click **Site Settings**.
6. Locate **Clipboard** permission and select **Allow**.

<br />

![](/chrome-graphics/image1.png)

<br />


The extension does the following:

- Opens published or staged article after you copy an article's path.
- Opens GitHub source file of the open help article.
- Switches between prod and stage URLs for any article.


The following usability enhancements are built-in:

- Copied path may or may not contain `/`. No more fidgeting to copy a file path or a URL down to the `/` character.
- Copied path may or may not contain `.mdx` extension. For example, relative path copied from VSCode contains it but the inline links don't.
- Copied path may or may not contain an anchor. For example, links to an articles *head* don't contain anchors but deeplinks to sub-headings do.

---

A user click is still required on the pop-up button for security reasons. An extension can't copy clipboard contents and launch a URL (rightly so) without the user's input/consent.
