// Event function to change the players location.
function change_pos(map_id, x, y) { 
	explore.message = atlas.maps[map_id].name;
	avatar.x = x;
	avatar.y = y;
	avatar.map_id = map_id;
	mazemap_set(map_id);
	avatar_save();
}

//Event function to display a message in the usual spot.
function display_message(message) {
	explore.message = message;
}

//Event function to set a respawn location for the player. 
function set_respawn() {
	avatar.hp = avatar.max_hp;
	avatar.mp = avatar.max_mp;
	avatar.sleeploc = [avatar.map_id, avatar.x, avatar.y];
}

//Event function to play a sound.
function play_sound(sound) {
	sounds_play(sound);
}

//Event function to set the music.
function play_music(music_id){
	mazemap_set_music(music_id);
}

//Event function to check for flags. If a flag is present it will run the new script. If the change_script value is -1, it will end the script instead.
function flag_check(flag_id, change_script) {
	if(avatar.flags.indexOf(flag_id) != -1)
	{
		return change_script;
	}else{
		return -2;
	}
}

//Event function that is similar to the flag_check function, except that is checks the tile in front of the player.
function forward_tile_check(tile_id, change_script) {
	var ch_x = 0, ch_y = 0;

    if (avatar.facing == "north") ch_x = 0, ch_y = -1; //avatar_move(0,-1);
    else if (avatar.facing == "west") ch_x = -1, ch_y = 0;//avatar_move(-1,0);
    else if (avatar.facing == "south") ch_x = 0, ch_y = 1;//avatar_move(0,1);
    else if (avatar.facing == "east") ch_x = 1, ch_y = 0;//avatar_move(1,0);
	
	if(mazemap_get_tile(avatar.x+ch_x,avatar.y+ch_y) == tile_id)
	{
		return change_script;
	}else{
		return -2;
	}
}

// Event function that will change the tile in front the player to the specified tile.
function change_forward_tile(tile_id) {
	var ch_x = 0, ch_y = 0;

    if (avatar.facing == "north") ch_x = 0, ch_y = -1; //avatar_move(0,-1);
    else if (avatar.facing == "west") ch_x = -1, ch_y = 0;//avatar_move(-1,0);
    else if (avatar.facing == "south") ch_x = 0, ch_y = 1;//avatar_move(0,1);
    else if (avatar.facing == "east") ch_x = 1, ch_y = 0;//avatar_move(1,0);
	
	change_tile(avatar.map_id, avatar.x+ch_x,avatar.y+ch_y, tile_id);
}

// Event function that will change a tile on any specified map and location. It will then store the map change for loading purposes.
function change_tile(map_id, map_x, map_y, tile_id) {
	if (map_x >= 0 && map_y >= 0 && map_x < atlas.maps[map_id].width && map_y < atlas.maps[map_id].height) {
   		atlas.maps[map_id].tiles[map_y][map_x] = tile_id;
		if(avatar.map_changes.indexOf("change_tile("+map_id+","+map_x+","+map_y+","+tile_id+")") == -1)
		{
			avatar.map_changes.push("change_tile("+map_id+","+map_x+","+map_y+","+tile_id+")");
		}
	}
}

// Event function that will add or remove a flag. ei: change_flag('flag_name', true);
function change_flag(flag_id, flag_state) { 

	if(flag_state == false)
	{
		index = avatar.flags.indexOf(flag_id);
		if(index > -1)
		{
			avatar.flags.splice(index, 1);
		}
	}else{
		index = avatar.flags.indexOf(flag_id);
		if(index == -1)
		{
			avatar.flags.push(flag_id);
		}
	}
}

// Event function that will make an action active for use.
function add_action(action_id){
	info.spells[action_id].active = true;
}

// Event function that will remove an action active from use.
function remove_action(action_id){
	info.spells[action_id].active = false;
}

// Event function that will set the player's weapon setting. Only go up. Remove check to allow to go down.
function set_weapon(weapon_id){
	if(avatar.weapon < weapon_id)
	{
		avatar.weapon = weapon_id;
	}
}

// Event function that will set the player's armor setting. Only go up. Remove check to allow to go down.
function set_armor(armor_id){
	if(avatar.armor < armor_id)
	{
		avatar.armor = armor_id;
	}
}

// Event function that will display an item on the ground. If it is gold, it will add the gold amount for the player.
function found_item(display_text, item_count, item_image_id){
	sounds_play(SFX_COIN);
	
	if (item_count == 1) {
		explore.message = "Found " + display_text + "!";
	}
	else if (item_count > 1) {
		explore.message = "Found " + item_count + " " + display_text;
	}
	
	if (display_text == "Gold") {
		avatar.gold += item_count;
			// flag gold treasure for display while exploring    
		explore.gold_value = item_count;
	}else{
		explore.treasure_id = item_image_id;
	}
}

