<template>
  <div class="shop">
    <div class="img">
      <img :src="shopDetail.shopPicUrl" />
    </div>
    <div class="content">
      <div class="top">
        <span class="brandTag">品牌</span>
        <span class="shopName">{{ shopDetail.shopName }}</span>
      </div>
      <div class="mid">
        <span class="rank">{{ shopDetail.rank }}</span>
        <span class="sales">月售{{ shopDetail.sales }}单</span>
        <span class="stars"> </span>
      </div>
      <div class="bottom">
        <p>
          ￥{{ shopDetail.fee.min }}&nbsp;起送&nbsp;/&nbsp;配送费约￥{{
            shopDetail.fee.delivery
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import fullStarUrl from "./images/stars/star24_on@2x.png";
import halfStarUrl from "./images/stars/star24_half@2x.png";
import emptyStarUrl from "./images/stars/star24_off@2x.png";
export default {
  props: ["index", "shopDetail"],
  data() {
    return {};
  },
  mounted() {
    rankRender(this.shopDetail.rank, this.index);
  },
};
/* ###### BEGIN: rankRender ####### */
/* FUNCTION: 将评分rank渲染成星星展示到页面上，在mounted()中调用 */
function rankRender(rank, index) {
  let fullStarNum = parseInt(rank);
  let halfStar = rank - fullStarNum >= 0.5 ? true : false;
  let stars = document.querySelectorAll("span.stars");
  for (var i = 0; i < fullStarNum; i++) {
    let fullStarIcon = document.createElement("img");
    fullStarIcon.src = fullStarUrl;
    stars[index].appendChild(fullStarIcon);
  }
  if (fullStarNum != 5) {
    if (halfStar) {
      let halStarIcon = document.createElement("img");
      halStarIcon.src = halfStarUrl;
      stars[index].appendChild(halStarIcon);
    } else {
      let emptyStarIcon = document.createElement("img");
      emptyStarIcon.src = emptyStarUrl;
      stars[index].appendChild(emptyStarIcon);
    }
  }
  for (var i = 0; i < 4 - fullStarNum; i++) {
    let emptyStarIcon = document.createElement("img");
    emptyStarIcon.src = emptyStarUrl;
    stars[index].appendChild(emptyStarIcon);
  }
}
/* ###### END: rankRender ####### */
</script>

<style scoped>
div.shop {
  width: 100%;
  height: 120px;
}
/* ###### BEGIN: 商店图片样式 ###### */
div.shop div.img {
  float: left;
  width: 120px;
  height: 100%;
}
div.shop div.img img {
  width: 80px;
  height: 80px;
  margin: 20px;
}
/* ###### END: 商店图片样式 ###### */

/* ###### BEGIN: 商店内容第一行样式 ###### */
div.shop div.content {
  float: left;
}
div.shop div.content div.top {
  height: 20px;
  margin-top: 20px;
}
div.shop div.content div.top span.brandTag {
  font-size: 14px;
  font-weight: bold;
  background-color: rgb(255, 217, 48);
}
div.shop div.content div.top span.shopName {
  font-size: 18px;
  font-weight: bold;
  margin-left: 5px;
}
/* ###### END: 商店内容第一行样式 ###### */

/* ###### BEGIN: 商店内容第二行样式 ###### */
div.shop div.content div.mid {
  height: 15px;
  margin-top: 15px;
}
div.shop div.content div.mid span.rank {
  font-size: 13px;
  font-weight: bold;
  color: rgb(255, 125, 46);
}
div.shop div.content div.mid span.sales {
  font-size: 12px;
  color: grey;
  margin-left: 5px;
}
div.shop div.content div.mid span.stars {
  margin-left: 8px;
}
div.shop div.content div.mid span.stars img {
  width: 13px;
  height: 13px;
  margin-right: 3px;
}
/* ###### END: 商店内容第二行样式 ###### */

/* ###### BEGIN: 商店内容第三行样式 ###### */
div.shop div.content div.bottom {
  height: 15px;
  margin-top: 15px;
}
div.shop div.content div.bottom p {
  font-size: 13px;
  color: grey;
}
/* ###### END: 商店内容第三行样式 ###### */
</style>