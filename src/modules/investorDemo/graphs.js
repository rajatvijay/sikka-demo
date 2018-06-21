import {
  select,
  // scaleOrdinal,
  // schemeAccent,
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  forceCollide,
} from 'd3';

export function makeForceDirectedGraph (data, elementId) {
  // console.log (data, elementId);
  // debugger;
  const elementSelector = '#' + elementId;
  var svg = select (elementSelector),
    width = +svg.attr ('width'),
    height = +svg.attr ('height');

  const radius = 4;

  // WARNING: Bad thing to do
  // Remove the old svg
  document.getElementById (elementId).innerHTML = null;

  // var color = scaleOrdinal (schemeAccent);

  var simulation = forceSimulation ()
    .force (
      'link',
      forceLink ()
        .id (function (d) {
          return d.id;
        })
        .distance (function (link) {
          return 100 - Number (link.value);
        })
    )
    // .strength (0.025)
    // push nodes apart to space them out
    .force ('charge', forceManyBody ())
    // add some collision detection so they don't overlap
    .force ('collide', forceCollide ().radius (12))
    // and draw them around the centre of the space
    .force ('center', forceCenter (width / 2, height / 2));

  var link = svg
    .append ('g')
    .attr ('class', 'links')
    .selectAll ('line')
    .data (data.links)
    .enter ()
    .append ('line')
    .attr ('stroke-width', function (d) {
      return 1;
    });

  var node = svg
    .append ('g')
    .attr ('class', 'nodes')
    .selectAll ('circle')
    .data (data.nodes)
    .enter ()
    .append ('circle')
    .attr ('r', function (d) {
      return d.isCentroid ? radius + 2 : d.radius || radius;
    })
    .attr ('fill', function (d) {
      return d.color || data.color;
    });
  // // .call (
  // //   drag ()
  // //     .on ('start', dragstarted)
  // //     .on ('drag', dragged)
  // //     .on ('end', dragended)
  // );

  node.append ('title').text (function (d) {
    return d.isCentroid ? 'Sub-Cluster' : d.id;
  });

  link.append ('title').text (function (d) {
    return d.value;
  });

  simulation.nodes (data.nodes).on ('tick', ticked);

  simulation.force ('link').links (data.links);

  // simulation.linkDistance (function (d) {
  //   return d.value;
  // });

  function ticked () {
    link
      .attr ('x1', function (d) {
        return d.source.x;
      })
      .attr ('y1', function (d) {
        return d.source.y;
      })
      .attr ('x2', function (d) {
        return d.target.x;
      })
      .attr ('y2', function (d) {
        return d.target.y;
      });

    node
      .attr ('cx', function (d) {
        return (d.x = Math.max (radius, Math.min (width - radius - 10, d.x)));
      })
      .attr ('cy', function (d) {
        return (d.y = Math.max (radius, Math.min (height - radius - 10, d.y)));
      });
  }

  // function dragstarted (d) {
  //   if (!event.active) simulation.alphaTarget (0.3).restart ();
  //   d.fx = d.x;
  //   d.fy = d.y;
  // }

  // function dragged (d) {
  //   d.fx = event.x;
  //   d.fy = event.y;
  // }

  // function dragended (d) {
  //   if (!event.active) simulation.alphaTarget (0);
  //   d.fx = null;
  //   d.fy = null;
  // }
}
