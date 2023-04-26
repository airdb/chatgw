<template>
  <div class="pricing-card-container">
    <div class="features">
      <h3>Features</h3>
      <p style="color: hsla(0,0%,100%,.6)">Everything you need to take your productivity to the next level.</p>
      <div class="feature">
        <p class="feature-item" v-for="(item, index) in features" :key="index">
          <p v-html="item.icon" class="item-icon"></p>
          <p class="item-text">{{ item.name }}</p>
        </p>
      </div>
    </div>
    <div class="pricing-list">
      <div class="list-item" v-for="(item, index) in pricingList" :key="index">
        <h3 class="item-name">{{ item.name }}</h3>
        <p class="item-price">{{ item.price }}</p>
        <p class="item-desc">{{ item.desc }}</p>
        <div class="rights">
          <p class="right-item" v-for="(r, idx) in item.rights" :key="idx" v-html="getRightValue(r.value)"></p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    pricingCardList: {
      type: Array,
      value: []
    }
  },
  data() {
    return {
      features: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><rect width="22.44" height="22.44" x="0.773" y="0.78" fill="url(#quicklinks_svg__a)" rx="6"></rect><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.133 11.742-1.765 1.963a2.777 2.777 0 0 0 3.926 3.927l1.964-1.765m3.61-3.61 1.764-1.963a2.777 2.777 0 1 0-3.927-3.926l-1.963 1.765m-1.031 5.156 2.578-2.578"></path><defs><linearGradient id="quicklinks_svg__a" x1="0.773" x2="23.212" y1="0.78" y2="23.22" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6363"></stop><stop offset="1" stop-color="#D72A2A"></stop></linearGradient></defs></svg > ',
          name: 'Quicklinks'
        },
         {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><rect width="22.44" height="22.44" x="0.773" y="0.78" fill="url(#quicklinks_svg__a)" rx="6"></rect><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.133 11.742-1.765 1.963a2.777 2.777 0 0 0 3.926 3.927l1.964-1.765m3.61-3.61 1.764-1.963a2.777 2.777 0 1 0-3.927-3.926l-1.963 1.765m-1.031 5.156 2.578-2.578"></path><defs><linearGradient id="quicklinks_svg__a" x1="0.773" x2="23.212" y1="0.78" y2="23.22" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6363"></stop><stop offset="1" stop-color="#D72A2A"></stop></linearGradient></defs></svg > ',
          name: 'Quicklinks'
        },
         {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><rect width="22.44" height="22.44" x="0.773" y="0.78" fill="url(#quicklinks_svg__a)" rx="6"></rect><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.133 11.742-1.765 1.963a2.777 2.777 0 0 0 3.926 3.927l1.964-1.765m3.61-3.61 1.764-1.963a2.777 2.777 0 1 0-3.927-3.926l-1.963 1.765m-1.031 5.156 2.578-2.578"></path><defs><linearGradient id="quicklinks_svg__a" x1="0.773" x2="23.212" y1="0.78" y2="23.22" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6363"></stop><stop offset="1" stop-color="#D72A2A"></stop></linearGradient></defs></svg > ',
          name: 'Quicklinks'
        },
         {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><rect width="22.44" height="22.44" x="0.773" y="0.78" fill="url(#quicklinks_svg__a)" rx="6"></rect><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.133 11.742-1.765 1.963a2.777 2.777 0 0 0 3.926 3.927l1.964-1.765m3.61-3.61 1.764-1.963a2.777 2.777 0 1 0-3.927-3.926l-1.963 1.765m-1.031 5.156 2.578-2.578"></path><defs><linearGradient id="quicklinks_svg__a" x1="0.773" x2="23.212" y1="0.78" y2="23.22" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6363"></stop><stop offset="1" stop-color="#D72A2A"></stop></linearGradient></defs></svg > ',
          name: 'Quicklinks'
        }
      ],
      pricingList: [
        {
          name: 'Personal',
          tags: [],
          price: '$0 per month',
          desc: `Unleash your superpowers at no cost. Yes, really. It's free.`,
          rights: [
            {
              right: 'Quicklinks',
              value: true
            },
            {
              right: 'Shared Quicklinks',
              value: false
            },
          ]
        },
        {
          name: 'Teams',
          tags: ['Basic'],
          price: '$0 per month',
          desc: `Unleash your superpowers at no cost. Yes, really. It's free.`,
          rights: [
            {
              right: 'Quicklinks',
              value: true
            },
            {
              right: 'Shared Quicklinks',
              value: 'Up to 30'
            },
              {
              right: 'Shared Quicklinks',
              value: 'Up to 30'
            },
                {
              right: 'Quicklinks',
              value: true
            },
          ]
        },
        {
          name: 'Teams',
          tags: ['Paid'],
          price: '$0 per month',
          desc: `Unleash your superpowers at no cost. Yes, really. It's free.`,
          rights: [
            {
              right: 'Quicklinks',
              value: true
            },
            {
              right: 'Shared Quicklinks',
              value: 'Unlimited'
            },
               {
              right: 'Shared Quicklinks',
              value: false
            },
             {
              right: 'Shared Quicklinks',
              value: 'Unlimited'
            },
          ]
        }
      ]
    }
  },
  methods: {
    getRightValue(value) {
      switch (value) {
        // case true:
        //   return `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" class="icon" viewBox="0 0 16 16"><path fill="currentColor" d="M6.686 13.513a.89.89 0 0 0 .78-.413l5.968-9.293c.133-.21.19-.387.19-.558 0-.45-.317-.762-.774-.762-.311 0-.502.114-.692.413l-5.504 8.728L3.83 8.003c-.19-.247-.388-.349-.667-.349-.457 0-.787.324-.787.768 0 .197.07.387.235.584l3.288 4.1c.222.28.457.407.787.407Z"></path></svg>`
        // case false:
        //   return `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" class="icon" viewBox="0 0 16 16"><path fill="currentColor" d="M3.404 8.724h9.192A.726.726 0 0 0 13.313 8a.73.73 0 0 0-.717-.724H3.404A.739.739 0 0 0 2.687 8c0 .4.343.724.717.724Z"></path></svg>`
        // default:
        //   return `<p>${value}</p>`
        case true:
          return `&#10003;`
        case false:
          return `-`
        default:
          return `${value}`
      }
    }
  },
  created() {
    console.log(this.getRightValue(false))
  }
};
</script>
  
<style scoped lang="scss">
.pricing-card-container {
  display: flex;
  flex-direction: row;
  background: #222;
  h3 {
    color: #fff;
  }
  .features {
    padding: 10px 0 10px 10px;
    .feature {
      display: flex;
      flex-direction: column;
      margin-top: 85px;
      .feature-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        p {
          margin: 0;
          display: flex;
          align-items: center;
          line-height: unset;
        }
        .item-text {
          margin-left: 8px;
          color: hsla(0,0%,100%, .6)
        }
      }
    }
  }

  .pricing-list {
    display: flex;
    flex-direction: row;
    .list-item {
      padding: 10px;
      .item-price {
        color: hsla(0,0%,100%,.6)
      }
      .item-desc {
        color: hsla(0,0%,100%,.8)
      }
      .rights {
        display: flex;
        flex-direction: column;
        .right-item {
          height: 28px;
          margin: none;
          text-align: center;
          color: hsla(0,0%,100%,.6);
        }
      }
    }
  }
}


</style>
<style>
.icon {
  transform: scale(0.1);
}
</style>
