// Nomenclatura de Variáveis

// 1. O nome das variável nao precisa ser curto, nem diminutivo, precisa ser claro  

const users = ['Ana', 'Pedro', 'Maria']


const filtered = users.filter(u => {
  return u.startsWith('A')
})

const usersStartingWithLetterA = users.filter(user => {
  return user.startsWith('A')
})

/* Em um codigo grande, nao é posivel saber o que 'filtered' contem, 
  imagine diferentes filtros, fica impossivel de dar manutencao e entender 
  -------------------------------------------------------------------------- */

// 2.  Evite nomes genéricos (data, response, list, args, params) 

/* so fala o tipo do dado, mas nao o que tem nele, caso tenha alguma validação,
   fica muito difícil saber o que ta sendo validado so de bater o olho
*/
function getUsers() {
  const data = getUsersFromDataBase()
  return data
}

function getUsers() {
  const users = getUsersFromDataBase()
  return users
}

// --------------------------------------------------------------------------
