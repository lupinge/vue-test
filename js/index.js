var mycomponent = Vue.component('mycomponent', {
    template: '#mycomponent',
    props: ['parentMsg'],
    data: function(){
        return {
            msg: 'this is a component.'
        }
    },
    methods: {

    }
});


var app = new Vue({
    el:'#site',
    data:{
        message: 'hello yuewen'
    },
    methods: {
        chooseMaster: function(e){
            var index = $(e.currentTarget).index();
            this.choosedMaster = this.masters[index];
            this.indexActive = false;
            this.masterActive = true;
        }
    },
    created: function() {
        document.body.addEventListener('touchstart', function () {});
    }
});


