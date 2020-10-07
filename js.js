
import { formLogic } from './formLogic.js';
import { callbackDisplay } from './callbackHell.js';
import { promiseDisplay } from './promiseFunction.js';


//dummy data
const someData = [
    {
        id: '1',
        userName: 'User1',
        userEmail: 'user1@yahoo.com',
        userPassword: '1234',
        userPosts: [
            {
                id_post: 1,
                content: 'Post 1'
            },
            {
                id_post: 2,
                content: 'Post 2 '
            },
            {
                id_post: 3,
                content: 'Post 3'
            },
        ]
    },
    {
        id: '2',
        userName: 'User2',
        userEmail: 'user2@yahoo.com',
        userPassword: '1234',
        userPosts: [
            {
                id_post: 1,
                content: 'Post 1'
            },
            {
                id_post: 2,
                content: 'Post 2'
            }
        ]
    },
    {
        id: '3',
        userName: 'User3',
        userEmail: 'user3@google.com',
        userPassword: '1234',
        userPosts: [
            {
                id_post: 1,
                content: ''
            }
        ]
    }
];


const idForm = 'formForCallback';
const idSelect = 'selectCallback';
formLogic(someData, callbackDisplay, idForm, idSelect);

const idForm1 = 'formForPromise';
const idSelect1 = 'selectPromise';
formLogic(someData, promiseDisplay, idForm1, idSelect1);
