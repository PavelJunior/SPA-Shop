export default {
    namespaced: true,
    state: {
        info: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z ]{2,30}$/,
            },
            {
                name: 'Phone',
                value: 'dddd',
                pattern: /^[0-9]{7,14}$/,

            },
            {
                name: 'Email',
                value: '',
                pattern: /.+/,

            },
            {
                name: 'Some Field 1',
                value: '',
                pattern: /.+/,

            },
            {
                name: 'Some Field 2',
                value: '',
                pattern: /.+/,
            }
        ],
        submitted: "false"
    },
    getters: {
        info(state) {
            return state.info;
        },
        submitted(state) {
            return state.submitted;
        },
        name(state) {
            return state.info[0].value
        }

    },
    mutations: {
        setValue(state, data){
            console.log(data);
            state.info[data.index].value = data.value;
        },
        setSubbmitedToProccess(state){
            state.submitted = "Process";
        },
        setSubbmitedToTrue(state){
            state.submitted = "true";
        }

    },
    actions: {
        onSubmit(store) {
            store.commit("setSubbmitedToProccess");
            setTimeout(() => {
                store.commit("setSubbmitedToTrue");
            }, 3000);
        }
    },
    strict: process.env.NODE_ENV !== 'production'
}