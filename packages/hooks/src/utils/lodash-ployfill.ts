import { debounce } from "lodash-es";

function isNodeOrWeb() {
    const freeGlobal = global && typeof global === 'object' && global.Object === Object;
    const freeSelf = self && typeof self === 'object' && self.Object === Object;
    return freeGlobal || freeSelf
}
if (!isNodeOrWeb()) {
    global.Date = Date;
}

export { debounce }