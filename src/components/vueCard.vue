<script setup>
import { usuario } from '../_data/usuario';
</script>

<template>

<div class="flex flex-col bg-black shadow-lg shadow-black w-1/6 rounded-lg py-1 opacity-90">
<div class="px-6 py-4">
    <div class="font-bold text-xl text-orange leading-none	">{{ usuario.nome }}</div>
    <div class="font-bold text-sm text-white leading-none	">{{ usuario.email }}</div>
    <div class="font-bold text-sm text-orange leading-none	">{{ usuario.data }} 🎂 <div class="text-right	"></div></div>
    <div class="font-bold text-base text-white text-justify">{{ usuario.biografia }}</div>

</div>
</div>

</template>