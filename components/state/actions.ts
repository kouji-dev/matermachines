export enum ActionTypes {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "OPEN_MODAL",
}

type Action = { type: ActionTypes };

export class OpenModalAction implements Action {
  type = ActionTypes.OPEN_MODAL;
}

export class CloseModalAction implements Action {
  type = ActionTypes.CLOSE_MODAL;
}
export type Actions = OpenModalAction | CloseModalAction;
