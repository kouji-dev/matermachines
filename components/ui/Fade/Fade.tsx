import {FC, useState} from "react";
import {animated, config, useTransition} from "@react-spring/web";
import {  } from '@heroicons/react/solid'

interface Props {}

export const Fade: FC<Props> = ({children}) => {
    const [active, setActive] = useState(true);
    const transition = useTransition(active, {
        from: {opacity: 1},
        leave: {opacity: 0},
        enter: {opacity: 1},
        config: config.stiff,
        reverse: active,
        delay: 200
    });
    const onRemove = () => {
        setActive(false);
    }

    return <div className="relative">
        {transition((styles, item) => (
            item && <animated.div style={styles} onClick={onRemove}>
                {children}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2 right-2 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </animated.div>
        ))}
    </div>
}