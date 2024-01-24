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
    // this.load.audio("tunez", "cozy-holidays-soundroll-main-version-9946-01-34.mp3");
  }
  create() {
    // this.levm = this.sound.add('tunez');
    // this.levm.play();
    // this.levm.loop = true;

    this.cameras.main.setBackgroundColor("#ADD8E6");
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;
    this.titleob = this.add.image(
      centerX,
      centerY - 350,
      "title"
    );
    this.titleob.setScale(1.5);

/////play/////////
    this.play = this.add.image(
      centerX - 300,
      centerY - 50,
      "play"
    );
    this.play.setScale(.5);
    this.tweens.add({
        targets: this.play,
        y: '+=50',
        duration: 1000,
        yoyo: true,
        repeat: -1
    });

 ////host///////
    this.host = this.add.image(
        centerX - 350,
        centerY + 250,
        "host"
      );
      this.host.setScale(.5);
      this.tweens.add({
          targets: this.host,
          y: '+=50',
          duration: 1000,
          yoyo: true,
          repeat: -1
      });

/////join/////////
      this.join = this.add.image(
        centerX - 50,
        centerY + 200,
        "join"
      );
      this.join.setScale(.5);
      this.tweens.add({
          targets: this.join,
          y: '+=50',
          duration: 1000,
          yoyo: true,
          repeat: -1
      });

      this.settings = this.add.image(
        centerX + 300,
        centerY + 250,
        "settings"
      );
      this.settings.setScale(.5);
      this.tweens.add({
          targets: this.settings,
          y: '+=50',
          duration: 1000,
          yoyo: true,
          repeat: -1
      });

      this.howTo = this.add.image(
        centerX + 400,
        centerY - 50,
        "howTo"
      );
      this.howTo.setScale(.5);
      this.tweens.add({
          targets: this.howTo,
          y: '+=50',
          duration: 1000,
          yoyo: true,
          repeat: -1
      });
    const playText = this.add.text(centerX - 50, centerY - 100, 'map clips shown\nhere (think \nminecraft)', { fontSize: '30px', fill: '#000' });
    // playText.setInteractive();
    // playText.on('pointerover', () => {
    //     playText.setStyle({ fill: '#3944BC' });
    // });
    // playText.on('pointerout', () => {
    //     playText.setStyle({ fill: '#fff' });
    // });
    // playText.on('pointerdown', () => {
    //     this.scene.start('gameplay');
    // });
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
  }
  update() {}
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
  scene: [Title], //, Gameplay, Gameover]
};

var game = new Phaser.Game(config);