// Event function that will change a player's attribute. Can be either negative or positive.
function change_attribute(attribute_id, change_amount){
	if(attribute_id.indexOf("MAXHP") != -1)
	{
		avatar.max_hp += change_amount;
		avatar.hp += change_amount;
	}
	else if(attribute_id.indexOf("MAXMP") != -1)
	{
		avatar.max_mp += change_amount;
		avatar.mp += change_amount;
	}
	else if(attribute_id.indexOf("HP") != -1)
	{
		avatar.hp += change_amount;
		if(avatar.hp > avatar.max_hp) avatar.hp = avatar.max_hp;
		if(avatar.hp < 0) avatar.hp = 0;
	}
	else if(attribute_id.indexOf("MP") != -1)
	{
		avatar.mp += change_amount;
		if(avatar.mp > avatar.max_mp) avatar.mp = avatar.max_mp;
		if(avatar.mp < 0) avatar.mp = 0;
	}
	else if(attribute_id.indexOf("DEF") != -1)
	{
		avatar.bonus_def += change_amount;
	}
	else if(attribute_id.indexOf("ATK") != -1 )
	{
		avatar.bonus_atk += change_amount;
	}
}

// Event function that will start a battle with an ememy.
function battle_enemy(enemy_id) {
	// don't spawn the enemy if just loading
	if (!init_complete) return false;
      
    // prepare combat mode
	explore.encounter_chance = 0.0;
    gamestate = STATE_COMBAT;
    action.select_pos = BUTTON_POS_ATTACK;
    combat.timer = COMBAT_INTRO_DELAY;
    combat.phase = COMBAT_PHASE_INTRO;
    combat_set_enemy(enemy_id);
    combat.victory_status = -1;
}

// Event function that will start a battle with an enemy. If the battle ends in victory, a script will start.
function battle_enemy_vicscript(enemy_id, script) {
	// don't spawn the enemy if just loading
	if (!init_complete) return false;
      
    // prepare combat mode
	explore.encounter_chance = 0.0;
    gamestate = STATE_COMBAT;
    action.select_pos = BUTTON_POS_ATTACK;
    combat.timer = COMBAT_INTRO_DELAY;
    combat.phase = COMBAT_PHASE_INTRO;
    combat_set_enemy(enemy_id);
    combat.victory_status = script;
}

// Event function that will setup a dialog window for an NPC. Actions such as
// A shop, inn, or basic dialog are available.
function setup_npc(npc_name, background, npc_list)
{
	dialog.title = npc_name;
	dialog.select_pos = BUTTON_POS_OPT2;
	dialog.items_for_sale = false;

	// most shops should use the exit button as the third option
	dialog.option[2].button = DIALOG_BUTTON_EXIT;
	dialog.option[2].msg1 = "Exit";
	dialog.option[2].msg2 = "";
	
	if(explore.entered == false) 
	{
		if(!resetting_npc)
		{
			//if not just entering map, move avatar back one space
			if (avatar.facing == "north") avatar.y++;
			else if (avatar.facing == "west") avatar.x++;
			else if (avatar.facing == "south") avatar.y--;
			else if (avatar.facing == "east") avatar.x--;
		}
	}
	
	for (var i=0; i<=2; i++) {
		if (npc_list[i]) {
			if (npc_list[i].type == SHOP_WEAPON) {
				npc_set_weapon(i, npc_list[i].value);
			}
			else if (npc_list[i].type == SHOP_ARMOR) {
				npc_set_armor(i, npc_list[i].value);
			}
			else if (npc_list[i].type == SHOP_ACTION) {
				npc_set_action(i, npc_list[i].value);
			}
			else if (npc_list[i].type == NPC_SCRIPT) {

			}
			else if (npc_list[i].type == NPC_EXIT) {
				dialog.option[2].msg1 = npc_list[i].msg1;
			}
			else if (npc_list[i].type == NPC_REST) {
				npc_set_room(i, npc_list[i].cost);
			}
			else if (npc_list[i].type == NPC_MESSAGE) {
				npc_set_message(i, npc_list[i].msg1, npc_list[i].msg2);
			}
		}else{
			if(i < 2) npc_clear_slot(i);
		}
	}
	
	npc_background = background;
	
	gamestate = STATE_DIALOG;
    redraw = true;
    avatar_save();
}