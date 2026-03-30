import React, { useState } from "react";

const timelineData = [
  {
    year: "449",
    title: "Anglo-Saxons begin invading Britain",
    category: "History",
    description:
      "The Anglo-Saxons begin invading and settling in Britain. This becomes a major foundation for later English language and culture.",
    characteristics: [
      "Early Anglo-Saxon migration",
      "Beginning of major cultural change in Britain",
      "Foundation for Old English society",
    ],
  },
  {
    year: "449",
    title: "Anglo-Saxons begin invading Britain",
    category: "History",
    description:
      "The Anglo-Saxons begin invading and settling in Britain. This becomes a major foundation for later English language and culture.",
  },
  {
    year: "597",
    title: "Christian missionaries arrive in Kent",
    category: "History",
    description:
      "Christian missionaries arrive in Kent, and Christianity begins to spread more widely in Anglo-Saxon England.",
    characteristics: [
      "Expansion of Christianity",
      "Religious transformation of England",
      "Growth of literacy and monastic culture",
    ],
  },
  {
    year: "673",
    title: "Bede the Venerable is born",
    category: "Literature",
    description:
      "Bede becomes one of the most important scholars and historians of early English Christianity and learning.",
    characteristics: [
      "Monastic scholarship",
      "Early English historiography",
      "Religious and intellectual authority",
    ],
  },
  {
    year: "750",
    title: "The surviving version of Beowulf is composed",
    category: "Literature",
    description:
      "Beowulf stands as one of the most important works of Old English literature and heroic tradition.",
    characteristics: [
      "Heroic epic tradition",
      "Old English poetic culture",
      "Warrior ethos and fame",
    ],
  },
  {
    year: "871",
    title: "Alfred the Great becomes king of Wessex",
    category: "History",
    description:
      "Alfred becomes a major defender of Anglo-Saxon England and a promoter of learning and Christian order.",
    characteristics: [
      "Royal leadership",
      "Defense against Viking threat",
      "Promotion of education and faith",
    ],
  },
  {
    year: "1066",
    title: "Norman Conquest",
    category: "History",
    description:
      "William the Conqueror defeats King Harold. This event transforms English politics, culture, and language.",
    characteristics: [
      "Political reordering of England",
      "Norman cultural influence",
      "Long-term linguistic change",
    ],
  },
  {
    year: "1215",
    title: "King John signs the Magna Carta",
    category: "History",
    description:
      "The Magna Carta becomes a lasting symbol of the rule of law and limits on royal power.",
    characteristics: [
      "Limit on monarchy",
      "Legal tradition",
      "Symbol of constitutional development",
    ],
  },
  {
    year: "1375",
    title: "Sir Gawain and the Green Knight is composed",
    category: "Literature",
    description:
      "A major Middle English Arthurian poem exploring chivalry, testing, temptation, and honor.",
    characteristics: [
      "Arthurian romance",
      "Moral testing",
      "Courtly and symbolic narrative",
    ],
  },
  {
    year: "1387",
    title: "Chaucer begins The Canterbury Tales",
    category: "Literature",
    description:
      "Chaucer's work becomes one of the greatest achievements of Middle English literature.",
    characteristics: [
      "Frame narrative structure",
      "Social diversity of characters",
      "Middle English literary mastery",
    ],
  },
  {
    year: "1485",
    title: "Caxton prints Le Morte d'Arthur",
    category: "Literature",
    description:
      "William Caxton prints Thomas Malory's Le Morte d'Arthur, helping establish the Arthurian tradition in English print culture.",
    characteristics: [
      "Arthurian legend in print",
      "Transition from manuscript to print culture",
      "Rise, glory, and fall of Camelot",
    ],
  },
];

const pageStyle = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top, #fff7e7 0%, #f1e5cf 42%, #e7d6b7 100%)",
  color: "#2e2417",
  fontFamily: "Georgia, 'Times New Roman', serif",
};

const wrapStyle = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "40px 20px 56px",
};

const frameStyle = {
  border: "8px double #8c6a36",
  borderRadius: "28px",
  background: "rgba(255, 250, 240, 0.88)",
  boxShadow: "0 24px 70px rgba(75, 52, 22, 0.16), inset 0 0 0 2px rgba(255,255,255,0.55)",
  overflow: "hidden",
};

const heroStyle = {
  position: "relative",
  padding: "44px 32px 28px",
  background:
    "linear-gradient(180deg, rgba(120,78,28,0.12) 0%, rgba(255,248,232,0.6) 100%)",
  borderBottom: "1px solid rgba(140,106,54,0.28)",
  textAlign: "center",
};

const ornamentRow = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  justifyContent: "center",
  marginBottom: "12px",
  color: "#8c6a36",
};

