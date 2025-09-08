<h1 align="center">AI Resume Analyzer</h1>

_Transform Resumes, Unlock Opportunities Instantly_

![last commit](https://img.shields.io/github/last-commit/ausafelahi/AI-Resume-Analyzer)
![language](https://img.shields.io/github/languages/top/ausafelahi/AI-Resume-Analyzer)
![languages count](https://img.shields.io/github/languages/count/ausafelahi/AI-Resume-Analyzer)

**Built with the tools and technologies:**

![JSON](https://img.shields.io/badge/-JSON-black?logo=json&logoColor=white)
![Markdown](https://img.shields.io/badge/-Markdown-black?logo=markdown&logoColor=white)
![NPM](https://img.shields.io/badge/-NPM-CB3837?logo=npm&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)
![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router&logoColor=white)

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)

---

## Overview

AI-Resume-Analyzer is a full-stack React-based application template designed to facilitate the development of resume review and optimization tools. It combines modern frontend architecture with containerized deployment, offering a scalable foundation for AI-powered resume analysis platforms.

### Why AI-Resume-Analyzer?

This project simplifies building, deploying, and maintaining sophisticated resume evaluation applications. The core features include:

- 🧩 **Modular Components**: Reusable UI elements for ATS scoring, resume summaries, and feedback visualization.
- 🚀 **Optimized Deployment**: Multi-stage Docker setup and Vite configuration for fast, consistent builds.
- 🖼️ **PDF to Image Conversion**: Seamless rendering of PDF pages into high-resolution images for previews.
- 🔐 **Secure User Management**: Authentication and file handling integrated with Puter.js for streamlined workflows.
- 🤖 **AI-Powered Analysis**: Integrated with **Puter.js AI models** for smart parsing, scoring, and personalized feedback on resumes.
- ⚙️ **Configurable Architecture**: TypeScript, Tailwind CSS, and routing setups that support flexible customization.
- 🛠️ **Developer-Friendly Utilities**: Helper functions for styling, ID generation, and size formatting to enhance productivity.

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language**: TypeScript  
- **Package Manager**: npm  
- **Container Runtime**: Docker  

---

### Installation

Build AI-Resume-Analyzer from the source and install dependencies:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ausafelahi/AI-Resume-Analyzer
2. **Navigate to the project directory:**
   ```bash
   cd AI-Resume-Analyzer
3. **Install the dependencies:**
   ```bash
   npm install
### Running The Project:
Run the project with:
```bash
npm run dev
```
### Project Structure:
```
└── 📁.react-router
        └── 📁types
            └── 📁app
                └── 📁+types
                    ├── root.ts
                └── 📁routes
                    └── 📁+types
                        ├── auth.ts
                        ├── home.ts
                        ├── resume.ts
                        ├── upload.ts
                        ├── wipe.ts
            ├── +future.ts
            ├── +routes.ts
            ├── +server-build.d.ts
    └── 📁app
        └── 📁components
            ├── accordion.tsx
            ├── ats.tsx
            ├── details.tsx
            ├── fileUploader.tsx
            ├── navbar.tsx
            ├── resumeCard.tsx
            ├── scoreBadge.tsx
            ├── scoreCircle.tsx
            ├── scoreGauge.tsx
            ├── summary.tsx
        └── 📁constants
            ├── index.ts
        └── 📁lib
            ├── pdf2img.ts
            ├── puter.ts
            ├── utils.ts
        └── 📁routes
            ├── auth.tsx
            ├── home.tsx
            ├── resume.tsx
            ├── upload.tsx
            ├── wipe.tsx
        ├── app.css
        ├── root.tsx
        ├── routes.ts
    └── 📁public
        └── 📁icons
            ├── ats-bad.svg
            ├── ats-good.svg
            ├── ats-warning.svg
            ├── back.svg
            ├── check.svg
            ├── cross.svg
            ├── info.svg
            ├── pin.svg
            ├── warning.svg
        └── 📁images
            ├── bg-auth.svg
            ├── bg-main.svg
            ├── bg-small.svg
            ├── pdf.png
            ├── resume_01.png
            ├── resume_02.png
            ├── resume_03.png
            ├── resume-scan-2.gif
            ├── resume-scan.gif
        ├── favicon.ico
        ├── pdf.worker.min.mjs
    └── 📁types
        ├── index.d.ts
        ├── pdf2img.d.ts
        ├── puter.d.ts
    ├── .dockerignore
    ├── .gitignore
    ├── Dockerfile
    ├── package-lock.json
    ├── package.json
    ├── react-router.config.ts
    ├── README.md
    ├── tsconfig.json
    └── vite.config.ts
```
