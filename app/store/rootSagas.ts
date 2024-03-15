import { all } from "redux-saga/effects";
import { productsSaga } from "../../src/features/products/saga";

export default function* rootSaga() {
  yield all([...productsSaga]);
}
