<template>
    <div>
        <h1>tasks- test:</h1>
        <hr />
        test : {{ message }}
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    created() {
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.popup_open();
//            console.log( exStorage.load( sysConst.STORAGE_KEY_flash ) )
//            userState.check()
//            console.log(this.user)
//          myStorage.load()
//            myStorage.remove()
    },
    data() {
        return {
            user : [],
            message :''
        }
    },
    methods: {
        popup_open: function(){
            firebase.auth().signInWithPopup(this.provider).then(function(result) {
                var token = result.credential.accessToken;
                console.log(token)
                var user = result.user;
                console.log(user)
            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
//                var email = error.email;
//                var credential = error.credential;
            });

        }
    }
}
</script>

