// src/pages/Work1.tsx
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import * as Tone from 'tone';

const Work1: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Tone.js components
    const lowPass = new Tone.Filter({ frequency: 14000 }).toDestination();

    const openHiHat = new Tone.NoiseSynth({
      volume: -10,
      envelope: { attack: 0.01, decay: 0.3 },
    }).connect(lowPass);

    const closedHiHat = new Tone.NoiseSynth({
      volume: -10,
      envelope: { attack: 0.01, decay: 0.15 },
    }).connect(lowPass);

    const bassEnvelope = new Tone.AmplitudeEnvelope({
      attack: 0.01,
      decay: 0.2,
      sustain: 0,
    }).toDestination();

    const bassFilter = new Tone.Filter({ frequency: 600, Q: 8 });
    const bass = new Tone.PulseOscillator("A2", 0.4).chain(bassFilter, bassEnvelope);
    bass.start();

    const bleepEnvelope = new Tone.AmplitudeEnvelope({
      attack: 0.01,
      decay: 0.4,
      sustain: 0,
    }).toDestination();

    const bleep = new Tone.Oscillator("A4").connect(bleepEnvelope);
    bleep.start();

    const kickEnvelope = new Tone.AmplitudeEnvelope({
      attack: 0.01,
      decay: 0.2,
      sustain: 0,
    }).toDestination();

    const kick = new Tone.Oscillator("A2").connect(kickEnvelope).start();
    const kickSnapEnv = new Tone.FrequencyEnvelope({
      attack: 0.005,
      decay: 0.01,
      sustain: 0,
      baseFrequency: "A2",
      octaves: 2.7,
    }).connect(kick.frequency);

    // Define Tone.js parts
    const openHiHatPart = new Tone.Part(time => openHiHat.triggerAttack(time), [{ "8n": 2 }, { "8n": 6 }]).start(0);
    const closedHatPart = new Tone.Part(time => closedHiHat.triggerAttack(time), [0, { "16n": 1 }, { "8n": 1 }, { "8n": 3 }, { "8n": 4 }, { "8n": 5 }, { "8n": 7 }, { "8n": 8 }]).start(0);

    const bassPart = new Tone.Part((time, note) => {
      bass.frequency.setValueAtTime(note, time);
      bassEnvelope.triggerAttack(time);
    }, [["0:0", "A1"], ["0:2", "G1"], ["0:2:2", "C2"], ["0:3:2", "A1"]]).start(0);

    const bleepLoop = new Tone.Loop(time => bleepEnvelope.triggerAttack(time), "2n").start(0);

    const kickPart = new Tone.Part(time => {
      kickEnvelope.triggerAttack(time);
      kickSnapEnv.triggerAttack(time);
    }, ["0", "0:0:3", "0:2:0", "0:3:1"]).start(0);

    Tone.Transport.loopStart = 0;
    Tone.Transport.loopEnd = "1:0";
    Tone.Transport.loop = true;

    // Initialize p5.js sketch
    const sketch = new p5(p => {
      let phase = 0;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(sketchRef.current!);
        p.fill(255);
        p.strokeWeight(1);
        p.rectMode(p.CENTER);
      };

      p.draw = () => {
        p.background(255);
        p.stroke(0);
        for (let i = 0; i < p.width; i++) {
          const kickValue = kickEnvelope.value * 200;
          const yDot = Math.sin((i / 60) + phase) * kickValue;
          p.point(i, p.height - 150 + yDot);
        }
        phase += 1;

        const bassRadius = p.height * bassEnvelope.value;
        p.stroke("red");
        const bassX = p.noise(p.millis() / 1000) * p.width;
        const bassY = p.noise(phase / 100) * p.height;
        p.ellipse(bassX, bassY, bassRadius, bassRadius);

        const beepX = p.noise(p.millis() / 500) * p.width;
        const beepY = p.noise(phase / 50) * p.height;
        const beepSize = p.height * bleepEnvelope.value;
        p.stroke("green");
        p.rect(beepX, beepY, beepSize, beepSize);
      };

      p.mousePressed = () => {
        if (Tone.Transport.state !== 'started') {
          Tone.start();
          Tone.Transport.start();
        }
      };

      p.mouseReleased = () => {
        // Tone.Transport.stop();
      };
    });

    return () => {
      sketch.remove();
      openHiHatPart.dispose();
      closedHatPart.dispose();
      bassPart.dispose();
      bleepLoop.dispose();
      kickPart.dispose();
      Tone.Transport.stop();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default Work1;