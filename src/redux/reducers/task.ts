import { ADD_TASK, DELETE_TASK } from "../actions/actionsType";

interface Props {
    type: string;
    value: object;
}

const defaultState = { tasks: [{ desc: "concertar o computador" }, { desc: "estudar mandarim" }] };

const task = (state = defaultState, { type, value }: Props) => {
    switch (type) {
        case ADD_TASK:
            return { ...state, tasks: value };
        case DELETE_TASK:
            return { ...state, tasks: value };
        default:
            return state;
    }
};

export default task