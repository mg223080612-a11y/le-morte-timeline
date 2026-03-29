import React, { useMemo, useState } from "react";

const styles = `
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4efe3; color: #1f2937; }
  .app { min-height: 100vh; background: linear-gradient(180deg, #fff8ea 0%, #f5ecdb 45%, #efe4cf 100%); }
  .container { max-width: 1280px; margin: 0 auto; padding: 24px; }
  .hero, .panel, .event-card, .detail-card, .modal-card { background: rgba(255,255,255,0.92); border: 1px solid #ead8b6; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
  .hero { padding: 28px; margin-bottom: 24px; }
  .hero-row { display: flex; gap: 20px; justify-content: space-between; align-items: end; flex-wrap: wrap; }
  .pill { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border-radius: 999px; background: #fff0c7; border: 1px solid #e7c982; color: #8a6116; font-size: 14px; margin-bottom: 14px; }
  h1 { margin: 0; font-size: 42px; line-height: 1.12; }
  .subtext { max-width: 820px; color: #475569; line-height: 1.7; margin-top: 14px; }
  .search { width: 320px; max-width: 100%; padding: 13px 14px; border-radius: 16px; border: 1px solid #dcc9a1; background: white; font-size: 15px; }
  .main-grid { display: grid; grid-template-columns: 280px 1fr; gap: 24px; }
  .panel { padding: 20px; }
  .panel h2, .detail-card h2 { margin: 0 0 16px 0; font-size: 22px; }
  .century-btn { width: 100%; text-align: left; padding: 14px 16px; border-radius: 18px; border: 1px solid #e8d8b8; background: white; cursor: pointer; font-size: 15px; margin-bottom: 10px; display: flex; justify-content: space-between; gap: 12px; }
  .century-btn.active { background: #1f2937; color: white; border-color: #1f2937; }
  .timeline-header { padding: 20px 24px; border-bottom: 1px solid #f0e3c7; background: #fff8ea; border-radius: 24px 24px 0 0; font-size: 22px; font-weight: 700; }
  .timeline-body { padding: 20px; max-height: 540px; overflow: auto; }
  .event-card { width: 100%; text-align: left; padding: 18px; margin-bottom: 14px; cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease; }
  .event-card:hover { transform: translateY(-1px); }
  .event-card.selected { outline: 2px solid #1f2937; background: #f8fafc; }
  .event-row { display: flex; gap: 18px; }
  .year-box { min-width: 92px; }
  .year { font-size: 28px; font-weight: 800; }
  .badge { display: inline-block; margin-top: 8px; padding: 5px 10px; border-radius: 999px; font-size: 12px; font-weight: 700; border: 1px solid transparent; }
  .badge-literature { background: #ffe4e6; color: #be123c; border-color: #fecdd3; }
  .badge-history { background: #e0f2fe; color: #0369a1; border-color: #bae6fd; }
  .badge-world { background: #dcfce7; color: #15803d; border-color: #bbf7d0; }
  .event-title { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
  .event-summary { color: #475569; line-height: 1.7; }
  .detail-card { padding: 22px; min-height: 260px; }
  .detail-top { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
  .detail-year { font-size: 34px; font-weight: 800; }
  .detail-title { font-size: 28px; margin: 10px 0 12px; }
  .detail-text { color: #334155; line-height: 1.9; }
  .helper { padding: 18px; border-radius: 18px; border: 1px dashed #cbd5e1; background: #f8fafc; color: #64748b; line-height: 1.7; }
  .char-links { margin-top: 14px; display: flex; flex-wrap: wrap; gap: 10px; }
  .char-chip { border: 1px solid #e7c982; background: #fff6d8; color: #7c5b12; border-radius: 999px; padding: 9px 14px; cursor: pointer; font-size: 14px; }
  .inline-link { color: #9a6b00; text-decoration: underline dotted; cursor: pointer; font-weight: 600; }
  .muted { font-size: 14px; color: #64748b; margin-top: 16px; line-height: 1.7; }
  .no-result { padding: 30px; text-align: center; border: 1px dashed #cbd5e1; border-radius: 18px; background: #f8fafc; color: #64748b; }
  .overlay { position: fixed; inset: 0; background: rgba(15,23,42,0.58); display: flex; align-items: center; justify-content: center; padding: 24px; z-index: 50; }
  .modal-card { width: min(920px, 100%); overflow: hidden; }
  .modal-grid { display: grid; grid-template-columns: 320px 1fr; }
  .modal-image-wrap { background: #e5e7eb; min-height: 300px; }
  .modal-image { width: 100%; height: 100%; object-fit: cover; display: block; }
  .modal-content { padding: 28px; }
  .modal-title { font-size: 28px; font-weight: 800; margin: 0; }
  .modal-subtitle { color: #9a6b00; margin-top: 6px; }
  .modal-text { margin-top: 18px; color: #334155; line-height: 1.9; }
  .close-btn { margin-top: 18px; border: 1px solid #cbd5e1; background: white; border-radius: 12px; padding: 10px 14px; cursor: pointer; }
  @media (max-width: 960px) {
    .main-grid { grid-template-columns: 1fr; }
    h1 { font-size: 34px; }
  }
  @media (max-width: 720px) {
    .container { padding: 16px; }
    .hero, .panel, .detail-card { border-radius: 20px; }
    .timeline-header { border-radius: 20px 20px 0 0; }
    .event-row { flex-direction: column; gap: 12px; }
    .modal-grid { grid-template-columns: 1fr; }
    .modal-image-wrap { min-height: 220px; }
    .modal-content { padding: 20px; }
    .detail-title { font-size: 24px; }
  }
`;

