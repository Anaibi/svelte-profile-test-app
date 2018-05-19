export default {
  getUsers() {
    //python -m SimpleHTTPServer
    //
    // console.log(JSON.stringify(USERS));
    return fetch('http://localhost:5000/data/users.json')
      .then(res => {
        return res.json();
      });
  },
  findUser(id){
    return new Promise(resolve => {
      this.getUsers().then(users => {
        resolve(users.find(x => x.id === id));
      });
    });
  },
  findUsers(ids) {
    var users = [];
    return new Promise(resolve => {
      this.getUsers().then(allUsers => {
        ids.forEach(id => users.push(allUsers.find(x => x.id === id)));
        resolve(users);
      });

    })
  }
};
