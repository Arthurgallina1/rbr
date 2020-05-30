const INITIAL_STATE = {
    token: null,
    signed: false,
    loading: false,
    user: null,
};

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "@auth/SIGN_IN_SUCCESS":
            return Object.assign({}, state, {
                token: action.payload.token,
                signed: true,
                user: action.payload.user,
            });

        default:
            return state;
    }
}
