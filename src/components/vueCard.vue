<script setup>
import { usuario } from '../_data/usuario';
</script>

<template>
<div class="flex flex-col bg-black shadow-lg shadow-black w-1/6 min-h-fit rounded-lg text-center items-center py-3 opacity-90">
    <span class="text-base font-semibold">
        <p>Nome: {{ usuario.nome }}</p>
        <p>E-mail: {{ usuario.email }}</p>
        <p>Senha: {{ usuario.senha }}</p>
        <p>Data de nascimento: {{ usuario.data }}</p>
        <p>Endereço: {{ usuario.endereco }}</p>
        <p>Cidade: {{ usuario.cidade }}</p>
        <p>Estado: {{ usuario.estado.sigla }}</p> <!-- se fosse para mostrar o nome do estado completo, so trocar o .sigla por .nome -->
        <p>Hobbies: {{ usuario.hobbies.join(", ") }}</p>
        <p>Linguagens: {{ usuario.linguagens.join(", ") }}</p>
        <p>Auto-biografia: {{ usuario.biografia }}</p>
    </span>

</div>
</template>