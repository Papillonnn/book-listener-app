import { Effect, Model } from 'dva-core-ts';
import { Reducer } from 'redux';

interface HomeState {
    num: number;
}

interface HomeModel extends Model {
    namespace: 'home';
    state?: HomeState;
    reducers?: {
        add: Reducer<HomeState>;
    };
    effects: {
        asyncAdd: Effect;
    };
}

const initialState = {
    num: 0,
};

function delay(time: number) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

const homeModel: HomeModel = {
    namespace: 'home',
    state: initialState,
    reducers: {
        add(state = initialState, { payload }) {
            return {
                ...state,
                num: state?.num + payload.num,
            };
        },
    },
    effects: {
        *asyncAdd({ payload }, { call, put }) {
            yield call(delay, 3000);
            yield put({
                type: 'add',
                payload,
            });
        },
    },
};

export default homeModel;
