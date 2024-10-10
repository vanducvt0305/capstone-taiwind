module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "5px",
      },
      colors: {
        main: "#1CBBB4",
        orange: "#F7941E",
        cam: "#FEF0E4",
        hong: "#ED145B",
        do: "#ED145B",
        camnhat: "#FEF0E4",
      },
      backgroundColor: {},
      fontFamily: {
        sans: ["Nunito", "sans-serif"], // Font mặc định là Nunito
        bubblegum: ["Bubblegum Sans", "cursive"],
        jost: ["Jost", "sans-serif"],
      },
      maxWidth: {
        custom: "520px",
        custom240: "240px",
        w630: "630px !important",
      },
      borderRadius: {
        "custom-5xl": "50px", // Thêm giá trị bo góc tùy chỉnh
      },
      keyframes: {
        turtle: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(30px)" },
        },
        toRight: {
          "0%,100%": { transform: "translateX(0)" },
          "50%": {
            transform: "translateX(14px)",
          },
        },
      },
      animation: {
        turtle: "turtle 3s ease-in-out infinite", // Đặt tên và thời gian chạy animation
        toRight: "toRight 3s ease-in-out infinite",
      },
      boxShadow: {
        custom: "0px 0px 15px 5px rgba(0, 0, 0, 0.1)", // Tùy chỉnh shadow theo ý muốn
      },
    },
  },
  plugins: [],
};
