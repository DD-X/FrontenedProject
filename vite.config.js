import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//import { resolve } from 'path' //** 引入path模块 */
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/

//import ElementPlus from 'unplugin-element-plus/vite';
export default defineConfig({
  plugins: [
    vue(),
    //ElementPlus(),
    
    //自动导入element-plus组件
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  
  ],
  
  //添加别名，快速定位到src目录
  resolve:{
    // alias: {
    //   '@': resolve(__dirname, 'src'),
    // },
    alias: [  
      {
        find: '@',
        replacement: "/src",
      }]
  }
})
