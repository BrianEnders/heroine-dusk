var NPC_COUNT = 9;


var NPC_REST = 1;
var NPC_MESSAGE = 2;
var NPC_SCRIPT = 3;
var SHOP_WEAPON = 4;
var SHOP_ARMOR = 5;
var SHOP_ACTION = 6;
var NPC_EXIT = 7;

var shop = new Array();

var npc_background = 0;

var reset_script = "";
var resetting_npc = false;

function npc_set_message(slot, msg1, msg2) {
  dialog.option[slot].button = DIALOG_BUTTON_NONE;
  dialog.option[slot].msg1 = msg1;
  dialog.option[slot].msg2 = msg2;
}

function npc_set_weapon(slot, weapon_id) {
  var disable_reason = "";
  if (weapon_id == avatar.weapon) disable_reason = "(You own this)";
  else if (weapon_id < avatar.weapon) disable_reason = "(Yours is better)";
  dialog.value[slot] = weapon_id;
    	dialog.type[slot] = SHOP_WEAPON;

  npc_set_buy(slot, info.weapons[weapon_id].name, info.weapons[weapon_id].gold, disable_reason);
}

function npc_set_armor(slot, armor_id) {
  var disable_reason = "";
  if (armor_id == avatar.armor) disable_reason = "(You own this)";
  else if (armor_id < avatar.armor) disable_reason = "(Yours is better)";
  	dialog.type[slot] = SHOP_ARMOR;
  dialog.value[slot] = armor_id;
  npc_set_buy(slot, info.armors[armor_id].name, info.armors[armor_id].gold, disable_reason);
}

function npc_set_room(slot, room_amount) {
	console.log(room_amount);
  var disable_reason = "";
  if (avatar.hp == avatar.max_hp && avatar.mp == avatar.max_mp) disable_reason = "(You are well rested)";
  dialog.type[slot] = NPC_REST;
  dialog.cost[slot] = room_amount;
  
  npc_set_buy(slot, "Room for the night", room_amount, disable_reason);
}

function npc_set_action(slot, action_id) {
  var disable_reason = "";
  //if (action_id <= avatar.spellbook) disable_reason = "(You know this)";
  //else if (action_id > avatar.spellbook +1) disable_reason = "(Too advanced)";
	dialog.value[slot] = action_id;
	dialog.type[slot] = SHOP_ACTION;
  if(info.spells[action_id].type == ACTION_TYPE_NONE)
  {
	if (info.spells[action_id].active) disable_reason = "(You have this)";
	npc_set_buy(slot, info.spells[action_id].name, info.spells[action_id].gold, disable_reason); 
  }else if(info.spells[action_id].type == ACTION_TYPE_ITEM){
	if (info.spells[action_id].active) disable_reason = "(You have this)";
	npc_set_buy(slot, info.spells[action_id].name, info.spells[action_id].gold, disable_reason); 
  }else if(info.spells[action_id].type == ACTION_TYPE_SPELL){
	if (info.spells[action_id].active) disable_reason = "(You know this)";
	npc_set_buy(slot, "Spell: " + info.spells[action_id].name, info.spells[action_id].gold, disable_reason); 
  }
}

function npc_act(slot_id) {
	if (slot_id == 2) {
		npc_exit();
		return;
	}

	if (dialog.type[slot_id] == SHOP_WEAPON) {
		npc_buy_weapon(dialog.value[slot_id]);
		return;
	}

	if (dialog.type[slot_id] == SHOP_ARMOR) {
		npc_buy_armor(dialog.value[slot_id]);
		return;
	}
	
	if (dialog.type[slot_id] == SHOP_ACTION) {
		npc_buy_action(dialog.value[slot_id]);
		return;
	}

	if (dialog.type[slot_id] == NPC_REST) {
		npc_buy_room(dialog.cost[slot_id]);
		return;
	}  
}

function npc_set_buy(slot, name, cost, disable_reason) {

  dialog.option[slot].msg1 = "Buy " + name;

  // show the gold cost or the reason you can't
  if (disable_reason != "") {
    dialog.option[slot].msg2 = disable_reason;
  }else {
    dialog.option[slot].msg2 = "for " + cost + " gold";
  }

  // display the dialog button if the item can be purchased
  var can_buy = true;
  if (avatar.gold < cost) can_buy = false;
  if (disable_reason != "") can_buy = false;

  if (can_buy) {
    dialog.option[slot].button = DIALOG_BUTTON_BUY;
  }
  else {
    dialog.option[slot].button = DIALOG_BUTTON_NONE;
  }
  
  // used to determine whether to display current gold
  dialog.items_for_sale = true;
}

function npc_buy_room(cost) {
  if (avatar.gold < cost) return;
  
  avatar.gold -= cost;
  sounds_play(SFX_COIN);
  dialog.message = "You have rested";
  
  avatar_sleep();
  reset_npc();
  redraw = true;
}


function npc_clear_slot(slot) {
  dialog.option[slot].msg1 = "";
  dialog.option[slot].msg2 = "";
  dialog.option[slot].button = DIALOG_BUTTON_NONE;
}

function npc_buy_weapon(weapon_id) {
  var cost = info.weapons[weapon_id].gold;
  if (avatar.gold < cost) return;

  avatar.gold -= cost;
  sounds_play(SFX_COIN);
  avatar.weapon = weapon_id;
  dialog.message = "Bought " + info.weapons[weapon_id].name;
  reset_npc();
  redraw = true;

}

function npc_buy_armor(armor_id) {
  var cost = info.armors[armor_id].gold;
  if (avatar.gold < cost) return;

  avatar.gold -= cost;
  sounds_play(SFX_COIN);
  avatar.armor = armor_id;
  dialog.message = "Bought " + info.armors[armor_id].name;
  reset_npc();
  redraw = true;
}

function npc_buy_action(action_id) {
  var cost = info.spells[action_id].gold;
  if (avatar.gold < cost) return;
  
  avatar.gold -= cost;
  sounds_play(SFX_COIN);
  info.spells[action_id].active = true;
  
  if(info.spells[action_id].type == ACTION_TYPE_NONE){
	dialog.message = "Purchased " + info.spells[action_id].name;
  }else if(info.spells[action_id].type == ACTION_TYPE_ITEM){
	dialog.message = "Purchased " + info.spells[action_id].name;
  }else if(info.spells[action_id].type == ACTION_TYPE_SPELL){
	dialog.message = "Learned " + info.spells[action_id].name;
  }
  
  reset_npc();
  redraw = true;
}

function reset_npc()
{
	resetting_npc = true;
	eval(reset_script);
	resetting_npc = false;
}

function npc_exit() {
  sounds_play(SFX_CLICK);
  gamestate = STATE_EXPLORE;
  redraw = true; 
}

