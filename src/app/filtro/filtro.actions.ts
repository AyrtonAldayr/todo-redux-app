import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'activo' | 'completados';

export const setFiltro = createAction(
  '[Filtro] set Filtro',
  props<{ filtro: filtrosValidos }>()
);
