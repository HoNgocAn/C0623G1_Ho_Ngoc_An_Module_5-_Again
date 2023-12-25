import * as postCallAPI from "../../service/method"
import { GET_ALL_POST} from "../action";
import {takeLatest,put} from "redux-saga/effects"



function* getAllPostApiSaga(){
    try{
        const data = yield postCallAPI.getAllPost();
        yield put({
            type: GET_ALL_POST,
            payload: data
        })
    } catch (e) {
        console.log("Error");
    }
}


export default function* rootSaga(){
    yield takeLatest(GET_ALL_POST,getAllPostApiSaga)
}