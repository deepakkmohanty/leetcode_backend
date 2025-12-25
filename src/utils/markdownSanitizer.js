const marked = require('marked');
const htmlSanitizeLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent) {
    const turndownService = new TurndownService();
    const convertedHtml = marked.parse(markdownContent);
    const sanitizedHtml = htmlSanitizeLibrary(convertedHtml, {
        allowedTags: htmlSanitizeLibrary.defaults.allowedTags.concat(['img']),
    });

    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
