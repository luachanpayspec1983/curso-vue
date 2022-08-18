<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
					v-model="usuario.nome"
					placeholder="Informe o Nome"></b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg"
					v-model="usuario.email"
					placeholder="Informe o email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
			<b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2">Obter Usuarios</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong> {{ usuario.nome }}<br>
				<strong>E-mail: </strong> {{ usuario.email }}<br>
				<strong>Id: </strong> {{ id }}<br>
				<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" class="ml-2" @click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
// import Axios from 'axios'
export default {
	data() {
		return {
			usuarios: [],
			mensagens: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	// created() {
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'Maria',
	// 		email: 'maria@gmail.com'
	// 	}).then(res => console.log(res))
	// }
	methods: {
		limpar() {
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
		},
		salvar() {
			// this.$http.post('usuarios.json', this.usuario)
			// 	.then(() => this.limpar())
				// this.usuario.nome = ''
				// this.usuario.email = ''
				// this.usuario = ''}
			//verificando se é novo usuario ou editar
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(() => {
					this.limpar()
					this.mensagens.push({
						texto: 'Operação realizada com sucesso!',
						tipo: 'success'
					})
				})
		},
		carregar(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},
		excluir(id) {
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => this.limpar())
				.catch(() => {
					this.mensagens.push({
						texto: 'Problema ao excluir!',
						tipo: 'danger'
					})
				})
		},
		obterUsuarios() {
			// metodo get
			// Axios('https://curso-vue-6d6c4-default-rtdb.firebaseio.com/usuarios.json').then(resp => {
			this.$http('usuarios.json').then(resp => {
				this.usuarios = resp.data
				console.log(resp.data)
			})

			this.$http.defaults.headers.common['Authorization'] = 'abc123'
		},
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
