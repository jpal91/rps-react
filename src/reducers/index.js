import { combineReducers } from "redux";

import gameon from './gameon'
import score from './updatescore'
import message from "./message";
import userpick from "./userpick";
import comppick from "./comppick";

export default combineReducers({
    gameIsOn: gameon,
    score: score,
    message: message,
    userPick: userpick,
    compPick: comppick
})