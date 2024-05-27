# 解决npm run build 打包后打开是空白页问题
    1.修改package.json 中的  "homepage": "./",
    2.如果路由用的是BrowserRouter，也会出现空白，
        需要改为HashRouter
        import { HashRouter as Router, Route } from 'react-router-dom';