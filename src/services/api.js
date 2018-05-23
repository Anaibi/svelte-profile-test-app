const PATH = 'http://localhost:5000';
const DATA_PATH = PATH + '/data';

export default {
  getUsers() {
    //python -m SimpleHTTPServer
    //
    // console.log(JSON.stringify(USERS));
    return fetch(`${DATA_PATH}/users.json`)
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
    return fetch(`${DATA_PATH}/user_${id}/posts.json`)
      .then(res => {
        return res.json();
      });
  },
  getProfile(id) {
    return fetch(`${DATA_PATH}/user_${id}/profile.json`)
      .then(res => {
        return res.json();
      });
  },
  getProjects(id) {
    return fetch(`${DATA_PATH}/user_${id}/projects.json`)
      .then(res => {
        return res.json();
      });
  },
  getHighlights() {
    return fetch(`${DATA_PATH}/highlights.json`)
      .then(res => {
        return res.json();
      });
  },
  // getHighlight(id, tags) {
  //   var result,
  //       commonTags = 0,
  //       intersection = [];
  //   return fetch(`${DATA_PATH}/highlights.json`)
  //     .then(res => {
  //       // return res.json();
  //       res.json()
  //         .then(highlights => {
  //           highlights.forEach(highlight => {
  //             if (highlight.id === id) return;
  //             intersection = tags.filter(el => highlight.tags.includes(el));
  //             if (intersection.length > commonTags) {
  //               result = highlight;
  //               commonTags = intersection.length;
  //             }
  //           });
  //           return result;
  //         });
  //     });
  // }
  getHiring() {
    return fetch(`${DATA_PATH}/hiring.json`)
      .then(res => {
        return res.json();
      });
  }
};
