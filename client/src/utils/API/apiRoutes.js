import axios from "axios";

const BASE_URL = "http://localhost:8080/Bank-Widgets/client/src/utils"

const API = {
    getRate: function(){
        return axios({
         method: "GET",   
         url: BASE_URL + "/API/getRate.php",
            
        })
      },

    // need to set up a post call that will pass the following parameters to the url: homePrice, downPayment, and interestRate
}

export default API