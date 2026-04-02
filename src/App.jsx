import React, { useMemo, useState } from "react";
import {
  Church,
  ScrollText,
  Sword,
  Castle,
  Shield,
  BookOpen,
  Sparkles,
  X,
} from "lucide-react";

const timelineData = [
  {
    era: "400s",
    icon: Castle,
    tone: "Origins and early Britain",
    eraImage: "/images/era-400s.jpg",
    summary:
      "The legendary background of Arthurian Britain begins to take shape during the age of Anglo-Saxon migration and early post-Roman instability.",
    details: [
      {
        year: "449",
        title: "Anglo-Saxons begin invading Britain",
        category: "Historical Context",
        description:
          "Traditional accounts mark this period as the beginning of major Anglo-Saxon settlement in Britain, helping form the fractured political world from which later Arthurian legend emerges.",
      },
      {
        year: "500",
        title: "A mathematician in India calculates the value of pi",
        category: "World Culture and Events",
        description:
          "While Britain faced political upheaval, major intellectual developments were happening elsewhere. This broader world context reminds us that Arthurian legend belongs to a much wider human history.",
      },
      {
        year: "527",
        title: "Justinian becomes Byzantine emperor",
        category: "World Culture and Events",
        description:
          "Justinian's reign symbolizes imperial ambition, legal order, and Christian statecraft in the Mediterranean world—an illuminating contrast to the unstable Britain of Arthurian memory.",
      },
      {
        year: "597",
        title: "Christian missionaries arrive in Kent",
        category: "Historical Context",
        description:
          "Christianity begins spreading more deeply in Anglo-Saxon England. This matters for Arthurian literature because later retellings frame knighthood, kingship, sin, and honor through a Christian moral lens.",
      },
    ],
    people: [
      {
        name: "King Arthur",
        role: "Legendary British king",
        image: "/images/king-arthur.jpg",
        description:
          "Arthur stands at the center of the tradition later gathered by Malory. He represents ideal kingship, unity, and the tragic fall of a noble realm.",
      },
      {
        name: "Vortigern",
        role: "Legendary British ruler",
        image: "/images/vortigern.jpg",
        description:
          "Vortigern is often linked to the arrival of the Saxons in Britain. In Arthurian background tradition, he symbolizes political weakness and disorder before Arthur's rise.",
      },
      {
        name: "Ambrosius Aurelianus",
        role: "Romano-British resistance leader",
        image: "/images/ambrosius-aurelianus.jpg",
        description:
          "Ambrosius is sometimes treated as part of the historical background behind Arthurian tradition. He represents resistance against Saxon expansion.",
      },
    ],
  },
  {
    era: "600s",
    icon: Church,
    tone: "Christian foundations and early learning",
    eraImage: "/images/era-600s.jpg",
    summary:
      "This era helps establish the religious and intellectual foundations that shaped later English literature and medieval views of kingship, virtue, and history.",
    details: [
      {
        year: "600",
        title: "Block printing develops in China and Korea",
        category: "World Culture and Events",
        description:
          "This innovation highlights the sophistication of East Asian culture and provides a striking global contrast to manuscript culture in medieval Europe.",
      },
      {
        year: "630",
        title: "Prophet Muhammad conquers Mecca",
        category: "World Culture and Events",
        description:
          "A major turning point in world history, the unification of Mecca under Islam signals the growth of a civilization that would profoundly shape medieval Afro-Eurasian history.",
      },
      {
        year: "664",
        title: "The British Church unites with the Roman Catholic Church",
        category: "Historical Context",
        description:
          "The Synod of Whitby aligned English Christianity more closely with Roman practice. This deepened the Latin Christian framework within which later medieval literature developed.",
      },
      {
        year: "c. 673",
        title: "Bede the Venerable is born",
        category: "Literary Milestones",
        description:
          "Bede becomes one of the most influential early historians and scholars in English history, helping shape how the English understood their past.",
      },
      {
        year: "c. 750",
        title: "The surviving version of Beowulf is composed",
        category: "Literary Milestones",
        description:
          "Beowulf reflects heroic values, loyalty, fame, mortality, and moral tension. These themes continue into Arthurian literature in transformed medieval forms.",
      },
      {
        year: "795",
        title: "Vikings begin raids on Anglo-Saxon kingdoms",
        category: "Historical Context",
        description:
          "The Viking raids intensified anxiety about kingship, warfare, defense, and cultural survival—ideas that resonate strongly with later Arthurian imagination.",
      },
    ],
    people: [
      {
        name: "Bede",
        role: "Historian and scholar",
        image: "/images/bede.jpg",
        description:
          "Bede's historical writing helped define early English identity. He shaped the historical consciousness from which later British literary memory grew.",
      },
      {
        name: "Augustine of Canterbury",
        role: "Missionary and archbishop",
        image: "/images/augustine-of-canterbury.jpg",
        description:
          "Augustine's mission helped establish Christianity in Anglo-Saxon England. The Christianization of Britain deeply influenced the ethical and symbolic world of later Arthurian romance.",
      },
    ],
  },
  {
    era: "800s",
    icon: Shield,
    tone: "Kingship, chronicles, and defense",
    eraImage: "/images/era-800s.jpg",
    summary:
      "The age of Alfred and the Anglo-Saxon Chronicle reinforces themes of heroic leadership, literacy, and national memory that later echo in Arthurian tradition.",
    details: [
      {
        year: "800",
        title: "Charlemagne is crowned Emperor of the Holy Roman Empire",
        category: "World Culture and Events",
        description:
          "Charlemagne became a model of Christian rulership in medieval Europe. His imperial image helps us understand why later literature idealized kingship in heroic and sacred terms.",
      },
      {
        year: "c. 800",
        title: "Gunpowder is invented in China",
        category: "World Culture and Events",
        description:
          "This invention points to major scientific and technological developments beyond Europe during the medieval period.",
      },
      {
        year: "871",
        title: "Alfred the Great becomes king of Wessex",
        category: "Historical Context",
        description:
          "Alfred's rule became a model of wise and courageous kingship. He defended his kingdom, promoted learning, and helped preserve English culture.",
      },
      {
        year: "880",
        title: "Mayan civilization begins to decline",
        category: "World Culture and Events",
        description:
          "This event broadens the timeline beyond Europe and reminds us that medieval history was globally diverse and interconnected in significance.",
      },
      {
        year: "886",
        title: "Alfred defeats the Danes and promotes Christianity",
        category: "Historical Context",
        description:
          "Alfred's victories and reforms strengthened both royal authority and Christian learning, making him an important comparison point for later legendary rulers like Arthur.",
      },
      {
        year: "892",
        title: "The Anglo-Saxon Chronicle begins to be compiled",
        category: "Literary Milestones",
        description:
          "The Chronicle preserved historical memory in written form. It reflects the growing importance of recording a people's story—something Arthurian writers would do in imaginative ways.",
      },
      {
        year: "975",
        title: "Anglo-Saxon poetry is collected in the Exeter Book",
        category: "Literary Milestones",
        description:
          "The Exeter Book preserved a major body of Old English poetry and helped secure the literary inheritance that preceded Middle English romance.",
      },
    ],
    people: [
      {
        name: "Alfred the Great",
        role: "King of Wessex",
        image: "/images/alfred-the-great.jpg",
        description:
          "Alfred is remembered as a warrior, lawgiver, and promoter of learning. His example of kingship can be compared with Arthur's legendary role as protector and unifier.",
      },
      {
        name: "Charlemagne",
        role: "Emperor and cultural model of kingship",
        image: "/images/charlemagne.jpg",
        description:
          "Charlemagne's legacy influenced medieval ideals of empire, Christian rule, and heroic leadership. He provides a continental parallel to Arthurian ideals.",
      },
    ],
  },
  {
    era: "1000s",
    icon: Shield,
    tone: "Conquest, reform, and transformation",
    eraImage: "/images/era-1000s.jpg",
    summary:
      "This period changes England politically, linguistically, and culturally. The Norman Conquest especially sets the stage for the later development of Arthurian romance.",
    details: [
      {
        year: "c. 1000",
        title: "The surviving manuscript of Beowulf is recorded by monks",
        category: "Literary Milestones",
        description:
          "The recording of Beowulf helped preserve early heroic literature, which later English writers inherited in transformed ways.",
      },
      {
        year: "1016",
        title: "Canute becomes king of England",
        category: "Historical Context",
        description:
          "Canute's reign shows how England was shaped by Scandinavian power as well as native tradition.",
      },
      {
        year: "1054",
        title: "The Christian Church splits into Eastern and Western branches",
        category: "World Culture and Events",
        description:
          "The Great Schism divided Eastern Orthodoxy and Roman Catholicism, changing the religious map of medieval Christendom.",
      },
      {
        year: "1066",
        title: "Norman Conquest",
        category: "Historical Context",
        description:
          "William the Conqueror defeats King Harold. This transformed English language, aristocratic culture, and literary development.",
      },
      {
        year: "1086",
        title: "The Domesday Book is completed",
        category: "Literary Milestones",
        description:
          "This remarkable survey reflects Norman administrative power and the growing documentary culture of medieval England.",
      },
      {
        year: "1095",
        title: "The Crusades begin",
        category: "World Culture and Events",
        description:
          "The Crusades shaped medieval concepts of warfare, pilgrimage, sanctity, and heroism, all of which influence later romance literature.",
      },
      {
        year: "1170",
        title: "Thomas Becket is murdered",
        category: "Historical Context",
        description:
          "Becket's death dramatized the tension between royal power and church authority, a moral conflict central to medieval thought.",
      },
      {
        year: "1171",
        title: "Henry II declares himself lord of Ireland",
        category: "Historical Context",
        description:
          "This strengthened English royal claims across the British Isles and reflects the expansion of monarchy and political ambition.",
      },
      {
        year: "1192",
        title: "The Japanese emperor adopts the title of shogun",
        category: "World Culture and Events",
        description:
          "The rise of the shogunate reveals another form of warrior-based leadership in medieval world history.",
      },
    ],
    people: [
      {
        name: "William the Conqueror",
        role: "Norman king of England",
        image: "/images/william-the-conqueror.jpg",
        description:
          "William's victory in 1066 transformed England. Norman French culture and literary forms helped shape the Arthurian romance tradition.",
      },
      {
        name: "King Harold II",
        role: "Last Anglo-Saxon king of England",
        image: "/images/king-harold-ii.jpg",
        description:
          "Harold's defeat marks the end of Anglo-Saxon royal rule and contributes to the sense of lost kingdoms echoed in later legendary literature.",
      },
      {
        name: "Thomas Becket",
        role: "Archbishop of Canterbury",
        image: "/images/thomas-becket.jpg",
        description:
          "Becket became a symbol of conscience, holiness, and resistance to royal overreach.",
      },
      {
        name: "Henry II",
        role: "King of England",
        image: "/images/henry-ii.jpg",
        description:
          "Henry II expanded royal power and reshaped English governance, providing context for medieval ideas of justice, loyalty, and kingship.",
      },
    ],
  },
  {
    era: "1200s",
    icon: Sword,
    tone: "Romance, law, and crisis",
    eraImage: "/images/era-1200s.jpg",
    summary:
      "This era develops the literary and political forms that feed directly into the world of knights, quests, courts, and national trauma later seen in Malory.",
    details: [
      {
        year: "1206",
        title: "Genghis Khan begins the Mongol conquest",
        category: "World Culture and Events",
        description:
          "The Mongol expansion reshaped Asia and Europe through war, trade, and cross-cultural contact.",
      },
      {
        year: "1215",
        title: "King John signs the Magna Carta",
        category: "Historical Context",
        description:
          "The Magna Carta became a landmark in the history of law, monarchy, and political limits.",
      },
      {
        year: "1282",
        title: "England conquers Wales",
        category: "Historical Context",
        description:
          "Wales, long associated with Arthurian tradition, became more tightly controlled by the English crown.",
      },
      {
        year: "1295",
        title: "Model Parliament is formed under Edward I",
        category: "Historical Context",
        description:
          "This marks a significant stage in representative governance in England.",
      },
      {
        year: "c. 1300",
        title: "The Renaissance begins in northern Italy",
        category: "World Culture and Events",
        description:
          "The Renaissance would eventually transform European thought, art, language, and human self-understanding.",
      },
      {
        year: "1337",
        title: "The Hundred Years' War begins",
        category: "Historical Context",
        description:
          "This long conflict sharpened ideas of national identity, warfare, and chivalry in England and France.",
      },
      {
        year: "1347",
        title: "The Black Death spreads across Europe",
        category: "World Culture and Events",
        description:
          "The Black Death caused immense death and social upheaval, leaving deep marks on religion, literature, and the medieval worldview.",
      },
      {
        year: "c. 1375",
        title: "Sir Gawain and the Green Knight is composed",
        category: "Literary Milestones",
        description:
          "This masterpiece of Arthurian literature explores honor, temptation, truth, and failure through the figure of Sir Gawain.",
      },
      {
        year: "c. 1387",
        title: "Geoffrey Chaucer begins The Canterbury Tales",
        category: "Literary Milestones",
        description:
          "Chaucer helped establish English as a major literary language and enriched the cultural world from which Malory would later write.",
      },
    ],
    people: [
      {
        name: "King John",
        role: "King of England",
        image: "/images/king-john.jpg",
        description:
          "John is remembered in part through Magna Carta. His reign helps explain medieval concern with tyranny, legitimacy, and political order.",
      },
      {
        name: "Edward I",
        role: "King of England",
        image: "/images/edward-i.jpg",
        description:
          "Edward I strengthened royal authority and expanded English power, especially in Wales.",
      },
      {
        name: "The Gawain Poet",
        role: "Anonymous Arthurian poet",
        image: "/images/gawain-poet.jpg",
        description:
          "The anonymous poet of Sir Gawain and the Green Knight deepened Arthurian literature by showing that a knight can be noble and flawed at the same time.",
      },
      {
        name: "Geoffrey Chaucer",
        role: "Poet",
        image: "/images/geoffrey-chaucer.jpg",
        description:
          "Chaucer helped prepare the way for major English prose and poetry in the late Middle Ages.",
      },
    ],
  },
  {
    era: "1400s",
    icon: ScrollText,
    tone: "Malory, print, and literary legacy",
    eraImage: "/images/era-1400s.jpg",
    summary:
      "In this final stage, Arthurian tradition is gathered, shaped, and printed into one of the most influential works in English literary history.",
    details: [
      {
        year: "c. 1420",
        title: "The earliest surviving Paston letter is written",
        category: "Literary Milestones",
        description:
          "The Paston Letters reveal everyday life, language, and social concerns in late medieval England, helping us understand Malory's world.",
      },
      {
        year: "1431",
        title: "Joan of Arc is burned at the stake",
        category: "World Culture and Events",
        description:
          "Joan's death reflects the intertwining of faith, war, and political legitimacy in the fifteenth century.",
      },
      {
        year: "1453",
        title: "Ottomans conquer Constantinople",
        category: "World Culture and Events",
        description:
          "The fall of Constantinople marks a world-historical transition, symbolizing the end of one age and the transformation of another.",
      },
      {
        year: "c. 1450",
        title: "Modern English begins to develop from Middle English",
        category: "Historical Context",
        description:
          "Language was changing rapidly in Malory's lifetime, and his work stands near a major turning point in English literary expression.",
      },
      {
        year: "c. 1455",
        title: "Gutenberg Bible is printed in Germany",
        category: "World Culture and Events",
        description:
          "Movable type revolutionized the spread of texts. Without print culture, Malory's work would not have reached later generations in the same way.",
      },
      {
        year: "c. 1476",
        title: "William Caxton establishes the first printing press in England",
        category: "Historical Context",
        description:
          "Caxton helped transform literature from manuscript culture into print culture.",
      },
      {
        year: "1477",
        title: "First printed book in English is produced",
        category: "Historical Context",
        description:
          "Printing accelerated the standardization and wider distribution of English literature.",
      },
      {
        year: "1485",
        title: "William Caxton prints Thomas Malory's Le Morte d'Arthur",
        category: "Literary Milestones",
        description:
          "This moment secured Malory's Arthurian narrative as a lasting monument of English literature.",
      },
    ],
    people: [
      {
        name: "Sir Thomas Malory",
        role: "Author of Le Morte d'Arthur",
        image: "/images/sir-thomas-malory.jpg",
        description:
          "Malory gathered many earlier Arthurian materials and reshaped them into a sweeping English prose narrative.",
      },
      {
        name: "William Caxton",
        role: "Printer and publisher",
        image: "/images/william-caxton.jpg",
        description:
          "Caxton printed Le Morte d'Arthur in 1485 and played a decisive role in preserving and popularizing Malory's version of the Arthur story.",
      },
      {
        name: "Joan of Arc",
        role: "Military and religious heroine",
        image: "/images/joan-of-arc.jpg",
        description:
          "Joan embodies medieval ideals of courage, holy mission, and tragic destiny.",
      },
    ],
  },
];

