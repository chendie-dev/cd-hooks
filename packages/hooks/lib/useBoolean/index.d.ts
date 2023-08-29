export interface Actions {
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
    set: (value: any) => void;
}
export default function useBoolean(defaultValue?: boolean): [boolean, Actions];
