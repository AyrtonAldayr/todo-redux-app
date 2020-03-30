import { Action, createReducer, on, State } from '@ngrx/store';
import { crear, cambiarEstado, editar, borrar, marcarTodo, limpiarTodo } from './todo.actions';
import { Todo } from './models/todo.model';


export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Listar al mundo'),
  new Todo('Salir al mundo'),
  new Todo('Crear el mundo')
];


// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(cambiarEstado, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, nuevoTexto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, texto: nuevoTexto
        };
      } else {
        return todo;
      }
    });
  }),
  on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(marcarTodo, (state, { completado }) => {
    return state.map(todo => {
      return { ...todo, completado };
    });
  }),
  on(limpiarTodo, state => {
    return state.filter(todo => !todo.completado);
  }),
);

export function todoReducer(state, action: Action) {
  return _todoReducer(state, action);
}
