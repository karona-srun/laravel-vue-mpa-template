<template>
  <div class="text-center">
    <main class="form-signin">
      <form ref="formInline" :model="formInline">
        <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="formInline.firstname"
            placeholder="First Name"
          />
          <label for="floatingInput">First Name</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="formInline.lastname"
            placeholder="Last Name"
          />
          <label for="floatingInput">Last Name</label>
        </div>
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
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            v-model="formInline.password_confirmation"
            placeholder="Re-Type Password"
          />
          <label for="floatingPassword">Re-Type Password</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary" @click.prevent="handleSubmit('formInline')" type="submit">
          Sign Up
        </button>
      </form>
    </main>
  </div>
  <!-- <Row justify="center">
    <Col :sm="12" :md="12" :lg="6">
      <Divider>SignUp Account</Divider>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="First Name">
          <Input
            type="text"
            prefix="ios-person-outline"
            v-model="formInline.firstname"
            placeholder="First Name"
            focus
          >
          </Input>
        </FormItem>
        <FormItem prop="Last Name">
          <Input
            type="text"
            prefix="ios-person-outline"
            v-model="formInline.lastname"
            placeholder="Last Name"
            focus
          >
          </Input>
        </FormItem>
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
        <FormItem prop="password_confirmation">
          <Input
            type="password"
            password
            prefix="ios-lock-outline"
            v-model="formInline.password_confirmation"
            placeholder="Re-Type Password"
          ></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" long @click="handleSubmit('formInline')"
            >Sign Up</Button
          >
          <Divider plain>Or</Divider>
          <Button type="primary" long @click="handleGoBack">Go Back</Button>
        </FormItem>
      </Form>
    </Col>
  </Row> -->
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formInline: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    ...mapActions(["signUp"]),
    handleSubmit(name) {
        const response = this.signUp(this.formInline);
        alert(JSON.stringify(this.formInline))
        response.then((response) => {
          console.log(response);

          if (response.status === "error") {
            console.log(JSON.stringify( response[0] ))
          } else {
            console.log(JSON.stringify( response.message ))
            this.$router.push({ path: "/sign-in" });
          }
        });
    },
    handleGoBack() {
      this.$router.push("/");
    },
  },
};
</script>