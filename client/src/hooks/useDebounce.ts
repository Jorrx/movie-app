import { useCallback, useRef } from 'react';

type CallbackFunction = (...args: any[]) => void;

export const useDebounce = (callback: CallbackFunction, delay: number): CallbackFunction => {
    const timer = useRef<NodeJS.Timeout | undefined>();

    const debouncedCallback = useCallback(
        (...args: Parameters<CallbackFunction>) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...args);
                console.log(...args)
                console.log(callback)
            }, delay);
        },
        [callback, delay]
    );

    return debouncedCallback;
};