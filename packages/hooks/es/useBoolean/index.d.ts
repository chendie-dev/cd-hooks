export interface Actions {
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
}
export default function useBoolean(defaultValue?: boolean): [boolean, Actions];
