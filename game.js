class Title extends Phaser.Scene {
  constructor() {
    super("title");
  }
  preload() {
    this.load.path = "./assets/";
    this.load.image("title", "title.png");
    this.load.image("play", "play.png");
    this.load.image("host", "host.png");
    this.load.image("join", "join.png");
    this.load.image("settings", "settings.png");
    this.load.image("howTo", "howTo.png");
    this.load.image("quit", "quit.png");
    this.load.image("man", "man.png");
    // this.load.audio("tunez", "cozy-holidays-soundroll-main-version-9946-01-34.mp3");
  }
  create() {
    // this.levm = this.sound.add('tunez');
    // this.levm.play();
    // this.levm.loop = true;

    this.cameras.main.setBackgroundColor("#ADD8E6");
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;
    this.titleob = this.add.image(centerX, centerY - 350, "title");
    this.titleob.setScale(1.5);

    /////play/////////
    let isDragging = false;
    let startX, startY;

    this.play = this.physics.add.image(centerX - 300, centerY - 50, "play");
    this.play.setScale(0.5);
    // this.tweens.add({
    //   targets: this.play,
    //   y: "+=50",
    //   duration: 1000,
    //   yoyo: true,
    //   repeat: -1,
    // });
    this.play.setInteractive();
    this.input.setDraggable(this.play);
    // Enable physics for dragging along both axes
    this.physics.world.enable(this.play);

    // Set drag bounds for the sprite
    this.play.body.setCollideWorldBounds(true);

    this.input.on("dragstart", function (pointer, gameObject) {
      isDragging = true;
      startX = gameObject.x;
      startY = gameObject.y;
    });

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      if (isDragging) {
        gameObject.x = dragX;
        gameObject.y = dragY;
      }
    });

    this.input.on("dragend", function (pointer, gameObject) {
      isDragging = false;

      // Check if the gameObject has physics, set velocity if yes
      if (gameObject.body) {
        const velocityX = (gameObject.x - startX) / 500;
        const velocityY = (gameObject.y - startY) / 500;
        gameObject.setVelocity(velocityX, velocityY);
      }
    });

    ////host///////
    this.host = this.add.image(centerX - 350, centerY + 250, "host");
    this.host.setScale(0.5);
    this.tweens.add({
      targets: this.host,
      y: "+=50",
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });

    this.man = this.add.image(centerX, centerY, "man");

    /////join/////////
    this.join = this.add.image(centerX - 50, centerY + 200, "join");
    this.join.setScale(0.5);
    this.tweens.add({
      targets: this.join,
      y: "+=50",
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });

    this.settings = this.add.image(centerX + 300, centerY + 250, "settings");
    this.settings.setScale(0.5);
    this.tweens.add({
      targets: this.settings,
      y: "+=50",
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });

    this.howTo = this.add.image(centerX + 400, centerY - 50, "howTo");
    this.howTo.setScale(0.5);
    this.tweens.add({
      targets: this.howTo,
      y: "+=50",
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });
    const playText = this.add.text(
      centerX - 50,
      centerY - 100,
      "Would grab ball\nfloating and throw\nto hit target\nto start\n\ngo to version2",
      { fontSize: "30px", fill: "#000" }
    );

    const VText = this.add.text(centerX - 500, centerY - 530, "vesion2", {
      fontSize: "40px",
      fill: "#fff",
    });
    VText.setInteractive();
    VText.on("pointerover", () => {
      VText.setStyle({ fill: "#3944BC" });
    });
    VText.on("pointerout", () => {
      VText.setStyle({ fill: "#fff" });
    });
    VText.on("pointerdown", () => {
      this.scene.start("title2");
    });
  }
  update() {}
}

