export default $ => ({
	login: data => $.post("Account/login", data),
})