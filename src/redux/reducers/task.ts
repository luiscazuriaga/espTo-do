import { ADD_TASK, DELETE_TASK } from "../actions/actionsType";

interface Props {
    type: string;
    value: object;
}

//Original 
//let defaultState = { tasks: [] };

// Mock da task, para manter alguns dados
let defaultState = { tasks: Array(45).fill({ desc: "Tarefas" }) };

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