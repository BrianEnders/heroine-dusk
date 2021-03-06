/**
 Action menu for combat or casting spells out of combat
 */
var BUTTON_SIZE = 16;
var SELECT_SIZE = 20;
var BUTTON_OFFSET = 2;

var BUTTON_POS_INFO = {x:140, y:0, w:20, h:20};
var BUTTON_POS_ATTACK = {x:120, y:20, w:20, h:20};
var BUTTON_POS_RUN = {x:140, y:20, w:20, h:20};
var BUTTON_POS_ACT1 = {x:120, y:40, w:20, h:20};
var BUTTON_POS_ACT2 = {x:140, y:40, w:20, h:20};
var BUTTON_POS_ACT3 = {x:120, y:60, w:20, h:20};
var BUTTON_POS_ACT4 = {x:140, y:60, w:20, h:20};
var BUTTON_POS_ACT5 = {x:120, y:80, w:20, h:20};
var BUTTON_POS_ACT6 = {x:140, y:80, w:20, h:20};

var ACTION_TYPE_NONE = 0;
var ACTION_TYPE_ITEM = 1;
var ACTION_TYPE_SPELL = 2;

var action = new Object();

action.button_img = new Image();
action.button_img_loaded = false;
action.select_img = new Image();
action.select_img_loaded = false;

action.select_pos = BUTTON_POS_INFO;

/**** Initialize ***************/

function action_init() {

	action.button_img.src = "images/interface/action_buttons.png";
	action.button_img.onload = function () {
		action_button_onload();
	};
	action.select_img.src = "images/interface/select.png";
	action.select_img.onload = function () {
		action_select_onload();
	};
}

function action_button_onload() {
	action.button_img_loaded = true;
}

function action_select_onload() {
	action.select_img_loaded = true;
}

/**** Logic functions ***************/

function action_logic() {
	action_logic_moveselect();
}

// check an action by the button location

function action_checkuse(check_pos) {

	// option 1: mouse click
	if (pressing.mouse && !input_lock.mouse && isWithin(mouse_pos, check_pos)) {
		input_lock.mouse = true;
		return true;
	}

	// option 2: action button
	if (pressing.action && !input_lock.action && action.select_pos == check_pos) {
		input_lock.action = true;
		return true;
	}

	return false;
}

/**
 * Use the arrowkeys to move the selection cursor
 * The complexity here comes from two factors: 
 * 1. This menu is used in COMBAT and INFO context, with Fight/Run only being combat buttons
 * 2. Spells are unlockable (in order) so we have to skip unknown spells
 */

