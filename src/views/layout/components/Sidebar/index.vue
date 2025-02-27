<template>
  <el-scrollbar :height="scrollbarHeight">
  <el-menu
      mode="vertical"
      show-timeout="50"
      :collapse="isCollapse"
  >
      <sidebar-item :routes="routes"></sidebar-item>
   </el-menu>
  </el-scrollbar>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
import {onMounted, onUnmounted, ref} from "vue";
const isCollapse = ref(false);
const scrollbarHeight = ref('100%'); // 初始值

const updateScrollbarHeight = () => {
  scrollbarHeight.value = `${window.innerHeight}px`;
};

onMounted(() => {
  window.addEventListener('resize', updateScrollbarHeight);
  updateScrollbarHeight(); // 初始化时设置高度
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScrollbarHeight);
});

const routes = [
  {
    "path": "/login",
    "hidden": true
  },
  {
    "path": "/404",
    "hidden": true
  },
  {
    "path": "",
    "component": {
      "name": "layout",
      "components": {
        "Navbar": {
          "components": {
            "Breadcrumb": {
              "watch": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-b50ef614",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src/components/Breadcrumb/index.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "Hamburger": {
              "name": "hamburger",
              "props": {
                "isActive": {
                  "default": false
                },
                "toggleClick": {
                  "default": null
                }
              },
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-4e6f274c",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src/components/Hamburger/index.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-797e31be",
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src/views/layout/components/Navbar.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "Sidebar": {
          "components": {
            "SidebarItem": {
              "name": "SidebarItem",
              "props": {
                "routes": {},
                "isNest": {
                  "default": false
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src/views/layout/components/Sidebar/SidebarItem.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "ScrollBar": {
              "name": "scrollBar",
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-ac0285ee",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src/components/ScrollBar/index.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src/views/layout/components/Sidebar/index.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "AppMain": {
          "name": "AppMain",
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src/views/layout/components/AppMain.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        }
      },
      "mixins": [
        {
          "watch": {},
          "methods": {}
        }
      ],
      "computed": {},
      "staticRenderFns": [],
      "_compiled": true,
      "_scopeId": "data-v-60f35ab6",
      "beforeCreate": [
        null,
        null
      ],
      "__file": "src/views/layout/Layout.vue",
      "beforeDestroy": [
        null
      ],
      "_Ctor": {}
    },
    "redirect": "/home",
    "meta": {
      "title": "首页",
      "icon": "home"
    },
    "children": [
      {
        "path": "home",
        "name": "home",
        "meta": {
          "title": "仪表盘",
          "icon": "dashboard"
        }
      },
      {
        "name": "document",
        "path": "https://www.macrozheng.com",
        "meta": {
          "title": "学习教程",
          "icon": "document"
        }
      },
      {
        "name": "video",
        "path": "https://www.macrozheng.com/mall/catalog/mall_video.html",
        "meta": {
          "title": "视频教程",
          "icon": "video"
        }
      }
    ]
  },
  {
    "path": "/pms",
    "component": {
      "name": "layout",
      "components": {
        "Navbar": {
          "components": {
            "Breadcrumb": {
              "watch": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-b50ef614",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src/components/Breadcrumb/index.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "Hamburger": {
              "name": "hamburger",
              "props": {
                "isActive": {
                  "default": false
                },
                "toggleClick": {
                  "default": null
                }
              },
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-4e6f274c",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src/components/Hamburger/index.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-797e31be",
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src/views/layout/components/Navbar.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "Sidebar": {
          "components": {
            "SidebarItem": {
              "name": "SidebarItem",
              "props": {
                "routes": {},
                "isNest": {
                  "default": false
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src/views/layout/components/Sidebar/SidebarItem.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "ScrollBar": {
              "name": "scrollBar",
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-ac0285ee",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src/components/ScrollBar/index.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src/views/layout/components/Sidebar/index.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "AppMain": {
          "name": "AppMain",
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src/views/layout/components/AppMain.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        }
      },
      "mixins": [
        {
          "watch": {},
          "methods": {}
        }
      ],
      "computed": {},
      "staticRenderFns": [],
      "_compiled": true,
      "_scopeId": "data-v-60f35ab6",
      "beforeCreate": [
        null,
        null
      ],
      "__file": "src/views/layout/Layout.vue",
      "beforeDestroy": [
        null
      ],
      "_Ctor": {}
    },
    "redirect": "/pms/product",
    "name": "pms",
    "meta": {
      "title": "商品",
      "icon": "product"
    },
    "children": [
      {
        "path": "product",
        "name": "product",
        "meta": {
          "title": "商品列表",
          "icon": "product-list"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "addProduct",
        "name": "addProduct",
        "meta": {
          "title": "添加商品",
          "icon": "product-add"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "productCate",
        "name": "productCate",
        "meta": {
          "title": "商品分类",
          "icon": "product-cate"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "productAttr",
        "name": "productAttr",
        "meta": {
          "title": "商品类型",
          "icon": "product-attr"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "brand",
        "name": "brand",
        "meta": {
          "title": "品牌管理",
          "icon": "product-brand"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "updateProduct",
        "name": "updateProduct",
        "meta": {
          "title": "修改商品",
          "icon": "product-add"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "addProductCate",
        "name": "addProductCate",
        "meta": {
          "title": "添加商品分类"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "updateProductCate",
        "name": "updateProductCate",
        "meta": {
          "title": "修改商品分类"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "productAttrList",
        "name": "productAttrList",
        "meta": {
          "title": "商品属性列表"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "addProductAttr",
        "name": "addProductAttr",
        "meta": {
          "title": "添加商品属性"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "updateProductAttr",
        "name": "updateProductAttr",
        "meta": {
          "title": "修改商品属性"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "addBrand",
        "name": "addBrand",
        "meta": {
          "title": "添加品牌"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "updateBrand",
        "name": "updateBrand",
        "meta": {
          "title": "编辑品牌"
        },
        "hidden": true,
        "sort": -1
      }
    ],
    "hidden": false,
    "sort": 0
  },
  {
    "path": "/oms",
    "component": {
      "name": "layout",
      "components": {
        "Navbar": {
          "components": {
            "Breadcrumb": {
              "watch": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-b50ef614",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src/components/Breadcrumb/index.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "Hamburger": {
              "name": "hamburger",
              "props": {
                "isActive": {
                  "default": false
                },
                "toggleClick": {
                  "default": null
                }
              },
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-4e6f274c",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src/components/Hamburger/index.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-797e31be",
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src/views/layout/components/Navbar.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "Sidebar": {
          "components": {
            "SidebarItem": {
              "name": "SidebarItem",
              "props": {
                "routes": {},
                "isNest": {
                  "default": false
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src/views/layout/components/Sidebar/SidebarItem.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "ScrollBar": {
              "name": "scrollBar",
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-ac0285ee",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src/components/ScrollBar/index.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src/views/layout/components/Sidebar/index.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "AppMain": {
          "name": "AppMain",
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src/views/layout/components/AppMain.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        }
      },
      "mixins": [
        {
          "watch": {},
          "methods": {}
        }
      ],
      "computed": {},
      "staticRenderFns": [],
      "_compiled": true,
      "_scopeId": "data-v-60f35ab6",
      "beforeCreate": [
        null,
        null
      ],
      "__file": "src/views/layout/Layout.vue",
      "beforeDestroy": [
        null
      ],
      "_Ctor": {}
    },
    "redirect": "/oms/order",
    "name": "oms",
    "meta": {
      "title": "订单",
      "icon": "order"
    },
    "children": [
      {
        "path": "order",
        "name": "order",
        "meta": {
          "title": "订单列表",
          "icon": "product-list"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "orderSetting",
        "name": "orderSetting",
        "meta": {
          "title": "订单设置",
          "icon": "order-setting"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "returnApply",
        "name": "returnApply",
        "meta": {
          "title": "退货申请处理",
          "icon": "order-return"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "returnReason",
        "name": "returnReason",
        "meta": {
          "title": "退货原因设置",
          "icon": "order-return-reason"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "orderDetail",
        "name": "orderDetail",
        "meta": {
          "title": "订单详情"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "deliverOrderList",
        "name": "deliverOrderList",
        "meta": {
          "title": "发货列表"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "returnApplyDetail",
        "name": "returnApplyDetail",
        "meta": {
          "title": "退货原因详情"
        },
        "hidden": true,
        "sort": -1
      }
    ],
    "hidden": false,
    "sort": 0
  },
  {
    "path": "/sms",
    "component": {
      "name": "layout",
      "components": {
        "Navbar": {
          "components": {
            "Breadcrumb": {
              "watch": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-b50ef614",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src/components/Breadcrumb/index.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "Hamburger": {
              "name": "hamburger",
              "props": {
                "isActive": {
                  "default": false
                },
                "toggleClick": {
                  "default": null
                }
              },
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-4e6f274c",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src/components/Hamburger/index.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-797e31be",
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src/views/layout/components/Navbar.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "Sidebar": {
          "components": {
            "SidebarItem": {
              "name": "SidebarItem",
              "props": {
                "routes": {},
                "isNest": {
                  "default": false
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src/views/layout/components/Sidebar/SidebarItem.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "ScrollBar": {
              "name": "scrollBar",
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-ac0285ee",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src/components/ScrollBar/index.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src/views/layout/components/Sidebar/index.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "AppMain": {
          "name": "AppMain",
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src/views/layout/components/AppMain.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        }
      },
      "mixins": [
        {
          "watch": {},
          "methods": {}
        }
      ],
      "computed": {},
      "staticRenderFns": [],
      "_compiled": true,
      "_scopeId": "data-v-60f35ab6",
      "beforeCreate": [
        null,
        null
      ],
      "__file": "src/views/layout/Layout.vue",
      "beforeDestroy": [
        null
      ],
      "_Ctor": {}
    },
    "redirect": "/sms/coupon",
    "name": "sms",
    "meta": {
      "title": "营销",
      "icon": "sms"
    },
    "children": [
      {
        "path": "flash",
        "name": "flash",
        "meta": {
          "title": "秒杀活动列表",
          "icon": "sms-flash"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "coupon",
        "name": "coupon",
        "meta": {
          "title": "优惠券列表",
          "icon": "sms-coupon"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "brand",
        "name": "homeBrand",
        "meta": {
          "title": "品牌推荐",
          "icon": "product-brand"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "new",
        "name": "homeNew",
        "meta": {
          "title": "新品推荐",
          "icon": "sms-new"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "hot",
        "name": "homeHot",
        "meta": {
          "title": "人气推荐",
          "icon": "sms-hot"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "subject",
        "name": "homeSubject",
        "meta": {
          "title": "专题推荐",
          "icon": "sms-subject"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "advertise",
        "name": "homeAdvertise",
        "meta": {
          "title": "广告列表",
          "icon": "sms-ad"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "flashSession",
        "name": "flashSession",
        "meta": {
          "title": "秒杀时间段列表"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "selectSession",
        "name": "selectSession",
        "meta": {
          "title": "秒杀时间段选择"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "flashProductRelation",
        "name": "flashProductRelation",
        "meta": {
          "title": "秒杀商品列表"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "addCoupon",
        "name": "addCoupon",
        "meta": {
          "title": "添加优惠券"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "updateCoupon",
        "name": "updateCoupon",
        "meta": {
          "title": "修改优惠券"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "couponHistory",
        "name": "couponHistory",
        "meta": {
          "title": "优惠券领取详情"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "addAdvertise",
        "name": "addHomeAdvertise",
        "meta": {
          "title": "添加广告"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "updateAdvertise",
        "name": "updateHomeAdvertise",
        "meta": {
          "title": "编辑广告"
        },
        "hidden": true,
        "sort": -1
      }
    ],
    "hidden": false,
    "sort": 0
  },
  {
    "path": "/ums",
    "component": {
      "name": "layout",
      "components": {
        "Navbar": {
          "components": {
            "Breadcrumb": {
              "watch": {},
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-b50ef614",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src/components/Breadcrumb/index.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "Hamburger": {
              "name": "hamburger",
              "props": {
                "isActive": {
                  "default": false
                },
                "toggleClick": {
                  "default": null
                }
              },
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-4e6f274c",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src/components/Hamburger/index.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "computed": {},
          "methods": {},
          "staticRenderFns": [],
          "_compiled": true,
          "_scopeId": "data-v-797e31be",
          "beforeCreate": [
            null,
            null
          ],
          "__file": "src/views/layout/components/Navbar.vue",
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "Sidebar": {
          "components": {
            "SidebarItem": {
              "name": "SidebarItem",
              "props": {
                "routes": {},
                "isNest": {
                  "default": false
                }
              },
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "__file": "src/views/layout/components/Sidebar/SidebarItem.vue",
              "beforeCreate": [
                null
              ],
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            },
            "ScrollBar": {
              "name": "scrollBar",
              "methods": {},
              "staticRenderFns": [],
              "_compiled": true,
              "_scopeId": "data-v-ac0285ee",
              "beforeCreate": [
                null,
                null
              ],
              "__file": "src/components/ScrollBar/index.vue",
              "beforeDestroy": [
                null
              ],
              "_Ctor": {}
            }
          },
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src/views/layout/components/Sidebar/index.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        },
        "AppMain": {
          "name": "AppMain",
          "computed": {},
          "staticRenderFns": [],
          "_compiled": true,
          "__file": "src/views/layout/components/AppMain.vue",
          "beforeCreate": [
            null
          ],
          "beforeDestroy": [
            null
          ],
          "_Ctor": {}
        }
      },
      "mixins": [
        {
          "watch": {},
          "methods": {}
        }
      ],
      "computed": {},
      "staticRenderFns": [],
      "_compiled": true,
      "_scopeId": "data-v-60f35ab6",
      "beforeCreate": [
        null,
        null
      ],
      "__file": "src/views/layout/Layout.vue",
      "beforeDestroy": [
        null
      ],
      "_Ctor": {}
    },
    "redirect": "/ums/admin",
    "name": "ums",
    "meta": {
      "title": "权限",
      "icon": "ums"
    },
    "children": [
      {
        "path": "admin",
        "name": "admin",
        "meta": {
          "title": "用户列表",
          "icon": "ums-admin"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "role",
        "name": "role",
        "meta": {
          "title": "角色列表",
          "icon": "ums-role"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "menu",
        "name": "menu",
        "meta": {
          "title": "菜单列表",
          "icon": "ums-menu"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "resource",
        "name": "resource",
        "meta": {
          "title": "资源列表",
          "icon": "ums-resource"
        },
        "hidden": false,
        "sort": 0
      },
      {
        "path": "allocMenu",
        "name": "allocMenu",
        "meta": {
          "title": "分配菜单"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "allocResource",
        "name": "allocResource",
        "meta": {
          "title": "分配资源"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "addMenu",
        "name": "addMenu",
        "meta": {
          "title": "添加菜单"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "updateMenu",
        "name": "updateMenu",
        "meta": {
          "title": "修改菜单"
        },
        "hidden": true,
        "sort": -1
      },
      {
        "path": "resourceCategory",
        "name": "resourceCategory",
        "meta": {
          "title": "资源分类"
        },
        "hidden": true,
        "sort": -1
      }
    ],
    "hidden": false,
    "sort": 0
  },
  {
    "path": "*",
    "redirect": "/404",
    "hidden": true
  }
];
</script>

<style>


</style>

