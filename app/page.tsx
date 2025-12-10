"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    { src: "/Scene 1.png", alt: "Game Scene 1" },
    { src: "/scene 2.png", alt: "Game Scene 2" },
    { src: "/Mainmenu.jpg", alt: "Main Menu" },
    { src: "/Pausemenu.jpg", alt: "Pause Menu" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Project Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
        <Image
                src="/Uni_logo1.png"
                alt="FAST University Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <h2 className="text-lg font-bold text-red-500">
                  Final Year Project
                </h2>
                <p className="text-sm text-gray-400">
                  FAST School of Computing
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:items-center">
              {/* Team Members */}
              <div className="bg-gradient-to-r from-red-900/40 to-red-800/30 border border-red-700/50 rounded-lg px-5 py-3 backdrop-blur-sm shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Team</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-100">Ali Shahid</span>
                    <span className="text-xs text-gray-500 bg-gray-800/50 px-2 py-0.5 rounded">21L-5243</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-100">Sheikh Abdul Rahim</span>
                    <span className="text-xs text-gray-500 bg-gray-800/50 px-2 py-0.5 rounded">21L-7709</span>
                  </div>
                </div>
              </div>
              
              {/* Supervisor */}
              <div className="bg-gradient-to-r from-red-900/40 to-red-800/30 border border-red-700/50 rounded-lg px-5 py-3 backdrop-blur-sm shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Supervisor</span>
                </div>
                <p className="text-sm font-semibold text-gray-100">Dr. Muhammad Aasim Qureshi</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 via-black to-black z-0"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1
            className="text-7xl md:text-9xl font-bold mb-4 text-red-600 drop-shadow-2xl"
            style={{
              textShadow:
                "0 0 20px rgba(220, 38, 38, 0.8), 0 0 40px rgba(220, 38, 38, 0.6)",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            ZOMBIE EXPRESS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wider">
            — A HORROR SURVIVAL GAME —
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Play as Azaan Mirza, stranded at an abandoned station when your
            AI-powered train stops due to a power outage. Discover the station
            is overrun with zombies. Activate three power nodes to restore the
            train and escape. Every decision could mean life or death.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#download"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all duration-300 pulse-glow transform hover:scale-105 shadow-lg shadow-red-600/50"
            >
              DOWNLOAD NOW
            </a>
            <a
              href="https://drive.google.com/file/d/1cfbfa5NwUGNBCLRRQAs0lvcxKedlUzeh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-red-600 hover:bg-red-600/20 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/30"
            >
              WATCH DEMO
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-red-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Game Overview Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-red-600">
            GAME OVERVIEW
          </h2>
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-8 rounded-xl border border-red-900/50 max-w-4xl mx-auto shadow-2xl">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              In <span className="text-red-500 font-bold">Zombie Express</span>,
              you play as{" "}
              <span className="text-red-500 font-bold">Azaan Mirza</span>, who
              finds himself stranded at a deserted station when his AI-powered
              train stops due to a complete power outage. As you step outside,
              you discover the station is overrun with zombies and must fight
              for survival.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Your mission is to activate three power nodes scattered throughout
              the station to restore the train's power system. The game features
              an automatic checkpoint system that saves your progress after the
              initial cutscene and after each power node activation, reducing
              frustration from unexpected deaths.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3 bg-gray-800/30 p-4 rounded-lg border border-red-900/30">
                <span className="text-red-500 text-2xl">⚔️</span>
                <div>
                  <h4 className="font-bold text-red-400 mb-1">
                    Combat & Survival
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Confront zombies and manage resources carefully to stay
                    alive
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-800/30 p-4 rounded-lg border border-red-900/30">
                <span className="text-red-500 text-2xl">🔌</span>
                <div>
                  <h4 className="font-bold text-red-400 mb-1">Power Nodes</h4>
                  <p className="text-gray-400 text-sm">
                    Navigate the station to find and activate three power nodes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-800/30 p-4 rounded-lg border border-red-900/30">
                <span className="text-red-500 text-2xl">💾</span>
                <div>
                  <h4 className="font-bold text-red-400 mb-1">
                    Auto-Save System
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Progress is saved automatically at checkpoints
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-800/30 p-4 rounded-lg border border-red-900/30">
                <span className="text-red-500 text-2xl">🚂</span>
                <div>
                  <h4 className="font-bold text-red-400 mb-1">
                    Escape Mission
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Activate all nodes and board the train to escape
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-red-600">
            FEATURES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-xl border border-red-900/50 hover:border-red-600 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <div className="text-4xl mb-4">⚔️</div>
              <h3 className="text-2xl font-bold mb-3 text-red-500">
                Intense Combat
              </h3>
              <p className="text-gray-400">
                Fight hordes of zombies with an arsenal of weapons including
                katanas and assault rifles. Master close-quarters and ranged
                combat to survive.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-xl border border-red-900/50 hover:border-red-600 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-2xl font-bold mb-3 text-red-500">
                Power Node System
              </h3>
              <p className="text-gray-400">
                Explore the abandoned station to locate and activate three power
                nodes. Strategic exploration is key to restoring the train's
                power.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-xl border border-red-900/50 hover:border-red-600 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-2xl font-bold mb-3 text-red-500">
                Checkpoint System
              </h3>
              <p className="text-gray-400">
                Automatic saves after cutscenes and node activations. No need to
                restart from the beginning if you fall in battle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Carousel Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-red-600">
            SCREENSHOTS
          </h2>
          
          {/* Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-xl border-4 border-red-900/50 shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="min-w-full relative">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={1200}
                      height={675}
                      className="w-full h-auto object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 z-10 border-2 border-red-600 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 z-10 border-2 border-red-600 hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-red-600 w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-red-600">
            SYSTEM REQUIREMENTS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Minimum Requirements */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-xl border border-red-900/50 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-red-500">
                Minimum Requirements
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    <strong>OS:</strong> Windows 10 (64-bit)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    <strong>Processor:</strong> Intel Core i3 or equivalent
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    <strong>Memory:</strong> 4 GB RAM
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    <strong>Graphics:</strong> NVIDIA GTX 750 / AMD Radeon R7 or
                    equivalent
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    <strong>Storage:</strong> 2 GB free disk space
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    <strong>DirectX:</strong> Version 11 or higher
                  </span>
                </li>
              </ul>
            </div>

            {/* Recommended Requirements */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-xl border border-red-600/50 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-red-500">
                Recommended Requirements
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    <strong>OS:</strong> Windows 10 / 11 (64-bit)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    <strong>Processor:</strong> Intel Core i5 or higher
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    <strong>Memory:</strong> 8 GB RAM
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    <strong>Graphics:</strong> NVIDIA GTX 1050 Ti / AMD RX 560
                    or higher
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    <strong>Storage:</strong> 3-5 GB free disk space (SSD
                    preferred)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    <strong>DirectX:</strong> Version 12
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Game Controls Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-red-600">
            GAME CONTROLS
          </h2>
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-8 rounded-xl border border-red-900/50 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-red-900/30">
                  <span className="text-gray-300">Move Forward</span>
                  <kbd className="px-3 py-1 bg-red-900/50 rounded text-red-400 font-mono border border-red-700/50">
                    W
                  </kbd>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-red-900/30">
                  <span className="text-gray-300">Move Backward</span>
                  <kbd className="px-3 py-1 bg-red-900/50 rounded text-red-400 font-mono border border-red-700/50">
                    S
                  </kbd>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-red-900/30">
                  <span className="text-gray-300">Move Left</span>
                  <kbd className="px-3 py-1 bg-red-900/50 rounded text-red-400 font-mono border border-red-700/50">
                    A
                  </kbd>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-red-900/30">
                  <span className="text-gray-300">Move Right</span>
                  <kbd className="px-3 py-1 bg-red-900/50 rounded text-red-400 font-mono border border-red-700/50">
                    D
                  </kbd>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-red-900/30">
                  <span className="text-gray-300">Look Around</span>
                  <kbd className="px-3 py-1 bg-red-900/50 rounded text-red-400 font-mono border border-red-700/50">
                    Mouse
                  </kbd>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-red-900/30">
                  <span className="text-gray-300">Fire/Strike</span>
                  <kbd className="px-3 py-1 bg-red-900/50 rounded text-red-400 font-mono border border-red-700/50">
                    LMB
                  </kbd>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-red-900/30">
                  <span className="text-gray-300">Aim Down Sights</span>
                  <kbd className="px-3 py-1 bg-red-900/50 rounded text-red-400 font-mono border border-red-700/50">
                    RMB
                  </kbd>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-red-900/30">
                  <span className="text-gray-300">Reload</span>
                  <kbd className="px-3 py-1 bg-red-900/50 rounded text-red-400 font-mono border border-red-700/50">
                    R
                  </kbd>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-red-900/30">
                  <span className="text-gray-300">Interact</span>
                  <kbd className="px-3 py-1 bg-red-900/50 rounded text-red-400 font-mono border border-red-700/50">
                    E
                  </kbd>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-red-900/30">
                  <span className="text-gray-300">Activate Node</span>
                  <kbd className="px-3 py-1 bg-red-900/50 rounded text-red-400 font-mono border border-red-700/50">
                    F
                  </kbd>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-red-900/30">
                  <span className="text-gray-300">Pause</span>
                  <kbd className="px-3 py-1 bg-red-900/50 rounded text-red-400 font-mono border border-red-700/50">
                    P
                  </kbd>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-red-900/30">
                  <span className="text-gray-300">Weapon Switch</span>
                  <kbd className="px-3 py-1 bg-red-900/50 rounded text-red-400 font-mono border border-red-700/50">
                    F
                  </kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weapons Showcase */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-red-600">
            ARM YOURSELF
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-red-500">KATANA</h3>
              <p className="text-gray-400 text-lg mb-4">
                A deadly one-hit weapon that slices through zombies with
                precision. Perfect for close-quarters combat when ammo runs low.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-red-900/50 rounded text-sm border border-red-700/50">
                  One-Hit Kill
                </span>
                <span className="px-4 py-2 bg-red-900/50 rounded text-sm border border-red-700/50">
                  Melee Weapon
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-8 rounded-xl border border-red-900/50 aspect-square flex items-center justify-center shadow-xl overflow-hidden">
              <Image
                src="/Katana.jpg"
                alt="Katana Weapon"
                width={500}
                height={500}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-8 rounded-xl border border-red-900/50 aspect-square flex items-center justify-center shadow-xl overflow-hidden order-2 md:order-1">
              <Image
                src="/Assault_Rifle.png"
                alt="Assault Rifle Weapon"
                width={500}
                height={500}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-4 text-red-500">
                ASSAULT RIFLE
              </h3>
              <p className="text-gray-400 text-lg mb-4">
                High-capacity automatic weapon for taking down multiple zombies
                at range. Keep your distance and conserve ammo wisely.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-red-900/50 rounded text-sm border border-red-700/50">
                  High Damage
                </span>
                <span className="px-4 py-2 bg-red-900/50 rounded text-sm border border-red-700/50">
                  Range Weapon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vending Machines Gallery */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-red-600">
            VENDING MACHINES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-xl border border-red-900/50 overflow-hidden shadow-xl hover:border-red-600 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[3/4] relative w-full bg-gray-800">
                <Image
                  src="/Health_Station.jpg"
                  alt="Health Station"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-red-500 mb-2">Health Station</h3>
                <p className="text-gray-400 text-sm">Purchase health items to restore your vitality</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-xl border border-red-900/50 overflow-hidden shadow-xl hover:border-red-600 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[3/4] relative w-full bg-gray-800">
                <Image
                  src="/Ammo_Station.jpg"
                  alt="Ammo Station"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-red-500 mb-2">Ammo Station</h3>
                <p className="text-gray-400 text-sm">Stock up on ammunition for your weapons</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-xl border border-red-900/50 overflow-hidden shadow-xl hover:border-red-600 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[3/4] relative w-full bg-gray-800">
            <Image
                  src="/Powerup_Station.jpg"
                  alt="Power Up Station"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-red-500 mb-2">Power Up Station</h3>
                <p className="text-gray-400 text-sm">Enhance your abilities with power-ups</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-20 px-4 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 via-black to-red-950/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6 text-red-600">DOWNLOAD NOW</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to face the horror? Download Zombie Express and begin your
            fight for survival.
          </p>

          {/* Download Instructions */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-8 rounded-xl border border-red-900/50 mb-8 text-left max-w-2xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              Download Instructions
            </h3>
            <ol className="space-y-3 text-gray-300 list-decimal list-inside">
              <li>Click the download link below to get the game file</li>
              <li>You will receive a ZIP file containing the game</li>
              <li>Extract the ZIP file to your desired location</li>
              <li>Run the game executable to start playing</li>
            </ol>
          </div>

          {/* Download Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://drive.google.com/file/d/1T9vlehEjPfO-BQXeD4tu5gkOGwOzviyg/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-xl rounded-lg transition-all duration-300 pulse-glow transform hover:scale-105 shadow-lg shadow-red-600/50"
            >
              DOWNLOAD GAME
            </a>
          <a
              href="https://drive.google.com/file/d/1cfbfa5NwUGNBCLRRQAs0lvcxKedlUzeh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
              className="px-10 py-5 border-2 border-red-600 hover:bg-red-600/20 text-white font-bold text-xl rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/30"
            >
              WATCH DEMO VIDEO
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            File size: ~2-5 GB | Platform: Windows 10/11 (64-bit)
          </p>
        </div>
      </section>

      {/* Game Objectives Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-red-600">
            GAME OBJECTIVES
          </h2>
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-8 rounded-xl border border-red-900/50 max-w-4xl mx-auto shadow-xl">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Your main goal is to help{" "}
              <span className="text-red-500 font-bold">Azaan Mirza</span>{" "}
              survive in a world filled with zombies and escape the station. To
              accomplish this, you must:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-1">✓</span>
                <span>
                  <strong className="text-red-400">
                    Activate all three Power Nodes
                  </strong>{" "}
                  to restore the train's power system
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-1">✓</span>
                <span>
                  <strong className="text-red-400">
                    Fight off waves of zombies
                  </strong>{" "}
                  using available weapons like the assault rifle and katana
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-1">✓</span>
                <span>
                  <strong className="text-red-400">
                    Collect health, ammunition, and power-ups
                  </strong>{" "}
                  to stay alive as the stages become tougher
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-1">✓</span>
                <span>
                  <strong className="text-red-400">
                    Reach and board the train
                  </strong>{" "}
                  after activating all nodes within the specified time to ensure
                  a successful escape
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-400 mt-6 italic">
              The game focuses on strategy, exploration, and timely combat.
              Managing checkpoints and using resources wisely are essential for
              completing the escape mission.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-red-900/30">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p className="mb-2">© 2024 Zombie Express. All rights reserved.</p>
          <p className="text-sm">A Horror Survival Game - Final Year Project</p>
          <p className="text-xs mt-2 text-gray-600">
            FAST School of Computing | Team: Ali Shahid (21L-5243), Sheikh Abdul Rahim (21L-7709) | Supervisor: Dr. Muhammad Aasim Qureshi
          </p>
        </div>
      </footer>
    </div>
  );
}
