<script setup>
import vueForm from './components/vueForm.vue';
import vueCard from './components/vueCard.vue'
import {mostrarForm} from './_data/usuario';
</script>
<template>

<div class="bg-[url('/background.jpg')] bg-cover min-h-screen min-w-screen flex flex-col justify-center items-center">
<vueForm v-if="mostrarForm"></vueForm>
<vueCard v-else></vueCard>
</div>

</template>