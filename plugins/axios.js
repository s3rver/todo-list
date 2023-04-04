export default ({ $axios }) => {
	$axios.onRequest(config => {
		config.headers["api-version"] = 1
		config.headers["x-api-key"] = "676bdb1ce2d84276b8874a41f143c739"

		return config
	})
}
