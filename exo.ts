interface User {
   name: "Aline";
    id: 1; 
    status?:string; // attribut facultatif } 

function showStatus(user: User) : string | undefined{ 
  if(user.status){
      return user.status;
  } 
   }