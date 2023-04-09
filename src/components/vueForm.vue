<script setup>
import {ref} from 'vue';
import estados from '../_data/estados';
import { usuario, newLang, newHobbies, mostrarCard, mostrarForm } from '../_data/usuario';
const senhaValidacao = ref('');

function validacaoDeDados(){
  let alertaExibido = false;
  let valido = true;
  Object.keys(usuario.value).forEach(propriedade => {
    if(Array.isArray(usuario.value[propriedade])) {
      if(usuario.value[propriedade].length === 0 && !alertaExibido){
        alert('Você precisa ter pelo menos um hobbie e saber uma linguagem de programação.');
        alertaExibido = true;
        valido = false;
      }
    }
  });
  Object.keys(usuario.value).forEach(propriedade => {
    if(typeof usuario.value[propriedade] === 'string'){
      if(usuario.value[propriedade] === '' && !alertaExibido){
        alert('Algum campo não foi preenchido.');
        alertaExibido = true;
        valido = false;
      }
    }
  });
  if (senhaValidacao.value !== usuario.value.senha){
    alert('Você deve confirmar sua senha.');
    valido = false;
  }
  const regexEmail = /^\S+@\S+\.\S+$/;
      if(!regexEmail.test(usuario.value.email) && !alertaExibido){
        alert('O email informado não é válido.');
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
    class="bg-black shadow-lg shadow-black flex flex-col w-1/6 min-h-fit rounded-lg text-center items-center "
  >
    <div class="items-center text-center">
      <label class="block text-base font-semibold">Nome</label> 
      <input type="text" v-model="usuario.nome" class="block rounded-lg w-2/2 m-auto text-center" />
      <label class="block text-base font-semibold">E-mail</label>
      <input type="email" v-model="usuario.email" class="block rounded-lg w-2/2 m-auto text-center" />
      <label class="block text-base font-semibold">Senha</label>
      <input type="password" v-model="usuario.senha" class="block rounded-lg w-2/2 m-auto text-center" />
      <label class="block text-base font-semibold">Confirmar Senha</label>
      <input type="password" v-model="senhaValidacao" class="block rounded-lg w-2/2 m-auto text-center" />
      <label class="block text-base font-semibold">Data de Nascimento</label>
      <input
        type="date"
        v-model="usuario.dataDeNascimento"
        class="block rounded-lg w-2/2 m-auto text-center text-center"
      />
      <label class="block text-base font-semibold">Endereço</label>
      <input type="text" v-model="usuario.endereco" class="block rounded-lg w-2/2 m-auto text-center" />
      <label class="block text-base font-semibold">Estado</label>
      <select v-model="usuario.estado" class="block rounded-lg w-2/2 m-auto text-center">
        <option v-for="estado in estados" :key="estado.sigla" :value="estado">
          {{ estado.nome }}
        </option>
      </select>
      <label class="block text-base font-semibold">Cidade:</label>
      <select v-model="usuario.cidade" class="block rounded-lg w-2/2 m-auto text-center">
        <option v-for="cidade in usuario.estado.cidades" :key="cidade" :value="cidade">
          {{ cidade }}
        </option>
      </select>
      <label class="block text-base font-semibold">Envie alguns dos seus hobbies:</label>
      <input
        class="block rounded-lg w-2/2 m-auto text-center"
        type="text"
        v-model="newHobbies"
        @keypress.enter="
          usuario.hobbies.push(newHobbies);
          newHobbies = ''
        "
      />
      <label class="block text-base font-semibold"
        >Envie as linguagens <br> de programação você que sabe:</label
      >
      <input
        type="text"
        class="block rounded-lg w-2/2 m-auto text-center"
        v-model="newLang"
        @keypress.enter="
          usuario.linguagens.push(newLang);
          newLang = '' "
      />
      <label class="block text-base font-semibold">Faça a sua biografia:</label>
      <textarea v-model="usuario.biografia" rows="4" class="block rounded-lg w-2/2 m-auto text-justify"></textarea>
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
