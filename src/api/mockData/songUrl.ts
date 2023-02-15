export default {
    getSongUrl: () => {
        return {
            code: 200,
            msg: "success",
            data: [
                {
                    url: 'https://music.163.com/#/song?id=187908',
                    id: 1,
                    targetType: 1,
                    typeTitle: 'tttt',
                    bannerId: 1
                },
                {
                    url: 'https://img2.baidu.com/it/u=2415360949,2308891424&fm=253&fmt=auto&app=138&f=JPG?w=590&h=337',
                    id: 2,
                    targetType: 2,
                    typeTitle: 'tttt',
                    bannerId: 2
                }
            ]
        }
    }
}