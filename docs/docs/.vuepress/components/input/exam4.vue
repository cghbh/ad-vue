<template>
	<div class="input4">
		<m-input v-model="value" clearable placeholder="请输入内容"></m-input>
		<div class="display">{{ value }}</div>
	</div>
</template>

<script>
import MInput from '../../../../../packages/components/input/index.js'
export default {
	components: {
		MInput
	},
	data() {
		return {
			value: ''
		}
	}
}
</script>

<style scoped>
.input4 {
  width: 300px;
}

.display {
	margin-top: 10px;
	padding-left: 15px;
}
</style>
