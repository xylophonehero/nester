module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: "ui-serif",
      body: "TTNorms, ui-sans-serif",
    },
    fontSize: {
      64: ["64px", "75.53px"],
      48: ["48px", "56.65px"],
      36: ["36px", "42.49px"],
      28: ["28px", "33.04px"],
      21: ["21px", "24.78px"],
      18: ["18px", "21.24px"],
      16: ["16px", "18.88px"],
      14: ["14px", "16.52px"],
      12: ["12px", "14.16px"],
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      borderRadius: {
        "2.5xl": "20px",
        "3.5xl": "26px",
      },
      colors: {
        purple: {
          DEFAULT: "#8000FF",
          1: "#6A01D1",
          2: "#9933FF",
        },
        blue: {
          DEFAULT: "#00D2FF",
          1: "#00B0D6",
          2: "#36DCFF",
        },
        gray: {
          0: "#ECE8F2",
          1: "#CFCDD3",
          2: "#83818B",
          3: "#78738C",
          4: "#504C5F",
        },
        navy: "#262139",
        white: {
          DEFAULT: "#FFFFFF",
          60: "#FFFFFF60",
        },
      },
      boxShadow: {
        1: "0px 1px 2px 0px #171B1E40, 0px 4px 4px 0px #00000040",
        2: "0px 2px 4px 0px #171B1E26",
        3: "0px 4px 12px 0px #BAC7D580",
        card: "0px 0px 30px #00000010",
        "card-hover": "0px 0px 30px 15px #00000033",
        "check-card": "0px 4px 30px 10px #00000026",
        button: "0px 4px 20px 0px #6A01D180",
        header: "0px 4px 4px 0px #00000040",
        "light-card": "0px 0px 4px 0px #00000040"
      },
      listStyleType: {
        egg: "url('http://localhost:1337/uploads/Ellipse_4_2e336f54f6.svg')",
      },
      spacing: {
        4.5: "18px",
        5.25: "21px",
        30: "120px",
      },
      width: {
        fit: "fit-content",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
