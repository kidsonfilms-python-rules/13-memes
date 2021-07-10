var exec = require('child_process').exec;
console.log('Installing dependencies...')
var child = () => {
    return new Promise((resolve, reject) => {
        exec('yarn install',
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                if (stderr) {
                    console.log('stderr: ' + stderr);
                }
                if (error !== null) {
                    console.log('exec error: ' + error);
                    reject(0)
                }
                resolve(0)
            })
    })
};
child().then(() => {
    async function main() {
        const input = require('input')
        const config = require('./package.json')
        const githubPURL = await input.text('What is the URL of your host? (e.g. Github Pages URL would be https://githubusername.github.io/reponame/)')
        config.homepage = githubPURL
    }

    main()
});