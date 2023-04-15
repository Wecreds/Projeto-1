<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
import estados from '../_data/estados'
import { usuario, newLang, newHobbies, mostrarForm } from '../_data/usuario'
const senhaValidacao = ref('')
const mostrarSenha = ref(false)
const eyes = '/eyes.png'
const closedEyes = '/closed_eyes.png'

function validacaoDeDados() {
  let alertaExibido = false
  let valido = true
  Object.keys(usuario.value).forEach((classe) => {
    if (Array.isArray(usuario.value[classe])) {
      if (usuario.value[classe].length === 0 && !alertaExibido) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Vocé não enviou nenhum hobbie ou linguagem de programacao.'
        })
        alertaExibido = true
        valido = false
      }
    }
  })
  Object.keys(usuario.value).forEach((classe) => {
    if (typeof usuario.value[classe] === 'string') {
      if (usuario.value[classe] === '' && !alertaExibido) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algum dos campos nao foi preenchido.'
        })
        alertaExibido = true
        valido = false
      }
    }
  })
  if (senhaValidacao.value !== usuario.value.senha) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Confirme sua senha corretamente.'
    })
    valido = false
  }
  const regexEmail = /^\S+@\S+\.\S+$/
  if (!regexEmail.test(usuario.value.email) && !alertaExibido) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Insira um email valido.'
    })
    alertaExibido = true
    valido = false
  }

  if (valido) {
    mostrarForm.value = false
  }
}

function handleFileUpload(e) {
  const target = e.target
  if (target && target.files) {
    const file = target.files[0]
    usuario.value.avatar = URL.createObjectURL(file)
  }
}
</script>

<template>
  <div
    class="bg-black shadow-lg shadow-black flex flex-col md:w-1/2 xl:w-1/5 2xl:w-1/6 py-3 rounded-lg text-center items-center opacity-90"
  >
    <div class="items-center text-center">
      <label class="block text-base font-semibold">Nome</label>
      <input
        type="text"
        v-model="usuario.nome"
        class="block w-full m-auto text-center focus:outline-none appearance-none border-b-2 focus:border-orange bg-transparent text-base"
      />
      <label class="block text-base font-semibold">E-mail</label>
      <input
        type="email"
        v-model="usuario.email"
        class="block w-full m-auto text-center focus:outline-none appearance-none border-b-2 focus:border-orange bg-transparent text-base"
      />
      <label class="block text-base font-semibold">Senha</label>
      <img
        :src="mostrarSenha ? eyes : closedEyes"
        @click="mostrarSenha = !mostrarSenha"
        class="absolute w-8 ml-48 mt-1.5 cursor-pointer"
      />
      <input
        :type="mostrarSenha ? 'text' : 'password'"
        v-model="usuario.senha"
        class="block w-full m-auto text-center focus:outline-none appearance-none border-b-2 focus:border-orange bg-transparent text-base"
      />
      <label class="block text-base font-semibold">Confirmar Senha</label>
      <img
        :src="mostrarSenha ? eyes : closedEyes"
        @click="mostrarSenha = !mostrarSenha"
        class="absolute w-8 ml-48 mt-1.5 cursor-pointer"
      />
      <input
        :type="mostrarSenha ? 'text' : 'password'"
        v-model="senhaValidacao"
        class="block w-full m-auto text-center focus:outline-none appearance-none border-b-2 focus:border-orange bg-transparent text-base"
      />
      <label class="block text-base font-semibold">Data de Nascimento</label>
      <input
        type="date"
        v-model="usuario.data"
        class="block w-full m-auto text-center focus:outline-none focus:shadow-outline leading-normal border-b-2 appearance-none bg-transparent text-base"
      />
      <label class="block text-base font-semibold">Endereço</label>
      <input
        type="text"
        v-model="usuario.endereco"
        class="block w-full m-auto text-center focus:outline-none appearance-none border-b-2 focus:border-orange bg-transparent text-base"
      />
      <label class="block text-base font-semibold">Estado</label>
      <select
        v-model="usuario.estado"
        class="block w-full m-auto text-center focus:outline-none appearance-none border-b-2 focus:border-orange bg-black text-base "
      >
        <option v-for="estado in estados" :key="estado.sigla" :value="estado" class="w-full">
          {{ estado.nome }}
        </option>
      </select>
      <label class="block text-base font-semibold">Cidade:</label>
      <select
        v-model="usuario.cidade"
        class="block w-full m-auto text-center focus:outline-none appearance-none border-b-2 focus:border-orange bg-black text-base"
      >
        <option v-for="cidade in usuario.estado.cidades" :key="cidade" :value="cidade" class="w-full">
          {{ cidade }}
        </option>
      </select>
      <label class="block text-base font-semibold">Envie alguns dos seus hobbies:</label>
      <input
        class="block w-full m-auto text-center focus:outline-none appearance-none border-b-2 focus:border-orange bg-transparent text-base"
        type="text"
        v-model="newHobbies"
        @keypress.enter="
          usuario.hobbies.push(newHobbies);
          newHobbies = ''
        "
      />
      <label class="block text-base font-semibold"
        >Envie as linguagens <br />
        de programação você que sabe:</label
      >
      <input
        type="text"
        class="block w-full m-auto text-center focus:outline-none appearance-none border-b-2 focus:border-orange bg-transparent text-base"
        v-model="newLang"
        @keypress.enter="
          usuario.linguagens.push(newLang);
          newLang = ''
        "
      />
      <label class="block text-base font-semibold">Faça a sua biografia:</label>
      <textarea
        v-model="usuario.biografia"
        rows="4"
        class="block text-base w-full m-auto text-justify focus:outline-none appearance-none border-b-2 focus:border-orange bg-transparent text-base"
      ></textarea>
    </div>
    <label class="block text-base font-semibold">Envie um avatar</label>
    <input
      class="rounded-lg m-auto w-full text-center text-base appearance-none block"
      type="file"
      @change="handleFileUpload($event)"
    />
    <button class="bg-base rounded-lg p-1 m-2" @click="validacaoDeDados()">Enviar</button>
  </div>
</template>
