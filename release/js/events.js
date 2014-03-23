var EVENT_TYPE_EXIT = 0;
var EVENT_TYPE_EVENT = 1;
var EVENT_TYPE_START = 2;

//var eventdata = new Object();
/**eventdata.event = new Array();
// 0
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(1,6,6)'];
eventdata.event.push(eventd);
// 1
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(0,1,2)'];
eventdata.event.push(eventd);
// 2
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(2,1,2)'];
eventdata.event.push(eventd);
// 3
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(3,2,4)'];
eventdata.event.push(eventd);
// 4
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(4,6,2)'];
eventdata.event.push(eventd);
// 5
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(1,2,6)'];
eventdata.event.push(eventd);
// 6
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['display_message("You rest for awhile.")',
				  'set_respawn()',
				  'play_sound(SFX_COIN)'];
eventdata.event.push(eventd);
// 7
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['flag_check("stick" -1)',
				  'set_weapon(1)',
				  'found_item("Wood Stick", 1, 10)',
				  'change_flag("stick", true)',
				  'change_tile(2, 1, 1, 5)'];
eventdata.event.push(eventd);
// 8
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(1,4,1)'];
eventdata.event.push(eventd);
// 9
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(1,4,9)'];
eventdata.event.push(eventd);
// 10
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(5,3,1)'];
eventdata.event.push(eventd);
// 11
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(4,10,14)'];
eventdata.event.push(eventd);
// 12
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(6,4,3)'];
eventdata.event.push(eventd);
// 13
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(5,9,10)'];
eventdata.event.push(eventd);
// 14
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(7,2,5)'];
eventdata.event.push(eventd);
// 15
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(10,2,1)'];
eventdata.event.push(eventd);
// 16
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(6,13,7)'];
eventdata.event.push(eventd);
// 17
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(8,1,7)'];
eventdata.event.push(eventd);
// 18
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(7,9,5)'];
eventdata.event.push(eventd);
// 19
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(9,1,5)'];
eventdata.event.push(eventd);
// 20
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(8,14,7)'];
eventdata.event.push(eventd);
// 21
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['change_pos(6,8,14)'];
eventdata.event.push(eventd);
// 22
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['flag_check("heal", -1)',
				  'add_action(1)',
				  'found_item("Spellbook: Heal", 1, 11)',
				  'change_flag("heal", true)',
				  'change_tile(3, 2, 1, 1)'];
eventdata.event.push(eventd);
// 23
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['flag_check("hp1", -1)',
				  'change_attribute("MAXHP", 5)',
				  'found_item("Magic Emerald (HP Up)", 1, 13)',
				  'change_flag("hp1", true)',
				  'change_tile(4, 2, 4, 1)'];
eventdata.event.push(eventd);
// 24
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['flag_check("g1", -1)',
				  'found_item("Gold", 10)',
				  'change_flag("g1", true)',
				  'change_tile(5, 7, 10, 1)'];
eventdata.event.push(eventd);
// 25
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['flag_check("mp1", -1)',
				  'change_attribute("MAXMP", 2)',
				  'found_item("Magic Sapphire (MP Up)", 1, 12)',
				  'change_flag("mp1", true)',
				  'change_tile(6, 9, 4, 5)'];
eventdata.event.push(eventd);
// 26
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['flag_check("def1", -1)',
				  'change_attribute("DEF", 1)',
				  'found_item("Magic Diamond (Def Up)", 1, 15)',
				  'change_flag("def1", true)',
				  'change_tile(7, 13, 5, 5)'];
eventdata.event.push(eventd);
// 27 8=5 9=1
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['flag_check("atk1", -1)',
				  'change_attribute("ATK", 1)',
				  'found_item("Magic Ruby (Atk Up)", 1, 14)',
				  'change_flag("atk1", true)',
				  'change_tile(8, 3, 2, 5)'];
eventdata.event.push(eventd);
// 28 8=5 9=1
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['flag_check("mp2", -1)',
				  'change_attribute("MAXMP", 2)',
				  'found_item("Magic Sapphire (MP Up)", 1, 12)',
				  'change_flag("mp2", true)',
				  'change_tile(8, 3, 12, 5)'];
eventdata.event.push(eventd);
// 29 8=5 9=1
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['flag_check("g2", -1)',
				  'found_item("Gold", 25)',
				  'change_flag("g2", true)',
				  'change_tile(8, 6, 9, 5)'];
eventdata.event.push(eventd);
// 30 8=5 9=1
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['flag_check("hp2", -1)',
				  'change_attribute("MAXHP", 5)',
				  'found_item("Magic Emerald (HP Up)", 1, 13)',
				  'change_flag("hp2", true)',
				  'change_tile(10, 11, 2, 5)'];
eventdata.event.push(eventd);
// 31 8=5 9=1
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['flag_check("g3", -1)',
				  'found_item("Gold", 100)',
				  'change_flag("g3", true)',
				  'change_tile(10, 13, 2, 5)'];
eventdata.event.push(eventd);
// 32 
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['forward_tile_check(16, 33)',
				  'display_message("No Effect.")'];
eventdata.event.push(eventd);
// 33 
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['change_forward_tile(5)',
				  'display_message("Cleared Path!")',
				  'change_attribute("MP", -1)'];
eventdata.event.push(eventd);
// 34 
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['forward_tile_check(18, 35)',
				  'display_message("No Effect.")'];
eventdata.event.push(eventd);
// 35 
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['change_forward_tile(5)',
				  'display_message("Door Unlocked!")',
				  'change_attribute("MP", -1)'];
eventdata.event.push(eventd);
// 36 
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['flag_check("dspeak", -1)',
				  'battle_enemy_vicscript(ENEMY_DEATH_SPEAKER, 37)'];
eventdata.event.push(eventd);
// 37 
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['change_flag("dspeak", true)',
				  'change_tile(9, 11, 5, 6)'];
eventdata.event.push(eventd);
// 38
eventd = new Object();
eventd.type = EVENT_TYPE_EVENT;
eventd.commands = new Array();
eventd.commands = ['battle_enemy(ENEMY_MIMIC)'];
eventdata.event.push(eventd);
// 39
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['setup_npc("Woodsman", 3, [{type:NPC_MESSAGE, msg1:\"I\'m staying right here\", msg2:"until the sun comes back."}])'];
eventdata.event.push(eventd);
// 40
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['setup_npc("The Pilgrim Inn", 3, [{type:NPC_MESSAGE, msg1:\"We saw dead walking\", msg2:"from the Canal Boneyard."},{type:NPC_REST, cost:10}])'];
eventdata.event.push(eventd);
// 41
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['setup_npc("Cedar Arms", 3, [{type:SHOP_WEAPON, value:2},{type:SHOP_WEAPON, value:3}])'];
eventdata.event.push(eventd);
// 42
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['setup_npc("Simmons Fine Clothier", 3, [{type:SHOP_ARMOR, value:2},{type:SHOP_ARMOR, value:3}])'];
eventdata.event.push(eventd);
// 43
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['setup_npc("Sage Therel", 3, [{type:NPC_MESSAGE, msg1:\"Fire magic is effective\", msg2:\"against undead and bone.\"},{type:SHOP_ACTION, value:2}])'];
eventdata.event.push(eventd);
// 44
eventd = new Object();
eventd.type = EVENT_TYPE_START;
eventd.commands = new Array();
eventd.commands = ['flag_check("wake", -1)',
                   'change_flag("wake", true)',
				   'play_music("m31")',
				   'setup_npc("A Nightmare", 2, [{type:NPC_MESSAGE, msg1:\"Darkness has overtaken\", msg2:\"the human realm.\"},{type:NPC_MESSAGE, msg1:\"The monastery is no\", msg2:\"longer safe.\"},{type:NPC_EXIT, msg1:\"Wake up!\"}])'];
eventdata.event.push(eventd);
// 45
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['setup_npc("Stonegate Entrance", 3, [{type:NPC_MESSAGE, msg1:\"No one allowed in or\", msg2:\"out of the city.\"},{type:NPC_MESSAGE, msg1:\"(The demo ends here.\", msg2:\"Thanks for playing!)\"}])'];
eventdata.event.push(eventd);

// 46
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['setup_npc("Thomas the Fence", 3, [{type:NPC_MESSAGE, msg1:\"Unlock magic opens doors\", msg2:\"and harms automatons.\"},{type:SHOP_ACTION, value:3}])'];
eventdata.event.push(eventd);

// 47
eventd = new Object();
eventd.type = EVENT_TYPE_EXIT;
eventd.commands = new Array();
eventd.commands = ['setup_npc("Thomas the Fence", 3, [{type:NPC_MESSAGE, msg1:\"For a small fee we can\", msg2:\"grant you safe passage\"},{type:NPC_MESSAGE, msg1:\"into Stonegate City.\", msg2:\"(Buy the full version!)\"}])'];
eventdata.event.push(eventd);

var myJSONString = JSON.stringify(eventdata);
var myEscapedJSONString = myJSONString.replace(/\\/g, '\\\\').
									replace(/\u0008/g, '\\b').
									replace(/\t/g, '\\t').
									replace(/\n/g, '\\n').
									replace(/\f/g, '\\f').
									replace(/\r/g, '\\r').
									replace(/'/g, '\\\'').
									replace(/"/g, '\\"');
*/
//console.log(myEscapedJSONString);
//console.log(JSON.parse(myEscapedJSONString));