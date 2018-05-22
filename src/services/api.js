const PROFILE = {
  details: {
    rating: 4.8,
    followers: 320,
    following: 147,
    perf: 56,
    reviews: 42,
  },
  banner: {
    img: 'https://i.imgur.com/MbMnM74.jpg',
    width: 130,
    top: -60,
    left: 0
  }
};
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
  },
  getPosts(id) {
    return fetch(`http://localhost:5000/data/user_${id}/posts.json`)
      .then(res => {
        return res.json();
      });
  },
  getProfile(id) {
    return fetch(`http://localhost:5000/data/user_${id}/profile.json`)
      .then(res => {
        return res.json();
      });
  },
  getProjects(id) {
    return fetch(`http://localhost:5000/data/user_${id}/projects.json`)
      .then(res => {
        return res.json();
      });
  }
};
