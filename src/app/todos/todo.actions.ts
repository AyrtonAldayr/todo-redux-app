import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crear todo',
  props<{ texto: string }>()
);


export const cambiarEstado = createAction(
  '[TODO] Cambiar Estado todo',
  props<{ id: number }>()
);


export const editar = createAction(
  '[TODO] Editar todo',
  props<{ id: number, nuevoTexto: string }>()
);


export const borrar = createAction(
  '[TODO] Borrar todo',
  props<{ id: number }>()
);

export const marcarTodo = createAction(
  '[TODO] Marcar Todos los todo',
  props<{ completado: boolean }>()
);

export const limpiarTodo = createAction(
  '[TODO] Limpiar todo'
);
