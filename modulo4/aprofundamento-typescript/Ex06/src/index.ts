type Usuario = {
  name:string,
  email:string,
  role:string,
}

const Usuarios:Usuario[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "admin"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function retornEmailAdmins(lista:Usuario[]):string[] {
  const usuarioFiltrado: Usuario[] = lista.filter((usuario) => {
    return usuario.role === "admin"
  })

  const emails:string[] = usuarioFiltrado.map((usuario) => {
    return usuario.email
  })

  return emails
}

console.log(retornEmailAdmins(Usuarios))