const characters = {
  Arthur: {
    name: "King Arthur",
    subtitle: "The legendary king of Britain",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/King_Arthur.jpg/640px-King_Arthur.jpg",
    description:
      "Arthur represents ideal kingship, unity, justice, and the dream of a noble kingdom. In Le Morte d'Arthur, he is not only a heroic ruler but also a tragic king whose realm collapses because of betrayal, sin, and internal division.",
  },
  Guinevere: {
    name: "Queen Guinevere",
    subtitle: "Arthur's queen",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Queen_Guenevere.jpg/640px-Queen_Guenevere.jpg",
    description:
      "Guinevere stands at the center of love, loyalty, and political tension. Her relationship with Lancelot becomes one of the major causes of the breakdown of the Round Table and the fall of Arthur's kingdom.",
  },
  Lancelot: {
    name: "Sir Lancelot",
    subtitle: "The greatest knight of the Round Table",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/N._C._Wyeth_-_Sir_Launcelot.jpg/640px-N._C._Wyeth_-_Sir_Launcelot.jpg",
    description:
      "Lancelot is the finest knight in worldly terms: brave, loyal, and unmatched in battle. Yet his forbidden love for Guinevere reveals the conflict between personal desire and public duty, making him a deeply tragic figure.",
  },
  Mordred: {
    name: "Mordred",
    subtitle: "The rebel who brings the kingdom to ruin",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Arthur-Mordred.jpg/640px-Arthur-Mordred.jpg",
    description:
      "Mordred is the final agent of destruction in Arthur's kingdom. He embodies treachery and the violent eruption of divisions that have long been growing inside Camelot.",
  },
  "Thomas Malory": {
    name: "Sir Thomas Malory",
    subtitle: "Author of Le Morte d'Arthur",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caxton_Morte_dArthur.jpg/640px-Caxton_Morte_dArthur.jpg",
    description:
      "Thomas Malory is remembered as the writer who gathered and reshaped the Arthurian legends into one powerful English prose narrative. His work became the most influential version of the Arthur story in English literature.",
  },
  "William Caxton": {
    name: "William Caxton",
    subtitle: "England's first printer",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/William_Caxton.jpg/640px-William_Caxton.jpg",
    description:
      "William Caxton established the first printing press in England and played a decisive role in spreading English literature. In 1485 he printed Le Morte d'Arthur, helping the text reach a much wider audience.",
  },
  Bede: {
    name: "Bede the Venerable",
    subtitle: "Scholar, monk, and historian",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Nuremberg_chronicles_f_98v_1_%28Beda%29.jpg/640px-Nuremberg_chronicles_f_98v_1_%28Beda%29.jpg",
    description:
      "Bede was one of the foundational scholars of early English Christianity and learning. He represents the intellectual world out of which early English literary and historical traditions developed.",
  },
  Chaucer: {
    name: "Geoffrey Chaucer",
    subtitle: "Major poet of Middle English literature",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Geoffrey_Chaucer.jpg/640px-Geoffrey_Chaucer.jpg",
    description:
      "Chaucer is the author of The Canterbury Tales and one of the most important writers in English literary history. His work shows the richness of Middle English narrative before the age of print.",
  },
  "Alfred the Great": {
    name: "Alfred the Great",
    subtitle: "King of Wessex",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Alfred_the_Great_silver_offer_coin_880.jpg/640px-Alfred_the_Great_silver_offer_coin_880.jpg",
    description:
      "Alfred the Great defended his kingdom against Viking attack and encouraged learning and Christian order. He is a major historical figure in the formation of early English culture.",
  },
  "William the Conqueror": {
    name: "William the Conqueror",
    subtitle: "Norman king of England",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Statue_of_William_the_Conqueror%2C_Falaise.jpg/640px-Statue_of_William_the_Conqueror%2C_Falaise.jpg",
    description:
      "William the Conqueror transformed England after the Norman Conquest of 1066. His rule reshaped politics, language, and culture, laying foundations for later medieval English literature.",
  },
  Charlemagne: {
    name: "Charlemagne",
    subtitle: "Emperor of the Holy Roman Empire",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Karl_der_Gro%C3%9Fe.jpg/640px-Karl_der_Gro%C3%9Fe.jpg",
    description:
      "Charlemagne symbolized political and religious consolidation in medieval Europe. His age strengthened the institutional structure of the Christian West.",
  },
  "Genghis Khan": {
    name: "Genghis Khan",
    subtitle: "Founder of the Mongol Empire",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/YuanEmperorAlbumGenghisPortrait.jpg/640px-YuanEmperorAlbumGenghisPortrait.jpg",
    description:
      "Genghis Khan reshaped Eurasian history through conquest and imperial expansion. His era influenced global exchange, conflict, and the wider world beyond Europe.",
  },
  "Joan of Arc": {
    name: "Joan of Arc",
    subtitle: "French heroine of the Hundred Years' War",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joan_of_arc_miniature_graded.jpg/640px-Joan_of_arc_miniature_graded.jpg",
    description:
      "Joan of Arc became a powerful symbol of faith, war, and national identity in late medieval Europe. Her execution reflects the deep political and religious conflicts of the age.",
  },
};

