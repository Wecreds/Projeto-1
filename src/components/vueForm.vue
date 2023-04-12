<script setup>
import {ref} from 'vue';
import Swal from 'sweetalert2'
import estados from '../_data/estados';
import { usuario, newLang, newHobbies, mostrarCard, mostrarForm } from '../_data/usuario';
const senhaValidacao = ref('');

function validacaoDeDados(){
  let alertaExibido = false;
  let valido = true;
  Object.keys(usuario.value).forEach(classe => {
    if(Array.isArray(usuario.value[classe])) {
      if(usuario.value[classe].length === 0 && !alertaExibido){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Vocé não enviou nenhum hobbie ou linguagem de programacao.',
        });
        alertaExibido = true;
        valido = false;
      }
    }
  });
  Object.keys(usuario.value).forEach(classe => {
    if(typeof usuario.value[classe] === 'string'){
      if(usuario.value[classe] === '' && !alertaExibido){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algum dos campos nao foi preenchido.',
        });
        alertaExibido = true;
        valido = false;
      }
    }
  });
  if (senhaValidacao.value !== usuario.value.senha){
    Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Confirme sua senha corretamente.',
        });
    valido = false;
  }
  const regexEmail = /^\S+@\S+\.\S+$/;
      if(!regexEmail.test(usuario.value.email) && !alertaExibido){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Insira um email valido.',
        });
        alertaExibido = true;
        valido = false;
      }

  if (valido) {
    mostrarCard.value = true;
    mostrarForm.value = false;
  }
}  

</script>

<template>
  <div
    class="bg-black shadow-lg shadow-black flex flex-col w-1/6 h-fit py-3 rounded-lg text-center items-center opacity-90 "
  >
    <div class="items-center text-center">
      <label class="block text-base font-semibold">Nome</label> 
      <input type="text" v-model="usuario.nome" class="block rounded-lg w-2/2 m-auto text-center focus:outline-none appearance-none border-2 focus:border-orange" />
      <label class="block text-base font-semibold">E-mail</label>
      <input type="email" v-model="usuario.email" class="block rounded-lg w-2/2 m-auto text-center focus:outline-none appearance-none border-2 focus:border-orange" />
      <label class="block text-base font-semibold">Senha</label>
      <input type="password" v-model="usuario.senha" class="block rounded-lg w-2/2 m-auto text-center focus:outline-none appearance-none border-2 focus:border-orange" />
      <label class="block text-base font-semibold">Confirmar Senha</label>
      <input type="password" v-model="senhaValidacao" class="block rounded-lg w-2/2 m-auto text-center focus:outline-none appearance-none border-2 focus:border-orange" />
      <label class="block text-base font-semibold">Data de Nascimento</label>
      <input
        type="date"
        v-model="usuario.data"
        class="block rounded-lg w-2/2 m-auto text-center focus:outline-none focus:shadow-outline leading-normal border-2 appearance-none"
      />
      <label class="block text-base font-semibold">Endereço</label>
      <input type="text" v-model="usuario.endereco" class="block rounded-lg w-2/2 m-auto text-center focus:outline-none appearance-none border-2 focus:border-orange"/>
      <label class="block text-base font-semibold">Estado</label>
      <select v-model="usuario.estado" class="block rounded-lg w-2/2 m-auto text-center focus:outline-none appearance-none border-2 focus:border-orange">
        <option v-for="estado in estados" :key="estado.sigla" :value="estado">
          {{ estado.nome }}
        </option>
      </select>
      <label class="block text-base font-semibold">Cidade:</label>
      <select v-model="usuario.cidade" class="block rounded-lg w-2/2 m-auto text-center focus:outline-none appearance-none border-2 focus:border-orange">
        <option v-for="cidade in usuario.estado.cidades" :key="cidade" :value="cidade">
          {{ cidade }}
        </option>
      </select>
      <label class="block text-base font-semibold">Envie alguns dos seus hobbies:</label>
      <input
        class="block rounded-lg w-2/2 m-auto text-center focus:outline-none appearance-none border-2 focus:border-orange"
        type="text"
        v-model="newHobbies"
        @keypress.enter="
          usuario.hobbies.push(newHobbies);
          newHobbies = ''
        "
      />
      <label class="block text-base font-semibold "
        >Envie as linguagens <br> de programação você que sabe:</label
      >
      <input
        type="text"
        class="block rounded-lg w-2/2 m-auto text-center focus:outline-none appearance-none border-2 focus:border-orange"
        v-model="newLang"
        @keypress.enter="
          usuario.linguagens.push(newLang);
          newLang = '' "
      />
      <label class="block text-base font-semibold">Faça a sua biografia:</label>
      <textarea v-model="usuario.biografia" rows="4" class="block rounded-lg w-2/2 m-auto text-justify focus:outline-none appearance-none border-2 focus:border-orange"></textarea>
      <button
        class="bg-base rounded-lg p-1 m-2"
        @click="
          validacaoDeDados()
        "
      >
        Enviar
      </button>
    </div>
  </div>
</template>
