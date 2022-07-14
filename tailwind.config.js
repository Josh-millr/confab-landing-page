module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      stormy: "323334",
      smoke: "#4E4F51",
      cloudy: "#F5F4F3",
      timber: "#BBA28B",
      oyster: "#E1D6CC",
      linen: "#F8F4E7",
      mango: "#F4BB44",
      sunny: "#FFD6AD",
      crayola: "#FB554C",
      coral: "#FDB3AF",
      misty: "#FDE9E3",
      opal: "#8DBAB5",
      seafoam: "#CCE0DE",
      sage: "#EEF1EC",
    },
    fontFamily: {
      heading: [
        "Koulen",
        "Arial",
        "-apple-system",
        "BlinkMacSystemFont",
        "San Francisco",
        "Roboto",
        "Helvetica Neue",
        "sans-serif",
      ],
      body: ["GeneralSans-Variable"],
      caption: ["GeneralSans-Variable"],
      btn: ["GeneralSans-Variable"],
      link: ["GeneralSans-Variable"],
    },
    fontSize: {
      // Headings

      h1: [
        "96px",
        {
          letterSpacing: "-2px",
          lineHeight: "90px",
        },
      ],
      h2: [
        "64px",
        {
          letterSpacing: "-2px",
          lineHeight: "60px",
        },
      ],
      h3: [
        "40px",
        {
          letterSpacing: "-2px",
          lineHeight: "42px",
        },
      ],
      h4: [
        "32px",
        {
          letterSpacing: "-2px",
          lineHeight: "32px",
        },
      ],
      h5: [
        "20px",
        {
          letterSpacing: "-2px",
          lineHeight: "18px",
        },
      ],

      // Body

      "body-lg": [
        "18px",
        {
          letterSpacing: "0px",
          lineHeight: "24px",
        },
      ],
      "body-md": [
        "16px",
        {
          letterSpacing: "0px",
          lineHeight: "24px",
        },
      ],
      "body-sm": [
        "14px",
        {
          letterSpacing: "0px",
          lineHeight: "24px",
        },
      ],

      // Caption

      caption: [
        "12px",
        {
          letterSpacing: "0px",
          lineHeight: "16px",
        },
      ],

      // Button

      btn: [
        "16px",
        {
          letterSpacing: "0px",
          lineHeight: "24px",
        },
      ],
      // Links
      "link-md": [
        "16px",
        {
          letterSpacing: "0px",
          lineHeight: "24px",
        },
      ],
    },
    spacing: {
      "pageMargin-sm": "24px",
      "pageMargin-md": "40px",
      "pageMargin-lg": "80px",
    },
    width: {
      "full": "100%",
      // Mobile / Tablet
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "6/6": "",
      // Desktop
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
    },
  },
  plugins: [],
};
