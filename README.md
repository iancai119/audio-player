# Vanilla JS Web Audio Player

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![HTML5](https://img.shields.io/badge/Frontend-HTML5-orange)
![CSS3](https://img.shields.io/badge/Style-CSS3-blue)

## Project Overview
This project is a web-based music player application built entirely with vanilla JavaScript, HTML5, and CSS3.

It interfaces directly with the HTML5 Audio API to provide playback controls, volume management, and dynamic UI updates without relying on third-party libraries. The project demonstrates core front-end competencies including DOM manipulation, event handling, and CSS keyframe animations.

## Technical Stack
* **Core:** HTML5, CSS3, JavaScript (ES6)
* **Audio Engine:** HTML5 `<audio>` element
* **Styling:** CSS3 Gradients, Keyframe Animations, Font Icons (IcoMoon)
* **Logic:** Array-based state management for playlists

## Key Features
* **Playback Control:** Implementation of Play, Pause, Next Track, and Previous Track functionality.
* **Dynamic UI Updates:** The interface automatically updates the song title and album cover art based on the current track index.
* **Interactive Visuals:** Features a CSS3 rotating animation for the album art that activates during playback and halts when paused.
* **Volume Management:** Integrated range slider input to control the audio object volume property in real-time.
* **Playlist Logic:** Uses a JavaScript array to manage the playback queue, ensuring continuous cycling through tracks.

## Project Structure
The project is organized as follows:

```text
audio-player/
├── audio/              # MP3 source files
├── css/
│   └── style.css       # Main stylesheet (gradients and animations)
├── fonts/              # IcoMoon font files for player icons
├── images/             # Album art images
├── js/
│   └── script.js       # Player logic and event listeners
├── audioplayer.html    # Main application entry point
└── README.md

## Live Demo

👉 [Live Demo](https://iancai119.github.io/audio-player/Audio%20Player/audioplayer.html)
