<template>
    <div class="form">
        <input type="text" v-model="form.title" placeholder="título">
        <input type="date" v-model="form.date" pattern="\d{4}-\d{2}-\d{2}" min="2021-01-01" max="2100-01-01">
        <input type="text" v-model="tags" placeholder="tags (até duas, separadas por vírgula)">
        <!-- <input type="icon" v-model="form.icon" placeholder="icon"> -->
        <div class="dropdown">
            <select v-model="form.icon"  onmousedown="if(this.options.length>8){this.size=8;}" onchange='this.size=0;' onblur="this.size=0;"  class="form-options">
                <option selected="selected" disabled>Selecione</option>
                <option v-for="option in this.options" :key="option.id" :value="option.name" >{{ option.display }}</option>
            </select>
        </div>
        <div class="set-favorite">
            <h3>Definir como favorita</h3>
            <input type="checkbox" v-model="form.favorite">
        </div>
        <button @click="submitForm">Salvar</button>
        <button v-if="getParams && form.status === false" @click="setDone">Definir como Concluída</button>
        <button v-if="getParams && form.status === true" @click="setUndone">Definir como Não Concluída</button>
        <button v-if="getParams" @click="delTask">Excluir</button>
    </div>
</template>
<script>
export default {
    name: 'form-task',
    data() {
        return {
            tags: '',
            options: [
                {name: 'fitness_center', display: 'Academia'},
                {name: 'help', display: 'Ajuda'},
                {name: 'warning', display: 'Alerta'},
                {name: 'cake', display: 'Aniversário'},
                {name: 'assured_workload', display: 'Banco'},
                {name: 'home', display: 'Casa'},
                {name: 'shopping_cart', display: 'Compras'},
                {name: 'favorite', display: 'Coração'},
                {name: 'paid', display: 'Dinheiro'},
                {name: 'email', display: 'Email'},
                {name: 'emoji_events', display: 'Esportes'},
                {name: 'auto_stories', display: 'Estudos'},
                {name: 'celebration', display: 'Festa'},
                {name: 'child_care', display: 'Filhos'},
                {name: 'groups', display: 'Grupo'},
                {name: 'call', display: 'Ligação'},
                {name: 'medical_services', display: 'Médico'},
                {name: 'notifications', display: 'Notificação'},
                {name: 'display', display: 'Procurar'},
                {name: 'schedule', display: 'Relógio'},
                {name: 'work', display: 'Trabalho'},
                {name: 'live_tv', display: 'TV'},
                {name: 'sports_esports', display: 'Videogame'},
                {name: 'error', display: 'Outros'}
            ],
            form:{
                title: '',
                date: '',
                icon: 'Selecione',
                status: false,
                favorite: false
            }
        }
    },
    created() {
        this.haveParams()
    },
    computed: {
        getParams() {
            return this.$route.params.id ? true : false
        }
    },
    methods: {
        async submitForm (){
            if(!this.form.title || !this.form.date || this.form.icon == 'Selecione'){
                return alert('Preencha o formuário')
            }
            const refactDate = this.form.date.split('-')
            const taskDate = `${refactDate[1]}/${refactDate[2]}/${refactDate[0]}`
            let taskTags = new Array
            this.tags = this.tags.toString()
            const setFormArrays = this.tags.split(',')
            setFormArrays.forEach(x => taskTags.push(x).toString().trim())
            while(taskTags.length > 2){
                taskTags.pop()
            }
            // CHECA SE TAG ESTÁ VAZIA
            taskTags.forEach((val, index) => {
                if(val === ""){
                    taskTags[index] = 'Sem Tag'
                }
            })
            // EDITAR
            if(this.$route.params.id){
                await this.$store.dispatch('task/editTask', {
                    id: this.$route.params.id,
                    title: this.form.title,
                    date: taskDate,
                    tags: taskTags,
                    icon: this.form.icon,
                    favorite: this.form.favorite
                })
                await this.$router.push({name: 'dashboard'})
        
            // ADICIONAR
            } else {
                this.$store.dispatch('task/addTask', {
                    title: this.form.title,
                    date: taskDate,
                    tags: taskTags,
                    icon: this.form.icon,
                    favorite: this.form.favorite
                })
                await this.$router.push({name: 'dashboard'})
            }
            this.clearForm()
            this.$store.dispatch('task/load')
        },
        async delTask (){
            await this.$store.dispatch('task/delTask', {id: this.$route.params.id})
            this.clearForm()
            await this.$router.push({name: 'dashboard'})
        },
        async setDone (){
            await this.$store.dispatch('task/changeTaskStatus', {
                id: this.$route.params.id,
                status: true
            })
            await this.$router.push({name: 'dashboard'})
        },
        async setUndone (){
            await this.$store.dispatch('task/changeTaskStatus', {
                id: this.$route.params.id,
                status: false
            })
            await this.$router.push({name: 'dashboard'})
        },
        trueDate (valor) {
            return Date(valor)
        },
        haveParams () {
            const param = this.$route.params.id
            if(param){
                const getTask = this.$store.getters['task/getAll'].find(x => x._id == param)
                this.form.title = getTask.title
                //this.form.date = new Date(getTask.date)
                const getTaskDate = new Date(getTask.date).toLocaleDateString().split('/')
                this.form.date = `${getTaskDate[2]}-${getTaskDate[1]}-${getTaskDate[0]}`
                this.form.icon = getTask.icon
                this.tags = getTask.tags
                this.form.favorite = getTask.favorite
                this.form.status = getTask.status
            }
        },
        clearForm () {
            this.tags = ''
            this.form.title = ''
            this.form.icon = ''
            this.form.favorite = false
            this.form.date = ''
        }
    },
}
</script>

<style scoped>
    .form{
        display: flex;
        flex-direction: column;
        color:white;
    }

    .form{
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        color:white;
        justify-content: center;
        align-items: center;
    }

    .form > input {
        box-sizing: border-box;
        width: 100%;
        border: none;
        padding: 10px 5px 10px 5px;
        font-size: 14px;
        margin-bottom: 5px;
    }

    .form > input:focus {
        outline: none;
    }

    .form > input::placeholder {
        text-transform: uppercase;
    }

    .form > button {
        margin: 0;
        width: 100%;
        padding: 20px 5px 20px 5px;
        margin: 10px 0px 0px 0px;
        text-transform: uppercase;
        background-color: rgba(255, 255, 255, 0.0);
        color: white;
        border: 1px solid white;
    }

    .dropdown{
        box-sizing: border-box;
        width: 100%;
    }
    
    .form-options{
        box-sizing: border-box;
        border-radius: 2px;
        width: 100%;
        border: none;
        padding: 10px 5px 10px 5px;
        font-size: 1rem;
    }

    .form-options > option {
        font-size: 1rem;
        padding: 10px 0px 10px 0px;
        box-shadow: border-box;
        border-top: 1px solid rgba(0, 0, 0, 0.3);
    }

    .set-favorite{
        width: 100%;
        padding: 0 15px 0 15px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .set-favorite > input[type="checkbox"]{
        width: 20px;
        height: 20px;
        background-color: red;
    }
</style>