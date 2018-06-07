function getRandomInt (min, max) {
  min = Math.ceil (min);
  max = Math.floor (max);
  return Math.floor (Math.random () * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export const addNewPointInTheClusters = (clusters, point) => {
  const dummyNodeId = getRandomInt (500, 800);
  const pointsCluster = Object.keys (point)[0];

  const clusterSimilarities = point[pointsCluster];
  const nearestCentroid = Object.keys (clusterSimilarities).reduce (
    (maxKey, key, _, arr) =>
      clusterSimilarities[key] > clusterSimilarities[maxKey] ? key : maxKey,
    Object.keys (clusterSimilarities)[0]
  );

  // When the cluster exist
  if (clusters[pointsCluster]) {
    // debugger;

    // create a new node
    const node = {
      id: dummyNodeId,
      group: Number (nearestCentroid),
      color: 'rgb(212,175,55)',
      radius: 8,
    };
    clusters[pointsCluster].nodes.push (node);

    // create a new link
    const link = {
      source: dummyNodeId,
      target: Number (nearestCentroid),
      value: point[pointsCluster][nearestCentroid],
    };
    clusters[pointsCluster].links.push (link);
  }

  return clusters;
};
