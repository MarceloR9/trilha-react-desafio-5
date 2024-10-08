import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    const { data, error } = await supabase
        .from('post')  
        .select('*')   
        .eq('id', id); 

    if (error) {
        console.error("Erro ao buscar o post:", error);
        return {}; 
    }

    if (data && data.length > 0) {
        return data[0]; 
    }

    return {}; 
}