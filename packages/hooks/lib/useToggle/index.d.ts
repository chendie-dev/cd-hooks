interface Actions<T> {
    setLeft: () => void;
    setRight: () => void;
    toggle: () => void;
    set: (value: T) => void;
}
declare function useToggle<T = boolean>(): [boolean, Actions<T>];
declare function useToggle<T>(defaultValue: T): [T, Actions<T>];
declare function useToggle<D, R>(defaultValue: D, reverseValue: R): [D | R, Actions<D | R>];
export default useToggle;
