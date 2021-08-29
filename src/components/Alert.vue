<template>
	<div 
		class="item" 
		:class="{'item-active': isHovered}" 
		@click="alertClickHandler(id)" 
		@mouseenter="alertHoverHandler(this.id)">
		<p>{{text}}</p>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        text: {
            type: String,
            required: true
        },
		id: {
			type: Number,
			required: true
		},
		isHovered: {
			type: Boolean,
			default: false
		}
    },
	methods: {
		...mapMutations('alerts', {
			alertHoverHandler: 'enter', 
			alertClickHandler: 'remove'
		})
	}
}
</script>

<style scoped>
	.item{
		margin: 0 0 10px 0;
		background-color: rgba(68, 68, 68, 0.6);
		color: #fff;
		border: 1px solid #fff;
		border-radius: 10px;
		padding: 10px;
		cursor: pointer;
	}

	.item-active { 
		background-color: rgb(27, 27, 27);
	}

	.item p {
		font-size: 12px;
		line-height: 1.3em;
		margin-bottom: 0;
	}

	.item-enter-active{
		animation: fadeIn 0.5s;
	}

	.item-leave-active{
		animation: fadeOut 0.5s;
	}

	@keyframes fadeIn{
		from{opacity: 0}
		to{opacity: 1}
	}

	@keyframes fadeOut{
		from{opacity: 1}
		to{opacity: 0}
	}
</style>
