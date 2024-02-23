const { WebpackFeedPlugin } = require(".");
const path = require("path");

// An example of the feed plugin
new WebpackFeedPlugin({
    site: "https://nin.red",
    postPath: path.resolve(__dirname, "../src/posts"),
    postLink: "%s/%a", // Here: %s = https://nin.red/blog, %a = Article Title
    output: {
        json: "feed.json",
        atom: "feed.xml"
    },
    feedConfig: {
        title: "NBlog Feed",
        description: "由一条咸鱼搭建的博客",
        id: "https://nin.red/blog",
        link: "https://nin.red/blog",
        language: "zh-cn",
        favicon: "https://nin.red/static/blog-icon.png",
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
