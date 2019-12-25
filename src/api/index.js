const art = {
  name: "Awesome Arts",
  city: "Chicago LP",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae molestias aliquam maiores provident, vitae qui alias dolore molestiae id suscipit? Nihil, esse dolorem? Ab nostrum deleniti ducimus non sapiente velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga odio, itaque quibusdam facere inventore aliquid assumenda, velit repudiandae temporibus voluptatem, optio omnis tempora. Dicta ipsa quisquam odit voluptatibus totam.",
  tags: "street, modern, fashion, young",
  author: "Aliaksei Loi",
  link: "https://www.youtube.com/watch?v=8j741TUIET0&list=RDYc7-krRX8uA&index=8"
};

const comments = [
  {
    id: "112",
    name: "Aliaksei",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ut neque dolore optio rerum iure, expedita qui odio voluptatum? Eveniet!"
  },
  {
    id: "212",
    name: "Sergey",
    message: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ut"
  },
  {
    id: "312",
    name: "David",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ut neque dolore optio rerum iure, expedita qui odio voluptatum Eveniet! Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptate, illo?"
  }
];

const images = [
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5394344378001_5393784709001-vs.jpg?pubId=5104226627001&videoId=5393784709001",
  "https://www.carredartistes.com/img/cms/Blog/2019-04-Street%20art/intro-article%20(1).jpg",
  "http://images.unsplash.com/photo-1561059488-916d69792237?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
  "http://graffiti-art.ru/wp-content/uploads/2019/11/5-9-550x378.jpg",
  "http://www.dubaiweek.ae/wp-content/uploads/2019/07/Street-Art-city-centre-meaisem.jpg"
];

export const getArt = ms =>
  new Promise(res => setTimeout(() => res(art), ms || 1000));

export const getComments = ms =>
  new Promise(res => setTimeout(() => res(comments), ms || 1000));

export const getImages = ms =>
  new Promise(res => setTimeout(() => res(images), ms || 1000));
