<template>
    <div class="form">
        <input type="text" v-model="form.title" placeholder="título">
        <input type="date" v-model="form.date" pattern="\d{4}-\d{2}-\d{2}" min="2021-01-01" max="2100-01-01">
        <input type="text" v-model="tags" placeholder="tags (até duas, separadas por vírgula)">
        <input type="icon" v-model="form.icon" placeholder="icon">
        <input type="checkbox" v-model="form.favorite">
        <button @click="addTask">Salvar</button>
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
                favorite: false
            }
        }
    },
    created() {
        this.haveParams()
    },
    methods: {
        addTask (){
            // const refactDate = this.form.date.split('-')
            // const taskDate = new Date(`${refactDate[1]}-${refactDate[2]}-${refactDate[0]}`)
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
                this.$store.dispatch('editTask', {
                    id: this.$route.params.id,
                    title: this.form.title,
                    date: this.form.date,
                    tags: taskTags,
                    icon: this.form.icon,
                    favorite: this.form.favorite
                })
        
            // ADICIONAR
            } else {
                this.$store.dispatch('addTask', {
                    title: this.form.title,
                    date: this.form.date,
                    tags: taskTags,
                    icon: this.form.icon,
                    favorite: this.form.favorite
                })
            }
            this.clearForm()
        },
        trueDate (valor) {
            return Date(valor)
        },
        haveParams () {
            const param = this.$route.params.id
            if(param){
                const getTask = this.$store.getters['getAll'].find(x => x._id == param)
                this.form.title = getTask.title
                //this.form.date = new Date(getTask.date)
                const getTaskDate = new Date(getTask.date).toLocaleDateString().split('/')
                this.form.date = `${getTaskDate[2]}-${getTaskDate[1]}-${getTaskDate[0]}`
                this.form.icon = getTask.icon
                this.tags = getTask.tags
                this.form.favorite = getTask.favorite
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

    .form > input {
        padding: 5px;
        font-size: 14px;
    }

    .form > input::placeholder {
        text-transform: uppercase;
    }

    .form > button {
        padding: 5px;
        text-transform: uppercase;
    }
</style>