<template>
    <div class="box">
        <transition-group tag="ul" name="item">
            <li 
                :key="alert.id" 
                v-for="alert in allAlerts" 
                :class="{
                    'item-active': alert.isHovered,
                    'item': true
                }" 
                @click="alertClickHandler(alert.id)" 
                @mouseenter="alertHoverHandler(alert.id)">
                <p>{{alert.text}}</p>
            </li>
        </transition-group>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Alert from './Alert.vue'
export default {
	components: {
		Alert
	},
    computed: {
        ...mapGetters('alerts', {allAlerts: 'all'})
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
	.box {
		position: fixed;
		right: 0;
		top: 0;
		width: 300px;
		z-index: 10000;
		padding: 10px 10px 0 0;
	}
    
	.item{
		margin: 0 0 10px 0;
		background-color: rgba(68, 68, 68, 0.6);
		color: #fff;
		border: 1px solid #fff;
		border-radius: 10px;
		padding: 10px;
		cursor: pointer;
        list-style: none;
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