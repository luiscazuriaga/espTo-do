import { TESTE } from "../actions/actionsType.js";

const defaultState = { inputValue: "" };

const inputValue = (state = defaultState, { type, value }) => {
    switch (type) {
        case TESTE:
            return { ...state, inputValue: value };

        default:
            return state;
    }
};

export default inputValue;
