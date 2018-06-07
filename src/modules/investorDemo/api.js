import axios from 'axios';
import {schemeAccent, scaleOrdinal} from 'd3';

const colors = scaleOrdinal (schemeAccent);
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
        const cluster = {
          nodes: prepareData (data[c])[0],
          links: prepareData (data[c])[1],
          color: colors (i),
        };
        if (cluster.nodes.length) {
          a[c] = {
            nodes: prepareData (data[c])[0],
            links: prepareData (data[c])[1],
            color: colors (i),
          };
        }
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
