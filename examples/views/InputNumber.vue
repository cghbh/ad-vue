<template>
	<div class="dispm-exam">
		<m-input-number v-model="value" :step="0.5" :precision="3" :max="20" :min="10"></m-input-number>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: 12,
			object: {
				name: '张三'
			}
		}
	},
	methods: {
		updateValue() {
			this.$forceUpdate()
		},
		updateObject() {
			this.object.age = 100
			this.$set(this.object, 'age', 1000)
		}
	}
}
</script>

<style scoped>
.dispm-exam {
	width: 200px;
	margin: 20px;
}
</style>
