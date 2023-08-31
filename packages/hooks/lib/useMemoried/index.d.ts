type noop = (...args: any[]) => any;
declare function useMemoried<T extends noop>(fn: T): T;
export default useMemoried;
