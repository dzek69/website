import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  title: "grammY",
  description: "The Telegram Bot Framework.",

  shouldPrefetch: true,

  themeConfig: {
    logo: "/Y.png",
    repo: "https://github.com/grammyjs/grammY",
    docsRepo: "https://github.com/grammyjs/website",
    docsDir: "site/docs",
    docsBranch: "main",
    editLink: true,
    editLinkText: "Edit this page on GitHub",
    editLinkPattern: ":repo/edit/:branch/:path",
    repoLabel: "GitHub",
    notFound: [
      "Not Found",
      "Nope.",
      "nothin' here for ya, sorry",
      "Error 404/ This Page Could Not Be Found But/ A Haiku Instead",
      "Country rooooaaaads,",
    ],
    backToHome: "Take me hoooooooome",
    navbar: [
      { text: "Guide", link: "/guide/" },
      {
        text: "Learn",
        children: [
          {
            text: "Guide",
            children: [
              {
                text: "Overview",
                link: "/guide/README.md",
              },
              {
                text: "Introduction",
                link: "/guide/introduction.md",
              },
              {
                text: "Getting started",
                link: "/guide/getting-started.md",
              },
              {
                text: "Sending and receiving messages",
                link: "/guide/basics.md",
              },
              {
                text: "Context",
                link: "/guide/context.md",
              },
              {
                text: "Bot API",
                link: "/guide/api.md",
              },
              {
                text: "Filter queries and bot.on()",
                link: "/guide/filter-queries.md",
              },
              {
                text: "Commands",
                link: "/guide/commands.md",
              },
              {
                text: "Middleware",
                link: "/guide/middleware.md",
              },
              {
                text: "Error handling",
                link: "/guide/errors.md",
              },
              {
                text: "Inline Queries",
                link: "/guide/inline-queries.md",
              },
              {
                text: "File handling",
                link: "/guide/files.md",
              },
              {
                text: "Games",
                link: "/guide/games.md",
              },
              {
                text: "Long Polling vs. Webhooks",
                link: "/guide/deployment-types.md",
              },
            ],
          },
          {
            text: "Advanced",
            children: [
              {
                text: "Overview",
                link: "/advanced/README.md",
              },
              {
                text: "Middleware redux",
                link: "/advanced/middleware.md",
              },
              {
                text: "Scaling Up I: Large codebase",
                link: "/advanced/structuring.md",
              },
              {
                text: "Scaling Up II: High load",
                link: "/advanced/scaling.md",
              },
              {
                text: "Scaling Up III: Reliability",
                link: "/advanced/reliability.md",
              },
              {
                text: "Scaling Up IV: Flood Limits",
                link: "/advanced/flood.md",
              },
              {
                text: "Bot API Transformers",
                link: "/advanced/transformers.md",
              },
              {
                text: "Proxy Support",
                link: "/advanced/proxy.md",
              },
              {
                text: "Deployment Checklist",
                link: "/advanced/deployment.md",
              },
            ],
          },
        ],
      },
      {
        text: "Plugins",
        children: [
          {
            text: "Introduction",
            children: [
              {
                text: "About Plugins",
                link: "/plugins/README.md",
              },
            ],
          },
          {
            text: "Official",
            children: [
              {
                text: "Sessions and storing data (built-in)",
                link: "/plugins/session.md",
              },
              {
                text: "Keyboards and Inline Keyboards (built-in)",
                link: "/plugins/keyboard.md",
              },
              {
                text: "Interactive menus (menu)",
                link: "/plugins/menu.md",
              },
              {
                text: "Stateless Question (stateless-question)",
                link: "/plugins/stateless-question.md",
              },
              {
                text: "Concurrency (runner)",
                link: "/plugins/runner.md",
              },
              {
                text: "Hydration (hydrate)",
                link: "/plugins/hydrate.md",
              },
              {
                text: "Retry API requests (auto-retry)",
                link: "/plugins/auto-retry.md",
              },
              {
                text: "Flood control (transformer-throttler)",
                link: "/plugins/transformer-throttler.md",
              },
              {
                text: "Rate limit users (ratelimiter)",
                link: "/plugins/ratelimiter.md",
              },
              {
                text: "Files (files)",
                link: "/plugins/files.md",
              },
              {
                text: "Internationalisation (i18n)",
                link: "/plugins/i18n.md",
              },
              {
                text: "Router (router)",
                link: "/plugins/router.md",
              },
              {
                text: "Parse Mode (parse-mode)",
                link: "/plugins/parse-mode.md",
              },
              {
                text: "Command filtering (command-fiter)",
                link: "/plugins/command-filter.md",
              },
            ],
          },
          {
            text: "Third-party",
            children: [
              {
                text: "Console time",
                link: "/plugins/console-time.md",
              },
              {
                text: "[Submit your PR!]",
                link: "/plugins/README.md#submitting-your-own-package-to-the-docs",
              },
            ],
          },
        ],
      },
      {
        text: "Examples",
        children: [
          {
            text: "Examples",
            children: [
              {
                text: "Example Bots Repository",
                link: "https://github.com/grammyjs/examples",
              },
              { text: "Live Browser Demo", link: "/demo/README.md" },
              { text: "Example Bots", link: "/demo/examples.md" },
              { text: "Community Showlounge", link: "/demo/showlounge.md" },
            ],
          },
        ],
      },
      {
        text: "Resources",
        children: [
          {
            text: "grammY",
            children: [
              {
                text: "Community Chat",
                link: "https://telegram.me/grammyjs",
              },
              {
                text: "Awesome grammY",
                link: "https://github.com/grammyjs/awesome-grammY",
              },
              {
                text: "News",
                link: "https://telegram.me/grammyjs_news",
              },
              {
                text: "FAQ",
                link: "/resources/faq.md",
              },
              {
                text: "Comparison to other frameworks",
                link: "/resources/comparison.md",
              },
            ],
          },
          {
            text: "Telegram",
            children: [
              {
                text: "Introduction for Developers",
                link: "https://core.telegram.org/bots",
              },
              {
                text: "Bots FAQ",
                link: "https://core.telegram.org/bots/faq",
              },
              {
                text: "Bot API Reference",
                link: "https://core.telegram.org/bots/api",
              },
            ],
          },
          {
            text: "Hosting",
            children: [
              {
                text: "Heroku",
                link: "/hosting/heroku.md",
              },
              {
                text: "Google Cloud Functions",
                link: "/hosting/gcf.md",
              },
            ],
          },
        ],
      },
      {
        text: "API Reference",
        link: "https://doc.deno.land/https/deno.land/x/grammy/mod.ts",
      },
    ],
  },
  plugins: [
    [
      "@vuepress/plugin-docsearch",
      {
        apiKey: "17b3527aa6f36e8d3fe2276b0f4d9633",
        indexName: "grammy",
        placeholder: "Search",
        algoliaOptions: { facetFilters: ["lang:en-US"] },
        sitemaps: ["https://grammy.dev/sitemap.xml"],
      },
    ],
    [
      {
        name: "break-long-inline-code-snippets",
        extendsMarkdown: (md) => {
          md.renderer.rules.code_inline = (tokens, idx, _opts, _env, slf) => {
            const token = tokens[idx];
            const attributes = slf.renderAttrs(token);
            const withBreaks = insertWbrTags(token.content);
            const escaped = escapeHtml(withBreaks);
            return `<code${attributes}>${escaped}</code>`;
          };
        },
      },
    ],
  ],
});

