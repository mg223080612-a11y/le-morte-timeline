import React, { useState } from "react";

const characters = {
  "Bede the Venerable": {
    name: "Bede the Venerable",
    subtitle: "Scholar, monk, and historian",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Nuremberg_chronicles_f_98v_1_%28Beda%29.jpg/640px-Nuremberg_chronicles_f_98v_1_%28Beda%29.jpg",
    description:
      "Bede was one of the foundational scholars of early English Christianity. He helped shape historical writing, religious learning, and the intellectual world of Anglo-Saxon England.",
  },
  "Alfred the Great": {
    name: "Alfred the Great",
    subtitle: "King of Wessex",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Alfred_the_Great_silver_offer_coin_880.jpg/640px-Alfred_the_Great_silver_offer_coin_880.jpg",
    description:
      "Alfred the Great defended his kingdom against Viking threats and promoted education, literacy, and Christian order. He became one of the most admired rulers in early English history.",
  },
  "William the Conqueror": {
    name: "William the Conqueror",
    subtitle: "Norman king of England",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Statue_of_William_the_Conqueror%2C_Falaise.jpg/640px-Statue_of_William_the_Conqueror%2C_Falaise.jpg",
    description:
      "William the Conqueror transformed England after the Norman Conquest of 1066. His victory reshaped politics, law, language, and aristocratic culture.",
  },
  "King John": {
    name: "King John",
    subtitle: "King of England",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/John_of_England.jpg/640px-John_of_England.jpg",
    description:
      "King John is closely associated with the signing of Magna Carta in 1215. His reign became a turning point in debates over royal authority and legal restraint.",
  },
  "Sir Gawain": {
    name: "Sir Gawain",
    subtitle: "Knight of Arthurian romance",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Gawain_and_the_Green_Knight.jpg/640px-Gawain_and_the_Green_Knight.jpg",
    description:
      "Sir Gawain is one of the great knights of Arthurian tradition. In Sir Gawain and the Green Knight, he represents honor, testing, temptation, and moral struggle.",
  },
  Chaucer: {
    name: "Geoffrey Chaucer",
    subtitle: "Major poet of Middle English literature",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Geoffrey_Chaucer.jpg/640px-Geoffrey_Chaucer.jpg",
    description:
      "Geoffrey Chaucer is one of the central voices of Middle English literature. The Canterbury Tales presents a vivid range of characters, voices, and social settings.",
  },
  "William Caxton": {
    name: "William Caxton",
    subtitle: "England's first printer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/William_Caxton.jpg/640px-William_Caxton.jpg",
    description:
      "William Caxton established the first printing press in England and played a decisive role in circulating English literature in print.",
  },
  "Thomas Malory": {
    name: "Sir Thomas Malory",
    subtitle: "Author of Le Morte d'Arthur",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caxton_Morte_dArthur.jpg/640px-Caxton_Morte_dArthur.jpg",
    description:
      "Thomas Malory gathered and reshaped Arthurian legend into one influential English prose narrative, helping define the later image of King Arthur and Camelot.",
  },
  Arthur: {
    name: "King Arthur",
    subtitle: "Legendary ruler of Camelot",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/King_Arthur.jpg/640px-King_Arthur.jpg",
    description:
      "Arthur is the legendary king at the center of the Round Table tradition. He symbolizes royal authority, unity, and the tragic fall of an ideal kingdom.",
  },
};

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
    people: [],
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
    people: [],
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
    people: ["Bede the Venerable"],
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
    people: [],
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
    people: ["Alfred the Great"],
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
    people: ["William the Conqueror"],
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
    people: ["King John"],
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
    people: ["Sir Gawain"],
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
    people: ["Chaucer"],
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
    people: ["William Caxton", "Thomas Malory", "Arthur"],
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
  position: "relative",
  border: "8px double #8c6a36",
  borderRadius: "28px",
  background: "rgba(255, 250, 240, 0.88)",
  boxShadow: "0 24px 70px rgba(75, 52, 22, 0.16), inset 0 0 0 2px rgba(255,255,255,0.55)",
  overflow: "hidden",
};

const watermarkStyle = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  backgroundImage:
    "radial-gradient(circle at 15% 18%, rgba(158,122,62,0.08) 0, rgba(158,122,62,0.08) 2px, transparent 2px), radial-gradient(circle at 85% 82%, rgba(158,122,62,0.06) 0, rgba(158,122,62,0.06) 2px, transparent 2px), linear-gradient(45deg, transparent 48%, rgba(170,135,74,0.035) 49%, rgba(170,135,74,0.035) 51%, transparent 52%), linear-gradient(-45deg, transparent 48%, rgba(170,135,74,0.03) 49%, rgba(170,135,74,0.03) 51%, transparent 52%)",
  backgroundSize: "140px 140px, 180px 180px, 120px 120px, 120px 120px",
  mixBlendMode: "multiply",
};

