import * as actionTypes from "./constants"
const initState={
     topicList:[
        { title: "社会热点" },
        { title: "社会热点" },
        { title: "社会热点" },
        { title: "社会热点" },
        { title: "社会热点" },
        { title: "社会热点" }
     ],
     recommend:[
         {title:"人民日报论巩固拓展党史学习教育成果",desc:"走过苦难辉煌的过去，走在日新月异的现在，走向光明宏大的未来。中国共产党立志于中华民族千秋伟业，百年恰是风华正茂！"},
         {title:"人民日报论巩固拓展党史学习教育成果",desc:"走过苦难辉煌的过去，走在日新月异的现在，走向光明宏大的未来。中国共产党立志于中华民族千秋伟业，百年恰是风华正茂！"},
         {title:"人民日报论巩固拓展党史学习教育成果",desc:"走过苦难辉煌的过去，走在日新月异的现在，走向光明宏大的未来。中国共产党立志于中华民族千秋伟业，百年恰是风华正茂！"},
         {title:"人民日报论巩固拓展党史学习教育成果",desc:"走过苦难辉煌的过去，走在日新月异的现在，走向光明宏大的未来。中国共产党立志于中华民族千秋伟业，百年恰是风华正茂！"},
         {title:"人民日报论巩固拓展党史学习教育成果",desc:"走过苦难辉煌的过去，走在日新月异的现在，走向光明宏大的未来。中国共产党立志于中华民族千秋伟业，百年恰是风华正茂！"},
     ]
}
function reducer(state=initState,action) {
    switch (action.type) {
        default:
            return state;
    }
}
export default reducer