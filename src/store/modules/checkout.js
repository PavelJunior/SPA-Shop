export default {
    namespaced: true,
    state: {
        info: [
            {
                name: 'First name',
                value: '',
                pattern: /^[a-zA-Z ]{1,40}$/,
            },
            {
                name: 'Second name',
                value: '',
                pattern: /^[a-zA-Z ]{1,40}$/,
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,14}$/,

            },
            {
                name: 'Email',
                value: '',
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

            },
            {
                name: 'Address',
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
            }, 1000);
        }
    },
    strict: process.env.NODE_ENV !== 'production'
}