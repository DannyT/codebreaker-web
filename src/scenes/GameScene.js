class GameScene extends Phaser.Scene {
  
  constructor() {
    super({
      key: 'GameScene'
    });
  }

  preload() {
  }

  create() {
    // level label
    this.level = this.make.text({
      x: 0, 
      y: 0,
      text: 'Level 1',
      style: {
          font: '50px "Courier New"',
          fill: 'white'
      }
    });

    // instruction text
    this.instructions = this.make.text({
      x: 0, 
      y: this.level.y + this.level.height,
      text: 'Tap a shape to guess the code.',
      style: {
          font: '24px "Courier New"',
          fill: 'white'
      }
    });

    // slots
    let slotGroup = this.add.group();
    this.slots = slotGroup.createMultiple({
      key: 'atlas',
      frame: 'ui/slot.png',
      repeat: 5,
      setScale: {x:2, y:2}
    });
    Phaser.Actions.GridAlign(this.slots, {
        width: 10,
        height: 1,
        cellWidth: 120,
        cellHeight: 120,
        position: Phaser.Display.Align.TOP_LEFT,
        x:300,
        y:200
    });

    // buttons x 4
    let btnGroup = this.add.group();
    this.btns = btnGroup.createMultiple({
      key: 'atlas',
      frame: 'ui/button-up.png',
      repeat: 3,
      setScale: {x:4, y:4}
    });
    Phaser.Actions.GridAlign(this.btns, {
        width: 2,
        height: 2,
        cellWidth: 250,
        cellHeight: 250,
        position: Phaser.Display.Align.TOP_LEFT,
        x:300,
        y:450
    });

    btnGroup.children.iterate((btn) => {
      btn.setInteractive();
      btn.on('pointerover', () => {
        btn.setFrame('ui/button-over.png');
      });
      btn.on('pointerout', () => {
        btn.setFrame('ui/button-up.png');
      });
      btn.on('pointerdown', () => {
        btn.setFrame('ui/button-down.png');
      });
      btn.on('pointerup', () => {
        btn.setFrame('ui/button-up.png');
      });
    });
  }

  update(time, delta) {
  }

  
}

export default GameScene;