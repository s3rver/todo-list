export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "todo-tadbir-kish",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	router: {
		middleware: ["auth"],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/css/tailwind.css", "@/assets/css/app.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ["~/plugins/api", "~/plugins/hasKey", "~/plugins/callHandler", "~/plugins/veeValidate"],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"v-wave/nuxt",
		"@nuxtjs/axios",
		"@nuxtjs/auth-next",
	],

	vWave: {
		color: "white",
		easing: "ease-out",
		duration: 0.5,
		dissolveDuration: 0.15,
		cancellationPeriod: 75,
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: "http://vti.tadbirkish.com/api",
	},

	auth: {
		strategies: {
			local: {
				user: {
					property: "apiData",
				},

				token: {
					maxAge: 60 * 60 * 24 * 30, // 30 days
				},

				endpoints: {
					user: {
						url: "/Init",
						method: "get",
					},

					logout: {
						url: "/Identity/LogOut",
						method: "post",
					},
				},
			},
		},

		redirect: {
			login: "/login",
			logout: "/",
			home: "/",
			callback: "/login",
		},

		watchLoggedIn: false,
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: ["vee-validate/dist/rules"],

		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
}
