import Mock from 'mockjs'
import banners from './mockData/banners'

Mock.mock('/banner/getBannerData',banners.getBannerData)