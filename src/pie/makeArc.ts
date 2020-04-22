// from http://xahlee.info/js/svg_circle_arc.html

type RotateMatrix = [[number, number], [number, number]];
type Vector = [number, number];

function f_matrix_times(
  [[a, b], [c, d]]: RotateMatrix,
  [x, y]: Vector
): Vector {
  return [a * x + b * y, c * x + d * y];
}

function f_rotate_matrix(x: number): RotateMatrix {
  const cosx = Math.cos(x);
  const sinx = Math.sin(x);
  return [[cosx, -sinx], [sinx, cosx]];
}

function f_vec_add([a1, a2]: Vector, [b1, b2]: Vector): Vector {
  return [a1 + b1, a2 + b2];
}

export function svg_ellipse_arc_rad(
  cmd: string,
  centerX: number,
  centerY: number,
  radiusX: number,
  radiusY: number,
  startAngle: number,
  sweepAngle: number,
  rotationAngle: number
) {
  sweepAngle = sweepAngle % (2 * Math.PI);
  const rotMatrix = f_rotate_matrix(rotationAngle);
  const [sX, sY] = f_vec_add(
    f_matrix_times(rotMatrix, [
      radiusX * Math.cos(startAngle),
      radiusY * Math.sin(startAngle)
    ]),
    [centerX, centerY]
  );
  const [eX, eY] = f_vec_add(
    f_matrix_times(rotMatrix, [
      radiusX * Math.cos(startAngle + sweepAngle),
      radiusY * Math.sin(startAngle + sweepAngle)
    ]),
    [centerX, centerY]
  );
  const fA = sweepAngle > Math.PI ? 1 : 0;
  const fS = sweepAngle > 0 ? 1 : 0;
  return [
    cmd,
    sX,
    sY,
    "A",
    radiusX,
    radiusY,
    (rotationAngle / Math.PI) * 180,
    fA,
    fS,
    eX,
    eY
  ].join(" ");
}

export function svg_ellipse_arc_deg(
  cmd: string,
  centerX: number,
  centerY: number,
  radiusX: number,
  radiusY: number,
  startAngle: number,
  sweepAngle: number,
  rotationAngle: number
) {
  return svg_ellipse_arc_rad(
    cmd,
    centerX,
    centerY,
    radiusX,
    radiusY,
    (startAngle / 180) * Math.PI,
    (sweepAngle / 180) * Math.PI,
    (rotationAngle / 180) * Math.PI
  );
}
