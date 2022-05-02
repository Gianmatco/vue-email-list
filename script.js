/*
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/
const app = new Vue({
    el:'#app',
    data:{
        mail:[],
    },

    methods:{

       
    },
    created(){
        
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res)=>{
            for(let i = 0; i < 10; i++);
                this.mail.push(res.data.response)
                console.log(res.data.response)

        }).catch((error)=>{
            console.log(error);
        })
        

    }
    
})