const ornamentLine = {
  width: "90px",
  height: "1px",
  background: "linear-gradient(90deg, transparent, #9c7b48, transparent)",
};

const badgeStyle = {
  display: "inline-block",
  marginTop: "14px",
  padding: "6px 14px",
  borderRadius: "999px",
  border: "1px solid #c9ae7b",
  background: "rgba(255, 246, 225, 0.95)",
  color: "#7a5c2c",
  fontSize: "13px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const layoutStyle = {
  display: "grid",
  gridTemplateColumns: "320px 1fr",
  gap: "0",
};

const sidebarStyle = {
  position: "relative",
  padding: "34px 24px 34px 34px",
  background:
    "linear-gradient(180deg, rgba(243,231,208,0.95) 0%, rgba(250,244,232,0.95) 100%)",
  borderRight: "1px solid rgba(140,106,54,0.22)",
};

const sideTitleStyle = {
  margin: "0 0 18px 0",
  fontSize: "24px",
  color: "#4b3519",
};

const sideTextStyle = {
  margin: "0 0 28px 0",
  color: "#6a5638",
  lineHeight: 1.7,
  fontSize: "15px",
};

const timelineShellStyle = {
  position: "relative",
  paddingLeft: "74px",
};

const verticalLineStyle = {
  position: "absolute",
  left: "38px",
  top: "10px",
  bottom: "10px",
  width: "4px",
  borderRadius: "999px",
  background: "linear-gradient(180deg, #c6a566 0%, #8f6d37 50%, #c6a566 100%)",
  boxShadow: "0 0 0 4px rgba(198,165,102,0.12)",
};

const rightStyle = {
  padding: "32px",
  background: "linear-gradient(180deg, rgba(255,252,246,0.92) 0%, rgba(248,241,226,0.92) 100%)",
};

function getCategoryStyle(category) {
  if (category === "History") {
    return {
      background: "#e9f1f8",
      color: "#3b5f80",
      border: "1px solid #b7cedf",
    };
  }
  return {
    background: "#f7ebdc",
    color: "#815a2d",
    border: "1px solid #d7bc95",
  };
}

function useResponsive() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 900;
}

