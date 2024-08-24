<template>
  <div class="text-center">
    <main class="form-signin">
      <form ref="formInline" :model="formInline">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            v-model="formInline.email"
            placeholder="Email address"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            v-model="formInline.password"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" @click.prevent="handleSubmit('formInline')" type="submit">
          Sign in
        </button>
      </form>
    </main>
  </div>

  <!-- <Row>
    <Col :sm="12" :md="12" :lg="6">
      <Divider>SignIn Account</Divider>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="email">
          <Input
            type="email"
            prefix="ios-mail-outline"
            v-model="formInline.email"
            placeholder="Email address"
            focus
          >
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input
            type="password"
            password
            prefix="ios-lock-outline"
            v-model="formInline.password"
            placeholder="Password"
          >
          </Input>
        </FormItem>
        <Button type="text" class="text-break" :style="{ margin:'0px 0px 0px -15px' }" to="/password/email">Forgot Your Password ?</Button>
        <FormItem>
          <Button type="primary" long @click="handleSubmit('formInline')"
            >Sign In</Button
          >
          <Divider plain>Or</Divider>
          <Button type="primary" long @click="handleGoBack"
            >Go Back</Button
          >
        </FormItem>
      </Form>
    </Col>
  </Row> -->
</template>
<style>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      formInline: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(["userdata"]),
  },
  methods: {
    ...mapActions(["signIn"]),
    handleSubmit(name) {
          const response = this.signIn(this.formInline);
          response.then((response) => {
            if (response.status === "error") {
              if (response.validator === true) {
                console.log(JSON.stringify( response[0] ))
              } else {
                console.log(JSON.stringify( response.error ))
              }
            } else {
              this.$router.push({ path: "/dashboard" });
            }
          });
    },
    handleGoBack() {
      this.$router.push("/");
    },
  },
};
</script>