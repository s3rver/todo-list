import { extend } from "vee-validate"

import { min, required } from "vee-validate/dist/rules"

extend("min", min)
extend("required", required)

export default ({}) => {}
