//1. 預設匯出(Default Exports) (Zero or one per module)
export default [1, 2, 3]; 

//2. 具名匯出(Named Exports) (Zero or more exports per module)
//2-1. 匯出個別項目
export var v1 = 100;
//2-2  匯出列表(list)
const c1 = 200;
function f1() { return "Hello Vue!"; };
export { c1, f1 };

