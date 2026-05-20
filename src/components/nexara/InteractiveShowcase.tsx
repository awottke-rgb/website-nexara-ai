"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Cpu, 
  Layers, 
  Database, 
  Compass, 
  Globe, 
  Zap, 
  Settings, 
  GitBranch, 
  ShieldCheck, 
  Sliders, 
  HardDrive, 
  Share2, 
  RefreshCw,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Clock,
  EyeOff,
  AlertCircle,
  Calendar
} from "lucide-react";

// Types
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originX: number;
  originY: number;
  noiseOffset: number;
  size: number;
  color: string;
}

// Business Problems Data for the Wavy Cockpit
const problemsData = [
  {
    icon: Clock,
    label: "Ladezeit",
    title: "Jede Sekunde Ladezeit kostet Sie bares Geld",
    statusBadge: "DIAGNOSE: BESUCHER SPRINGEN SOFORT AB",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
    glowColor: "rgba(239, 68, 68, 0.25)",
    activeBorderColor: "border-red-500/40",
    diagnose: "Wenn Ihre Website nicht in einer Sekunde lädt, sind ungeduldige Kunden bereits weg. Langsame Baukasten-Systeme frustrieren Ihre Besucher, noch bevor sie Ihr Angebot überhaupt sehen.",
    loesung: "Wir bauen eine Website, die sich augenblicklich aufbaut. Ihre Besucher erleben maximale Geschwindigkeit, bleiben auf der Seite und Sie verlieren keinen einzigen potenziellen Kunden mehr an die Ladezeit."
  },
  {
    icon: TrendingDown,
    label: "Absprünge",
    title: "Interesse sofort fesseln statt ignoriert werden",
    statusBadge: "DIAGNOSE: WERBEBUDGET VERPUFFT WIRKUNGSLOS",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    glowColor: "rgba(249, 115, 22, 0.25)",
    activeBorderColor: "border-orange-500/40",
    diagnose: "Besucher verstehen Ihr Angebot nicht in den ersten Sekunden und verlassen Ihre Seite wieder. Ihr teures Marketing verpufft, weil der Funke einfach nicht überspringt.",
    loesung: "Mit einer glasklaren Botschaft und edlem Design wecken wir sofortiges Vertrauen. Ihre Wunschkunden begreifen Ihren Wert auf den ersten Blick und wollen mehr erfahren."
  },
  {
    icon: EyeOff,
    label: "Daten-Blindflug",
    title: "Klare Fakten statt teurem Bauchgefühl",
    statusBadge: "DIAGNOSE: BLINDFLUG BEIM MARKETING",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    glowColor: "rgba(245, 158, 11, 0.25)",
    activeBorderColor: "border-amber-500/40",
    diagnose: "Sie wissen nicht genau, warum Besucher Ihre Website verlassen, ohne anzufragen. Sie investieren in Marketing, steuern aber ohne Kompass und verpassen wertvolle Abschlüsse.",
    loesung: "Wir machen den Erfolg Ihrer Website messbar. Sie sehen auf einen Blick datenschutzkonform, woher Ihre wertvollsten Anfragen kommen und an welchen Stellen Sie Leads ungenutzt liegen lassen."
  },
  {
    icon: Sliders,
    label: "Prozesse",
    title: "Autopilot für Ihr Tagesgeschäft",
    statusBadge: "DIAGNOSE: STUNDENLANGE ZETTELWIRTSCHAFT",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    glowColor: "rgba(168, 85, 247, 0.25)",
    activeBorderColor: "border-purple-500/40",
    diagnose: "Anfragen manuell sortieren, E-Mails abtippen und Termine mühsam abstimmen: Administrative Routine-Aufgaben rauben Ihnen und Ihrem Team wöchentlich wertvolle Stunden für Ihr eigentliches Geschäft.",
    loesung: "Wir digitalisieren und automatisieren diese Abläufe im Hintergrund. Anfragen werden automatisch erfasst, richtig sortiert und landen direkt in Ihrem System. Sie gewinnen wertvolle Fokus-Zeit zurück."
  },
  {
    icon: AlertCircle,
    label: "Image-Verlust",
    title: "Erstklassiger Auftritt für Premium-Preise",
    statusBadge: "DIAGNOSE: UNTER WERT VERKAUFT",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    glowColor: "rgba(236, 72, 153, 0.25)",
    activeBorderColor: "border-pink-500/40",
    diagnose: "Ihre aktuelle Website spiegelt nicht die exzellente Qualität Ihrer realen Arbeit wider. Premium-Kunden sind verunsichert durch ein durchschnittliches Design und buchen lieber bei der Konkurrenz.",
    loesung: "Wir gestalten einen modernen Premium-Auftritt, der Ihre Expertise sofort sichtbar macht. Sie strahlen absolute Marktführerschaft aus und rechtfertigen hohe Preise spielend leicht."
  },
  {
    icon: Calendar,
    label: "Kalender-Chaos",
    title: "Nur noch qualifizierte Wunschkunden im Kalender",
    statusBadge: "DIAGNOSE: KALENDER VOLL FRUST-TERMINEN",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    glowColor: "rgba(59, 130, 246, 0.25)",
    activeBorderColor: "border-blue-500/40",
    diagnose: "Sie verbringen wertvolle Stunden in Erstgesprächen mit unpassenden Kontakten, die kein Budget haben oder falsche Erwartungen mitbringen. Das blockiert Ihr Wachstum und kostet Nerven.",
    loesung: "Wir schalten eine smarte Vorab-Qualifizierung vor Ihre Termine. Unpassende Anfragen werden automatisch gefiltert. Sie sprechen nur noch mit echten Wunschkunden, die bereit sind zu kaufen."
  }
];

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<"web" | "ai">("web");
  const [selectedProblemIdx, setSelectedProblemIdx] = useState(0);
  const [activeProblemHover, setActiveProblemHover] = useState<number | null>(null);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [time, setTime] = useState(0);

  // Keep track of active tab in ref for the animation loop
  const activeTabRef = useRef(activeTab);
  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

  // Track global time for wavy dock animation
  useEffect(() => {
    let frameId: number;
    const tick = () => {
      setTime((prev) => prev + 0.05);
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Mathematical Coordinate Generators
  const generateLeftBracket = (count: number, scaleX: number, scaleY: number, offset: number) => {
    const points: { x: number; y: number }[] = [];
    const segments = 5;
    const countPerSegment = Math.floor(count / segments);
    const cx = -offset;

    // Segment 1: Top hook (y from -1 to -0.8, curve x from 0.2 to -0.2)
    for (let i = 0; i < countPerSegment; i++) {
      const t = i / countPerSegment;
      const y = -1 + t * 0.2;
      const x = cx + 0.2 - Math.pow(t, 2) * 0.4;
      points.push({ x: x * scaleX, y: y * scaleY });
    }

    // Segment 2: Upper vertical stem (y from -0.8 to -0.1, x = -0.2)
    for (let i = 0; i < countPerSegment; i++) {
      const t = i / countPerSegment;
      const y = -0.8 + t * 0.7;
      const x = cx - 0.2;
      points.push({ x: x * scaleX, y: y * scaleY });
    }

    // Segment 3: Middle protrusion (y from -0.1 to 0.1, x peaks at -0.4 at y=0)
    for (let i = 0; i < countPerSegment; i++) {
      const t = i / countPerSegment;
      const y = -0.1 + t * 0.2;
      const x = cx - 0.2 - Math.cos((t - 0.5) * Math.PI) * 0.2;
      points.push({ x: x * scaleX, y: y * scaleY });
    }

    // Segment 4: Lower vertical stem (y from 0.1 to 0.8, x = -0.2)
    for (let i = 0; i < countPerSegment; i++) {
      const t = i / countPerSegment;
      const y = 0.1 + t * 0.7;
      const x = cx - 0.2;
      points.push({ x: x * scaleX, y: y * scaleY });
    }

    // Segment 5: Bottom hook (y from 0.8 to 1.0, curve x from -0.2 to 0.2)
    for (let i = 0; i < countPerSegment; i++) {
      const t = i / countPerSegment;
      const y = 0.8 + t * 0.2;
      const x = cx - 0.2 + Math.pow(t, 2) * 0.4;
      points.push({ x: x * scaleX, y: y * scaleY });
    }

    return points;
  };

  const generateRightBracket = (count: number, scaleX: number, scaleY: number, offset: number) => {
    // Symmetrical counterpart to left bracket
    const leftPoints = generateLeftBracket(count, scaleX, scaleY, offset);
    return leftPoints.map(p => ({ x: -p.x, y: p.y }));
  };

  const generateAICluster = (count: number, scaleX: number, scaleY: number) => {
    const points: { x: number; y: number }[] = [];
    const sides = 4;
    const countPerSide = Math.floor((count * 0.7) / sides);

    // Side 1: Top-Right (0, -0.95) to (0.95, 0)
    for (let i = 0; i < countPerSide; i++) {
      const t = i / countPerSide;
      points.push({ x: t * 0.95 * scaleX, y: (-0.95 + t * 0.95) * scaleY });
    }

    // Side 2: Bottom-Right (0.95, 0) to (0, 0.95)
    for (let i = 0; i < countPerSide; i++) {
      const t = i / countPerSide;
      points.push({ x: (0.95 - t * 0.95) * scaleX, y: t * 0.95 * scaleY });
    }

    // Side 3: Bottom-Left (0, 0.95) to (-0.95, 0)
    for (let i = 0; i < countPerSide; i++) {
      const t = i / countPerSide;
      points.push({ x: -t * 0.95 * scaleX, y: (0.95 - t * 0.95) * scaleY });
    }

    // Side 4: Top-Left (-0.95, 0) to (0, -0.95)
    for (let i = 0; i < countPerSide; i++) {
      const t = i / countPerSide;
      points.push({ x: (-0.95 + t * 0.95) * scaleX, y: -t * 0.95 * scaleY });
    }

    // Dynamic Central Cluster Core Nodes
    const remaining = count - points.length;
    for (let i = 0; i < remaining; i++) {
      const t = i / remaining;
      const angle = t * Math.PI * 2;
      const radius = 0.35 + Math.sin(t * 6) * 0.12;
      points.push({
        x: Math.cos(angle) * radius * scaleX,
        y: Math.sin(angle) * radius * scaleY
      });
    }

    return points;
  };

  // Canvas Logic & Physics Simulation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initial Particle Generation (450 particles)
    const particleCount = 450;
    const colors = ["#2563EB", "#60A5FA", "#8B5CF6", "#A78BFA", "#06B6D4"]; // High tech neon tones

    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);

    const tempParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      tempParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        originX: width / 2,
        originY: height / 2,
        noiseOffset: Math.random() * 100,
        size: 1 + Math.random() * 1.6,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    particlesRef.current = tempParticles;

    // Animation Loop
    const update = (timestamp: number) => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      const centerX = w / 2;
      const centerY = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Generate layout scales based on container sizes
      const scaleX = w * 0.28;
      const scaleY = h * 0.35;

      // Select Target Coordinates based on Active Tab
      let targetCoordinates: { x: number; y: number }[] = [];
      if (activeTabRef.current === "web") {
        const leftHalf = generateLeftBracket(Math.floor(particleCount / 2), scaleX, scaleY, 0.45);
        const rightHalf = generateRightBracket(Math.ceil(particleCount / 2), scaleX, scaleY, 0.45);
        targetCoordinates = [...leftHalf, ...rightHalf];
      } else {
        targetCoordinates = generateAICluster(particleCount, scaleX, scaleY);
      }

      // Physics Updates
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const target = targetCoordinates[i] || { x: 0, y: 0 };

        // Set Target Position relative to center
        p.originX = centerX + target.x;
        p.originY = centerY + target.y;

        // Spring Force Seek
        const noiseX = Math.sin(timestamp * 0.0015 + p.noiseOffset) * 6;
        const noiseY = Math.cos(timestamp * 0.002 + p.noiseOffset) * 6;

        const dx = p.originX + noiseX - p.x;
        const dy = p.originY + noiseY - p.y;

        p.vx += dx * 0.06;
        p.vy += dy * 0.06;

        // Mouse Repulsion Physics
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < 95) {
          const force = (95 - mdist) / 95; // 0 to 1
          const angle = Math.atan2(mdy, mdx);
          p.vx += Math.cos(angle) * force * 14;
          p.vy += Math.sin(angle) * force * 14;
        }

        // Apply friction
        p.vx *= 0.83;
        p.vy *= 0.83;

        // Position update
        p.x += p.vx;
        p.y += p.vy;

        // Render Particle on Canvas
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;

        // Adding glow shadow to each particle for extreme premium look
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // If cluster tab, draw very faint holographic neural net connecting lines
      if (activeTabRef.current === "ai") {
        ctx.strokeStyle = "rgba(139, 92, 246, 0.06)";
        ctx.lineWidth = 0.8;
        for (let i = 0; i < particles.length; i += 25) {
          for (let j = i + 1; j < i + 6; j++) {
            if (particles[j]) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(update);
    };

    animationFrameId.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  // Mouse move relative coordinates tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
  };

  return (
    <section id="showcase" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold text-xs tracking-[0.25em] uppercase bg-brand-blue/10 px-4 py-1.5 rounded-full border border-brand-blue/20">
            Interaktives Erlebnis
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-8 mb-6 font-display">
            Hochleistungs-Code <span className="text-brand-blue italic font-normal">greifbar</span> gemacht.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Erleben Sie die Verschmelzung von präzisem Algorithmus-Design und hochentwickelter KI. Steuern Sie den ständigen Partikelfluss live über die Tabs.
          </p>
        </div>

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Particle Engine Canvas (Span 7) */}
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 flex flex-col justify-between p-1 bg-navy-card/30 rounded-[24px] sm:rounded-[40px] border border-white/5 relative overflow-hidden h-[320px] sm:h-[480px] shadow-2xl group hover:border-brand-blue/20 transition-all duration-500"
          >
            {/* Corner Tech Ticks */}
            <span className="absolute top-5 left-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-brand-blue/50 transition-colors">+</span>
            <span className="absolute top-5 right-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-brand-blue/50 transition-colors">+</span>
            <span className="absolute bottom-5 left-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-brand-blue/50 transition-colors">+</span>
            <span className="absolute bottom-5 right-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-brand-blue/50 transition-colors">+</span>

            <div className="absolute top-6 left-8 z-20 pointer-events-none">
              <span className="text-[10px] font-mono text-brand-blue/70 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> HTML5-PARTICLE-ENGINE
              </span>
            </div>

            {/* Particle Canvas Element */}
            <canvas 
              ref={canvasRef} 
              className="absolute inset-0 w-full h-full cursor-crosshair z-10"
            />
          </div>

          {/* Right Column: Interactive Description (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center p-6 sm:p-10 bg-navy-card/45 rounded-[24px] sm:rounded-[40px] border border-white/5 relative overflow-hidden shadow-2xl hover:border-brand-blue/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/5 blur-[70px] pointer-events-none rounded-full" />
            
            <div className="py-4">
              {/* Tab Selector */}
              <div className="flex gap-2 p-1.5 bg-black/35 rounded-full border border-white/5 mb-10 relative z-20">
                <button
                  onClick={() => setActiveTab("web")}
                  className={`flex-1 py-3 px-5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === "web"
                      ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Premium Webdesign
                </button>
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`flex-1 py-3 px-5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === "ai"
                      ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  KI-Automatisierung
                </button>
              </div>

              {/* Dynamic Explanatory Copy */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 relative z-20 text-left"
                >
                  {activeTab === "web" ? (
                    <>
                      <h3 className="text-3xl font-bold text-white font-display">
                        Echtes digitales Handwerk
                      </h3>
                      <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-medium">
                        Wir nutzen keine trägen Standard-Baukästen, sondern programmieren Ihre Website von Grund auf selbst (symbolisiert durch die geschweiften Klammern). Das Ergebnis: Ein blitzschneller Auftritt ohne unnötigen Ballast, der Ihre Besucher fesselt und bei Google ganz oben steht.
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-3xl font-bold text-white font-display">
                        Ihr digitaler Mitarbeiter
                      </h3>
                      <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-medium">
                        Ihre neue Website arbeitet rund um die Uhr für Sie (symbolisiert durch das vernetzte Partikel-System). Sie zieht Kunden magisch an, filtert unqualifizierte Kontakte im Hintergrund aus und legt fertige Termine direkt in Ihren Kalender. Vertrieb auf Autopilot.
                      </p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* NEW FULL-WIDTH INTERACTIVE PROBLEM NAVIGATOR COCKPIT (Span 12) */}
          <div className="lg:col-span-12 mt-10 relative">
            <div className="card-antigravity p-5 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden border border-white/5 bg-navy-card/30 rounded-[24px] sm:rounded-[40px] text-left">
              {/* Corner engineering marks */}
              <span className="absolute top-5 left-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none">+</span>
              <span className="absolute top-5 right-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none">+</span>
              <span className="absolute bottom-5 left-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none">+</span>
              <span className="absolute bottom-5 right-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none">+</span>

              <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/5 blur-[120px] pointer-events-none rounded-full" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 blur-[120px] pointer-events-none rounded-full" />

              {/* Section Header */}
              <div className="text-center mb-10 sm:mb-14">
                <span className="text-red-400 font-bold text-xs tracking-[0.25em] uppercase bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/20">
                  INTERAKTIVER ENGPASS-ANALYSATOR
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mt-6 mb-4 font-display">
                  Welche Engpässe blockieren Ihr Wachstum?
                </h3>
                <p className="text-gray-400 text-base max-w-2xl mx-auto font-medium leading-relaxed">
                  Führen Sie den Cursor über die schwebenden Nodes, um die kritischen Herausforderungen moderner Websites und das Nexara-Gegenmittel zu decodieren.
                </p>
              </div>

              {/* Wavy Problem Nodes Bar */}
              <div className="grid grid-cols-3 sm:flex items-center sm:justify-around gap-4 gap-y-6 px-4 py-6 sm:px-6 bg-black/45 border border-white/5 rounded-3xl relative z-20 h-auto sm:h-28 w-full mb-10 overflow-visible">
                {problemsData.map((item, idx) => {
                  const IconComponent = item.icon;
                  
                  // Calculate dynamic wave vertical translation y based on mathematical sine function
                  const isHovered = activeProblemHover === idx;
                  const isSelected = selectedProblemIdx === idx;
                  
                  const waveY = (isHovered || isSelected) ? 0 : Math.sin(time + idx * 0.5) * 12;

                  return (
                    <button
                      key={idx}
                      onMouseEnter={() => {
                        setActiveProblemHover(idx);
                        setSelectedProblemIdx(idx);
                      }}
                      onMouseLeave={() => setActiveProblemHover(null)}
                      style={{ transform: `translateY(${waveY}px)` }}
                      className="flex flex-col items-center gap-3 group/icon cursor-pointer transition-all duration-500 outline-none relative"
                    >
                      {/* Circle Node */}
                      <div 
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 relative border ${
                          isSelected 
                            ? "bg-red-500/20 text-red-400" 
                            : "bg-white/5 text-gray-400 border-white/10 group-hover/icon:bg-red-500/10 group-hover/icon:text-red-400"
                        }`}
                        style={{
                          borderColor: isSelected ? item.activeBorderColor : undefined,
                          boxShadow: isSelected ? `0 0 25px ${item.glowColor}` : undefined
                        }}
                      >
                        <IconComponent className="w-6 h-6 transition-transform duration-500 group-hover/icon:scale-110" />
                        
                        {/* Radar pulse animation for selected/hovered */}
                        {(isSelected || isHovered) && (
                          <span className="absolute inset-0 rounded-full border border-red-500/30 animate-ping opacity-75 pointer-events-none" />
                        )}
                      </div>

                      {/* Bubble Short Label */}
                      <span className={`text-[11px] font-mono tracking-wider transition-colors duration-300 uppercase ${
                        isSelected ? "text-red-400 font-bold" : "text-gray-500 group-hover/icon:text-gray-300"
                      }`}>
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Cockpit HUD Status Board */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProblemIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black/30 border border-white/5 rounded-3xl p-8 sm:p-10 relative z-20"
                >
                  {/* Left Panel: Die Diagnose */}
                  <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 pb-8 md:pb-0 md:pr-8">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className={`text-[10px] font-mono px-3 py-1 rounded border tracking-widest font-extrabold uppercase ${problemsData[selectedProblemIdx].badgeColor}`}>
                          {problemsData[selectedProblemIdx].statusBadge}
                        </span>
                      </div>
                      <h4 className="text-2xl font-bold text-white font-display mb-4">
                        {problemsData[selectedProblemIdx].title}
                      </h4>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
                        {problemsData[selectedProblemIdx].diagnose}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-8 text-[11px] font-mono text-red-500/70 uppercase">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      SYSTEM DIAGNOSE: KRITISCH
                    </div>
                  </div>

                  {/* Right Panel: Das Gegenmittel */}
                  <div className="flex flex-col justify-between md:pl-4">
                    <div>
                      <div className="flex items-center gap-2 mb-6 text-[10px] font-mono text-brand-blue-light tracking-widest font-bold">
                        <Sparkles className="w-3.5 h-3.5" /> NEXARA ENGPASS-ELIMINATOR
                      </div>
                      <h4 className="text-2xl font-bold text-white font-display mb-4">
                        Die Nexara-Lösung
                      </h4>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
                        {problemsData[selectedProblemIdx].loesung}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                      <button
                        onClick={() => {
                          const el = document.getElementById("kontakt");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="btn-primary w-full sm:w-auto px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-white/5"
                      >
                        Engpass beheben
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
