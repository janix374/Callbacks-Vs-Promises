export function callbackDisplay (passData){
    const { userEmail, userPassword, content } = passData;

    let email = userEmail;
    let password = userPassword;
    let posts = content;

//Sync code example
    function loginUser(email, password, callback){
        setTimeout(()=>{
            console.log('Now we have data');
            document.getElementById('displayFieldCallback').innerHTML += '<br>Now we have data';
            callback ({
                userEmail: email,
                userPassword:password
            });
        }, 1500);
    }

    function getUserPosts(email, callback) {
        setTimeout(()=>{
            callback(posts);
        },1000);
    }

    function postDetails(posts, callback) {
        setTimeout(()=>{
            callback(posts);
        },3000);
    }

    console.log('Start');
    document.getElementById('displayFieldCallback').innerHTML += '<br>Start';
    const user = loginUser(email,password, user => {
        getUserPosts(user.userEmail, (posts)=>{
            postDetails(posts, (title) => {
                console.log(title);
                title.map((item) => {
                    document.getElementById('displayFieldCallback').innerHTML += `<br>${item.content}`;
                });
                console.log('Finish');
                document.getElementById('displayFieldCallback').innerHTML += '<br>Finish';
            });
        });
    });

}


