<template>
  <div class="content-container">
    <div class="pic0">
      <img src="/US/left.png" alt="" style="width: 190px" />
    </div>
    <div class="main">
      <div class="left">
        <div class="left1">
          <div class="pic1">
            <img src="/US/上海.svg" alt="" />
          </div>
          <div class="description">上海</div>
          <div class="text-box">
            地址：上海市徐汇区漕宝路70号C座2406室<br />电话：021-64325036<br />
            邮箱：contact@shinyinfo.com.cn
          </div>
        </div>
        <div class="line"></div>
      </div>

      <div class="form_">
        <div class="movable">
          <div class="title">预约产品体验</div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            style="margin-top: 20px"
          >
            <div class="group1">
              <el-form-item prop="name">
                <el-input
                  v-model="ruleForm.name"
                  placeholder="*请输入您的姓名"
                  style="width: 350px"
                ></el-input>
              </el-form-item>
              <el-form-item prop="email">
                <el-input
                  v-model="ruleForm.email"
                  placeholder="*请输入您的邮箱"
                  style="width: 350px; margin-left: 50px"
                >
                </el-input>
              </el-form-item>
            </div>

            <div class="group2">
              <el-form-item prop="phone">
                <el-input
                  v-model.number="ruleForm.phone"
                  placeholder="*请输入您的电话"
                  style="width: 350px"
                ></el-input>
              </el-form-item>

              <el-form-item prop="company">
                <el-input
                  v-model="ruleForm.company"
                  placeholder="*公司名称"
                  style="width: 350px; margin-left: 50px"
                >
                </el-input>
              </el-form-item>
            </div>

            <el-form-item prop="desc">
              <el-input
                type="textarea"
                v-model="ruleForm.desc"
                placeholder="目前在运维领域的痛点"
              ></el-input>
            </el-form-item>
            <el-form-item style="width: 152px; margin-left: auto">
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
                style="
                  background: #1370ee;
                  box-shadow: 3px 3px 20px 0 rgba(19, 112, 238, 0.2);
                  border-radius: 30px;
                  width: 152px;
                  height: 60px;
                "
                ><div class="text-s">提交预约</div></el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="pic2">
      <img src="/US/right.png" alt="" style="width: 290px" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '联系我们',
      text1: '联系我们',
      ruleForm: {
        name: '',
        email: '',
        phone: '',
        company: '',
        desc: ''
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        email: [{ required: true, message: '请输入邮箱地址', trigger: 'blur' }],
        phone: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { type: 'number', message: '请输入正确的电话号码' }
        ],
        company: [
          { required: true, message: '请输入公司名称', trigger: 'blur' }
        ]
      }
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          name: 'keywords',
          content: ''
        }
      ]
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('提交成功!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped>
.content-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  height: 533px;
  background: #ffffff;
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.1);
  border-radius: 12px;
  margin-top: 120px;
  margin-bottom: 120px;
  z-index: 99;
}
.pic0 {
  z-index: 98;
  margin-right: -130px;
  margin-top: -435px;
}
.pic2 {
  z-index: 98;
  margin-left: -210px;
  margin-bottom: -505px;
}
.title {
  font-family: PSR;
  font-size: 26px;
  color: #333333;
  letter-spacing: 0;
}

.description {
  font-family: PSR;
  font-size: 20px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  margin-top: 20px;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin-top: -50px;
}
.pic1 {
  text-align: center;
}
.form_ {
  height: 533px;
  margin-top: 200px;
  margin-bottom: 100px;
}
.left {
  position: relative;
  top: 0;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left1 {
  display: block;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  margin-bottom: 80px;
}
.movable {
  background: #ffffff;
  border-radius: 12px;
  height: auto;
}
:deep(.el-input__inner) {
  background: #f5f7fa;
  height: 60px;
}

:deep(.el-textarea__inner) {
  background: #f5f7fa;
  height: 100px;
}
.group1 {
  display: flex;
}
.group2 {
  display: flex;
}
.line {
  border: 1px solid #ebeef5;
  width: 1px;
  height: 413px;
  background: #ebeef5;
}
.text-box {
  font-family: PSR;
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: 20px;
}
.text-s {
  font-family: PSR;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0;
}
</style>
