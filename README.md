# screen-number

## Project setup
```
npm i -S vue-screen-number
```

### include
```
import screenNumber from "./components/";
Vue.use(screenNumber)
```
### use
```
<screenNumber value="20200915" />
```

### props
```
value:需要显示的值
speed:滚动速度，值为CSS3标准值，默认2s
itemClass:自定义每一个数字块的样式，如果样式跟内部定义的样式冲突，可使用 important
childClass:自定义块中滚动的数组内容样式，如果样式跟内部定义的样式冲突，可使用 important
```
