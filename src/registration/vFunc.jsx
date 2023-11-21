
export const vFunc = {

    errorLog(b,e){
        if(b){
            e.style.width = '100%'
            e.style.height = 'auto'
            e.style.opacity = '1'
            e.style.padding = '8px'
        
          }else{
            e.style.width = '0'
            e.style.height = '0'
            e.style.opacity = '0'
            e.style.padding = '0'
            
          }
    },
    isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[,a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      },
    isValidPass(email) {
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        return passRegex.test(email);
    }
    
      
}