kaboom({
  fullscreen: true,
  clearColor: [0.1, 0, 0.1, , 0.4, 0.5],
  global: true,
  scale: 2,
});
loadRoot("./sprites/");
loadSprite("ground", "block.png");
loadSprite("coin", "coin.png");
loadSprite("dino", "dino.png");
loadSprite("goomba", "evil_mushroom.png");
loadSprite("mario", "mario.png");
loadSprite("mushroom", "mushroom.png");
loadSprite("pipe", "pipe_up.png");
loadSprite("princes", "princes.png");
loadSprite("suprise", "surprise.png");
loadSprite("unboxed", "unboxed.png");
loadSprite("clouds", "clouds.png");
loadSound("jump", "jumpsound.mp3");
loadSound("gamesound", "gameSound.mp3");
loadSprite("pipe", "pipe_up.png");
let health = 3;
let score = 0;
scene("start screen", () => {
  add([
    text("welcome to mario game\n enjoy in your paly  (:", 32),
    origin("center"),
    pos(width() / 2, height() / 2),
  ]);
  add([
    text(
      "collet coin = 1 score\n\n collect mushroom =2score \n\n kill goomba =5 score",
      15
    ),
    origin("center"),
    pos(width() / 2, height() / 2 + 90),
  ]);
  add([
    text("Made BY BLACK", 15),
    origin("center"),
    pos(width() / 2, height() / 2 + 210),
  ]);
  add([
    text("Press Enter to start the game.", 15),
    origin("center"),
    pos(width() / 2, height() / 2 + 160),
  ]);
  keyDown("enter", () => {
    go("game");
  });
});

