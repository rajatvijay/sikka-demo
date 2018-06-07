import axios from 'axios';

// const BASE_URL = 'http://35.233.191.127/';
const BASE_URL = 'http://localhost:8000/';

// TODO: Handle the case of false status
// TODO: Handle the case of errors

export const getInitialGraphData = () =>
  axios ({
    method: 'get',
    url: BASE_URL + 'demo/user/cluster/',
  }).then (res => {
    // console.log (res);
    return res.data;
  });
// .then (data => {
//   debugger;
//   const d = data.reduce ((acc, d) => {
//     acc[d.name] = d;
//     return acc;
//   }, {});
//   console.log (d);
//   return d;
// });

export const submitFormData = formPayload =>
  axios ({
    method: 'post',
    url: BASE_URL + 'car/insurance',
    data: formPayload,
  }).then (res => res.data);