function action_logic_moveselect() {

	// skip if no directions are being pressed
	if (!pressing.up && !pressing.left && !pressing.right && !pressing.down) return;

	// currently on the info button
	if (action.select_pos == BUTTON_POS_INFO) {
		if (pressing.down && !input_lock.down) {
			if (info.spells[1].active) {
				action.select_pos = BUTTON_POS_ACT1;
				input_lock.down = true;
				redraw = true;
				return;
			} else if (info.spells[2].active) {
				action.select_pos = BUTTON_POS_ACT2;
				input_lock.down = true;
				redraw = true;
				return;
			}
		}
	}

	// currently on the attack button
	else if (action.select_pos == BUTTON_POS_ATTACK) {
		if (pressing.right && !input_lock.right) {
			action.select_pos = BUTTON_POS_RUN;
			input_lock.right = true;
			redraw = true;
			return;
		} else if (pressing.down && !input_lock.down) {
			if (info.spells[1].active) {
				action.select_pos = BUTTON_POS_ACT1;
				input_lock.down = true;
				redraw = true;
				return;
			} else if (info.spells[3].active) {
				action.select_pos = BUTTON_POS_ACT3;
				input_lock.down = true;
				redraw = true;
				return;
			} else if (info.spells[5].active) {
				action.select_pos = BUTTON_POS_ACT5;
				input_lock.down = true;
				redraw = true;
				return;
			}
		}
	}

	// currently on the run button
	else if (action.select_pos == BUTTON_POS_RUN) {
		if (pressing.left && !input_lock.left) {
			action.select_pos = BUTTON_POS_ATTACK;
			input_lock.left = true;
			redraw = true;
			return;
		} else if (pressing.down && !input_lock.down) {
			if (info.spells[2].active) {
				action.select_pos = BUTTON_POS_ACT2;
				input_lock.down = true;
				redraw = true;
				return;
			} else if (info.spells[4].active) {
				action.select_pos = BUTTON_POS_ACT4;
				input_lock.down = true;
				redraw = true;
				return;
			} else if (info.spells[6].active) {
				action.select_pos = BUTTON_POS_ACT6;
				input_lock.down = true;
				redraw = true;
				return;
			}
		}
	}

	// currently on the heal button
	else if (action.select_pos == BUTTON_POS_ACT1) {
		if (pressing.up && !input_lock.up) {
			if (gamestate == STATE_COMBAT) {
				action.select_pos = BUTTON_POS_ATTACK;
				input_lock.up = true;
				redraw = true;
				return;
			} else if (gamestate == STATE_INFO) {
				action.select_pos = BUTTON_POS_INFO;
				input_lock.up = true;
				redraw = true;
				return;
			}
		} else if (pressing.right && !input_lock.right) {
			if (info.spells[2].active) {
				action.select_pos = BUTTON_POS_ACT2;
				input_lock.right = true;
				redraw = true;
				return;
			}
		} else if (pressing.down && !input_lock.down) {
			if (info.spells[3].active) {
				action.select_pos = BUTTON_POS_ACT3;
				input_lock.down = true;
				redraw = true;
				return;
			} else if (info.spells[5].active) {
				action.select_pos = BUTTON_POS_ACT5;
				input_lock.down = true;
				redraw = true;
				return;
			}
		}
	}

	// currently on the burn button
	else if (action.select_pos == BUTTON_POS_ACT2) {
		if (pressing.up && !input_lock.up) {
			if (gamestate == STATE_COMBAT) {
				action.select_pos = BUTTON_POS_RUN;
				input_lock.up = true;
				redraw = true;
				return;
			} else if (gamestate == STATE_INFO) {
				action.select_pos = BUTTON_POS_INFO;
				input_lock.up = true;
				redraw = true;
				return;
			}
		} else if (pressing.left && !input_lock.left) {
			if (info.spells[1].active) {
				action.select_pos = BUTTON_POS_ACT1;
				input_lock.left = true;
				redraw = true;
				return;
			}
		} else if (pressing.down && !input_lock.down) {
			if (pressing.down && !input_lock.down) {
				if (info.spells[4].active) {
					action.select_pos = BUTTON_POS_ACT4;
					input_lock.down = true;
					redraw = true;
					return;
				} else if (info.spells[6].active) {
					action.select_pos = BUTTON_POS_ACT6;
					input_lock.down = true;
					redraw = true;
					return;
				}
			}
		}
	}

	// currently on the unlock button
	else if (action.select_pos == BUTTON_POS_ACT3) {
		if (pressing.up && !input_lock.up) {
			if (info.spells[1].active) {
				action.select_pos = BUTTON_POS_ACT1;
				input_lock.up = true;
				redraw = true;
				return;
			} else if (gamestate == STATE_INFO) {
				action.select_pos = BUTTON_POS_INFO;
				input_lock.up = true;
				redraw = true;
				return;
			} else if (gamestate == STATE_COMBAT) {
				action.select_pos = BUTTON_POS_ATTACK;
				input_lock.up = true;
				redraw = true;
				return;
			}
		} else if (pressing.right && !input_lock.right) {
			if (info.spells[4].active) {
				action.select_pos = BUTTON_POS_ACT4;
				input_lock.right = true;
				redraw = true;
				return;
			}
		} else if (pressing.down && !input_lock.down) {
			if (info.spells[5].active) {
				action.select_pos = BUTTON_POS_ACT5;
				input_lock.down = true;
				redraw = true;
				return;
			}
		}
	}

	// currently on the light button
	else if (action.select_pos == BUTTON_POS_ACT4) {
		if (pressing.up && !input_lock.up) {
			if (info.spells[2].active) {
				action.select_pos = BUTTON_POS_ACT2;
				input_lock.up = true;
				redraw = true;
				return;
			} else if (gamestate == STATE_INFO) {
				action.select_pos = BUTTON_POS_INFO;
				input_lock.up = true;
				redraw = true;
				return;
			} else if (gamestate == STATE_COMBAT) {
				action.select_pos = BUTTON_POS_RUN;
				input_lock.up = true;
				redraw = true;
				return;
			}
		} else if (pressing.left && !input_lock.left) {
			if (info.spells[3].active) {
				action.select_pos = BUTTON_POS_ACT3;
				input_lock.left = true;
				redraw = true;
				return;
			}
		} else if (pressing.down && !input_lock.down) {
			if (info.spells[6].active) {
				action.select_pos = BUTTON_POS_ACT6;
				input_lock.down = true;
				redraw = true;
				return;
			}
		}
	}

	// currently on the freeze button
	else if (action.select_pos == BUTTON_POS_ACT5) {
		if (pressing.up && !input_lock.up) {
			if (info.spells[3].active) {
				action.select_pos = BUTTON_POS_ACT3;
				input_lock.up = true;
				redraw = true;
				return;
			} else if (info.spells[1].active) {
				action.select_pos = BUTTON_POS_ACT1;
				input_lock.up = true;
				redraw = true;
				return;
			} else if (gamestate == STATE_INFO) {
				action.select_pos = BUTTON_POS_INFO;
				input_lock.up = true;
				redraw = true;
				return;
			} else if (gamestate == STATE_COMBAT) {
				action.select_pos = BUTTON_POS_FIGHT;
				input_lock.up = true;
				redraw = true;
				return;
			}
		} else if (pressing.right && !input_lock.right) {
			if (info.spells[6].active) {
				action.select_pos = BUTTON_POS_ACT6;
				input_lock.right = true;
				redraw = true;
				return;
			}
		}
	}

	// currently on the reflect button
	else if (action.select_pos == BUTTON_POS_ACT6) {
		if (pressing.up && !input_lock.up) {
			if (info.spells[4].active) {
				action.select_pos = BUTTON_POS_ACT3;
				input_lock.up = true;
				redraw = true;
				return;
			} else if (info.spells[2].active) {
				action.select_pos = BUTTON_POS_ACT1;
				input_lock.up = true;
				redraw = true;
				return;
			} else if (gamestate == STATE_INFO) {
				action.select_pos = BUTTON_POS_INFO;
				input_lock.up = true;
				redraw = true;
				return;
			} else if (gamestate == STATE_COMBAT) {
				action.select_pos = BUTTON_POS_RUN;
				input_lock.up = true;
				redraw = true;
				return;
			}
		} else if (pressing.left && !input_lock.left) {
			if (info.spells[5].active) {
				action.select_pos = BUTTON_POS_ACT5;
				input_lock.left = true;
				redraw = true;
				return;
			}
		}
	}
}


