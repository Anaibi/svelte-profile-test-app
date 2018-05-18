const USERS = [
  {
    id: '01',
    img: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg'
  },
  {
    id: '02',
    img: 'https://d3iw72m71ie81c.cloudfront.net/male-3.jpg',
    name: 'Mario Mendez',
    title: 'Senior Architect',
    link: ''
  },
  {
    id: '03',
    img: 'https://images.pexels.com/photos/274595/pexels-photo-274595.jpeg?h=350&auto=compress&cs=tinysrgb',
    name: 'Jessica Simmons',
    link: '',
  },
  {
    id: '04',
    img: 'https://tinyfac.es/data/avatars/087B1143-3859-4476-A85C-C120BBA0778F-500w.jpeg',
    name: '',
    link: '',
  },
  {
    id: '05',
    img: 'https://d3iw72m71ie81c.cloudfront.net/female-57.jpg',
    name: '',
    link: '',
  },
  {
    id: '06',
    img: '',
    name: 'Frank Goodman',
    title: 'Urban Planner',
    link: '',
    tags: ['architect']
  },
  {
    id: '07',
    img: '',
    name: 'Luiza L. Alves',
    title: 'Landscape Architect',
    link: '',
    tags: ['architect']
  },
  {
    id: '08',
    img: '',
    name: 'Cesar Arojo',
    title: 'Senior Architect',
    link: '',
    tags: ['architect']
  },
  {
    id: '09',
    img: '',
    name: 'Robin Drummont',
    title: 'Architect',
    link: '',
    tags: ['architect']
  },
  {
    id: '10',
    img: '',
    name: 'Myles Steven',
    title: 'Junior Architect',
    link: '',
    tags: ['architect']
  },
  {
    id: '11',
    img: '',
    name: 'Joel Sanders',
    title: 'Architect',
    location: 'New York',
    link: '',
    tags: ['architect']
  },
];

export default {
  getUsers() {
    //python -m SimpleHTTPServer
    //
    // console.log(JSON.stringify(USERS));
    return fetch('http://localhost:5000/data/users.json')
      .then(res => { console.log(res.json);
        return res.json();
      });
    // return new Promise((resolve) => {
    //   resolve(USERS);
    // });
  },
  findUser(id){
    return new Promise((resolve) => {
      // setTimeout(() => {
      //   resolve(USERS.find(x => x.id === id));
      // }, 1500);
      // resolve(USERS.find(x => x.id === id));
      var users = this.getUsers(),
          user = '';
      users.then((users) => {
        user = users.find(x => x.id === id);
      });
      resolve(user);
    });
  },
  findUsers(ids) {
    var users = [];
    ids.forEach(id => {
      users.push(USERS.find(x => x.id === id));
    });
    return new Promise((resolve) => {
      // resolve(users);
      setTimeout(() => {
        resolve(users);
      }, 1500);
    });
  }
};
