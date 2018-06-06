import {
  select,
  scaleOrdinal,
  schemeAccent,
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  drag,
  event,
} from 'd3';

export function makeForceDirectedGraph (data, elementId) {
  var svg = select ('svg'),
    width = +svg.attr ('width'),
    height = +svg.attr ('height');

  // WARNING: Bad thing to do
  // Remove the old svg
  document.getElementsByTagName ('svg')[0].innerHTML = null;

  var color = scaleOrdinal (schemeAccent);

  var simulation = forceSimulation ()
    .force (
      'link',
      forceLink ().id (function (d) {
        return d.id;
      })
    )
    .force ('charge', forceManyBody ())
    .force ('center', forceCenter (width / 2, height / 2));

  var link = svg
    .append ('g')
    .attr ('class', 'links')
    .selectAll ('line')
    .data (data.links)
    .enter ()
    .append ('line')
    .attr ('stroke-width', function (d) {
      return Math.sqrt (d.value);
    });

  var node = svg
    .append ('g')
    .attr ('class', 'nodes')
    .selectAll ('circle')
    .data (data.nodes)
    .enter ()
    .append ('circle')
    .attr ('r', 5)
    .attr ('fill', function (d) {
      return color (d.group);
    })
    .call (
      drag ()
        .on ('start', dragstarted)
        .on ('drag', dragged)
        .on ('end', dragended)
    );

  node.append ('title').text (function (d) {
    return d.id;
  });

  simulation.nodes (data.nodes).on ('tick', ticked);

  simulation.force ('link').links (data.links);

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
        return d.x;
      })
      .attr ('cy', function (d) {
        return d.y;
      });
  }

  function dragstarted (d) {
    if (!event.active) simulation.alphaTarget (0.3).restart ();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged (d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended (d) {
    if (!event.active) simulation.alphaTarget (0);
    d.fx = null;
    d.fy = null;
  }
}
