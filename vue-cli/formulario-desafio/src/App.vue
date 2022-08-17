<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<!-- Exercicio 02 -->
		<!-- Só mostrar o fomulário de não tiver sido submetido -->
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<CompPersonalizado lbl="Nome">
					<input type="text" v-model.lazy.trim="usuario.nome">
				</CompPersonalizado>
				<CompPersonalizado lbl="Sobrenome">
					<input type="text" v-model.lazy.trim="usuario.sobrenome">
				</CompPersonalizado>
				<!-- Esse componente deve receber Nome e Sobrenome -->
				<!-- Email -->
				<Rotulo nome="E-mail">
					<input type="text" v-model.lazy.trim="usuario.email">
				</Rotulo>
				<!-- Senha -->
				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</Rotulo>
				<!-- Armazenar Dados? (Sim/Não) -->
				<Rotulo nome="Armazenar Dados?">
					<span class="mr-4"><input type="radio" value="Sim" v-model="dados"> Sim</span>
					<span class="mr-4"><input type="radio" value="Nao" v-model="dados"> Não</span>
				</Rotulo>
				<button @click.prevent="acao">Enviar</button>
			</form>
			<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
			<div class="painel" v-if="enviado">
				<div class="cabecalho">Resultado</div>
				<template v-if="dados == 'Sim'">
					<Rotulo nome="Nome Completo">
						<span>{{ usuario.nome }} {{ usuario.sobrenome }}</span>
					</Rotulo>
					<Rotulo nome="E-mail">
						<span>{{ usuario.email }}</span>
					</Rotulo>
					<Rotulo nome="Senha">
						<span>{{ usuario.senha }}</span>
					</Rotulo>
					<Rotulo nome="Armazenar Dados?">
						<span>{{ dados }}</span>
					</Rotulo>
				</template>
				<template v-else>
					<h2>Os dados não foram armazenados</h2>
				</template>
				<button @click.prevent="acao">Reenviar</button>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import CompPersonalizado from './components/compPersonalizado.vue'

export default {
	name: 'app',
	props: {
        value: {
            type: Boolean,
        }
    },
	data() {
		return {
			usuario: {
				email: '',
				senha: '',
				nome: '',
				sobrenome: ''
			},
			dados: 'Sim',
			enviado: false
		}
	},
	components: { Rotulo, CompPersonalizado },
	methods: {
		acao() {
			if(!this.enviado){
				this.enviado = true
			}else{
				this.enviado = false
			}
		}
	},
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