const cornerBase = {
  position: "absolute",
  width: "82px",
  height: "82px",
  pointerEvents: "none",
  opacity: 0.7,
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

function InlinePeople({ people, onOpen }) {
  return people.map((person, index) => (
    <React.Fragment key={person}>
      <button
        onClick={() => onOpen(person)}
        style={{
          border: "none",
          background: "none",
          padding: 0,
          margin: 0,
          color: "#7c5320",
          fontFamily: "inherit",
          fontSize: "inherit",
          textDecoration: "underline",
          textDecorationStyle: "dotted",
          cursor: "pointer",
          fontWeight: 700,
        }}
      >
        {person}
      </button>
      {index < people.length - 1 ? ", " : ""}
    </React.Fragment>
  ));
}

function CharacterModal({ person, onClose, isMobile }) {
  if (!person) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(32, 20, 7, 0.58)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        zIndex: 100,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(920px, 100%)",
          borderRadius: "28px",
          overflow: "hidden",
          border: "4px double #8c6a36",
          background: "linear-gradient(180deg, #fffaf0 0%, #f4e8cf 100%)",
          boxShadow: "0 24px 70px rgba(0,0,0,0.26)",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "340px 1fr",
        }}
      >
        <div style={{ background: "#e8dcc2", minHeight: isMobile ? "240px" : "100%" }}>
          <img
            src={person.image}
            alt={person.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        <div style={{ padding: isMobile ? "22px" : "30px 30px 26px" }}>
          <div style={{ fontSize: isMobile ? "30px" : "38px", color: "#3b2810", fontWeight: 700, lineHeight: 1.15 }}>
            {person.name}
          </div>
          <div style={{ marginTop: "8px", color: "#8b6734", fontStyle: "italic", fontSize: isMobile ? "17px" : "19px" }}>
            {person.subtitle}
          </div>
          <div
            style={{
              height: "1px",
              width: "100%",
              background: "linear-gradient(90deg, transparent, rgba(140,106,54,0.38), transparent)",
              margin: "18px 0 22px",
            }}
          />
          <p style={{ margin: 0, color: "#5a472a", fontSize: isMobile ? "16px" : "18px", lineHeight: 1.9 }}>
            {person.description}
          </p>
          <button
            onClick={onClose}
            style={{
              marginTop: "24px",
              padding: "10px 16px",
              borderRadius: "999px",
              border: "1px solid #b8965c",
              background: "#fff6e2",
              color: "#7b5a28",
              fontFamily: "inherit",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedItem, setSelectedItem] = useState(timelineData[timelineData.length - 1]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const isMobile = useResponsive();

  return (
    <div style={pageStyle}>
      <div style={wrapStyle}>
        <div style={frameStyle}>
          <div style={watermarkStyle} />
          <div
            style={{
              ...cornerBase,
              top: 12,
              left: 12,
              borderTop: "5px solid #8c6a36",
              borderLeft: "5px solid #8c6a36",
              borderTopLeftRadius: "14px",
            }}
          />
          <div
            style={{
              ...cornerBase,
              top: 12,
              right: 12,
              borderTop: "5px solid #8c6a36",
              borderRight: "5px solid #8c6a36",
              borderTopRightRadius: "14px",
            }}
          />
          <div
            style={{
              ...cornerBase,
              bottom: 48,
              left: 12,
              borderBottom: "5px solid #8c6a36",
              borderLeft: "5px solid #8c6a36",
              borderBottomLeftRadius: "14px",
            }}
          />
          <div
            style={{
              ...cornerBase,
              bottom: 48,
              right: 12,
              borderBottom: "5px solid #8c6a36",
              borderRight: "5px solid #8c6a36",
              borderBottomRightRadius: "14px",
            }}
          />

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

                  {selectedItem.people && selectedItem.people.length > 0 && (
                    <div
                      style={{
                        marginTop: "20px",
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
                        People
                      </div>
                      <div
                        style={{
                          fontSize: isMobile ? "15px" : "17px",
                          lineHeight: 1.9,
                          color: "#5a472a",
                        }}
                      >
                        <InlinePeople people={selectedItem.people} onOpen={setSelectedPerson} />
                      </div>
                    </div>
                  )}

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
                      This design uses a parchment palette, gilded timeline markers, ornamental corners, and manuscript-like spacing so the timeline feels closer to a medieval exhibit than a modern dashboard.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <CharacterModal
            person={selectedPerson ? characters[selectedPerson] : null}
            onClose={() => setSelectedPerson(null)}
            isMobile={isMobile}
          />

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
