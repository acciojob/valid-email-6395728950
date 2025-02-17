function validEmail(str) {
   if(str.length==0){
	   return false;
   }
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailRegex.test(str)){
	  return true;
  }
	return false;

	
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
