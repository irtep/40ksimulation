
// this will convert sizes from millimetres, to battlefield size
function mmToInchesToBf(mmValue) {
  //inch == mm / 25,4
  // battlefield size is inches * 100
  return mmValue / 25,4 * 100;
}

// this will get base sizes right
export function convertBases(form, sizes) {
  if (form === 'circle') {
    return mmToInchesToBf(sizes);
  }
  if (form === 'square') {
    const w = mmToInchesToBf(sizes[0]);
    const h = mmToInchesToBf(sizes[1]);
    return [w, h];
  }
}