const categoryColors = {
  "Literary Milestones": "#b38b2f",
  "Historical Context": "#7d6343",
  "World Culture and Events": "#874d3f",
};

function renderSummary(selectedEra, openPerson, styles) {
  switch (selectedEra.era) {
    case "400s":
      return (
        <>
          The legendary background of Arthurian Britain begins to take shape
          around{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("King Arthur")}
          >
            King Arthur
          </span>
          , amid the instability associated with{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("Vortigern")}
          >
            Vortigern
          </span>
          , and the resistance often linked with{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("Ambrosius Aurelianus")}
          >
            Ambrosius Aurelianus
          </span>
          .
        </>
      );

    case "600s":
      return (
        <>
          This era helps establish the Christian and intellectual foundations of
          medieval England through figures such as{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("Augustine of Canterbury")}
          >
            Augustine of Canterbury
          </span>{" "}
          and the historian{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("Bede")}
          >
            Bede
          </span>
          .
        </>
      );

    case "800s":
      return (
        <>
          The age of heroic kingship is represented by{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("Alfred the Great")}
          >
            Alfred the Great
          </span>
          , while continental Christian rule is reflected in{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("Charlemagne")}
          >
            Charlemagne
          </span>
          .
        </>
      );

    case "1000s":
      return (
        <>
          England is transformed by conquest and reform through figures such as{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("William the Conqueror")}
          >
            William the Conqueror
          </span>
          ,{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("King Harold II")}
          >
            King Harold II
          </span>
          ,{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("Thomas Becket")}
          >
            Thomas Becket
          </span>
          , and{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("Henry II")}
          >
            Henry II
          </span>
          .
        </>
      );

    case "1200s":
      return (
        <>
          The literary and political world of romance grows through the legacy
          of{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("King John")}
          >
            King John
          </span>
          ,{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("Edward I")}
          >
            Edward I
          </span>
          , the anonymous{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("The Gawain Poet")}
          >
            Gawain Poet
          </span>
          , and{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("Geoffrey Chaucer")}
          >
            Geoffrey Chaucer
          </span>
          .
        </>
      );

    case "1400s":
      return (
        <>
          Arthurian legend reaches literary permanence through{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("Sir Thomas Malory")}
          >
            Sir Thomas Malory
          </span>{" "}
          and the printer{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("William Caxton")}
          >
            William Caxton
          </span>
          , while the wider mood of the age is reflected by figures like{" "}
          <span
            className="inline-person-link"
            style={styles.inlineLink}
            onClick={() => openPerson("Joan of Arc")}
          >
            Joan of Arc
          </span>
          .
        </>
      );

    default:
      return selectedEra.summary;
  }
}

