class BootScene extends Phaser.Scene {
    
  constructor() {
      super({
        key: 'BootScene',
        pack: {
          files: [
              { type: 'image', key: 'logo', url: 'assets/images/moov2-logo.png' }
          ]
        }
      });
    }

    preload(){

      var progress = this.add.graphics();

      this.load.on('progress', (value) => {
          progress.clear();
          progress.fillStyle(0x990000, 1);
          progress.fillRect(0, this.sys.game.config.width/2-60, this.sys.game.config.width * value, 60);
      });

      this.load.on('complete', function () {
          progress.destroy();
      });

      this.load.atlas('atlas', 'assets/images/atlas.png', 'assets/images/atlas.json');

      
      this.load.image('blue', 'http://labs.phaser.io/assets/particles/blue.png');
    }

    create(){
      //  this.scene.start('TitleScene');
      this.scene.start('GameScene');
    }
}

export default BootScene;
