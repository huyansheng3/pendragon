import Navigation from 'react-navigation';
import NavigateHelper from './helper';
import NavigationViewer from './navigation';

/**
 * 根据配置创建一个导航组件
 * @param {*} routeConfigs 路由配置 
 * @param {*} stackConfig 
 */
function StackNavigator(routeConfigs, stackConfig) {
  let { TabRouter, createNavigator } = Navigation;
  let routes = NavigateHelper.handlePathExtensions(routeConfigs)
  let navigator = createNavigator(TabRouter(routes, stackConfig))(NavigationViewer);
  navigator.initialRouteName = NavigateHelper.getWebPath();
  return navigator;
}

/**
 * 创建一个路由器
 * @param {Object} routers 配置的路由信息 
 * 例如: { Index:{ screen:xxx,path:'login'  }  }
 */
function Router(routers) {
  return StackNavigator({
    Root: {
      path: '', rest: true, screen: StackNavigator({ ...routers })
    }
  })
}

module.exports = {
  ...Navigation,
  Router,
};