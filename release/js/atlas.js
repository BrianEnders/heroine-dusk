/**
 Atlas.js
 Collection of maps and transition data


var MAP_COUNT = 11;

var atlas = new Object();
atlas.maps = new Array();

for (var i=0; i<MAP_COUNT; i++) {
  atlas.maps[i] = new Object();
  atlas.maps[i].enemies = new Array();
  atlas.maps[i].events = new Array();
}

atlas.maps[0].name = "Serf Quarters";
atlas.maps[0].music = "m31";
atlas.maps[0].width = 3;
atlas.maps[0].height = 4;
atlas.maps[0].background = 2;
atlas.maps[0].start_script = 44;
atlas.maps[0].tiles = [
  [2, 2,2],
  [2,17,2],
  [3, 5,2],
  [2, 2,2]
];
atlas.maps[0].events = [
  [-1,-1,-1],
  [-1, 6,-1],
  [ 0,-1,-1],
  [-1,-1,-1]
];

atlas.maps[1].name = "Gar'ashi Monastery";
atlas.maps[1].music = "m31";
atlas.maps[1].width = 9;
atlas.maps[1].height = 11;
atlas.maps[1].background = 1;
atlas.maps[1].tiles = [
  [0,0,2,2,3,2,2,0,0],
  [0,0,2,4,1,4,2,0,0],
  [2,2,2,1,1,1,2,2,2],
  [2,6,6,4,1,4,6,6,2],
  [2,6,6,1,1,1,6,6,2],
  [2,2,6,4,1,4,6,2,2],
  [2,3,1,1,1,1,1,3,2],
  [2,2,6,4,1,4,6,2,2],
  [2,6,6,1,1,1,6,6,2],
  [2,6,6,4,1,4,6,6,2],
  [2,2,2,2,3,2,2,2,2]
];
atlas.maps[1].events = [
  [-1,-1,-1,-1, 3,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1, 2,-1,-1,-1,-1,-1, 1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1, 4,-1,-1,-1,-1]
];
atlas.maps[1].enemies = [ENEMY_SHADOW_TENDRILS, ENEMY_IMP];

atlas.maps[2].name = "Monk Quarters";
atlas.maps[2].music = "m31";
atlas.maps[2].width = 3;
atlas.maps[2].height = 4;
atlas.maps[2].background = 0;
atlas.maps[2].events = [
  [-1,-1,-1],
  [-1, 7,-1],
  [-1,-1, 5],
  [-1,-1,-1]
];
atlas.maps[2].tiles = [
  [2,2,2],
  [2,8,2],
  [2,5,3],
  [2,2,2]
];

atlas.maps[3].name = "Meditation Point";
atlas.maps[3].music = "m31";
atlas.maps[3].width = 5;
atlas.maps[3].height = 6;
atlas.maps[3].background = 2;
atlas.maps[3].tiles = [
  [0,0,0,0,0],
  [0,0,9,0,0],
  [0,7,5,7,0],
  [0,5,5,5,0],
  [0,7,5,7,0],
  [2,2,3,2,2]
];
atlas.maps[3].events = [
  [-1,-1,-1,-1,-1],
  [-1,-1,22,-1,-1],
  [-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1],
  [-1,-1, 8,-1,-1]
];

atlas.maps[4].name = "Monastery Trail";
atlas.maps[4].music = "m31";
atlas.maps[4].width = 14;
atlas.maps[4].height = 16;
atlas.maps[4].background = 1;
atlas.maps[4].tiles = [
  [ 0,12,12, 2, 0, 0, 0, 0, 0, 2,12, 0, 0, 0],
  [12,12,12, 2, 2, 2, 3, 2, 2, 2,12, 0, 0, 0],
  [12,12, 9, 6,12, 6, 1, 6, 6,12,12,12, 0, 0],
  [12,12,12, 6, 6, 6, 1,12, 6, 6,12,12, 0, 0],
  [ 0,12,12,12,12, 6, 1, 6, 6,12,12,12, 0, 0],
  [ 0, 0,12,12,12,12, 6, 6,12,12,12,12, 0, 0],
  [ 0, 0, 0,12,12, 6, 6, 6, 6,12,12,12,12, 0],
  [ 0, 0,12,12,12, 6, 6,12, 6, 6, 6,12,12, 0],
  [ 0,12,12,12, 6, 6,12,12,12, 6,12,12,12, 0],
  [ 0,12,12, 6, 6, 6,12,12, 6, 6, 6,12,12, 0],
  [ 0,12,12,12, 6, 6, 6, 6, 6, 6,12,12,12, 0],
  [ 0, 0,12,12, 6, 6, 6,12, 6, 6, 6,12,12,12],
  [ 0, 0,12,12,12, 6,12,12,12, 6, 1, 6,12,12],
  [ 0, 0, 0,12,10,11,12,12,12,12, 1, 6,12,12],
  [ 0, 0, 0, 0,12,12,12,12,12, 6, 1, 6,12,12],
  [ 0, 0, 0, 0, 0, 0, 0,12,12, 2, 3, 2,12,12]
];
atlas.maps[4].events = [
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1, 9,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,23,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,39,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,-1,-1,-1]
];
atlas.maps[4].enemies = [ENEMY_SHADOW_TENDRILS, ENEMY_IMP, ENEMY_SHADOW_SOUL];
//atlas.maps[4].shops[0] = {exit_x:5, exit_y:13, shop_id:4, dest_x:5, dest_y:12};

atlas.maps[5].name = "Cedar Village";
atlas.maps[5].music = "haply";
atlas.maps[5].width = 12;
atlas.maps[5].height = 12;
atlas.maps[5].background = 1;
atlas.maps[5].tiles = [
  [ 2, 2, 2, 3, 2, 2, 2, 2, 0, 0, 0, 0],
  [ 2, 6,12, 1,12, 6, 6, 2, 0, 0, 0, 0],
  [ 2, 6, 6, 1, 6, 6,12, 2, 0, 0, 0, 0],  
  [ 2,12, 6, 1, 6,10,10, 2, 2, 2, 2, 2],
  [ 2,10,10, 1,10,10,11,10,10, 1,10, 2],
  [ 2,10,10, 1,10, 1, 1, 1,10, 1,10, 2],
  [ 2, 1, 1, 1, 1, 1,12, 1, 1, 1, 1, 2],
  [ 2,10, 6,10,10, 1, 1, 1,10, 1,10, 2],
  [ 2,11, 6,10,10,10,11,10,11, 1,10, 2],
  [ 2,10, 6,10,10,10,10,10,10, 1, 6, 2],
  [ 2,12, 6, 6, 6, 6, 6, 9,12, 1,12, 2],
  [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2]  
];
atlas.maps[5].events = [
  [-1,-1,-1,11,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],  
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,41,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],  
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,43,-1,-1,-1,-1,42,-1,40,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,24,-1,-1,-1,-1],  
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,12,-1,-1]  
];
//atlas.maps[5].shops[0] = {exit_x:6, exit_y:4, shop_id:0, dest_x:6, dest_y:5};
//atlas.maps[5].shops[1] = {exit_x:6, exit_y:8, shop_id:1, dest_x:6, dest_y:7};
//atlas.maps[5].shops[2] = {exit_x:8, exit_y:8, shop_id:2, dest_x:9, dest_y:8};
//atlas.maps[5].shops[3] = {exit_x:1, exit_y:8, shop_id:3, dest_x:2, dest_y:8};

atlas.maps[6].name = "Zuruth Plains";
atlas.maps[6].music = "m31";
atlas.maps[6].width = 16;
atlas.maps[6].height = 16;
atlas.maps[6].background = 2;
atlas.maps[6].tiles = [
  [ 0, 0, 0, 0, 0, 0, 2,12,12,12,12,12,12,15,15,15],
  [ 0, 0, 0, 0, 0, 0, 2,12,12,12,12,12,12,15,15,15],
  [ 2, 2, 2, 2, 3, 2, 2, 6, 6, 6, 6, 6, 6,15,15,15],
  [12,12,12, 6, 1, 6, 6, 6, 7, 5, 7, 6, 6,15,15,15],
  [12,12, 6, 6, 1, 6,12, 6, 5, 8, 5, 6, 6,15,15,15],
  [12,12, 6,12, 1, 6, 6, 6, 7, 5, 7, 6, 6,15,15,15],
  [12,12, 6, 6, 1, 6, 6, 6, 6, 6, 6, 6, 4,15,15,15],
  [12,12, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [12,12,12, 6, 6, 6, 6, 6, 1, 6, 6, 6, 4,15,15,15],
  [12,12, 6, 6, 6, 6,12, 6, 1, 6,12, 6, 6,15,15,15],
  [12,12, 6, 6, 6,12, 6, 6, 1, 6, 6, 6, 6,15,15,15],
  [12,12,12, 6, 6, 6, 6,12, 1, 6, 6, 6,12,15,15,15],
  [12,12, 6, 6, 6, 6, 6, 6, 1, 6, 6, 6, 6,15,15,15],
  [12, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 6, 4,15, 4],  
  [12, 2, 5, 5, 5, 2, 5, 5, 5, 5, 5, 2, 6,15, 9,15],
  [ 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2]
];
atlas.maps[6].events = [
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,13,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,25,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,14,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,15,-1,-1,-1,-1,-1,-1,-1]
];
atlas.maps[6].enemies = [ENEMY_IMP, ENEMY_SHADOW_SOUL, ENEMY_ZOMBIE];

atlas.maps[7].name = "Canal Boneyard";
atlas.maps[7].music = "m31";
atlas.maps[7].width = 15;
atlas.maps[7].height = 11;
atlas.maps[7].background = 2;
atlas.maps[7].tiles = [
  [ 0,15,15,15, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [ 0,15,15,15,12, 6, 6, 6, 6, 6,14,14,13,14, 2],
  [ 0,15,15,15,13, 6,14, 1,14, 6,13,13,14,13, 2],
  [ 6,15,15,15, 6, 6,14, 1,13, 6, 6, 6, 6, 6, 2],
  [ 4,15,15,15, 4, 6,13, 1,14, 6, 2, 2, 2, 5, 2],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 8, 2],
  [ 4,15,15,15, 4, 6,14, 1,13, 6, 2, 2, 2, 5, 2],
  [ 6,15,15,15, 6, 6,13, 1,14, 6, 6, 6, 6, 6, 2],
  [ 0,15,15,15,13, 6,14, 1,13, 6,14,13,13,14, 2],
  [ 0,15,15,15,12, 6, 6, 6, 6, 6,14,13,14,13, 2],
  [ 0,15,15,15, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]  
];
atlas.maps[7].events = [
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,16,-1,-1,-1,-1,-1,-1,-1,-1,17,-1,-1,26,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1] 
];
atlas.maps[7].enemies = [ENEMY_SHADOW_SOUL, ENEMY_ZOMBIE, ENEMY_SKELETON];

atlas.maps[8].name = "Mausoleum";
atlas.maps[8].music = "elegy_dm";
atlas.maps[8].width = 16;
atlas.maps[8].height = 15;
atlas.maps[8].background = 2;
atlas.maps[8].tiles = [
  [ 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [ 0, 0, 2, 2, 2, 7, 5, 5, 5, 5, 5, 5, 7,15,15, 2],
  [ 0, 0, 2, 8,16, 5, 5, 5,15,15, 5, 5, 5, 5,15, 2],
  [ 0, 0, 2, 2, 2, 2, 2, 5, 2, 2, 5, 2, 2, 5, 2, 2],
  [ 0, 0, 0, 0, 0, 2, 2, 5, 2, 2, 5, 2, 7, 5, 2, 0],
  [ 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5,16, 2, 5, 2, 0],
  [ 2, 5, 7, 5, 2, 2, 5, 6, 6, 6, 6, 5, 2, 5, 7, 2],
  [ 3, 5, 5, 5,16, 5, 5, 6, 6, 6, 6, 5, 5,16, 5, 3],
  [ 2, 5, 7, 5, 2, 2, 5, 6, 6, 6, 6, 5, 2, 5, 7, 2],
  [ 2, 2, 2, 2, 2, 2, 8, 5, 5, 5, 5,17, 2, 5, 2, 0],
  [ 0, 0, 0, 0, 0, 2, 2, 5, 2, 2, 5, 2, 7, 5, 2, 0],
  [ 0, 0, 2, 2, 2, 2, 2, 5, 2, 2, 5, 2, 2, 5, 2, 2],
  [ 0, 0, 2, 8,18, 5, 5, 5,15,15, 5, 5, 5, 5,15, 2],
  [ 0, 0, 2, 2, 2, 7, 5, 5, 5, 5, 5, 5, 7,15,15, 2],
  [ 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
atlas.maps[8].events = [
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,27,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [18,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,19],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,29,-1,-1,-1,-1, 6,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,28,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
];
atlas.maps[8].enemies = [ENEMY_ZOMBIE, ENEMY_SKELETON, ENEMY_DRUID];

atlas.maps[9].name = "Dead Walkways";
atlas.maps[9].music = "elegy_dm";
atlas.maps[9].width = 13;
atlas.maps[9].height = 10;
atlas.maps[9].background = 2;
atlas.maps[9].tiles = [
  [ 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0],
  [ 0, 4, 0, 0, 4, 0, 1, 5,16, 1, 0, 4, 0],
  [ 0, 0, 0, 1, 0, 0, 1, 2, 2, 1, 0, 0, 0],
  [ 2, 0, 0, 1, 2, 2, 1, 0, 0, 1,13,14,13],
  [ 3, 1, 1, 1, 5,16, 1, 0, 0, 1, 6,19,14],
  [ 2, 0, 0, 1, 2, 2, 1, 0, 0, 1,14,13,14],
  [ 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [ 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 4, 0],
  [ 0, 0, 0, 0, 9, 1, 1, 1, 1, 0, 0, 0, 0]
];
atlas.maps[9].events = [
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [20,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,36,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,38,-1,-1,-1,-1,-1,-1,-1,-1]
];
atlas.maps[9].enemies = [ENEMY_ZOMBIE, ENEMY_SKELETON, ENEMY_DRUID, ENEMY_DRUID]; // druids are common here

atlas.maps[10].name = "Trade Tunnel";
atlas.maps[10].music = "kawarayu";
atlas.maps[10].width = 16;
atlas.maps[10].height = 16;
atlas.maps[10].background = 2;
atlas.maps[10].tiles = [
  [ 2, 2, 3, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
  [ 2, 5, 5, 5, 2, 5, 5, 5, 2, 0, 2, 2, 2, 2, 2, 0],
  [ 2, 5, 5, 5,16, 5,15, 5, 2, 0, 2, 8, 2, 8, 2, 0],
  [ 2, 5, 5, 5, 2, 5,15, 5, 2, 2, 2,18, 2,18, 2, 0],
  [ 2, 2,16, 2, 2, 5, 9, 5, 5, 5, 5, 5, 5, 5, 2, 0],
  [ 2, 5, 5, 5, 2, 5,15, 5, 2, 2, 2, 2, 2, 2, 2, 0],
  [ 2, 5, 5, 5, 2, 5,15, 5, 2, 0, 0, 0, 0, 0, 0, 0],
  [ 2, 5, 5, 5, 2, 5, 1, 5, 2, 0, 0, 2, 2, 3, 2, 2],
  [ 2, 7, 5, 5, 2, 5,15, 5, 2, 0, 0, 2, 5, 5, 5, 2],
  [ 2, 5, 5, 5, 2, 5,15, 5, 2, 0, 0, 3, 5, 5, 8, 2],
  [ 2, 5, 5, 5, 5, 5, 1, 5, 2, 0, 0, 2, 5, 5, 5, 2],
  [ 2, 5, 5, 5, 2, 5,15, 5, 2, 2, 2, 2, 2, 5, 2, 2],
  [ 2, 2, 5, 2, 2, 5,15, 5, 5, 5, 5, 5, 5, 5, 5, 2],
  [ 2, 7, 5, 7, 2, 5,15,15, 1,15,15, 1,15,15, 5, 2],
  [ 2, 2, 5, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2],
  [ 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
atlas.maps[10].events = [
  [-1,-1,21,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,30,-1,31,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,38,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,47,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,46,-1,-1,38,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,45,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
];
atlas.maps[10].enemies = [ENEMY_ZOMBIE, ENEMY_SKELETON, ENEMY_DRUID];
 */
//atlas = JSON.parse(mapdata);
//console.log(JSON.stringify(atlas));