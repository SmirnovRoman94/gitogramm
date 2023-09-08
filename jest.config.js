module.exports = {
    moduleFileExtensions: [
        "js",
        "json",
        "vue"
    ],
    transform: {
        ".*\\.(vue)$": "@vue/vue3-jest",
        "^.+\\.js$": "babel-jest"
    },
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
    testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/(*.)+(spec|test).[jt]s?(x)" ]
 }