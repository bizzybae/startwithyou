<a href="https://demo.startwithyou.ventures">
  <img alt="Start With You – AI-Powered Mock Residency Interviews" src="https://ik.imagekit.io/e50alxf4r/Screenshot%202023-10-09%20at%2012.37.27%E2%80%AFPM.png?updatedAt=1696869469104e">
  <h1 align="center">Start With You Mock Interviews</h1>
</a>

<p align="center">
  Residency Mock Interview Simulator with AI-Powered Feedback
</p>

<p align="center">
  <a href="https://twitter.com/qsmushtaq">
    <img src="https://img.shields.io/twitter/follow/qsmushtaq?style=flat&label=Follow&logo=twitter&color=0bf&logoColor=fff" alt="Tyler Quddarat's follower count" />
  </a>
  <a href="https://github.com/bizzybae/liftoff">
    <img src="https://img.shields.io/github/stars/bizzybae/liftoff?label=bizzybae%2Fliftoff" alt="Liftoff repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## Introduction

Start With You is an interview preparation tool that provides AI feedback on your mock residency interviews.

## Tech Stack + Features

![Landing Page](https://ik.imagekit.io/e50alxf4r/Screenshot%202023-10-09%20at%2012.37.27%E2%80%AFPM.png?updatedAt=1696869469104)

![Interview Selection](https://ik.imagekit.io/9km72asqu/CleanShot_2023-05-31_at_13.35.55_xohCRNMlJ.png?updatedAt=1685554576155)

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience

### Platforms

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git
- [Upstash](https://upstash.com/) - Serverless Data Platform (here using serverless Redis for rate limiting)

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [`ImageResponse`](https://beta.nextjs.org/docs/api-reference/image-response) – Generate dynamic Open Graph images at the edge
- [HeadlessUI](https://headlessui.com/) - Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### Miscellaneous

- [FFMPEG.WASM](https://ffmpegwasm.netlify.app/) – Transcode video/audio files
- [React Webcam](https://github.com/mozmorris/react-webcam) - Webcam component for React
- [Stripe Gradient Animation](https://whatamesh.vercel.app/) - [@jordienr](https://twitter.com/jordienr) released a Mesh Gradient that uses WebGL and animates a beautiful gradient

## How it all works

Start With You uses FFmpeg to transcode the raw video into MP3. Chrome, Safari, and Firefox all record with different codecs, and FFmpeg is great for standardizing them.

We then send the audio directly to be transcribed by OpenAI's Whisper endpoint, and then stream feedback from the edge using OpenAI's gpt-3.5-turbo.

## Author

- Quddarat Mushtaq ([@qsmushtaq](https://twitter.com/qsmushtaq))

## Credits for Original Idea

- Tyler Meyer ([@tmeyer_me](https://twitter.com/tmeyer_me))
