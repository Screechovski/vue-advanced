export default {
	namespaced: true,
	state: {
		messages: []
	},
	getters: {
		all: state => state.messages,
	},
	mutations: {
		add(state, { id, text }){
			state.messages.push({ id, text, isHovered: false }); // hw: type, mb time // думаю что поле time в самом обьекте не должно быть, разве что для какой-ниблудь анимации, которая при наведении на паузу бы ставилась
		},
		enter(state, id) {
			const newMessages = state.messages.map(msg => {
				if (msg.id === id) {
					return {
						...msg,
						isHovered: true,
					}
				}
				return msg;
			});
			state.messages = newMessages;
		},
		autoRemove(state, id){
			const {isHovered} = state.messages.find(msg=>msg.id===id) || true;

			if (!isHovered) {
				state.messages = state.messages.filter(msg=>msg.id!==id);
			}
		},
		remove(state, id){
			state.messages = state.messages.filter(msg=>msg.id!==id);
		}
	},
	actions: {
		add({ commit }, { text, timeout = null }){
			const alertId = getRandomNum();

			commit('add', {id: alertId, text});

			if (timeout !== null) {
				setTimeout(()=>{
					commit('autoRemove', alertId);
				}, timeout)
			}
		}
	}
}

const getRandomNum = () => {
	return Date.now() * Math.random();
}