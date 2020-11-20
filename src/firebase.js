import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.VUE_APP_firebaseApiKey,
    authDomain: "vuegram-c97fa.firebaseapp.com",
    databaseURL: "https://vuegram-c97fa.firebaseio.com",
    projectId: "vuegram-c97fa",
    storageBucket: "vuegram-c97fa.appspot.com",
    messagingSenderId: "136563911159",
    appId: "1:136563911159:web:371acec9127647bc4d26f2",
    measurementId: "G-S84DST7NDY"
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

export const auth = firebase.auth()

export const usersCollection = db.collection('users')
export const postsCollection = db.collection('posts')
export const commentsCollection = db.collection('comments')
export const likesCollection = db.collection('likes')

