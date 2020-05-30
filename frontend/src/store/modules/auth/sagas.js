import { takeLatest, call, put, all } from "redux-saga/effects";
import api from "../../../services/api";
import history from "../../../services/history";
import { signInSuccess } from "./actions";

export function* signIn({ payload }) {
    const { username, password } = payload;
    try {
        const response = yield call(api.post, "session", {
            username,
            password,
        });
        const { token, user } = response.data;

        yield put(signInSuccess(token, user));

        history.push("/dashboard");
    } catch (err) {
        console.log(err);
    }
}
export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);
