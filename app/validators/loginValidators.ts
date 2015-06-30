export class CustomValidators{

  taille(c) {
	var e = parseInt(c.value);
	 
    if(e < 130 || e > 230 ) {
    	 console.log('cest bon');
      return {
        taille: true
      };
    }

    return null;
    
  },

  age(c) {
	var e = parseInt(c.value);
	 
    if(e < 7 || e > 77 ) {
    	 console.log('cest bon');
      return {
        age: true
      };
    }

    return null;
    
  },
  masse(c) {
	var e = parseInt(c.value);
	 
    if(e < 40 || e > 280 ) {
    	 console.log('cest bon');
      return {
        masse: true
      };
    }

    return null;
    
  }
}