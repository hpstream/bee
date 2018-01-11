<!-- by your name -->
<template>
  <div>
    <slot name="header" v-if="(option&&option.header)">
      <div class="fd_title">
        <span class="title"
              v-if="option.header.title"
              @click="option.header.title.click(option.header.title)">
          <span v-if="option.header.title.text&&(option.header.title.text =='')"
                v-text="option.header.title.text"></span>
          <span v-text="data[option.header.title['field']]"></span>
        </span>
        <span class="subtitle" v-if="option.header.subTitle">
          <span v-if="option.header.subTitle.text&&(option.header.subTitle.text !='')"
                v-text="option.header.subTitle.text"></span>
          <span v-text="data[option.header.subTitle['field']]"></span>
        </span>
        <span class="status" v-if="option.status">
          <el-button size="mini" type="primary" round v-if="option.header.status">
            {{data[option.header.status]}}
          </el-button>
        </span>

        <div class="tool">
          <div class="switch" v-if="option.header.custom">
            <span v-text="option.header.custom.text"></span>
            <el-switch
              v-model="data[option.header.custom['field']]"
            >
            </el-switch>
          </div>

          <el-button type="text" v-for="item in option.header.bottoms" @click="item.click(item,cardData)"
                     :key="item.field">{{item.text}}
          </el-button>
          <el-dropdown v-if="moreTool.length!=0" trigger="click">
            <span class="el-dropdown-link" style="padding-left:10px;border-left: 1px solid #ebebeb">
                    更多
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="it in moreTool"
                                :key="it.field">
                <el-button type="text" @click="it.click(it,cardData)"
                >{{it.text}}
                </el-button>

              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </slot>
    <div class="cardBody">
      <slot name="body" slot-data="option.data" ></slot>
    </div>
    <div class="cardfooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FdCard',
    data() {
      return {
        data: []
      }
    },
    props: {
      option: {
        type: Object
      },
      cardData: {
        type: Object
      }
    },
    components: {},
    computed: {
      moreTool() {
        return (this.option.header.bottoms &&
        this.option.header.bottoms.length >= 2) ? this.option.header.bottoms.splice(2) : []
      }
    },
    methods: {},
    mounted() {
      if (this.option.data) {
        this.data = this.option.data
      } else {
        this.data = this.cardData
      }
    }
  }
</script>
<style scoped>
  .fd_title {
    padding: 0 30px;
    background-color: #f8f8f8;
    height: 50px;
    line-height: 48px;
    position: relative;
    color: #666;
    border: solid 1px #e9e9e9;
    border-bottom: 0;
  }

  .fd_title .title {
    color: #404040;
  }

  .fd_title > span {
    margin-right: 15px;
  }

  .fd_title .subtitle {
    font-size: 12px;
    color: #666;
  }

  .fd_title .tool {
    float: right;
  }

  .el-dropdown {
    margin-left: 10px;
  }

  .el-dropdown span {
    color: #409eff;
    cursor: pointer;
  }

  .switch {
    margin-right: 10px;
    float: left;
  }
  .cardBody{
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.8;
    letter-spacing: normal;
    text-align: left;
    color: #666666;
  }
</style>
