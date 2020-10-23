import {Howl} from 'howler';
import soundOne from './button-1.mp3'


export const playSound = () => {
    console.log('click me')

    var sound = new Howl({
      src: soundOne
    });
    
    sound.play();

  }