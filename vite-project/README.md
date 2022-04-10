# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

引入ts
npm install typescript
创建文件夹 tsconfig.json
// 指定了用来编译这个项目的根文件和编译选项
// 配置参考https://www.tslang.cn/docs/handbook/tsconfig-json.html
{
    "compilerOptions": {
        "target": "esnext",
        "module": "esnext",
        "strict": true, //这样可以对`this`上的数据属性进行严格的推断，否则总是被视为any类型
        "jsx": "preserve",
        "moduleResolution": "node"
    },
    "include": [
        "src/**/*", "src/main.d.ts" //**/递归匹配任意子目录
    ],
    "exclude": [
        "node_modules"
    ]
}
