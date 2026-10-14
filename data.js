
const appData = {
  en: [
    {
      id: "severe-bleeding",
      title: "Severe Bleeding",
      icon: "🩸",
      keywords: ["bleeding", "blood", "wound", "cut", "hemorrhage", "gash", "laceration"],
      summary: "Control heavy blood loss from a wound using pressure and dressings.",
      callEmergency: [
        "Blood is spurting or flowing steadily from the wound",
        "Bleeding does not stop after 10 minutes of firm pressure",
        "The wound is large, deep, or caused by a major injury",
        "The person shows signs of shock (pale, clammy, confused, weak)"
      ],
      symptoms: [
        "Steady or spurting flow of blood",
        "Blood soaking through clothing or bandages",
        "Pale, cool, clammy skin",
        "Dizziness, weakness, or confusion",
        "Rapid heart rate or shallow breathing"
      ],
      steps: [
        "Put on disposable gloves if available and expose the wound.",
        "Apply firm, direct pressure with a sterile gauze pad or clean cloth.",
        "If blood soaks through, add more gauze on top — do not remove the first layer.",
        "If the wound is on an arm or leg and no fracture is suspected, raise it above heart level.",
        "Secure the dressing firmly with a bandage once bleeding is controlled.",
        "Keep the person warm, still, and calm, and monitor for signs of shock.",
        "Continue firm pressure until emergency help arrives if bleeding is severe."
      ],
      medKit: ["Disposable gloves", "Sterile gauze pads", "Roller bandage", "Adhesive tape", "Trauma dressing", "Antiseptic wipes", "Emergency blanket"],
      precautions: [
        "Do not remove an embedded object — pack around it and apply pressure beside it.",
        "Do not remove the first blood-soaked dressing; add layers on top.",
        "Do not use a tourniquet unless you are trained and bleeding is life-threatening."
      ],
      // Custom labels needed for the UI shell template
      uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
    },
    {
      id: "burns",
      title: "Burns & Scalds",
      icon: "🔥",
      keywords: ["burn", "scald", "fire", "heat", "blister", "hot water", "steam"],
      summary: "Cool the burn, protect the skin, and prevent infection.",
      callEmergency: [
        "The burn is large, deep, or affects the face, hands, feet, joints, or genitals",
        "The burn is chemical or electrical",
        "The person has difficulty breathing or inhaled smoke",
        "The burn is on a child, infant, or older adult",
        "Signs of shock are present"
      ],
      symptoms: [
        "Red, painful skin (superficial burn)",
        "Blisters or wet, shiny skin (partial-thickness burn)",
        "White, charred, or numb skin (deep burn)",
        "Swelling around the burned area",
        "Difficulty breathing if smoke was inhaled"
      ],
      steps: [
        "Move the person away from the source of the burn.",
        "Cool the burn under cool (not cold) running water for 10–20 minutes.",
        "Remove rings, watches, or tight clothing near the burn before swelling starts.",
        "Cover the burn loosely with a sterile non-stick dressing or clean cling film.",
        "Protect the person from cold and monitor for shock.",
        "Do not break blisters — leave them intact to reduce infection risk."
      ],
      medKit: ["Burn gel / hydrogel dressing", "Sterile non-stick dressings", "Cling film", "Cool running water", "Disposable gloves", "Emergency blanket"],
      precautions: [
        "Do not apply ice, butter, toothpaste, or creams to a burn.",
        "Do not break blisters or remove clothing stuck to the burn.",
        "Do not use adhesive dressings directly on burned skin."
      ],
      uiLabels: {
        emptyState: '🔍 No emergencies match your search.<br />Try “burn”, “choking”, “seizure”, or “bleeding”.',
        callEmergencyTitle: "📞 Call emergency services immediately if:",
        recognizeSigns: "👀 Recognize the signs",
        firstAidTitle: "🩹 First aid — step by step",
        medKitTitle: "🧰 Med kit items to use",
        doNotTitle: "⛔ Do NOT"
      }
    }
    // ... Copy your other original items inside this 'en' array
  ],
  tl: [
    {
      id: "severe-bleeding",
      title: "Malalang Pagdurugo",
      icon: "🩸",
      keywords: ["pagdurugo", "dugo", "sugat", "hiwa", "buka"],
      summary: "Kontrolin ang malakas na pagkawala ng dugo mula sa sugat gamit ang presyur at mga bendahe.",
      callEmergency: [
        "Ang dugo ay bumubuga o patuloy na dumadaloy mula sa sugat",
        "Hindi tumitigil ang pagdurugo pagkatapos ng 10 minutong madiing pagpindot",
        "Ang sugat ay malaki, malalim, o sanhi ng isang malubhang pinsala",
        "Ang tao ay nagpapakita ng mga palatandaan ng shock (maputla, malamig ang pawis, nalilito, mahina)"
      ],
      symptoms: [
        "Patuloy o bumubugang daloy ng dugo",
        "Dugo na tumatagos sa damit o bendahe",
        "Maputla, malamig, at basang-basa ng pawis na balat",
        "Pakahilo, panghihina, o pagkalito",
        "Mabilis na tibok ng puso o mababaw na paghinga"
      ],
      steps: [
        "Magsuot ng disposable gloves kung mayroon at ilantad ang sugat.",
        "Maglapat ng madiin at direktang presyur gamit ang sterile gauze pad o malinis na tela.",
        "Kung tumagos ang dugo, magdagdag pa ng gauze sa ibabaw — huwag alisin ang unang layer.",
        "Kung ang sugat ay nasa braso o binti at walang pinaghihinalaang bali, itaas ito nang mas mataas sa puso.",
        "I-secure ang dressing nang mahigpit gamit ang bandage kapag kontrolado na ang pagdurugo.",
        "Panatilihing mainit, nakahiga, at kalmado ang tao, at bantayan ang mga senyales ng shock.",
        "Ipagpatuloy ang madiing pagpindot hanggang sa dumating ang tulong kung malala ang pagdurugo."
      ],
      medKit: ["Disposable gloves", "Sterile gauze pads", "Roller bandage", "Adhesive tape", "Trauma dressing", "Antiseptic wipes", "Emergency blanket"],
      precautions: [
        "Huwag alisin ang bumaong bagay — lagyan ng padding sa paligid nito at idiin sa gilid nito.",
        "Huwag alisin ang unang dressing na basa ng dugo; magdagdag na lang ng mga layer sa ibabaw.",
        "Huwag gumamit ng tourniquet maliban kung ikaw ay sanay at ang pagdurugo ay kritikal sa buhay."
      ],
      uiLabels: {
        emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang “burn”, “choking”, “seizure”, o “bleeding”.',
        callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
        recognizeSigns: "👀 Kilalanin ang mga senyales",
        firstAidTitle: "🩹 Unang lunas — hakbang-hakbang",
        medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
        doNotTitle: "⛔ Huwag Gawin"
      }
    },
    {
      id: "burns",
      title: "Mga Pasiyok at Paso",
      icon: "🔥",
      keywords: ["paso", "pasiyok", "apoy", "init", "paltos", "mainit na tubig", "singaw"],
      summary: "Palamigin ang paso, protektahan ang balat, at iwasan ang impeksyon.",
      callEmergency: [
        "Ang paso ay malaki, malalim, o nakakaapekto sa mukha, kamay, paa, kasukasuan, o ari",
        "Ang paso ay sanhi ng kemikal o kuryente",
        "Nahihirapang huminga ang tao o nakalanghap ng usok",
        "Ang paso ay nasa bata, sanggol, o matanda",
        "May mga palatandaan ng shock"
      ],
      symptoms: [
        "Namumula at masakit na balat (superficial burn)",
        "Mga paltos o basang balat (partial-thickness burn)",
        "Puti, sunog, o namamanhid na balat (deep burn)",
        "Pamamaga sa paligid ng pasong bahagi",
        "Nahihirapang huminga kung nakalanghap ng usok"
      ],
      steps: [
        "Ilayo ang tao mula sa pinagmulan ng paso.",
        "Palamigin ang paso sa ilalim ng umaagos na tubig (hindi yelo) sa loob ng 10–20 minuto.",
        "Alisin ang mga singsing, orasan, o masikip na damit bago magsimula ang pamamaga.",
        "Takpan ang paso nang maluwag gamit ang sterile non-stick dressing o malinis na cling film.",
        "Protektahan ang tao sa lamig at bantayan kung magpapakita ng shock.",
        "Huwag putukin ang mga paltos — iwanang buo upang mabawasan ang panganib ng impeksyon."
      ],
      medKit: ["Burn gel / hydrogel dressing", "Sterile non-stick dressings", "Cling film", "Running water", "Disposable gloves", "Emergency blanket"],
      precautions: [
        "Huwag lagyan ng yelo, mantikilya, toothpaste, o mga cream ang paso.",
        "Huwag putukin ang mga paltos o alisin ang damit na dumikit sa paso.",
        "Huwag gumamit ng mga adhesive dressing nang direkta sa pasong balat."
      ],
      uiLabels: {
        emptyState: '🔍 Walang tugmang emergency sa iyong hinahanap.<br />Subukan ang “burn”, “choking”, “seizure”, o “bleeding”.',
        callEmergencyTitle: "📞 Tumawag agad sa emergency services kung:",
        recognizeSigns: "👀 Kilalanin ang mga senyales",
        firstAidTitle: "🩹 Unang lunas — hakbang-hakbang",
        medKitTitle: "🧰 Mga gamit sa Med kit na gagamitin",
        doNotTitle: "⛔ Huwag Gawin"
      }
    }
    // ... Ipagpatuloy ang pagsasalin para sa iba pang emergencies dito
  ]
};

export default appData;
