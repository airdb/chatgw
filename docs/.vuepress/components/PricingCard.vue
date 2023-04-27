<template>
  <div class="pricing-card-container">
    <div class="features" v-if="!isMobile">
      <h3>Features</h3>
      <p style="color: hsla(0,0%,100%,.6)">Everything you need to take your productivity to the next level.</p>
      <div class="feature">
        <p class="feature-item" v-for="(item, index) in features" :key="index">
          <p v-html="item.icon" class="item-icon"></p>
          <p class="item-text">{{ item.name }}</p>
        </p>
      </div>
    </div>
    <div class="pricing-list" :class="isMobile ? 'isMobile' : ''">
      <div class="list-item" v-for="(item, index) in pricingList" :key="index">
        <h3 class="item-name">{{ item.name }}</h3>
        <p class="item-price">{{ item.price }}</p>
        <p class="item-desc">{{ item.desc }}</p>
        <div class="rights" v-if="!isMobile">
          <p class="right-item" v-for="(r, idx) in item.rights" :key="idx" v-html="getRightValue(r.value)"></p>
        </div>
        <div class="rights" v-else>
          <div v-for="(r, idx) in item.rights" :key="idx">
            <p class="mobile-right-item" v-html="getMobileRightValue(r.value, r.right)" v-if="r.value"></p>
          </div>
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
              value: true,
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
              value: 'Up to 30',
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
          name: 'Custom',
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
              value: 'Unlimited'
            },
             {
              right: 'Shared Quicklinks',
              value: 'Unlimited'
            },
          ]
        }
      ],
      isMobile: false,
    }
  },
  mounted() {
    this.isMobile = window.innerWidth < 768 || window.screen.width < 768;
  },
  methods: {
    getRightValue(value) {
      switch (value) {
        case true:
          return `&#10003;`
        case false:
          return `-`
        default:
          return `${value}`
      }
    },
    getMobileRightValue(value, right) {
        switch (value) {
        case true:
          return `&#10003; ${right}`
        case false:
          return `-`
        default:
          if (value === 'Unlimited') {
            return `&#10003; ${value} ${right}`
          }
          return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" class="progress-half_svg__icon"><circle cx="8" cy="8" r="6.25" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.6" stroke-width="1.5"></circle><path fill="#fff" fill-opacity="0.6" d="M8 4.5c0-.276.225-.503.499-.469a4 4 0 0 1 0 7.938C8.225 12.003 8 11.776 8 11.5v-7Z"></path></svg>&nbsp;${value} ${right}`
      }
    }
  },
  created() {
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
    &.isMobile {
      flex-direction: column;
    }
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
        .mobile-right-item {
          display: flex;
          flex-direction: row;
          align-items: center;
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
