import axios from "axios";

const BASE_URL = "http://localhost:8080/Bank-Widgets/client/src/utils"


const API = {
    getRate: function(){
        return axios({
         method: "GET",   
         url: BASE_URL + "/API/getRate.php",
            
        })
      },

    getPrice: function(data){
        return axios({
          method: "POST",
          url: BASE_URL + "/API/getPrice.php",
          data: data

        })
    }

    // need to set up a post call that will pass the following parameters to the url: homePrice, downPayment, and interestRate
}

export default API