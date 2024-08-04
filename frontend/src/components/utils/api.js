import axios from "axios";

  export const fetchDataFromApi = async(url) => {
    try {
      const {data} = await axios.get(`${url}`);
      console.log(data)
      return data;
    } catch (error) {
       console.log("code fat gya"+error)
    }
  }