function Modal({ person, onClose }) {
  if (!person) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>
          <X size={18} />
        </button>

        <div style={styles.modalGrid}>
          <div style={styles.modalImageWrap}>
            <img src={person.image} alt={person.name} style={styles.modalImage} />
          </div>
          <div style={styles.modalContent}>
            <h2 style={styles.modalTitle}>{person.name}</h2>
            <p style={styles.modalRole}>{person.role}</p>
            <p style={styles.modalDesc}>{person.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedEra, setSelectedEra] = useState(timelineData[0]);
  const [selectedEvent, setSelectedEvent] = useState(timelineData[0].details[0]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const currentEvents = useMemo(() => selectedEra.details, [selectedEra]);

  const openPerson = (name) => {
    for (const era of timelineData) {
      const found = era.people.find((p) => p.name === name);
      if (found) {
        setSelectedPerson(found);
        return;
      }
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay} />
      <div style={styles.container}>
        <img src="/images/medieval-seal.png" alt="" style={styles.seal} />

        <header style={styles.header}>
          <div style={styles.badge}>
            <Sparkles size={14} />
            <span>Medieval Literary Experience</span>
          </div>
          <h1 style={styles.title}>A Timeline of Le Morte d&apos;Arthur</h1>
          <p style={styles.subtitle}>Connecting Literature, History, and Culture</p>
          <p style={styles.author}>12C Esther Jung</p>
        </header>

        <section style={styles.timelineSection}>
          <div style={styles.timelineLine} />
          <div style={styles.eraRow}>
            {timelineData.map((era) => {
              const Icon = era.icon;
              const active = selectedEra.era === era.era;

              return (
                <button
                  key={era.era}
                  style={{
                    ...styles.eraButton,
                    ...(active ? styles.eraButtonActive : {}),
                  }}
                  onClick={() => {
                    setSelectedEra(era);
                    setSelectedEvent(era.details[0]);
                  }}
                >
                  <div style={styles.eraIconWrap}>
                    <Icon size={22} />
                  </div>
                  <div style={styles.eraLabel}>{era.era}</div>
                  <div style={styles.eraTone}>{era.tone}</div>
                </button>
              );
            })}
          </div>
        </section>

        <section style={styles.contentGrid}>
          <div style={styles.leftPanel}>
            <img
              src={selectedEra.eraImage}
              alt={selectedEra.era}
              style={styles.eraBanner}
            />

            <h2 style={styles.panelTitle}>{selectedEra.era}</h2>
            <p style={styles.panelSummary}>
              {renderSummary(selectedEra, openPerson, styles)}
            </p>

            <div style={{ marginTop: 28 }}>
              <div style={styles.sectionLabel}>
                <BookOpen size={16} />
                <span>Related Figures</span>
              </div>

              <div style={styles.peopleList}>
                {selectedEra.people.map((person) => (
                  <button
                    key={person.name}
                    style={styles.personCard}
                    onClick={() => setSelectedPerson(person)}
                  >
                    <div>
                      <div style={styles.personName}>{person.name}</div>
                      <div style={styles.personRole}>{person.role}</div>
                    </div>
                    <div style={styles.viewTag}>View</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.rightPanel}>
            <h2 style={styles.panelTitle}>Events of the {selectedEra.era}</h2>

            <div style={styles.eventsGrid}>
              <div style={styles.eventsList}>
                {currentEvents.map((event) => {
                  const active =
                    selectedEvent.year === event.year &&
                    selectedEvent.title === event.title;

                  return (
                    <button
                      key={`${event.year}-${event.title}`}
                      style={{
                        ...styles.eventButton,
                        ...(active ? styles.eventButtonActive : {}),
                      }}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div style={styles.eventCategory}>{event.category}</div>
                      <div style={styles.eventYear}>{event.year}</div>
                      <div style={styles.eventTitle}>{event.title}</div>
                    </button>
                  );
                })}
              </div>

              <div style={styles.eventDetail}>
                <div
                  style={{
                    ...styles.eventChip,
                    backgroundColor:
                      categoryColors[selectedEvent.category] || "#7d6343",
                  }}
                >
                  {selectedEvent.category}
                </div>
                <h3 style={styles.detailYear}>{selectedEvent.year}</h3>
                <h4 style={styles.detailTitle}>{selectedEvent.title}</h4>
                <p style={styles.detailDesc}>{selectedEvent.description}</p>
              </div>
            </div>
          </div>
        </section>

        <footer style={styles.footer}>Developed by Esther Jung</footer>
      </div>

      <Modal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, rgba(214,196,163,0.94), rgba(188,165,129,0.95), rgba(160,136,101,0.97))",
    color: "#37291d",
    fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
    position: "relative",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(45,32,19,0.18), rgba(45,32,19,0.28)), url('/images/parchment-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.55,
    pointerEvents: "none",
  },
  container: {
    position: "relative",
    maxWidth: 1400,
    margin: "0 auto",
    padding: "40px 20px 24px",
  },
  seal: {
    position: "absolute",
    right: 18,
    top: 18,
    width: 92,
    opacity: 0.18,
    pointerEvents: "none",
  },
  header: {
    textAlign: "center",
    marginBottom: 40,
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 16px",
    border: "1px solid rgba(120,90,47,0.35)",
    borderRadius: 999,
    color: "#7b5824",
    background: "rgba(250, 241, 223, 0.8)",
    fontSize: 12,
    letterSpacing: "0.24em",
    textTransform: "uppercase",
    marginBottom: 18,
    boxShadow: "0 4px 14px rgba(64, 49, 31, 0.10)",
  },
  title: {
    fontFamily: "'Cinzel', 'Times New Roman', serif",
    fontSize: "clamp(2.3rem, 5vw, 4.8rem)",
    color: "#412f20",
    margin: 0,
    letterSpacing: "0.03em",
  },
  subtitle: {
    marginTop: 12,
    fontSize: 22,
    color: "#5e4936",
  },
  author: {
    marginTop: 10,
    color: "#7e5f27",
    letterSpacing: "0.20em",
    fontSize: 14,
    textTransform: "uppercase",
  },
  timelineSection: {
    position: "relative",
    marginBottom: 36,
  },
  timelineLine: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 56,
    height: 3,
    background:
      "linear-gradient(90deg, transparent, rgba(128,94,40,0.88), transparent)",
  },
  eraRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 16,
    position: "relative",
    zIndex: 2,
  },
  eraButton: {
    border: "1px solid rgba(126,97,62,0.42)",
    borderRadius: 24,
    padding: 18,
    background: "rgba(245, 234, 214, 0.76)",
    color: "#49372a",
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.2s ease",
    boxShadow: "0 8px 24px rgba(71, 53, 34, 0.10)",
    backdropFilter: "blur(2px)",
  },
  eraButtonActive: {
    border: "1px solid #9b7330",
    background:
      "linear-gradient(180deg, rgba(228,208,172,0.96), rgba(211,188,150,0.96))",
    transform: "translateY(-2px)",
    boxShadow: "0 10px 24px rgba(92, 67, 36, 0.18)",
  },
  eraIconWrap: {
    width: 54,
    height: 54,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 10px",
    background: "rgba(236, 221, 193, 0.95)",
    border: "1px solid rgba(146,109,49,0.42)",
    color: "#795820",
  },
  eraLabel: {
    fontFamily: "'Cinzel', serif",
    fontSize: 24,
    marginBottom: 4,
  },
  eraTone: {
    fontSize: 13,
    color: "#685340",
    lineHeight: 1.5,
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.6fr",
    gap: 24,
  },
  leftPanel: {
    background: "rgba(248, 240, 224, 0.82)",
    border: "1px solid rgba(126,97,62,0.32)",
    borderRadius: 28,
    padding: 24,
    boxShadow: "0 12px 32px rgba(65, 48, 28, 0.14)",
    backdropFilter: "blur(3px)",
  },
  rightPanel: {
    background: "rgba(248, 240, 224, 0.82)",
    border: "1px solid rgba(126,97,62,0.32)",
    borderRadius: 28,
    padding: 24,
    boxShadow: "0 12px 32px rgba(65, 48, 28, 0.14)",
    backdropFilter: "blur(3px)",
  },
  eraBanner: {
    width: "100%",
    height: 220,
    objectFit: "cover",
    borderRadius: 18,
    marginBottom: 18,
    border: "1px solid rgba(126,97,62,0.25)",
    boxShadow: "0 8px 22px rgba(66, 49, 28, 0.12)",
  },
  panelTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: 34,
    color: "#433021",
    margin: 0,
    marginBottom: 12,
  },
  panelSummary: {
    color: "#5d4837",
    lineHeight: 1.85,
    fontSize: 20,
    background: "rgba(242, 232, 213, 0.72)",
    border: "1px solid rgba(146,109,49,0.16)",
    borderRadius: 18,
    padding: 16,
  },
  inlineLink: {
    color: "#7e5f27",
    textDecoration: "underline",
    cursor: "pointer",
    fontWeight: 700,
  },
  sectionLabel: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "#8a6728",
    fontSize: 13,
    letterSpacing: "0.24em",
    textTransform: "uppercase",
    marginBottom: 12,
    fontFamily: "'Cinzel', serif",
  },
  peopleList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  personCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    width: "100%",
    background: "rgba(244, 234, 216, 0.88)",
    border: "1px solid rgba(126,97,62,0.26)",
    borderRadius: 18,
    padding: 16,
    cursor: "pointer",
    color: "#3f3124",
    textAlign: "left",
  },
  personName: {
    fontSize: 26,
    color: "#4a3525",
    fontFamily: "'Cinzel', serif",
  },
  personRole: {
    marginTop: 4,
    fontSize: 16,
    color: "#6f5944",
  },
  viewTag: {
    border: "1px solid rgba(146,109,49,0.35)",
    borderRadius: 999,
    padding: "6px 12px",
    color: "#8a6728",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    whiteSpace: "nowrap",
    background: "rgba(255,248,235,0.7)",
    fontFamily: "'Cinzel', serif",
  },
  eventsGrid: {
    display: "grid",
    gridTemplateColumns: "0.95fr 1.35fr",
    gap: 18,
  },
  eventsList: {
    maxHeight: 560,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 12,
    paddingRight: 6,
  },
  eventButton: {
    width: "100%",
    textAlign: "left",
    border: "1px solid rgba(126,97,62,0.26)",
    borderRadius: 18,
    padding: 16,
    background: "rgba(244, 234, 216, 0.88)",
    color: "#3f3124",
    cursor: "pointer",
  },
  eventButtonActive: {
    border: "1px solid #9b7330",
    background:
      "linear-gradient(180deg, rgba(228,208,172,0.96), rgba(211,188,150,0.96))",
  },
  eventCategory: {
    fontSize: 11,
    color: "#8a6728",
    textTransform: "uppercase",
    letterSpacing: "0.22em",
    fontFamily: "'Cinzel', serif",
  },
  eventYear: {
    fontSize: 34,
    color: "#493426",
    marginTop: 8,
    fontFamily: "'Cinzel', serif",
  },
  eventTitle: {
    fontSize: 17,
    color: "#654f3d",
    marginTop: 6,
    lineHeight: 1.5,
  },
  eventDetail: {
    borderRadius: 26,
    padding: 24,
    background:
      "linear-gradient(180deg, rgba(246,238,223,0.92), rgba(230,217,193,0.92))",
    border: "1px solid rgba(146,109,49,0.18)",
  },
  eventChip: {
    display: "inline-block",
    color: "#fffdf8",
    fontSize: 12,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    padding: "8px 14px",
    borderRadius: 999,
    marginBottom: 18,
    fontFamily: "'Cinzel', serif",
  },
  detailYear: {
    fontSize: 60,
    color: "#453122",
    margin: 0,
    fontFamily: "'Cinzel', serif",
  },
  detailTitle: {
    fontSize: 36,
    color: "#3f2e20",
    marginTop: 10,
    marginBottom: 12,
    lineHeight: 1.2,
    fontFamily: "'Cinzel', serif",
  },
  detailDesc: {
    color: "#5b4736",
    fontSize: 22,
    lineHeight: 1.8,
  },
  footer: {
    marginTop: 34,
    paddingTop: 18,
    borderTop: "1px solid rgba(126,97,62,0.28)",
    textAlign: "center",
    color: "#7d5f29",
    letterSpacing: "0.22em",
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: "'Cinzel', serif",
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(41, 29, 17, 0.42)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    zIndex: 9999,
  },
  modalCard: {
    width: "min(920px, 100%)",
    background:
      "linear-gradient(180deg, rgba(247,239,224,0.98), rgba(229,215,191,0.98))",
    border: "1px solid rgba(126,97,62,0.26)",
    borderRadius: 28,
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(70, 53, 31, 0.22)",
  },
  closeBtn: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "1px solid rgba(126,97,62,0.25)",
    background: "rgba(248,239,222,0.96)",
    color: "#5a4332",
    cursor: "pointer",
    zIndex: 2,
  },
  modalGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
  },
  modalImageWrap: {
    minHeight: 360,
    background: "#d4c2a4",
  },
  modalImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  modalContent: {
    padding: "32px 28px 30px 28px",
  },
  modalTitle: {
    margin: 0,
    fontSize: 40,
    color: "#483324",
    fontFamily: "'Cinzel', serif",
  },
  modalRole: {
    marginTop: 10,
    color: "#816226",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    fontSize: 13,
    fontFamily: "'Cinzel', serif",
  },
  modalDesc: {
    marginTop: 24,
    fontSize: 22,
    lineHeight: 1.85,
    color: "#5b4736",
  },
};

const mediaStyle = document.createElement("style");
mediaStyle.innerHTML = `
  .inline-person-link:hover {
    opacity: 0.72;
  }

  @media (max-width: 900px) {
    div[style*="grid-template-columns: 1fr 1.6fr"] {
      grid-template-columns: 1fr !important;
    }

    div[style*="grid-template-columns: 0.95fr 1.35fr"] {
      grid-template-columns: 1fr !important;
    }

    div[style*="grid-template-columns: 1fr 1.2fr"] {
      grid-template-columns: 1fr !important;
    }
  }

  @media (max-width: 980px) {
    body {
      overflow-x: hidden;
    }
  }
`;
document.head.appendChild(mediaStyle);