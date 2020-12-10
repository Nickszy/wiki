# vue


我认为他是最适合非计算机专业同学学的前端框架，他跟 python 非常的像，上手难度较低。

## Vuex

用于状态管理，类似于 Django 中的 model。

有几个不同的状态 `state` `getter` `mutation` `action` ，分别对应数据的存储，获取，改变，事件（可异步）。

这些都储存在状态树 store 中，同时他还可以细分到不同的模块中（module），非常的方便。

```js
export default {
  state: {
    count: 0
  },  
  getter: {
    get (state) {
      return state.count
    }
  },
  mutations: { 
    increment (state) { 
      state.count++; // 变更状态 
    } 
  },
  actions:{
    get (context) {
      context.commit('get')
    }
  }
}

// index.vue

export default{
  methods: {
  
     store.dispatch({ type: "incrementAsync", amount: 10 })
  }
}
```
