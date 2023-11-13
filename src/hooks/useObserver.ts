import React, {useEffect, useRef} from "react";


export const useObserver = (ref: React.MutableRefObject<HTMLDivElement | null>, page: number, isLoading: boolean, callback: () => void) => {

    const observer = useRef<IntersectionObserver | null>(null)


    useEffect(() => {
        if (isLoading) return
        if (observer.current) {
            observer.current.disconnect();
        }
        const cb: IntersectionObserverCallback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                callback()
            }
        };

        if (ref.current) {
            observer.current = new IntersectionObserver(cb);
            observer.current.observe(ref.current);
        }

    }, [isLoading])
}