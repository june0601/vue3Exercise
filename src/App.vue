<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">回首頁</router-link> |
      <router-link to="/news">最新消息</router-link> |
      <router-link to="/about">關於我們</router-link> |
      <a v-if="$route.path != '/'">登入</a>
    </div>
    <Breadcrumb />
    <!--
    <div class="main">
      <button @click="change = !change">縮放控制器</button>
      <transition name="zoom">
        <div v-if="change" class="ant_man_style"></div>
      </transition>
    </div>
    -->
    <!--
    <div class="main">
      <button @click="change = !change">縮放控制器</button>
      <transition enter-active-class="zoom-enter-active" leave-active-class="zoom-leave-active">
        <div v-if="change" class="ant_man_style"></div>
      </transition>
    </div>
    -->
    <!--
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="change" class="ant_man_style"></div>
    </transition>
    -->
    <!--
    <transition
    appear
    @before-appear="beforeAppear"
    @appear="appear"
    @after-appear="afterAppear"
    @appear-cancelled="appearCancelled">
    <div v-if="change" class="ant_man_style"></div>
  </transition>
  -->
    <!--
  <transition enter-active-class="zoom-enter-active" leave-active-class="zoom-leave-active">
  <div v-if="change" class="ant_man_style" key="ant_man"></div>
  <div v-else class="wasp_style" key="wasp"></div>
</transition>
-->
    <!--
<button @click="change = !change">縮放控制器</button>
<transition mode="in-out">
  <div v-if="change" class="ant_man_style" key="ant_man"></div>
  <div v-else class="wasp_style" key="wasp"></div>
</transition>
-->
    <!--
<div class="main">
<button @click="change = !change">縮放控制器</button>
<transition mode="out-in">
  <div v-if="change" class="ant_man_style" key="ant_man"></div>
  <div v-else class="wasp_style" key="sasp"></div>
</transition>
</div>
-->
    <div id="app2">
      <nav2>
        <a
          v-for="(item, index) in navList"
          :class="{ active: tab === index }"
          @click="tab = index"
          :key="item"
          >{{ item }}</a
        >
      </nav2>
    </div>
    <hr />
    <h1>父層藏好料</h1>
    <child @hungry="hungry" :dinner="dinner" />
    <hr />
    <div>空汙指數 {{ filterData1 }} {{ releaseTime }}</div>
    <hr />
    <div>空汙指數 {{ filterData }}</div>
    <hr />
    <button @click="add">新增</button>
    <button @click="del">移除</button>
    <button @click="shuffle">改變陣型</button>
    <transition-group name="list" tag="div">
      <span v-for="item in team" class="player" :key="item.key">
        {{ item.name }}
      </span>
    </transition-group>

    <router-view />
  </div>
</template>

<script>
import Breadcrumb from "./components/Breadcrumb";
import child from "./components/child";
import * as dayjs from "dayjs"; //npm install dayjs --save
let shuffle = require("lodash.shuffle"); //npm i --save lodash.shuffle
export default {
  name: "breadcrumb",
  data() {
    const saveDate = dayjs().format("YYYY-MM-DD");
    return {
      change: true,
      show: false,
      team: [
        { key: 1, name: "蟻人" },
        { key: 2, name: "黃蜂女" },
        { key: 3, name: "皮姆博士" },
        { key: 4, name: "衝康保全" },
      ],
      airPollution2: 152,
      saveDate: saveDate,
      dinner: [],
      tab: 0,
      navList: ["本月活動", "超值套餐", "人氣加點", "分店資訊"],
    };
  },
  components: {
    Breadcrumb,
    child,
  },
  methods: {
    add() {
      this.team.push({ key: 5, name: "螞蟻" });
    },
    del() {
      this.team.splice(this.team.length - 1);
    },
    shuffle() {
      this.team = shuffle(this.team);
    },
    hungry() {
      alert("你的晚餐來了！");
      return (this.dinner = ["漢堡", "薯條", "炸雞", "可樂"]);
    },
  },
  computed: {
    filterData() {
      return "AQI:" + this.airPollution2;
    },
    filterData1() {
      return "AQI:" + this.airPollution2 + " / 時間：";
    },
    releaseTime() {
      return this.saveDate;
    },
  },
};
</script>

<style scoped>
/*original */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* $emit */
/*
#app {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
}
*/

/*original */
#nav {
  background: #42b983;
  padding: 20px;
  text-align: center;
  color: white;
}
/*original */
/*
a {
  color: white;
  text-decoration: none;
}
*/

/* 
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    margin-bottom: 20px;
  }
  .ant_man_style {
    background: url('assets/logo.png') no-repeat center center;
    background-size: contain;
    width: 200px;
    height: 200px;
  }
  .zoom-enter, .zoom-leave-to {
    width: 0px;
    height: 0px;
  }
  .zoom-enter-active, .zoom-leave-active {
    transition: width 1s, height 1s;
  }
  */

/*
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  margin-bottom: 20px;
}
.ant_man_style {
  background: url("assets/logo.png") no-repeat center center;
  background-size: contain;
  width: 200px;
  height: 200px;
}
.zoom-leave-active {
  animation: special_effects 1.5s;
}
.zoom-enter-active {
  animation: special_effects 1.5s reverse;
}
@keyframes special_effects {
  0% {
    width: 200px;
    height: 200px;
    opacity: 1;
    filter: blur(0px);
  }
  15% {
    width: 150px;
    height: 150px;
    opacity: 0.5;
    filter: blur(2px);
  }
  25% {
    width: 170px;
    height: 170px;
    opacity: 1;
    filter: blur(0px);
  }
  40% {
    width: 100px;
    height: 100px;
    opacity: 0.5;
    filter: blur(2px);
  }
  50% {
    width: 115px;
    height: 115px;
    opacity: 1;
    filter: blur(0px);
  }
  65% {
    width: 50px;
    height: 50px;
    opacity: 0.5;
    filter: blur(2px);
  }
  75% {
    width: 60px;
    height: 60px;
    opacity: 1;
    filter: blur(0px);
  }
  100% {
    width: 0px;
    height: 0px;
    opacity: 0;
    filter: blur(2px);
  }
}
  */

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  margin: 0 10px 20px;
}
.player {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin: 0 10px;
}
.list-item {
  display: inline-block;
  padding: 0 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
}
.list-move {
  transition: transform 1s;
}

/*資料驅動畫面 */
#app2 {
  font-family: "Microsoft JhengHei", "Apple LiGothic Medium", "PMingLiU",
    "sans-serif", "serif";
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
}
nav2 {
  display: inline-block;
  border: 1px solid #aaaaaa;
  border-radius: 5px;
}
a {
  display: inline-block;
  padding: 10px 20px;
  color: #474747;
}
a:not(:last-child) {
  border-right: 1px solid #aaaaaa;
}
a:hover {
  color: #888888;
  cursor: pointer;
  background-color: #dedede;
}
.active {
  background-color: #e8792e;
  color: white;
}
.active:hover {
  color: white;
  cursor: default;
  background-color: #e8792e;
}
</style>
