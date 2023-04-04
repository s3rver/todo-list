import Vue from "vue"
import { digitsArToEn, digitsFaToEn } from "@persian-tools/persian-tools"

const max = (v, m) => v.substr(0, m)

const integer = v => v.replace(/[^\d]/g, "")

const numbersToEn = v => digitsArToEn(digitsFaToEn(v))

const numberFormat = v => Vue.filter("numberFormat")(v)

const rulesToJson = options => {
	const rules = {}
	const tools = options.split("|")

	tools.forEach(rule => {
		const [key, value] = rule.split(":")
		rules[key] = rule.includes(":") ? value : true
	})

	return rules
}

export default class {
	constructor({ value, type }, options) {
		this.type = type || "text"
		this.rules = rulesToJson(options)
		this.value = this.set(value)
	}

	set(value) {
		value = value || value === 0 ? value.toString() : ""

		value = numbersToEn(value.toString())

		if (this.rules.hasOwnProperty("integer")) {
			this.type = "tel"
			value = integer(value)
		}

		if (this.rules.hasOwnProperty("numberFormat")) {
			this.type = "tel"
			value = integer(value)
		}

		if (this.rules.hasOwnProperty("max")) {
			value = max(value, this.rules["max"])
		}

		this.value = value
	}

	get() {
		let value = this.value

		if (this.rules.hasOwnProperty("numberFormat")) {
			value = numberFormat(value)
		}

		return value
	}
}