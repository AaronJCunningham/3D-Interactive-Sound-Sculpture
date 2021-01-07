import {Howl} from 'howler';
import Sample_01 from './Sample_01.mp3'
import Sample_02 from './Sample_02.mp3'
import Sample_03 from './Sample_03.mp3'
import Sample_04 from './Sample_04.mp3'
import Sample_05 from './Sample_05.mp3'
import Sample_06 from './Sample_06.mp3'
import Sample_07 from './Sample_07.mp3'
import Sample_08 from './Sample_08.mp3'
import Sample_09 from './Sample_09.mp3'
import Sample_10 from './Sample_10.mp3'

const nextSound = [
  Sample_01, Sample_02, Sample_03, Sample_04, Sample_05, Sample_06, Sample_07, Sample_08, Sample_09, Sample_10
]


export const playSound = () => {
    console.log('click me')

    var sound = new Howl({
      src: nextSound[Math.floor(Math.random() * 10)]
    });
    
    sound.play();

  }