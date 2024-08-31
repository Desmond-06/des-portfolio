module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screen: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        // No need to define primary here as it's a gradient, not a solid color
      },
      backgroundImage: {
        primary: "linear-gradient(to bottom, #000000, #1a202c)", // Defines the gradient as primary
      },
      animation: {
        spincube: "spincube 12s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease-out",
        rotateIn: "rotateIn 1s ease-out",
        rubberBand: "rubberBand 1s",
        bounceIn: "bounceIn 1s",
        bounce: "bounce 1s infinite",
      },
      keyframes: {
        spincube: {
          "0%, 100%": {
            transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
          },
          "16%": {
            transform: "rotateY(-90deg) rotateZ(90deg)",
          },
          "33%": {
            transform: "rotateY(-90deg) rotateX(90deg)",
          },
          "50%": {
            transform: "rotateY(-180deg) rotateZ(90deg)",
          },
          "66%": {
            transform: "rotateY(-270deg) rotateX(90deg)",
          },
          "83%": {
            transform: "rotateX(90deg)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rotateIn: {
          "0%": { transform: "rotate(-200deg)", opacity: "0" },
          "100%": { transform: "rotate(0deg)", opacity: "1" },
        },
        rubberBand: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "30%": { transform: "scale3d(1.25, 0.75, 1)" },
          "40%": { transform: "scale3d(0.75, 1.25, 1)" },
          "50%": { transform: "scale3d(1.15, 0.85, 1)" },
          "65%": { transform: "scale3d(0.95, 1.05, 1)" },
          "75%": { transform: "scale3d(1.05, 0.95, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
        bounceIn: {
          "0%, 20%, 40%, 60%, 80%, 100%": {
            animationTimingFunction: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
          },
          "0%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "20%": {
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "40%": {
            transform: "scale3d(0.9, 0.9, 0.9)",
          },
          "60%": {
            opacity: "1",
            transform: "scale3d(1.03, 1.03, 1.03)",
          },
          "80%": {
            transform: "scale3d(0.97, 0.97, 0.97)",
          },
          "100%": {
            opacity: "1",
            transform: "scale3d(1, 1, 1)",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },
      fontFamily: {
        title: ["Qwitcher Grypen", "cursive"],
        vi: ["Matemasie"],
        second: ["Montserrat", "sans-serif"],
        robo: ["Chakra Petch"],
        test: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