const events = [
  { year: 449, period: "400s", category: "History", title: "Anglo-Saxons begin invading Britain", summary: "The migration and settlement of the Anglo-Saxons begin shaping the language and culture that will later become English.", characters: [] },
  { year: 500, period: "400s", category: "World", title: "A mathematician in India calculates the value of pi", summary: "An example of major intellectual development outside Europe during the early medieval world.", characters: [] },
  { year: 527, period: "400s", category: "World", title: "Justinian becomes Byzantine emperor", summary: "A major turning point in the political and legal order of the Eastern Roman Empire.", characters: [] },
  { year: 597, period: "400s", category: "History", title: "Christian missionaries arrive in Kent", summary: "Christianity begins to spread more deeply through Anglo-Saxon England.", characters: [] },
  { year: 673, period: "600s", category: "Literature", title: "Bede the Venerable is born", summary: "Bede becomes one of the foundational scholars of early English Christianity and historical writing.", characters: ["Bede"] },
  { year: 750, period: "600s", category: "Literature", title: "The surviving version of Beowulf is composed", summary: "Beowulf stands as one of the central monuments of Old English heroic literature.", characters: [] },
  { year: 664, period: "600s", category: "History", title: "The British Church unites with the Roman Catholic Church", summary: "English Christianity becomes more fully aligned with Roman religious structures.", characters: [] },
  { year: 795, period: "600s", category: "History", title: "Vikings begin raids on Anglo-Saxon kingdoms", summary: "The Viking attacks become a lasting challenge to Anglo-Saxon England.", characters: [] },
  { year: 600, period: "600s", category: "World", title: "Block printing develops in China and Korea", summary: "The development of printing technologies in East Asia long predates printing in England.", characters: [] },
  { year: 630, period: "600s", category: "World", title: "Prophet Muhammad conquers Mecca", summary: "A key event in the rise of Islam and the shaping of the medieval world.", characters: [] },
  { year: 800, period: "800s", category: "World", title: "Charlemagne is crowned Emperor of the Holy Roman Empire", summary: "A defining moment in the political and religious formation of medieval Western Europe.", characters: ["Charlemagne"] },
  { year: 801, displayYear: "c. 800", period: "800s", category: "World", title: "Gunpowder is invented in China", summary: "A technological development with long-term effects on warfare and global history.", characters: [] },
  { year: 880, period: "800s", category: "World", title: "Mayan civilization begins to decline", summary: "An important turning point in the history of the Americas.", characters: [] },
  { year: 871, period: "800s", category: "History", title: "Alfred the Great becomes king of Wessex", summary: "Alfred becomes a key defender of Anglo-Saxon England and promoter of Christian learning.", characters: ["Alfred the Great"] },
  { year: 886, period: "800s", category: "History", title: "Alfred defeats the Danes and promotes Christianity", summary: "His victories strengthen both political order and Christian identity in England.", characters: ["Alfred the Great"] },
  { year: 892, period: "800s", category: "Literature", title: "The Anglo-Saxon Chronicle begins to be compiled", summary: "A crucial record of early English historical memory begins to take shape.", characters: [] },
  { year: 975, period: "800s", category: "Literature", title: "Anglo-Saxon poetry is collected in the Exeter Book", summary: "The Exeter Book preserves major examples of Old English verse.", characters: [] },
  { year: 1000, period: "1000s", category: "Literature", title: "The surviving manuscript of Beowulf is recorded by monks", summary: "The text reaches us through this later manuscript tradition.", characters: [] },
  { year: 1016, period: "1000s", category: "History", title: "Canute becomes king of England", summary: "Danish rule becomes deeply entangled with English history.", characters: [] },
  { year: 1054, period: "1000s", category: "World", title: "The Christian Church splits into Eastern and Western branches", summary: "The Great Schism formalizes the division between the Eastern and Western churches.", characters: [] },
  { year: 1066, period: "1000s", category: "History", title: "Norman Conquest", summary: "William the Conqueror defeats King Harold and radically reshapes English politics, language, and culture.", characters: ["William the Conqueror"] },
  { year: 1086, period: "1000s", category: "Literature", title: "The Domesday Book is completed", summary: "The survey ordered by William the Conqueror becomes one of the most important records of Norman England.", characters: ["William the Conqueror"] },
  { year: 1095, period: "1000s", category: "World", title: "The Crusades begin", summary: "The Crusades become a defining feature of the religious and military imagination of medieval Europe.", characters: [] },
  { year: 1170, period: "1000s", category: "History", title: "Thomas Becket is murdered", summary: "The murder symbolizes conflict between royal power and ecclesiastical authority.", characters: [] },
  { year: 1171, period: "1000s", category: "History", title: "Henry II declares himself lord of Ireland", summary: "This helps establish the long and difficult history of English involvement in Ireland.", characters: [] },
  { year: 1192, period: "1000s", category: "World", title: "The Japanese emperor adopts the title of shogun", summary: "An important moment in the development of medieval Japanese political structures.", characters: [] },
  { year: 1206, period: "1200s", category: "World", title: "Genghis Khan begins the Mongol conquest", summary: "The Mongol Empire will transform Eurasian politics and long-distance exchange.", characters: ["Genghis Khan"] },
  { year: 1215, period: "1200s", category: "History", title: "King John signs the Magna Carta", summary: "The Magna Carta becomes a lasting symbol of limits on royal power and the rule of law.", characters: [] },
  { year: 1282, period: "1200s", category: "History", title: "England conquers Wales", summary: "This conquest changes the internal political structure of the British Isles.", characters: [] },
  { year: 1295, period: "1200s", category: "History", title: "Model Parliament is formed under Edward I", summary: "A major step in the development of representative political institutions in England.", characters: [] },
  { year: 1300, period: "1200s", category: "World", title: "The Renaissance begins in northern Italy", summary: "A major cultural shift begins that will eventually reshape Europe.", characters: [] },
  { year: 1337, period: "1200s", category: "History", title: "The Hundred Years' War begins", summary: "The long conflict between England and France becomes central to late medieval history.", characters: [] },
  { year: 1347, period: "1200s", category: "World", title: "The Black Death spreads across Europe", summary: "The plague devastates population, society, economics, and religious consciousness.", characters: [] },
  { year: 1375, period: "1200s", category: "Literature", title: "Sir Gawain and the Green Knight is composed", summary: "A major Middle English poem within the Arthurian tradition, exploring chivalry, temptation, and moral testing.", characters: [] },
  { year: 1387, period: "1200s", category: "Literature", title: "Geoffrey Chaucer begins The Canterbury Tales", summary: "Chaucer's work becomes one of the greatest achievements of Middle English literature.", characters: ["Chaucer"] },
  { year: 1420, period: "1400s", category: "Literature", title: "The earliest surviving Paston letter is written", summary: "The Paston letters preserve valuable evidence of everyday life and language in late medieval England.", characters: [] },
  { year: 1431, period: "1400s", category: "World", title: "Joan of Arc is burned at the stake", summary: "Her death becomes one of the most famous symbols of faith, politics, war, and martyrdom in late medieval Europe.", characters: ["Joan of Arc"] },
  { year: 1450, period: "1400s", category: "History", title: "Modern English begins to develop from Middle English", summary: "English language and literary style begin shifting toward early modern forms.", characters: [] },
  { year: 1453, period: "1400s", category: "World", title: "Ottomans conquer Constantinople", summary: "The fall of Constantinople is often seen as one of the great turning points at the end of the medieval world.", characters: [] },
  { year: 1455, period: "1400s", category: "World", title: "The Gutenberg Bible is printed in Germany", summary: "European print culture enters a new age of textual reproduction and circulation.", characters: [] },
  { year: 1476, period: "1400s", category: "History", title: "William Caxton establishes the first printing press in England", summary: "Printing transforms how texts are reproduced, distributed, and standardized in English culture.", characters: ["William Caxton"] },
  { year: 1477, period: "1400s", category: "History", title: "The first printed book in English is produced", summary: "Printed English books begin to reshape readership and literary circulation.", characters: ["William Caxton"] },
  { year: 1485, period: "1400s", category: "Literature", title: "William Caxton prints Thomas Malory's Le Morte d'Arthur", summary: "The Arthurian legends are gathered into one influential English prose work that tells the rise, glory, division, and fall of Arthur's kingdom.", characters: ["William Caxton", "Thomas Malory", "Arthur", "Guinevere", "Lancelot", "Mordred"] },
];

