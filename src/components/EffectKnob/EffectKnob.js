import React from 'react';
import './EffectKnob.css'

export default function EffectKnob({
  name,
  label,
  min,
  max,
  value,
  handleChange,
}) {
  return (
    <label className='effect-knob'>
      {label}
      <input
        type='range'
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}
