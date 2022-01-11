import React, { memo } from 'react'
import {RecommendWrapper,RecommendItem} from "../style"
import pic_2 from "../../../assets/img/banner-2.png"
import pic_3 from "../../../assets/img/banner-3.png"
import pic_4 from "../../../assets/img/banner-4.png"
export default memo(function Recommend() {
    return (
        <RecommendWrapper>
            <RecommendItem imgUrl={pic_2}></RecommendItem>
            <RecommendItem imgUrl={pic_2}></RecommendItem>
            <RecommendItem imgUrl={pic_3}></RecommendItem>
            <RecommendItem imgUrl={pic_4}></RecommendItem>
        </RecommendWrapper>
    )
})
