const Api = {
 apiUrl: 'http://localhost:3001/tarefas',

  getAll: (body) => { // Retorna todos os itens da lista
    return fetch(Api.apiUrl, {
      method: 'GET',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(body)
    });
  }, 
  getOne: id => fetch(`${Api.apiUrl}/${id}`),// Retorna um elemento por id da lista
  
  create: (tarefa) => {
    return fetch(Api.apiUrl, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(tarefa),
    });
  },

  upDate: (tarefa, id)=> {
    return fetch (`${Api.apiUrl}/${id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body:JSON.stringify(tarefa)
    })
   },

   deleteOne: (id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
    })
  }); 
},
 
   
 
  deleteAll: () => {
    
     return fetch(`${Api.apiUrl}/` , {
      method: 'DELETE',
     
     
    }); 
  },
 
};


export default Api;
