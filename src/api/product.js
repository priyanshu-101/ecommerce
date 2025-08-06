import axios from "axios";

export const getproducts = async()=>{
    try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
        return response.data;
    }catch(error){
        console.error("Error fetching products:", error);
        throw error;
    }
};
