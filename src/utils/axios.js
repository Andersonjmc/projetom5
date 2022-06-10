import axios from "axios";

export const api = axios.create({
    baseURL:`http://localhost:3030/`
});

export const getBebidas = async ()=>{
   return await api.get(`bebidas`);
}
export const getPorMarca = async (marca)=>{
   return await api.get(`bebidas/marca/${marca}`)    
} 

export const getPorNome = async (nome) =>{
    return await api.get(`bebidas/nome/${nome}`)
}

export const getPorID = async (id) =>{
    return await api.get(`bebidas/${id}`)
}

export const postBebida = async (nome, preco, sobre, tipo, img, marca)=>{
    return await api.post(`bebidas`,{nome: nome, preco: preco, sobre: sobre, tipo: tipo, img: img, marca: marca})
}

export const putBebida = async (id) =>{
    return await api.put(`bebidas/${id}`)
}

export const deleteBebida = async (id) =>{
    return await api.delete(`bebidas/${id}`)
}