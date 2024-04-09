/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
    locales: ["en", "ro"],
    sourceLocale: "en",
    catalogs: [
        {
            path: "locales/{locale}/messages",
            include: ["app", "components"],
        },
    ],
    format: "po",
};
