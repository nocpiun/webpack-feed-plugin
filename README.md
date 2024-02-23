# `webpack-feed-plugin`

**A webpack plugin for generating RSS feed files**

By NriotHrreion

---

## Installation

```bash
npm i webpack-feed-plugin
```

## Example

#### webpack.config.js

```js
var { WebpackFeedPlugin } = require("webpack-feed-plugin");

module.exports = {
    plugins: [
        new WebpackFeedPlugin({
            site: "https://example.com",
            postPath: path.resolve(__dirname, "../src/posts"),
            output: {
                json: "feed.json",
                atom: "feed.xml"
            },
            feedConfig: {
                title: "My Feed",
                description: "This is my feed, welcome to subscribe",
                id: "http://example.com/blog",
                link: "http://example.com/blog",
                language: "en",
                favicon: "http://example.com/favicon.ico",
                copyright: `Copyright (c) ${new Date().getFullYear()} NriotHrreion`,
                feedLinks: {
                    json: "https://example.com/feed.json",
                    atom: "https://example.com/feed.xml"
                },
                author: {
                    name: "NoahHrreion",
                    email: "nriot233@gmail.com",
                    link: "https://example.com"
                }
            }
        })
    ]
}
```

#### Markdown front matter

```md
---
title: "This is an article"
author: NriotHrreion
photo: "/static/example.png"
excerpt: "This is a description of the article."
date: 2024-02-23
---

Article Contents...
```

## LICENSE

[MIT](./LICENSE)
