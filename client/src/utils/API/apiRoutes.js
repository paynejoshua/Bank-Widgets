import axios from "axios";

const API = {
    getRate: function(){
        return axios({
         method: "GET",   
         url: "/API/getRate.php",
            
        })
      },

    
}

export default API