// Adapted from original `code_inline` implementation of markdown-it
const HTML_ESCAPE_TEST_RE = /&|<(?!wbr>)|(?<!<wbr)>/;
const HTML_ESCAPE_REPLACE_RE = /&|<(?!wbr>)|(?<!<wbr)>/g;
const HTML_REPLACEMENTS = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
};
function replaceUnsafeChar(ch: string) {
  return HTML_REPLACEMENTS[ch];
}
function escapeHtml(str: string) {
  return HTML_ESCAPE_TEST_RE.test(str)
    ? str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar)
    : str;
}

function insertWbrTags(url: string) {
  // Adapted from https://css-tricks.com/better-line-breaks-for-long-urls/
  return url
    .split("//")
    .map(
      (str) =>
        // Insert a word break opportunity after a colon
        str
          .replace(/(?<after>:)/giu, "$1<wbr>")
          // Before a single slash, tilde, period, comma, hyphen, underline, question mark, number sign, or percent symbol
          .replace(/(?<before>[/~.,\-_?#%])/giu, "<wbr>$1")
          // Before and after an equals sign or ampersand
          .replace(/(?<beforeAndAfter>[=&])/giu, "<wbr>$1<wbr>")
      // Reconnect the strings with word break opportunities after double slashes
    )
    .join("//<wbr>");
}
