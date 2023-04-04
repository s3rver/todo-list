<template>
	<div class="h-full w-full flex items-center justify-center">
		<app-form :on-submit="login">
			<div class="flex flex-col w-[300px]">
				<app-input v-model="form.username" name="username" placeholder="نام کاربری" rules="required" />
				<app-input v-model="form.password" name="password" placeholder="کلمه عبور" rules="required" />
			</div>

			<app-btn :is_loading="$hasKey('login')" class="w-full mt-8" color="blue" type="submit"> ورود</app-btn>
		</app-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {},
		}
	},

	methods: {
		login() {
			this.$callHandler({
				api: this.$api.account.login,
				hasKey: "login",
			})
				.store(this.form)
				.then(() => {
					// Login
				})
				.catch(e => {
					alert("خطایی رخ داد")
				})
		},
	},
}
</script>
