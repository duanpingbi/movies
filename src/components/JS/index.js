import Vue from 'vue'
import MessageBox from './MessageBox'

export var messageBox = (function () {
    var defalut ={
        title:'',
        content:'',
        cancel:'',
        ok:'',
        handelCancel:null,
        handelOk:null
    }

    return function (opts) {
        for(var attr in opts){
            defalut[attr] = opts[attr];
        }

        var mycomponent = Vue.extend(MessageBox);

        var vm = new mycomponent({
            el:document.createElement('div'),
            data:{
                title:defalut.title,
                content: defalut.content,
                cancel: defalut.cancel,
                ok:defalut.ok
            },
            methods:{
                handelCancel(){
                    defalut.handelCancel && defalut.handelCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handelOk(){
                    defalut.handelOk && defalut.handelOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        });

        document.body.appendChild(vm.$el);
    }
})();