class Title2 extends Phaser.Scene {
  constructor() {
    super("title2");
  }
  preload() {
    this.load.path = "./assets/";
    this.load.image("title", "title.png");
    this.load.image("play", "play.png");
    this.load.image("host", "host.png");
    this.load.image("join", "join.png");
    this.load.image("settings", "settings.png");
    this.load.image("howTo", "howTo.png");
    this.load.image("quit", "quit.png");
    this.load.image("plain", "plain.png");
    // this.load.audio("tunez", "cozy-holidays-soundroll-main-version-9946-01-34.mp3");
  }
  create() {
    // this.levm = this.sound.add('tunez');
    // this.levm.play();
    // this.levm.loop = true;

    this.cameras.main.setBackgroundColor("#ADD8E6");
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;
    this.titleob = this.add.image(centerX, centerY - 350, "title");
    this.titleob.setScale(1.5);

    /////play/////////

    let isDragging = false;
    let startX, startY;

    this.play = this.add.image(centerX - 300, centerY - 50, "play");
    this.play.setScale(0.5);
    this.tweens.add({
      targets: this.play,
      y: "+=50",
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });
    this.play.setInteractive();

    // Set up an array to store plain objects
    this.plains = this.physics.add.group();

    // Create 10 plain objects with the same properties but different locations
    for (let i = 0; i < 10; i++) {
      const plain = this.plains.create(
        centerX - 300 + i * 60,
        centerY - 50,
        "plain"
      );
      plain.setScale(0.1);
      plain.setInteractive();
      this.input.setDraggable(plain);

      // Enable physics for dragging along both axes
      this.physics.world.enable(plain);

      plain.body.setGravityY(300);
      plain.body.setCollideWorldBounds(true);

      // Set initial bounce when the sprite falls
      plain.body.setBounce(0.5, 0.5);

      this.input.on("dragstart", function (pointer, gameObject) {
        isDragging = true;
        startX = gameObject.x;
        startY = gameObject.y;
      });

      this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
        if (isDragging) {
          gameObject.x = dragX;
          gameObject.y = dragY;
        }
      });

      this.input.on("dragend", function (pointer, gameObject) {
        isDragging = false;

        // Check if the gameObject has physics, set velocity if yes
        if (gameObject.body) {
          const velocityX = (gameObject.x - startX) / 500;
          const velocityY = (gameObject.y - startY) / 500;
          gameObject.setVelocity(velocityX, velocityY);

          // Add a bounce effect
          gameObject.setBounce(1, 1); // Adjust bounce values as needed
        }
      });
    }

    ////host///////
    this.host = this.add.image(centerX - 350, centerY + 250, "host");
    this.host.setScale(0.5);
    this.tweens.add({
      targets: this.host,
      y: "+=50",
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });

    /////join/////////
    this.join = this.add.image(centerX - 50, centerY + 200, "join");
    this.join.setScale(0.5);
    this.tweens.add({
      targets: this.join,
      y: "+=50",
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });

    this.settings = this.add.image(centerX + 300, centerY + 250, "settings");
    this.settings.setScale(0.5);
    this.tweens.add({
      targets: this.settings,
      y: "+=50",
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });

    this.howTo = this.add.image(centerX + 400, centerY - 50, "howTo");
    this.howTo.setScale(0.5);
    this.tweens.add({
      targets: this.howTo,
      y: "+=50",
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });
    const playText = this.add.text(
      centerX - 50,
      centerY - 100,
      "hit dummy or\nmap clips shown\nhere (think \nminecraft)",
      { fontSize: "30px", fill: "#000" }
    );
    const VText = this.add.text(centerX - 500, centerY - 530, "vesion1", {
      fontSize: "40px",
      fill: "#fff",
    });
    VText.setInteractive();
    VText.on("pointerover", () => {
      VText.setStyle({ fill: "#3944BC" });
    });
    VText.on("pointerout", () => {
      VText.setStyle({ fill: "#fff" });
    });
    VText.on("pointerdown", () => {
      this.scene.start("title");
    });
    // this.tweens.add({
    //     targets: this.titleob,
    //     y: '+=50', // Move down by 50 pixels
    //     duration: 1000, // Duration of the tween
    //     yoyo: true, // Yoyo effect (back and forth)
    //     repeat: -1 // Repeat indefinitely
    // });
    // this.tweens.add({
    //     targets: this.titleob,
    //     x: '+=' + 100,
    //     repeat: 2,
    //     yoyo: true,
    //     ease: 'Sine.inOut',
    //     duration: 100
    // });
    this.host.setInteractive();
    this.join.setInteractive();
    this.settings.setInteractive();
    this.howTo.setInteractive();
    this.play.setInteractive();
    //this.quit.setInteractive();

    // Add a slightly dark tint on pointerover for each button
    const buttons = [
      this.host,
      this.join,
      this.settings,
      this.howTo,
      this.play
    ];

    buttons.forEach((button) => {
      button.on("pointerover", () => {
        button.setTint(0x555555); // Adjust the tint color as needed
      });

      button.on("pointerout", () => {
        button.clearTint();
      });
    });

    this.host.on("pointerdown", () => {
      this.scene.start("host");
    });
    this.join.on("pointerdown", () => {
      this.scene.start("join");
    });
    this.settings.on("pointerdown", () => {
      this.scene.start("settings");
    });
    this.howTo.on("pointerdown", () => {
      this.scene.start("howTo");
    });
    this.play.on("pointerdown", () => {
      this.scene.start("game");
    });
    // this.quit.on("pointerdown", () => {
    //   window.close();
    // });
  }
  update() {}
}

