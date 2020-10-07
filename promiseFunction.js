
export function promiseDisplay (passData) {
    const { userEmail, userPassword, content } = passData;

    let email = userEmail;
    let password = userPassword;
    let posts = content;

//Asinh code example
    function loginUser(email, passweor) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    userEmail: email,
                    userPassword: passweor
                });
            }, 1500);
        });
    }

    function getUserPosts(email) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Now we have data');
                resolve(posts);
            }, 1000);
        });
    }

    function postDetails(video) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(video);
            }, 1000);
        });
    }

    document.getElementById('displayFieldPromise').innerHTML += '<br>Start';
    loginUser(email,password)
        .then(user => {
            document.getElementById('displayFieldPromise').innerHTML += '<br>Now we have data';
            return  getUserPosts(user.email)
        })
        .then(posts => postDetails(posts))
        .then(detail => {
            console.log(detail);
            detail.map((item) => {
                document.getElementById('displayFieldPromise').innerHTML += `<br>${item.content}`;
            });
        })
        .then(() => document.getElementById('displayFieldPromise').innerHTML += '<br>Finish');
}