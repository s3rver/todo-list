<template>
	<div class="bg-white h-16 shadow">
		<div class="flex justify-between items-center container mx-auto h-full font-bold">
			<div>
				<ul class="flex gap-x-8">
					<li>
						<nuxt-link exact-active-class="text-blue-500" to="/"> صفحه اصلی</nuxt-link>
					</li>
					<li>
						<nuxt-link exact-active-class="text-blue-500" to="/notes"> یادداشت ها</nuxt-link>
					</li>
				</ul>
			</div>

			<div>
				<nuxt-link exact-active-class="text-blue-500" to="/login">ورود به حساب کاربری</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>