export default function App() {
  const [selectedItem, setSelectedItem] = useState(timelineData[timelineData.length - 1]);
  const isMobile = useResponsive();

  return (
    <div style={pageStyle}>
      <div style={wrapStyle}>
        <div style={frameStyle}>
          <section style={heroStyle}>
            <div style={ornamentRow}>
              <div style={ornamentLine} />
              <div style={{ fontSize: "20px" }}>✦</div>
              <div style={ornamentLine} />
            </div>
            <h1
              style={{
                margin: 0,
                fontSize: isMobile ? "36px" : "56px",
                lineHeight: 1.08,
                color: "#3f2d14",
                letterSpacing: "0.02em",
              }}
            >
              A Medieval Timeline
            </h1>
            <div
              style={{
                marginTop: "12px",
                fontSize: isMobile ? "18px" : "22px",
                color: "#6f5733",
                fontStyle: "italic",
              }}
            >
              Click a year and uncover the story behind it
            </div>
            <div style={badgeStyle}>Literature · History · Arthurian World</div>
          </section>

          <div
            style={{
              ...layoutStyle,
              gridTemplateColumns: isMobile ? "1fr" : layoutStyle.gridTemplateColumns,
            }}
          >
            <aside
              style={{
                ...sidebarStyle,
                borderRight: isMobile ? "none" : sidebarStyle.borderRight,
                borderBottom: isMobile ? "1px solid rgba(140,106,54,0.22)" : "none",
              }}
            >
              <h2 style={sideTitleStyle}>Years of Memory</h2>
              <p style={sideTextStyle}>
                This vertical timeline is designed like an illuminated manuscript. Each year opens an event from the literary and historical world leading toward <i>Le Morte d'Arthur</i>.
              </p>

              <div style={timelineShellStyle}>
                <div style={verticalLineStyle} />
                {timelineData.map((item, index) => {
                  const active = selectedItem.year === item.year;
                  return (
                    <div
                      key={item.year}
                      style={{
                        position: "relative",
                        marginBottom: index === timelineData.length - 1 ? 0 : "20px",
                        minHeight: "72px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <button
                        onClick={() => setSelectedItem(item)}
                        style={{
                          width: active ? "74px" : "66px",
                          height: active ? "74px" : "66px",
                          borderRadius: "999px",
                          border: active ? "3px solid #8d692f" : "2px solid #c9aa72",
                          background: active
                            ? "radial-gradient(circle at 30% 30%, #b48a46 0%, #7b5925 75%)"
                            : "radial-gradient(circle at 30% 30%, #fffaf0 0%, #f0dfbe 100%)",
                          color: active ? "#fff8eb" : "#7b5b28",
                          fontSize: active ? "18px" : "16px",
                          fontWeight: 700,
                          cursor: "pointer",
                          boxShadow: active
                            ? "0 14px 28px rgba(98, 67, 28, 0.28)"
                            : "0 8px 18px rgba(98, 67, 28, 0.12)",
                          transition: "all 0.18s ease",
                          position: "relative",
                          zIndex: 2,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {item.year}
                      </button>
                      <div
                        style={{
                          marginLeft: "16px",
                          flex: 1,
                          color: active ? "#4a3419" : "#7b6645",
                          fontSize: "14px",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </aside>

            <section style={rightStyle}>
              <div
                style={{
                  border: "1px solid rgba(146,111,58,0.22)",
                  borderRadius: "26px",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(251,245,233,0.98) 100%)",
                  boxShadow: "0 16px 38px rgba(80, 57, 25, 0.10)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "26px 28px 18px",
                    borderBottom: "1px solid rgba(146,111,58,0.16)",
                    background:
                      "linear-gradient(180deg, rgba(161,124,69,0.08) 0%, rgba(255,250,240,0.4) 100%)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      gap: "16px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: isMobile ? "44px" : "72px",
                          lineHeight: 1,
                          fontWeight: 700,
                          color: "#3d2b12",
                          textShadow: "0 2px 0 rgba(255,255,255,0.75)",
                        }}
                      >
                        {selectedItem.year}
                      </div>
                      <div
                        style={{
                          marginTop: "6px",
                          display: "inline-block",
                          padding: "6px 12px",
                          borderRadius: "999px",
                          fontSize: "13px",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          ...getCategoryStyle(selectedItem.category),
                        }}
                      >
                        {selectedItem.category}
                      </div>
                    </div>
                    <div
                      style={{
                        width: isMobile ? "100%" : "160px",
                        minHeight: "110px",
                        borderRadius: "22px",
                        border: "1px solid rgba(146,111,58,0.18)",
                        background:
                          "radial-gradient(circle at top, rgba(189,150,86,0.28), rgba(255,247,231,0.8) 60%, rgba(234,220,193,0.7) 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#8b6b37",
                        fontSize: "42px",
                      }}
                    >
                      ❦
                    </div>
                  </div>
                </div>

                <div style={{ padding: isMobile ? "22px" : "30px" }}>
                  <h2
                    style={{
                      margin: "0 0 16px 0",
                      fontSize: isMobile ? "28px" : "38px",
                      lineHeight: 1.2,
                      color: "#2f2212",
                    }}
                  >
                    {selectedItem.title}
                  </h2>

                  <div
                    style={{
                      height: "1px",
                      width: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(140,106,54,0.38), transparent)",
                      margin: "18px 0 22px",
                    }}
                  />

                  <p
                    style={{
                      margin: 0,
                      fontSize: isMobile ? "17px" : "19px",
                      lineHeight: 1.95,
                      color: "#5a472a",
                    }}
                  >
                    {selectedItem.description}
                  </p>

                  <div
                    style={{
                      marginTop: "26px",
                      padding: isMobile ? "18px" : "20px 22px",
                      borderRadius: "20px",
                      border: "1px solid rgba(146,111,58,0.18)",
                      background: "rgba(252,246,234,0.88)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "13px",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#8c6a36",
                        marginBottom: "12px",
                        fontWeight: 700,
                      }}
                    >
                      Characteristics
                    </div>
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: "22px",
                        color: "#5a472a",
                        lineHeight: 1.9,
                        fontSize: isMobile ? "15px" : "17px",
                      }}
                    >
                      {selectedItem.characteristics.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{
                      marginTop: "28px",
                      padding: isMobile ? "18px" : "20px 22px",
                      borderRadius: "20px",
                      border: "1px solid rgba(146,111,58,0.18)",
                      background: "rgba(255,249,237,0.76)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "13px",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#8c6a36",
                        marginBottom: "10px",
                        fontWeight: 700,
                      }}
                    >
                      Curator's Note
                    </div>
                    <div
                      style={{
                        fontSize: isMobile ? "15px" : "16px",
                        lineHeight: 1.8,
                        color: "#6a5638",
                      }}
                    >
                      This design uses a parchment palette, gilded timeline markers, and manuscript-like spacing so the timeline feels closer to a medieval exhibit than a modern dashboard.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <footer
            style={{
              padding: "18px 24px 24px",
              textAlign: "center",
              borderTop: "1px solid rgba(140,106,54,0.18)",
              background: "rgba(255, 248, 234, 0.72)",
              color: "#7a6238",
              fontSize: "14px",
              letterSpacing: "0.04em",
            }}
          >
            Developed by Esther Jung
          </footer>
        </div>
      </div>
    </div>
  );
}
