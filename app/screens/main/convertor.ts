export const WUnitIndex = new Map([
  ['g', 1.0],
  ['mg', 0.001],
  ['μg', 0.000001],
  ['ng', 0.000000001],
  ['pg', 0.000000000001],
  ['IU', 1.0],
  ['mIU', 0.001],
  ['nmol', 0.000000001],
  ['pmol', 0.000000000001]
]);

export const WUnit = [...WUnitIndex.keys()];

export const VUnitIndex = new Map([
  ['L', 1.0],
  ['dL', 0.1],
  ['mL', 0.001]
]);

export const VUnit = [...VUnitIndex.keys()];

export const commonMol = new Map([
  ['雌二醇', '272.38'],
  ['孕酮', '314.46'],
  ['泌乳素', '0.0212766'],
  ['睾酮', '288.42']
]);

const TUnitIndex = new Map([
  ['pg/mL', 1000000000000 / 1000],
  ['ng/dL', 1000000000 / 10],
  ['ng/mL', 1000000000 / 1000]
]);

export function convert(value: string, wUnit: string, vUint: string, tUnit: string, mol?: string) {

  var result = parseFloat(value) * WUnitIndex.get(wUnit) / VUnitIndex.get(vUint) * TUnitIndex.get(tUnit);

  if (wUnit.endsWith('mol')) { result *= +mol; }
  else if (wUnit.endsWith('IU')) { result /= +mol; }

  if (result > 10000 || (result != 0 && result < 0.001)) {
    return -1;
  }
  return result;
}
