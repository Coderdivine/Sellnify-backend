module.exports = {
    apps: [
        {
            name: "task-backend",
            script: "src/index.js",
            exec_mode: "cluster",
            instances: 0,
            watch: ".",
            ignore_watch: ["node_modules"]
        }
    ]
};
