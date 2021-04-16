<template>
  <div class="news">
    <hr />

    
    <h3>v-html指令</h3>
    <div v-html="ithelp"></div>
    <div>{{ youtube }}</div>
    <hr />
    <h3>v-cloak指令</h3>
    <div v-cloak>{{ title3 }}</div>
    <hr />
    <h3>v-pre指令</h3>
    <h1>{{ title2 }}</h1>
    <h1 v-pre>{{ preTitle }}</h1>
    <hr />
    <h3>v-once屬性</h3>
    <div v-once>
      <h1>{{ title }}</h1>
      <p>現在子層也套入了v-once</p>
    </div>
    <h1 v-once>{{ title }}</h1>
    <hr />
    <h3>deep屬性</h3>
    <input type="text" v-model.trim.lazy="myData.myName" />
    <input type="text" v-model.trim.lazy="myData.mail" />
    <hr />
    <h3>immediate屬性</h3>
    <input type="text" v-model.trim.lazy="myName1" />
    <input type="text" v-model.trim.lazy="mail" />
    <hr />
    <h3>Watch範例</h3>
    <h1>鐵人30抽獎活動</h1>
    <input type="text" v-model.trim.lazy="myname" />
    <p>抽獎人 {{ myname }}</p>
    <hr />
    <h3>系統修飾鍵</h3>
    <div>
      <input
        type="text"
        placeholder="先點我再按下 Ctrl + a"
        @keyup.ctrl.a.exact="Ctrlpop"
      />
      <input
        type="text"
        placeholder="先點我再按下 alt + a"
        @keyup.alt.a.exact="altpop"
      />
      <input
        type="text"
        placeholder="先點我再按下 shift + a"
        @keyup.shift.a.exact="shiftpop"
      />
      <input
        type="text"
        placeholder="先點我再按下(Windows logo鍵) meta + a"
        @keyup.meta.a.exact="metapop"
      />
    </div>
    <hr />
    <h3>滑鼠修飾符</h3>
    <button @click.left="leftpop">left按我</button>
    <button @click.middle="middlepop">middle按我</button>
    <button @click.right="rightpop">right按我</button>
    <hr />
    <h3>按鍵修飾符</h3>
    <input type="text" placeholder="先點我再按下Enter" @keyup.enter="pop" />
    <input type="text" placeholder="先點我再按下tab" @keyup.tab="tabpop" />
    <input
      type="text"
      placeholder="先點我再按下delete(它包含了刪除跟退格鍵)"
      @keyup.delete="deletepop"
    />
    <input type="text" placeholder="先點我再按下esc" @keyup.esc="escpop" />
    <input
      type="text"
      placeholder="先點我再按下space"
      @keyup.space="spacepop"
    />
    <input type="text" placeholder="先點我再按下up" @keyup.up="uppop" />
    <input type="text" placeholder="先點我再按下down" @keyup.down="downpop" />
    <input type="text" placeholder="先點我再按下left" @keyup.left="left_pop" />
    <input
      type="text"
      placeholder="先點我再按下right"
      @keyup.right="right_pop"
    />
    <hr />
    <div @click.self="father">
      <div @click="middle">
        <a @click="child">按鈕</a><br />
        <a @click.once="child">按鈕.once</a><br />
      </div>
    </div>
    <hr />
    <div @click.capture="father">
      <input type="button" @click.capture="child" value="按鈕" />
    </div>
    <hr />
    <a href="https://www.google.com.tw/" @click.prevent="prevent">google</a>
    <hr />
    <div :class="[div_style, coloring, { round: shape }]"></div>
    <hr />
    <template v-if="yes">
      <h3>我學會v-if了！</h3>
      <p>好簡單喔！我馬上就會了！</p>
    </template>
    <h3 v-else>再讓我試一次</h3>
    <ul>
      <li v-if="item1">打掃房間</li>
      <li v-else-if="item2">上網學習vue</li>
      <li v-else-if="item3">到便利商店領包裹</li>
      <li v-else>今天待辦事項都完成了！</li>
    </ul>
    <hr />
    <h3 v-show="show">I am v-show</h3>
    <hr />
    <h1>小隊搶答積分賽！</h1>
    <ul>
      <li>
        <h3>紅隊</h3>
        <button v-on:click="counter1 += 1">加1分</button>
        <p>總分 {{ counter1 }}</p>
      </li>
      <li>
        <h3>藍隊</h3>
        <button v-on:click="counter2 += 1">加1分</button>
        <p>總分 {{ counter2 }}</p>
      </li>
      <li>
        <h3>黃隊</h3>
        <button v-on:click="counter3 += 1">加1分</button>
        <p>總分 {{ counter3 }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
      title: "vue好簡單",
      title2: "正常綁定資料",
      title3: "title3",
      preTitle: "我被下了v-pre",
      div_style: "box",
      coloring: "red_color",
      shape: true,
      yes: true,
      item1: true,
      item2: true,
      item3: true,
      show: true,
      counter1: 0,
      counter2: 0,
      counter3: 0,
      myname: "請輸入真實姓名",
      myName1: "姓名",
      mail: "電子信箱",
      myData: {
        myName: "Adam",
        mail: "Adam@xxx.com.tw",
      },
      ithelp:
        '<a target="_black" href="https://ithelp.ithome.com.tw/">it邦幫忙</a>',
      youtube:
        '<a target="_black" href="https://www.youtube.com/?gl=TW">聽音樂去！</a>',
    };
  },
  methods: {
    prevent() {
      alert("不會觸發連結");
    },
    father() {
      alert("觸發父層");
    },
    middle() {
      alert("觸發中層");
    },
    child() {
      alert("觸發子層");
    },
    pop() {
      alert("完成按下Enter鍵");
    },
    leftpop() {
      alert("完成按下滑鼠左鍵");
    },
    middlepop() {
      alert("完成按下滑鼠中鍵");
    },
    rightpop() {
      alert("完成按下滑鼠右鍵");
    },
    tabpop() {
      alert("先點我再按下tab鍵");
    },
    deletepop() {
      alert("先點我再按下delete鍵");
    },
    escpop() {
      alert("先點我再按下esc鍵");
    },
    spacepop() {
      alert("先點我再按下space鍵");
    },
    uppop() {
      alert("先點我再按下up鍵");
    },
    downpop() {
      alert("先點我再按下down鍵");
    },
    left_pop() {
      alert("先點我再按下left鍵");
    },
    right_pop() {
      alert("先點我再按下right鍵");
    },
    Ctrlpop() {
      alert("完成按下 Ctrl + a 鍵");
    },
    altpop() {
      alert("完成按下 alt + a 鍵");
    },
    shiftpop() {
      alert("完成按下 shift + a 鍵");
    },
    metapop() {
      alert("完成按下(Windows logo鍵) meta + a 鍵");
    },
  },
  watch: {
    myname() {
      alert("祝您中獎！");
    },
    myName1: {
      handler: function() {
        alert("請輸入真實姓名");
      },
      immediate: false,
    },
    myData: {
      handler: function() {
        alert("完成資料更新");
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.box {
  border: 1px solid #cccccc;
  width: 100px;
  height: 100px;
}

.red_color {
  background-color: red;
}

.round {
  border-radius: 50%;
}

[v-cloak] {
  display: none;
}
button{
color:white;
text-align:center;
background-color:#356EAF;
width:100px;
height:100px;
transition:width 1s, height 1s;
}
button:hover{
background-color:#356EAF;
width:150px;
height:150px;
transition:width 1s , height 1s;
}
</style>
