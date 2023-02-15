import Mock from 'mockjs'
import banners from './mockData/banners'
import songUrl from './mockData/songUrl'

Mock.mock('/banner/getBannerData',banners.getBannerData)

Mock.mock('/song/getSongUrl',songUrl.getSongUrl)