scene("game", () => {
  play("gamesound");
  layers(["bg", "obj", "ui"], "obj");
  const map = [
    "                                                                                                                                                                  ",
    "                                                                                                                                                                  ",
    "                                                                                                                                                                  ",
    "                                                                                                                                                                  ",
    "                                                                                                                                                                  ",
    "                                                              s                                                                                                   ",
    "                                                              =                                                                                                   ",
    "                                                           =       =                                                                                              ",
    "                              =                           =           =                                                                                           ",
    "                         c                             =               =      s                                                                                   ",
    "                           =                           =                  =                                                                                       ",
    "                      p   =                            =                     =    s                                                                               ",
    "                         =                             =                        =                                                                                ",
    "                      =                   s s s  ====                           = ===                                                             ",
    "                p    =             p       ======                                 s                  =               =                                        ",
    "                = =                =  s                                                            =                                                       ",
    "               =                =    =                         cc                                 =             =                                                ",
    "             =       s  s s    =         y                r        r       r      rr                ==                               o===                                    ",
    "      r    =   s                                                                                                           o =====                          ",
    "         =                                  k      r                c                                                       o  o=========                                ",
    "       =        c           s s s s  s  o  ss s s  o o  o       ssc                        s  s   s       s     s   o oo o ===========                     b                             ",
    "=================================================================== ==== ==      =========== ====    ======== === = = = = = == = = = = == = = ====== = = ==   ",
    "                                                                                  ==                                                                                 ",
    "                                                                                =                                                                                  ",
    "                                                                               =                                                                                   ",
    "                                                                              =                                                                                    ",
    "                                                                                                                                                                  ",
    "                                                                           =                                                                                       ",
    "                                                                         =                                                                                         ",
    "                                                                       =                                                                                           ",
    "                                                                     =                                                                                             ",
    "                                                                   =                                                                                               ",
    "                                                                 =                                                                                                 ",
    "                                                              ==                                                                                                    ",
    "                                                                                                                                                                  ",
    "                                                           =                                                                                                       ",
    "                                                         =                                                                                                         ",
    "                                                      ==                                                                                                            ",
    "                                                    =                                                                                                              ",
    "                                                  =                                                                                                                ",
    "                                                =                                                                                                                  ",
    "                                              =                                                                                                                    ",
    "                                            =                                                                                                                      ",
    "                                          =                                                                                                                        ",
    "                                        ==                                                                                                                        ",
    "                                      ===                                                                                                                           ",
    "                                    ==                                                                                                                              ",
    "                                  ==                                                                                                                                ",
    "                                ==                                                                                                                                  ",
    "                              ==                                                                                                                                   ",
    "                            ==                                                                                                                                     ",
    "                          ==                                                                                                                                        ",
    "                        ==                                                                                                                                          ",
    "                      ==                                                                                                                                            ",
    "                    ===                                                                                                                                             ",
    "                  ==                                                                                                                                                ",
    "                ===                                                                                                                                                  ",
    "             ====                                                                                                                                                    ",
    "           ==                                                                                                         =====                          = =====                  ",
    "         ==                                                                                                          ==                   =             ==             ",
    "       ==                                                                                                           ====                ===== === ======                             ",
    "     ==                                  s  s  s s s  s s s  s  s s s s  s s  s s s  s                             ======            ========                                                        ",
    " =================================================================== ==== ======================= =========== ====== =  ========= === = = = = = == = = = = == = = ====== = = ==   ",
  ];
  const mapsymbols = {
    width: 20,
    height: 20,
    "=": [sprite("ground"), solid()],
    s: [sprite("coin"), "coins"],
    x: [sprite("coin"), body(), "coins2"],
    d: [sprite("dino"), solid()],
    m: [sprite("mario"), solid()],
    c: [sprite("mushroom"), solid(), "mushroom2"],
    p: [sprite("princes"), solid()],
    r: [sprite("suprise"), solid(), "coin-surprise"],
    y: [sprite("suprise"), solid(), "mushroom-surprise"],
    l: [sprite("unboxed"), solid(), "unboxed"],
    w: [sprite("mushroom"), solid(), "mushroom", body()],
    i: [sprite("suprise")],
    o: [sprite("goomba"), solid(), "goomba", body()],
    b: [sprite("pipe"), solid(), "pipe", body()],
  };
  const gameLevel = addLevel(map, mapsymbols);
  const scoreLabel = add([
    text("SCORE: ", 10),
    pos(100, 10),
    origin("center"),
    layer("ui"),
    color(255, 255, 255),
  ]);
  const scoreText = add([
    text(score.toString(), 10),
    pos(150, 10),
    origin("center"),
    layer("ui"),
    color(255, 255, 255),
  ]);

  const bg = add([
    sprite("clouds"),
    layer("bg"),
    pos(width() / 2, 100),
    origin("center"),
    // Allow the background to be scaled
    scale(2),
  ]);
  const player = add([
    sprite("mario"),
    solid(),
    pos(30, 0),
    body(),
    big(),
    origin("bot"),
  ]);
  keyDown("right", () => {
    player.move(120, 0);
  });
  keyDown("left", () => {
    player.move(-120, 0);
  });
  keyDown("space", () => {
    if (player.grounded()) {
      play("jump");
      player.jump(450);
    }
  });

  player.on("headbump", (obj) => {
    if (obj.is("coin-surprise")) {
      destroy(obj);
      gameLevel.spawn("l", obj.gridPos);
      gameLevel.spawn("x", obj.gridPos.sub(0, 1));
    }
    if (obj.is("mushroom-surprise")) {
      destroy(obj);
      gameLevel.spawn("l", obj.gridPos);
      gameLevel.spawn("w", obj.gridPos.sub(0, 1));
    }
  });

  action("mushroom", (obj) => {
    obj.move(20, 0);
  });
  player.collides("coins", (obj) => {
    destroy(obj);
    score++;
    scoreText.text = score;
  });
  player.collides("mushroom", (obj) => {
    destroy(obj);
    player.biggify(10);
    score += 5;
    scoreText.text = score;
  });
  player.collides("pipe", (obj) => {
    keyDown("down", () => {
      go("win");
    });
  });
  player.collides("mushroom2", (obj) => {
    destroy(obj);
    player.biggify(10);
    score += 2;
  });
  player.collides("coins2", (obj) => {
    destroy(obj);
    score++;
  });
  const FALL_DOWN = 1500;
  player.action(() => {
    camPos(player.pos);
    bg.pos = player.pos;
    scoreLabel.pos = player.pos.sub(400, 200);
    scoreText.pos = player.pos.sub(360, 200);
    scoreText.text = score;
    if (player.pos.y >= FALL_DOWN) {
      go("lose");
    }
  });
  action("goomba", (obj) => {
    obj.move(-20, 0);
  });

  let isJumping = false;
  player.collides("goomba", (obj) => {
    if (isJumping) {
      destroy(obj);
      score += 5;
      scoreText.text = score;
    } else {
      go("lose");
    }
  });
  player.action(() => {
    isJumping = !player.grounded();
  });
  //
});

scene("lose", () => {
  add([
    text("Game over\nTry again ):", 64),
    origin("center"),
    pos(width() / 2, height() / 2),
  ]);
  add([
    text("space to restart", 20),
    origin("center"),
    pos(width() / 2, height() / 2 + 150),
  ]);
  add([
    text("Made BY BLACK", 15),
    origin("center"),
    pos(width() / 2, height() / 2 + 200),
  ]);
  keyDown("space", () => {
    go("game");
  });
});

scene("win", () => {
  add([
    text("YOU WON \n GREAT JOB (:", 64),
    origin("center"),
    pos(width() / 2, height() / 2),
  ]);
  add([
    text("Made BY BLACK", 15),
    origin("center"),
    pos(width() / 2, height() / 2 + 200),
  ]);
});
start("start screen");
