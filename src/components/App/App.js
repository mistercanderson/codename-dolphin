import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import './App.css';
import createSynth from '../SynthEngine/SynthEngine';
import Scene from '../Scene/Scene';
import { keyboardSwitch } from '../../util/keyboardSwitch';
import Keyboard from '../Keyboard/Keyboard';

const { oscillators, delay, reverb, filter } = createSynth();
const engine = oscillators.chain(delay, reverb, filter, Tone.Destination);

export default function App() {
  const [synth, setSynth] = useState(engine);
  const [octave, setOctave] = useState(4);
  const [detune, setDetune] = useState(0);
  const [osc, setOsc] = useState(synth.get().oscillator.type);

  const playSynth = async (e) => {
    if (keyboardSwitch(e, octave)) {
      await Tone.start();
      let note = keyboardSwitch(e, octave);
      synth.triggerAttackRelease(note, '8n');
      console.log(note);
      console.log(synth.get());
    }
  };

  const activateKey = async (e) => {
    if (e.target.attributes.note) {
      await Tone.start();
      const domNote = e.target.attributes.note.value;
      const note = splitDomNote(domNote);
      synth.triggerAttackRelease(note, '8n');
      toggleActive(e);
    }
  };

  const splitDomNote = (domNote) => {
    if (domNote.split(' ')[1] < 12) {
      return domNote.split(' ')[0] + '4';
    } else {
      return domNote.split(' ')[0] + '5';
    }
  };

  const toggleActive = (e) => {
    e.target.classList.toggle('active');
    setTimeout(() => e.target.classList.toggle('active'), 100);
  };

  useEffect(() => {
    window.addEventListener('keydown', playSynth);
  }, []);

  return (
    <div className='App'>
      <label>
        Detune:
        <input
          type='range'
          name='detune'
          min='-1200'
          max='1200'
          value={detune}
          onChange={(e) => {
            setDetune(e.target.value);
            synth.set({ detune: detune });
          }}
        />
      </label>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          AM Sine:
          <input
            type='radio'
            name='octave'
            value='amsine'
            onChange={(e) => {
              setOsc(e.target.value);
            }}
          />
        </label>
        <label>
          Square:
          <input
            type='radio'
            name='octave'
            value='square'
            defaultChecked
            onChange={(e) => {
              setOsc(e.target.value);
            }}
          />
        </label>
        <label>
          FM Triange:
          <input
            type='radio'
            name='octave'
            value='fmtriangle'
            onChange={(e) => {
              setOsc(e.target.value);
            }}
          />
        </label>
        <button onClick={() => synth.set({ oscillator: { type: osc } })}>
          Set Oscillator Type
        </button>
      </form>
      <Keyboard activateKey={activateKey} />
      <Scene />
    </div>
  );
}
