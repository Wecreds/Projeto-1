<script setup>
import { usuario } from '../_data/usuario'
</script>

<template>
  <div class="flex flex-col bg-black shadow-lg shadow-black w-1/6 rounded-lg opacity-90 px-5 py-3">
    <div class="flex items-center">
      <div class="font-bold text-xl text-orange">{{ usuario.nome }}</div>
      <div class="font-bold text-sm text-gray-200 ml-auto text-center"> 🎂 {{ usuario.data }}</div>
    </div>
    <div class="flex items-center">
    <div class="font-bold text-sm text-gray-200 opacity-90">{{ usuario.email }}</div>
    <div class="font-bold text-sm text-gray-200 ml-auto blur-sm hover:blur-0">{{ usuario.senha }}</div>
    </div>
    <div class="flex">
      <div class="font-bold text-sm text-orange">
        {{ usuario.cidade }}, {{ usuario.estado.sigla }}
      </div>
      <div class="font-bold text-sm text-gray-200 ml-auto">{{ usuario.endereco }}</div>
    </div>
    
      <div class="font-bold text-base text-gray-200 text-justify indent-4 py-1">
        {{ usuario.biografia }}
      </div>
    
    <div class="flex">
      <div class="font-bold text-sm text-orange w-1/2 text-center">
        Hobbies: <br />
        <span class="text-gray-200">{{ usuario.hobbies.join(', ') }}.</span>
      </div>
      <div class="font-bold text-sm text-orange ml-auto w-1/2 text-center">
        Linguagens de programação:<br />
        <span class="text-gray-200">{{ usuario.linguagens.join(', ') }}.</span>
      </div>
    </div>
  </div>
</template>
