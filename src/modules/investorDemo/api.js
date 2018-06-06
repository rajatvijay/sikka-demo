import axios from 'axios';

const BASE_URL = 'http://35.233.191.127/';

// TODO: Handle the case of false status
// TODO: Handle the case of errors

export const getInitialGraphData = () =>
  axios ({
    method: 'get',
    url: BASE_URL + 'heartbeat',
  }).then (res => res.data);

export const submitFormData = formPayload =>
  axios ({
    method: 'post',
    url: BASE_URL + 'car/insurance',
    data: formPayload,
  }).then (res => res.data);
