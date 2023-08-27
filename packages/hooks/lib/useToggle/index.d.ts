type defaultFn = () => void;
interface Actions {
    setLeft: defaultFn;
    setRight: defaultFn;
    toggle: defaultFn;
}
declare function useToggle<T = boolean>(): [boolean, Actions];
declare function useToggle<D, R>(defaultValue: D, reverseValue: R): [D | R, Actions];
export default useToggle;
