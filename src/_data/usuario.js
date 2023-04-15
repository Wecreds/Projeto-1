import { ref } from 'vue'

export const usuario = ref({
    nome: '',
    email: '',
    avatar: null,
    senha: '',
    data: '',
    endereco: '',
    cidade: '',
    estado: '',
    hobbies: [],
    linguagens: [],
    biografia: '',
  })

export const newLang = ref('')
export const newHobbies = ref('')
export const mostrarForm = ref(true)
