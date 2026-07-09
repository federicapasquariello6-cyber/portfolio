// Dati dei progetti: un solo posto da modificare per aggiungere/aggiornare progetti.
// Aggiungi qui nuovi progetti seguendo la stessa struttura.

export const projects = [
    {
      slug: "portfolio-personale",
      title: "Portfolio personale",
      previewClass: "project-1",
      tags: ["Astro", "CSS"],
      description: "Sito web realizzato con Astro per presentazione CV e progetti.",
  
      problem: `Arrivavo da un percorso in Ingegneria Energetica, senza una riga di codice
      scritta prima. Attraverso il percorso di Armonia ho iniziato a scrivere codice per la
      prima volta: la sfida non era capire la teoria, ma passare dal "capisco cosa fa questa
      riga" al "so lanciare io il codice e vedere una pagina reale prendere forma".`,
  
      approach: `Ho imparato le basi costruendo pagine sul serio: HTML e CSS scritti a mano,
      riga per riga, e Astro come framework per organizzare le pagine e collegarle tra loro.
      Ogni concetto — un selettore CSS, una struttura di cartelle, una route — l'ho capito
      scrivendolo e vedendolo rompersi, poi sistemandolo. Questo sito è il risultato diretto
      di quel percorso: navbar, sfondo, animazioni, pagine di progetto, tutto costruito
      applicando quello che imparavo lezione dopo lezione.`,
  
      outcome: `Il portfolio è la prova pratica di quella base: non un esercizio a sé,
      ma il primo progetto vero in cui "lanciare codice" è diventato uno strumento che
      controllo, non qualcosa che subisco. È tuttora un progetto vivo che continuo ad
      aggiornare mano a mano che imparo cose nuove.`,
  
      role: "Sviluppo front-end",
      stack: "Astro, CSS, JavaScript",
    },
    {
      slug: "progetti-universitari",
      title: "La macchina asincrona e il suo futuro sostenibile",
      previewClass: "project-2",
      tags: ["Tesi", "Ingegneria Energetica"],
      description: "Tesi su ruolo e prospettive sostenibili della macchina asincrona.",
  
      problem: `I motori elettrici pesano per circa il 40% del consumo elettrico
      industriale: anche un piccolo miglioramento nella loro efficienza ha un impatto
      enorme su scala globale. Il motore sincrono a magneti permanenti è oggi il più
      efficiente, ma dipende dalle terre rare — materiali costosi, scarsi e legati a
      equilibri geopolitici delicati, tanto che persino Tesla li usa solo in parte,
      affiancandoli a motori asincroni "di supporto" proprio per ridurne la dipendenza.
      Mi sono chiesta se la macchina asincrona, che non usa magneti permanenti, potesse
      diventare una risposta più sostenibile senza rinunciare all'efficienza.`,
  
      approach: `Ho ricostruito il funzionamento della macchina asincrona partendo dai
      principi dell'elettromagnetismo, fino alle tecniche moderne di controllo
      elettronico. In particolare mi sono concentrata sul controllo diretto di coppia
      (DTC): in parole semplici, un sistema che regola il motore momento per momento in
      base a quanto sta effettivamente lavorando, invece di farlo girare a regime fisso
      e sprecare energia quando non serve — un po' come un termostato intelligente
      rispetto a uno acceso o spento senza via di mezzo. Da qui ho studiato casi reali
      già in produzione: Siemens, con il suo Drivetrain Analyzer Cloud, usa algoritmi di
      intelligenza artificiale per monitorare motori e azionamenti in tempo reale,
      individuare deviazioni dal punto di funzionamento ottimale e generare interventi
      mirati, con un risparmio energetico documentato fino al 20%. ABB applica una
      logica simile nella produzione di acciaio a basse emissioni, combinando motori di
      precisione e monitoraggio digitale per rendere le lavorazioni pesanti più
      efficienti e meno inquinanti.`,
  
      outcome: `La conclusione a cui sono arrivata è che la macchina asincrona, proprio
      perché libera da materiali critici, resta una delle tecnologie più solide su cui
      costruire un'industria più sostenibile — economica, robusta, adatta a una
      produzione su larga scala senza dipendere da risorse scarse. E che l'intelligenza
      artificiale applicata alla sua regolazione non è uno scenario da Industria 5.0
      lontano nel tempo: è già oggi una leva concreta contro l'inquinamento industriale,
      semplicemente facendo funzionare meglio motori che usiamo da oltre un secolo.`,
  
      role: "Ricerca e analisi tecnica — Tesi di laurea",
      stack: "Ricerca, modellazione, analisi tecnica",
    },
    {
      slug: "ui-concepts",
      title: "UI Concepts",
      previewClass: "project-3",
      tags: ["UI", "Design"],
      description: "Prototipi ed esercizi di progettazione di interfacce.",
  
      problem: `Scrivere codice che funziona è una cosa, scrivere un'interfaccia che si
      capisce al primo sguardo è un'altra. Nello stesso percorso di Armonia in cui ho
      imparato le basi tecniche, ho voluto lavorare in parallelo sulla parte di design:
      perché un layout funziona e un altro no, perché un colore guida l'occhio e un altro
      lo confonde.`,
  
      approach: `Ho fatto esercizi mirati di UI, spesso a partire da interfacce che
      trovavo efficaci: le smontavo per capire la logica dietro spaziatura, gerarchia
      dei testi, contrasto, coerenza tra le sezioni. A differenza del portfolio — dove
      l'obiettivo era "costruire una pagina che funziona" — qui l'obiettivo era
      "costruire una pagina che si capisce e comunica bene", prima ancora di scriverne
      il codice definitivo.`,
  
      outcome: `Questi esercizi sono il motivo per cui le scelte di design del mio
      portfolio (spazio nella navbar, gradiente di sfondo, font) non sono decisioni
      casuali: sono l'applicazione diretta di quello che ho allenato qui.`,
  
      role: "UI design & prototipazione",
      stack: "Figma, HTML, CSS",
    },
  ];