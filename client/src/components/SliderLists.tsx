import React, {FC} from 'react';
import SimpleSlider, {ISwiper} from "./slide/SimpleSlider";

interface ISliderProps<T> extends ISwiper{
    items: T[]
    className: string
    slidesPerView: number
    slidesPerGroup: number
    renderItem: (el: any) => React.ReactNode

}

function SliderLists<T>(props: ISliderProps<T>) {
    return <SimpleSlider
        isCenterItems={props.isCenterItems}
        loop={props.loop}
        className={props.className}
        slidesPerView={props.slidesPerView}
        slidesPerGroup={props.slidesPerGroup}
        navigation={props.navigation}
        >
        {props.items.map(props.renderItem)}
    </SimpleSlider>
}

export default SliderLists;