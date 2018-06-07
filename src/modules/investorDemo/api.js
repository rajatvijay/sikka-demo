import axios from 'axios';

const colors = [
  'rgb(56, 108, 176)',
  'rgb(127, 201, 127)',
  'rgb(253, 192, 134)',
  'rgb(190, 174, 212)',
  'rgb(127, 201, 127)',
  'rgb(253, 192, 134)',
  'rgb(190, 174, 212)',
  'rgb(56, 108, 176)',
];
const BASE_URL = 'http://35.233.191.127/';
// const BASE_URL = 'http://localhost:8000/';

// TODO: Handle the case of false status
// TODO: Handle the case of errors

export const getInitialGraphData = () =>
  axios ({
    method: 'get',
    url: BASE_URL + 'demo/user/cluster/',
  })
    .then (res => {
      return res.data.data.raw_data;
    })
    .then (data => {
      const graphData = Object.keys (data).reduce ((a, c, i) => {
        a[c] = {
          nodes: prepareData (data[c])[0],
          links: prepareData (data[c])[1],
          color: colors[i],
        };
        return a;
      }, {});
      return graphData;
    });

export const submitFormData = formPayload =>
  axios ({
    method: 'post',
    url: BASE_URL + 'demo/user/cluster/',
    data: formPayload,
  }).then (res => res.data.data.user_cluster_similarity);

function prepareData (cluster) {
  var nodes = Object.keys (cluster).reduce ((a, c) => {
    const groupNodes = Object.keys (cluster[c]).map (p => ({
      id: Number (p),
      group: Number (c),
    }));
    return [...a, ...groupNodes, {id: Number (c), group: Number (c)}];
  }, []);

  var links = Object.keys (cluster).reduce ((a, c) => {
    const groupLinks = Object.keys (cluster[c]).map (p => ({
      source: Number (p),
      target: Number (c),
      value: cluster[c][p],
    }));
    return [...a, ...groupLinks];
  }, []);

  links = [
    ...links,
    ...Object.keys (cluster).map ((c, i, arr) => {
      if (i + 1 < arr.length) {
        return {
          source: Number (c),
          value: 80,
          target: Number (arr[i + 1]),
        };
      } else {
        return {
          source: Number (c),
          value: 80,
          target: Number (arr[0]),
        };
      }
    }),
  ];
  return [nodes, links];
}
