import DefaultTheme from 'vitepress/theme'

//引入自定义样式
import './custom.css'

export default {
    extends: DefaultTheme,
    enhanceApp: ({app}) => {
    }
}