/**** Render functions ***************/

function action_render() {

	if (!action.button_img_loaded) return;

	// if in combat, show fight and run
	if (gamestate == STATE_COMBAT) {
		action_render_button(0, BUTTON_POS_ATTACK);
		action_render_button(1, BUTTON_POS_RUN);
	}

	for (var i = 1; i < info.spells.length; i++) {
		if (info.spells[i]) {
			if (info.spells[i].active) {
				action_render_button(i + 1, info.spells[i].image_id);
			}
		}
	}

	action_render_select(action.select_pos);
}

function action_render_button(id, pos) {
	ctx.drawImage(
	action.button_img, id * BUTTON_SIZE * PRESCALE, 0, BUTTON_SIZE * PRESCALE, BUTTON_SIZE * PRESCALE, (pos.x + BUTTON_OFFSET) * SCALE, (pos.y + BUTTON_OFFSET) * SCALE, BUTTON_SIZE * SCALE, BUTTON_SIZE * SCALE);
}

function action_render_select(pos) {
	if (!action.select_img_loaded) return;
	ctx.drawImage(
	action.select_img, 0, 0, SELECT_SIZE * PRESCALE, SELECT_SIZE * PRESCALE, pos.x * SCALE, pos.y * SCALE, SELECT_SIZE * SCALE, SELECT_SIZE * SCALE);
}