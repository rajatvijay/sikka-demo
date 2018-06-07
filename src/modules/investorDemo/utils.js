export const addNewPointInTheClusters = (clusters, point) => {
  const dummyNodeId = 202;
  const pointsCluster = Object.keys (point)[0];
  const nearestCentroid = Object.keys (point[pointsCluster]).reduce (
    (maxKey, key, _, arr) => (arr[key] > arr[maxKey] ? key : maxKey),
    Object.keys (point[pointsCluster])[0]
  );

  // When the cluster exist
  if (clusters[pointsCluster]) {
    debugger;

    // create a new node
    const node = {
      id: dummyNodeId,
      group: Number (nearestCentroid),
      color: '#000',
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
