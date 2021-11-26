<template>
    <div class="form">
        <input type="text" v-model="form.title" placeholder="título">
        <input type="date" v-model="form.date" pattern="\d{4}-\d{2}-\d{2}" min="2021-01-01" max="2100-01-01">
        <input type="text" v-model="tags" placeholder="tags (até duas, separadas por vírgula)">
        <input type="icon" v-model="form.icon" placeholder="icon">
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
            form:{
                title: '',
                date: '',
                icon: '',
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
        submitForm (){
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
                this.$store.dispatch('task/editTask', {
                    id: this.$route.params.id,
                    title: this.form.title,
                    date: taskDate,
                    tags: taskTags,
                    icon: this.form.icon,
                    favorite: this.form.favorite
                })
        
            // ADICIONAR
            } else {
                this.$store.dispatch('task/addTask', {
                    title: this.form.title,
                    date: taskDate,
                    tags: taskTags,
                    icon: this.form.icon,
                    favorite: this.form.favorite
                })
            }
            this.clearForm()
            this.$store.dispatch('task/load')
        },
        delTask (){
            this.$store.dispatch('task/delTask', {id: this.$route.params.id})
            this.clearForm()
        },
        setDone (){
            this.$store.dispatch('task/changeTaskStatus', {
                id: this.$route.params.id,
                status: true
            })
        },
        setUndone (){
            this.$store.dispatch('task/changeTaskStatus', {
                id: this.$route.params.id,
                status: false
            })
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
    }
</style>