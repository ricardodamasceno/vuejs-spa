let app = new Vue({
    el: '#index-form',
    data: {
        usersCount : 1,
        userId: undefined,
        userName:  '',
        userEmail: '',
        users: []
    },
    methods: {
        addUser: function () {
            let user = {id: this.usersCount, name : this.userName, email: this.userEmail};
            this.users.push(user);
            this.userName = '';
            this.userEmail = '';
            this.userId = undefined;
            this.usersCount++;
        },
        removeUser:function(userId){
            for(let i=0;i<this.users.length;i++){
                if(this.users[i].id == userId){
                    this.users.splice(i,1);
                }
            }
        }
    }
});