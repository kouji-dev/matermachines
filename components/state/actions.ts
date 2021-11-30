export enum ActionTypes {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "OPEN_MODAL",
}

type Action = { type: ActionTypes };

export interface OpenModalAction extends Action {
  type: ActionTypes.OPEN_MODAL;
}

export interface CloseModalAction extends Action {
  type: ActionTypes.CLOSE_MODAL;
}

export type Actions = OpenModalAction | CloseModalAction;
