export function rectanglesArea(coordinates) {
  let task1Count = 0;
  return coordinates.map((rectCoords) => {
    ++task1Count;
    const area =
      Math.abs(rectCoords.x1 - rectCoords.x2) * Math.abs(rectCoords.y1 - rectCoords.y2);
    // console.log(`Площадь прямоугольника ${task1Count}`, area);
    const rect = ({
      coordinates: rectCoords,
      area,
    });

    console.group(`Прямоугольник ${task1Count}:`);
    console.log('Площадь', rect.area);
    console.log('Координаты', rect.coordinates);
    console.groupEnd();

    return rect;
  });
}
