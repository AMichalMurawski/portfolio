export const brickRows = (
  wallDim: number,
  brickDim: number,
  mortar: number,
  type: 'row' | 'col'
): number[] => {
  const count = wallDim / (brickDim + mortar);
  let countRound = Math.round(count);
  if (countRound > count) {
    countRound -= 1;
  }
  if (type === 'row') {
    countRound += 1;
  }
  if (type === 'col') {
    countRound += 2;
  }
  return Array(countRound).fill(1);
};

export interface WallDimension {
  height: number;
  width: number;
}

export const initialWallDimension: WallDimension = {
  height: 0,
  width: 0,
};
