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
        message: 'hello world!'
    },
    methods: {
        chooseMaster: function(e){
            var index = $(e.currentTarget).index();
            this.choosedMaster = this.masters[index];
            this.indexActive = false;
            this.masterActive = true;
            $('html,body').animate({scrollTop: '0px'}, 0);
        }
    },
    created: function() {
        document.body.addEventListener('touchstart', function () {});
    }
});


