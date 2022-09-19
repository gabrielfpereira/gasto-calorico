import { alimentos } from "./caloriasAlimentos"

export default {
    find: (name) => { 
        return alimentos.find( (item) => item.nome == name)
    },
    findAll: () => {
        return alimentos
    }
}