const periodOrder = ["400s", "600s", "800s", "1000s", "1200s", "1400s"];

function badgeClass(category) {
  if (category === "Literature") return "badge badge-literature";
  if (category === "History") return "badge badge-history";
  return "badge badge-world";
}

function InlineCharacterLinks({ names, onOpen }) {
  return names.map((name, index) => (
    <React.Fragment key={name}>
      <span className="inline-link" onClick={() => onOpen(name)}>{name}</span>
      {index < names.length - 1 ? ", " : ""}
    </React.Fragment>
  ));
}

export default function App() {
  const [selectedPeriod, setSelectedPeriod] = useState("1400s");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [query, setQuery] = useState("");

  const filteredEvents = useMemo(() => {
    const q = query.trim().toLowerCase();
    return events
      .filter((event) => event.period === selectedPeriod)
      .filter((event) => {
        if (!q) return true;
        return (
          String(event.year).includes(q) ||
          event.title.toLowerCase().includes(q) ||
          event.summary.toLowerCase().includes(q) ||
          event.category.toLowerCase().includes(q) ||
          event.characters.some((name) => name.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => a.year - b.year);
  }, [selectedPeriod, query]);

  const characterData = selectedCharacter ? characters[selectedCharacter] : null;

  return (
    <div className="app">
      <style>{styles}</style>
      <div className="container">
        <section className="hero">
          <div className="hero-row">
            <div>
              <div className="pill">Interactive Medieval Timeline</div>
              <h1>Le Morte d'Arthur Timeline Explorer</h1>
              <div className="subtext">
                Click a year to open an event. Then click a character name inside the event to see a short explanation and an image.
                This version is designed to run directly in a basic React project in VS Code.
              </div>
            </div>
            <input
              className="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search year, event, or character"
            />
          </div>
        </section>

        <div className="main-grid">
          <aside className="panel">
            <h2>Choose a Period</h2>
            {periodOrder.map((period) => (
              <button
                key={period}
                className={`century-btn ${selectedPeriod === period ? "active" : ""}`}
                onClick={() => {
                  setSelectedPeriod(period);
                  setSelectedEvent(null);
                }}
              >
                <span>{period}</span>
                <span>{events.filter((event) => event.period === period).length}</span>
              </button>
            ))}
            <div className="muted">
              The default view opens the 1400s because that is the period most directly connected to <i>Le Morte d'Arthur</i> and William Caxton's printing press.
            </div>
          </aside>

          <main>
            <section className="hero" style={{ padding: 0, overflow: "hidden", marginBottom: 24 }}>
              <div className="timeline-header">{selectedPeriod} Timeline</div>
              <div className="timeline-body">
                {filteredEvents.length === 0 ? (
                  <div className="no-result">No events match your search.</div>
                ) : (
                  filteredEvents.map((event) => (
                    <button
                      key={`${event.year}-${event.title}`}
                      className={`event-card ${selectedEvent?.title === event.title ? "selected" : ""}`}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="event-row">
                        <div className="year-box">
                          <div className="year">{event.displayYear || event.year}</div>
                          <div className={badgeClass(event.category)}>{event.category}</div>
                        </div>
                        <div>
                          <div className="event-title">{event.title}</div>
                          <div className="event-summary">{event.summary}</div>
                        </div>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </section>

            <section className="detail-card">
              <h2>Event Details</h2>
              {!selectedEvent ? (
                <div className="helper">
                  Select an event from the timeline. After that, click one of the highlighted character names to open a character card with an explanation and image.
                </div>
              ) : (
                <div>
                  <div className="detail-top">
                    <div className="detail-year">{selectedEvent.displayYear || selectedEvent.year}</div>
                    <div className={badgeClass(selectedEvent.category)}>{selectedEvent.category}</div>
                  </div>
                  <div className="detail-title">{selectedEvent.title}</div>
                  <div className="detail-text">
                    {selectedEvent.summary}
                    {selectedEvent.characters.length > 0 && (
                      <>
                        <br /><br />
                        Related characters: <InlineCharacterLinks names={selectedEvent.characters} onOpen={setSelectedCharacter} />
                      </>
                    )}
                  </div>
                  {selectedEvent.characters.length > 0 && (
                    <div className="char-links">
                      {selectedEvent.characters.map((name) => (
                        <button key={name} className="char-chip" onClick={() => setSelectedCharacter(name)}>
                          Open {name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </section>
          </main>
        </div>
      </div>

      {characterData && (
        <div className="overlay" onClick={() => setSelectedCharacter(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-grid">
              <div className="modal-image-wrap">
                <img className="modal-image" src={characterData.image} alt={characterData.name} />
              </div>
              <div className="modal-content">
                <h3 className="modal-title">{characterData.name}</h3>
                <div className="modal-subtitle">{characterData.subtitle}</div>
                <div className="modal-text">{characterData.description}</div>
                <button className="close-btn" onClick={() => setSelectedCharacter(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
