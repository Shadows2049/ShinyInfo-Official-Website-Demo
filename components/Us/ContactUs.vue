<template>
  <div>
    <el-container class="content-container">
      <el-header height="200px">
        <h1 class="title"></h1>
        <div class="description">
          {{ text1 }}
        </div>
      </el-header>
      <el-main class="main">
        <div class="content">
          <img
            src="/UEBA/用户行为分析系统(UEBA).png"
            alt=""
            style="width: 800px"
          />
        </div>
      </el-main>
    </el-container>
    <div class="form_">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <div class="group1">
          <el-form-item prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="*请输入您的姓名"
              style="width: 500px"
            ></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input
              v-model="ruleForm.email"
              placeholder="*请输入您的邮箱"
              style="width: 500px; margin-left: 50px"
            >
            </el-input>
          </el-form-item>
        </div>

        <div class="group2">
          <el-form-item prop="phone">
            <el-input
              v-model.number="ruleForm.phone"
              placeholder="*请输入您的电话"
              style="width: 500px"
            ></el-input>
          </el-form-item>

          <el-form-item prop="company">
            <el-input
              v-model="ruleForm.company"
              placeholder="*公司名称"
              style="width: 500px; margin-left: 50px"
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
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交预约</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
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
  height: 800px;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}

.description {
  position: relative;
  max-width: 1000px;
  text-indent: 2em;
  font-family: PSR;
  font-size: 18px;
  color: #666a72;
  letter-spacing: 0;
  text-align: center;
  margin: -10px auto;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin-top: -50px;
}
.form_ {
  display: flex;
  align-items: center;
  justify-content: center;
}
:deep(.el-input__inner) {
  height: 70px;
}

:deep(.el-textarea__inner) {
  height: 100px;
}
.group1 {
  display: flex;
}
.group2 {
  display: flex;
}
</style>