class Host extends Phaser.Scene {
  constructor() {
    super("host");
  }


  preload() {
    this.load.path = "./assets/";
    this.load.image("lobby", "lobby.png");
  }

  create() {
    this.cameras.main.setBackgroundColor("#000000");

    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;
    //const score = this.game.config.globals.score || 0;

    
    this.lobby = this.add.image(centerX, centerY, "lobby");

    const code = this.add.text(centerX, centerY - 480, "GAME CODE: GUAC\n3/6 JOINED", {
      fontSize: "40px",
      fill: "#fff",
    });

    const VText = this.add.text(centerX - 500, centerY - 530, "back", {
      fontSize: "40px",
      fill: "#fff",
    });
    VText.setInteractive();
    VText.on("pointerover", () => {
      VText.setStyle({ fill: "#3944BC" });
    });
    VText.on("pointerout", () => {
      VText.setStyle({ fill: "#fff" });
    });
    VText.on("pointerdown", () => {
      this.scene.start("title2");
    });
  }
}

class Join extends Phaser.Scene {
  constructor() {
    super("join");
  }

  preload() {
    this.load.path = "./assets/";
    this.load.image("code", "code.png");
    this.load.image("lobby", "lobby.png");
  }

  create() {
    this.cameras.main.setBackgroundColor("#000000");

    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;
    //const score = this.game.config.globals.score || 0;

    
    this.code = this.add.image(centerX, centerY, "code");

    const enter = this.add.text(centerX + 400, centerY + 450, "enter", {
      fontSize: "40px",
      fill: "#fff",
    });
    enter.setInteractive();
    enter.on("pointerover", () => {
      enter.setStyle({ fill: "#3944BC" });
    });
    enter.on("pointerout", () => {
      enter.setStyle({ fill: "#fff" });
    });
    enter.on("pointerdown", () => {
      //remove image "this.code"
      this.scene.start("host");
    });

    const VText = this.add.text(centerX - 500, centerY - 530, "back", {
      fontSize: "40px",
      fill: "#fff",
    });
    VText.setInteractive();
    VText.on("pointerover", () => {
      VText.setStyle({ fill: "#3944BC" });
    });
    VText.on("pointerout", () => {
      VText.setStyle({ fill: "#fff" });
    });
    VText.on("pointerdown", () => {
      this.scene.start("title2");
    });
}
}

class Settings extends Phaser.Scene {
  constructor() {
    super("settings");
  }

  preload() {
    this.load.path = "./assets/";
    this.load.image("scroll1", "scroll1.png");
    this.load.image("scroll2", "scroll2.png");
    this.load.image("scroll3", "scroll3.png");
  }

