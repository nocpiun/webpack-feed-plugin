const { WebpackFeedPlugin } = require(".");
const path = require("path");

// An example of the feed plugin
new WebpackFeedPlugin({
    site: "https://nin.red",
    postPath: path.resolve(__dirname, "../src/posts"),
    output: {
        json: "feed.json",
        atom: "feed.xml"
    },
    feedConfig: {
        title: "NBlog Feed",
        description: "由一条咸鱼搭建的博客",
        id: "http://nin.red/blog",
        link: "http://nin.red/blog",
        language: "zh-cn",
        favicon: "http://nin.red/static/blog-icon.png",
        copyright: `Copyright (c) ${new Date().getFullYear()} NriotHrreion`,
        feedLinks: {
            json: "https://nin.red/feed.json",
            atom: "https://nin.red/feed.xml"
        },
        author: {
            name: "NoahHrreion",
            email: "nriot233@gmail.com",
            link: "https://nin.red"
        }
    }
});