const fetch = require('node-fetch');

const getPosts = (n) => {
    return new Promise((resolve) => {
        fetch('https://wispkoe.repl.co/posts.json')
            .then((r) => r.json())
            .then((posts) => {
                const real = posts.map(JSON.parse);
                real.reverse();
                if (!n) {
                    resolve(real);
                } else {
                    resolve(real.slice(0, n));
                }
            })
            .catch(() => {
                reject(new Error('Could not GET /posts.json'));
            });
    });
};

const addPost = (title, username, content) => {
    return new Promise((resolve, reject) => {
        if (!title || !username || !content) {
            reject(new Error('All arguments are required.'));
        }

        fetch('https://wispkoe.repl.co/new-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                username,
                content
            })
        }).then((r) => {
            console.log(r);
            resolve();
        }).catch(() => {
            reject(new Error('Could not POST /new-post'));
        });
    });
};

module.exports = { getPosts, addPost };