  create() {
    this.cameras.main.setBackgroundColor("#ADD8E6");

    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;
    //const score = this.game.config.globals.score || 0;

    const musicvol = this.add.text(centerX - 150, centerY - 100, "music volume", {
      fontSize: "40px",
      fill: "#fff",
    });
    const bright = this.add.text(centerX - 150, centerY - 400, "brightness", {
      fontSize: "40px",
      fill: "#fff",
    });
    const fx = this.add.text(centerX - 150, centerY + 200, "fx volume", {
      fontSize: "40px",
      fill: "#fff",
    });
    const reposition = this.add.text(centerX - 270, centerY + 450, "reposition controls", {
      fontSize: "40px",
      fill: "#fff",
    });
    this.scroll1 = this.add.image(centerX, centerY, "scroll1");

    this.scroll2 = this.add.image(centerX, centerY - 300, "scroll2");

    this.scroll3 = this.add.image(centerX, centerY + 300, "scroll3");

    const VText = this.add.text(centerX - 500, centerY - 530, "back", {
      fontSize: "40px",
      fill: "#fff",
    });
    VText.setInteractive();
    VText.on("pointerover", () => {
      VText.setStyle({ fill: "#3944BC" });
    });
    VText.on("pointerout", () => {
      VText.setStyle({ fill: "#fff" });
    });
    VText.on("pointerdown", () => {
      this.scene.start("title2");
    });
  }
}

class HowTo extends Phaser.Scene {
  constructor() {
    super("howTo");
  }

  preload() {
    this.load.path = "./assets/";
    this.load.image("demo", "demo.png");
  }

  create() {
    this.cameras.main.setBackgroundColor("#000000");

    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;
    //const score = this.game.config.globals.score || 0;

    
    this.demo = this.add.image(centerX, centerY, "demo");

    const VText = this.add.text(centerX - 500, centerY - 530, "back", {
      fontSize: "40px",
      fill: "#fff",
    });
    VText.setInteractive();
    VText.on("pointerover", () => {
      VText.setStyle({ fill: "#3944BC" });
    });
    VText.on("pointerout", () => {
      VText.setStyle({ fill: "#fff" });
    });
    VText.on("pointerdown", () => {
      this.scene.start("title2");
    });
  }
}

class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {
    this.load.path = "./assets/";
    this.load.image("game", "game.png");
  }

  create() {
    this.cameras.main.setBackgroundColor("#000000");

    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;
    //const score = this.game.config.globals.score || 0;

    
    this.game = this.add.image(centerX, centerY, "game");

    const VText = this.add.text(centerX - 500, centerY - 530, "back", {
      fontSize: "40px",
      fill: "#fff",
    });
    VText.setInteractive();
    VText.on("pointerover", () => {
      VText.setStyle({ fill: "#3944BC" });
    });
    VText.on("pointerout", () => {
      VText.setStyle({ fill: "#fff" });
    });
    VText.on("pointerdown", () => {
      this.scene.start("title2");
    });
  }
}

class Gameover extends Phaser.Scene {
  constructor() {
    super("gameOver");
  }

  create() {
    this.cameras.main.setBackgroundColor("#000000");

    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;
    //const score = this.game.config.globals.score || 0;
    const playText = this.add.text(
      centerX - 200,
      centerY - 50,
      "Score: " + score,
      { fontSize: "50px", fill: "#fff" }
    );

    const playText2 = this.add.text(centerX - 200, centerY + 50, "PLAY AGAIN", {
      fontSize: "50px",
      fill: "#fff",
    });
    playText2.setInteractive();
    playText2.on("pointerover", () => {
      playText2.setStyle({ fill: "#3944BC" });
    });
    playText2.on("pointerout", () => {
      playText2.setStyle({ fill: "#fff" });
    });
    playText2.on("pointerdown", () => {
      this.scene.start("gameplay");
    });
  }
}

var config = {
  type: Phaser.AUTO,
  pixelArt: true,
  zoom: 1,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1100,
    height: 1080,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        x: 0,
        y: 0,
      },
      debug: false,
    },
  },
  input: {
    activePointers: 5,
  },
  scene: [Title, Title2, Game, Host, Join, Settings, HowTo], //, Gameplay, Gameover]
};

var game = new Phaser.Game(config);
