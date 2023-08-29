import { debounce } from "lodash-es";
function isNodeOrWeb() {
  var freeGlobal = global && typeof global === 'object' && global.Object === Object;
  var freeSelf = self && typeof self === 'object' && self.Object === Object;
  return freeGlobal || freeSelf;
}
if (!isNodeOrWeb()) {
  global.Date = Date;
}
export { debounce };