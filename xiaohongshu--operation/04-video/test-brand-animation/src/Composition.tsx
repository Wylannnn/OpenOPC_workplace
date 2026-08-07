import { Composition, useCurrentFrame, interpolate, useVideoConfig, AbsoluteFill } from "remotion";

const BrandLogoIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Background gradient animation
  const bgHue = interpolate(frame, [0, 60], [0, 20], { extrapolateRight: "clamp" });

  // Logo scale: bounce in
  const logoScale = interpolate(frame, [0, 15, 22], [0, 1.15, 1], {
    extrapolateRight: "clamp",
  });

  // Logo rotation
  const logoRotation = interpolate(frame, [0, 60], [0, 360], {
    extrapolateRight: "clamp",
  });

  // Text fade in after logo settles
  const textOpacity = interpolate(frame, [25, 45], [0, 1], {
    extrapolateRight: "clamp",
  });
  const textY = interpolate(frame, [25, 45], [20, 0], {
    extrapolateRight: "clamp",
  });

  // Subtitle fade in
  const subOpacity = interpolate(frame, [50, 70], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Neon glow pulse
  const glowIntensity = interpolate(
    frame,
    [22, 35, 48, 60],
    [8, 24, 12, 16],
    { extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        background: "#0A0A0F",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Geometric accent line - left */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: 0,
          width: interpolate(frame, [0, 30], [0, 200], { extrapolateRight: "clamp" }),
          height: 2,
          background: "#00D4FF",
          opacity: 0.4,
        }}
      />

      {/* Geometric accent line - right */}
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          right: 0,
          width: interpolate(frame, [10, 40], [0, 200], { extrapolateRight: "clamp" }),
          height: 2,
          background: "#7B2FFF",
          opacity: 0.4,
        }}
      />

      {/* Logo circle */}
      <div
        style={{
          width: 160,
          height: 160,
          borderRadius: 40,
          background: "linear-gradient(135deg, #00D4FF, #7B2FFF)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${logoScale}) rotate(${logoRotation}deg)`,
          boxShadow: `0 0 ${glowIntensity * 2}px rgba(0, 212, 255, ${glowIntensity / 30})`,
          marginBottom: 40,
        }}
      >
        <span
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: "#F0F0FF",
            fontFamily: "sans-serif",
          }}
        >
          AI
        </span>
      </div>

      {/* Main text */}
      <div
        style={{
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            color: "#F0F0FF",
            fontFamily: "sans-serif",
            letterSpacing: 4,
            lineHeight: 1.2,
          }}
        >
          AI 商业观察
        </div>
      </div>

      {/* Subtitle */}
      <div
        style={{
          opacity: subOpacity,
          marginTop: 16,
          fontSize: 24,
          fontWeight: 300,
          color: "#8A8FA8",
          fontFamily: "sans-serif",
          letterSpacing: 8,
        }}
      >
        AI BUSINESS OBSERVER
      </div>

      {/* Bottom accent dot */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#00D4FF",
          opacity: interpolate(frame, [40, 60], [0, 0.6], { extrapolateRight: "clamp" }),
        }}
      />
    </AbsoluteFill>
  );
};

export const MyComposition: React.FC = () => {
  return (
    <Composition
      id="BrandLogoIntro"
      component={BrandLogoIntro}
      durationInFrames={90}  // 3 seconds at 30fps
      fps={30}
      width={1080}
      height={1920}          // 9:16 for 抖音/小红书
    />
  );
};
