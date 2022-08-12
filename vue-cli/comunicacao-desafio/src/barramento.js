import Vue from 'vue'

export default new Vue({
    methods: {
        setUser(usuario) {
            this.$emit('usuarioSelecionado', usuario)
        },
        onUser(callback) {
            this.$on('usuarioSelecionado', callback)
        }
    }
})