import {store} from "../../redux/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AlertType = 'error' | 'info' | 'success' | 'warning'
export type OrderValue = 'desc' | 'asc'
export type AppRole = 'athlete' | 'coach' | 'admin'