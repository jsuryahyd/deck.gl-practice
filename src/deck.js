import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { ScatterplotLayer } from '@deck.gl/layers';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';

export const scatterplot = (source, getPosFunc, getColorFunc,onHover) => {
  
  console.log("scatter plot running");
  return new ScatterplotLayer({
    id: "scatter",
    data: source,
    opacity: 0.8,
    filled: true,
    radiusMinPixels: 2,
    radiusMaxPixels: 5,
    getPosition: getPosFunc,
    getFillColor: getColorFunc,
    pickable: true,
    onHover:onHover
  });
};

export const heatmap = (source, getPosFunc, getWeighFunc) =>
  new HeatmapLayer({
    id: "heat",
    data: source,
    getPosition: getPosFunc,
    getWeight: getWeighFunc,
    radiusPixels: 60
  });

export const hexagon = (source, getPosFunc, getWeight,onHover) =>
  new HexagonLayer({
    pickable:true,
    onHover:onHover,
    id: "hex",
    data: source,
    getPosition: getPosFunc,
    getElevationWeight: getWeight,
    elevationScale: 100,
    extruded: true,
    radius: 1609,
    opacity: 0.6,
    coverage: 0.88,
    lowerPercentile: 50
  });
