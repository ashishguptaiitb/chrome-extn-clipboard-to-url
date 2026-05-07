---
title: Manually Sideload the Extension in Chrome in Developer Mode
description: Open the help article corresponding to a copied file path with one click.
---

## Install Manually using Source Code

Install directly from [Chrome Web Store](https://chromewebstore.google.com/detail/docs-tools/lmdkofjdkegcjmcfimhkejllkclebfgi) for ease of installation and update. To sideload the extension using the source code, follow these steps:

1. Clone this repo locally.

   ![](/chrome-graphics/image6.png)

1. Go to `chrome://extensions` and enable **Developer mode**.
1. Select **Load unpacked**.

   ![](/chrome-graphics/image2.png)

1. In the **select the extension directory** dialog, provide the folder path of the `src` folder from your local clone. Select **Select Folder**.

   ![](/chrome-graphics/image3.png)

1. Go to `chrome://extensions` and select **Details** of the extension.
1. For ease of use, select **Pin to toolbar**. Optionally, select **Allow in Incognito**.
1. Select **Site Settings**.
1. Locate **Clipboard** and select **Allow**. This permission is required for the extension to read the copied URL from your clipboard.

## Update Manually using Source Code

If you've [install via Chrome Web Store](https://chromewebstore.google.com/detail/docs-tools/lmdkofjdkegcjmcfimhkejllkclebfgi), then select **Update** in `chrome://extensions`.

![](/chrome-graphics/image8.png)

If you installed manually using the above steps, then follow these steps:

1. Fetch the latest update of this repo.
1. Go to `chrome://extensions` and select the **Reload** icon.

   ![](/chrome-graphics/image5.png)

1. Verify that the displayed version is updated.
