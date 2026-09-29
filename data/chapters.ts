export interface Section {
  slug: string;
  titleEn: string;
  titleUr: string;
  page: number;
  content: string;
}

export interface Chapter {
  slug: string;
  number: number;
  titleEn: string;
  titleUr: string;
  icon: string;
  sections: Section[];
}

export const chapters: Chapter[] = [
  // ==================== CHAPTER 1 (100% ENGLISH) ====================
  {
    slug: "chapter-1",
    number: 1,
    titleEn: "Quran & Hadith Sciences",
    titleUr: "Quran & Hadith Sciences",
    icon: "📖",
    sections: [
      // ----------------- SECTION A -----------------
      {
        slug: "uloom-ul-quran",
        titleEn: "Sciences of the Quran (Uloom-ul-Quran)",
        titleUr: "Sciences of the Quran",
        page: 1,
        content: `
<div class="space-y-8 text-left">

  <!-- Student Learning Outcomes -->
  <div class="p-5 rounded-xl border" style="background-color: var(--accent-light); border-color: var(--accent);">
    <h3 class="text-lg font-bold mb-3 flex items-center gap-2" style="color: var(--accent);">
      🎯 Student Learning Outcomes (SLOs)
    </h3>
    <p class="text-sm mb-2 font-medium">After studying this lesson, students will be able to:</p>
    <ul class="text-sm space-y-1.5 list-disc list-inside opacity-90">
      <li>Understand the virtues and distinct characteristics of the Holy Quran (Universality, Eternity, Comprehensiveness, and Perfection).</li>
      <li>Learn the sacred names of the Holy Quran along with their comprehensive meanings.</li>
      <li>Distinguish between Makki and Madani Surahs and understand the fundamental concept of Verses of Legal Rulings (<em>Ayat al-Ahkam</em>).</li>
      <li>Strengthen their faith in the divine origin and miraculous nature of the Holy Quran.</li>
      <li>Acknowledge the Holy Quran as the final, eternal source of guidance and resolve to practice its teachings in daily life.</li>
    </ul>
  </div>

  <!-- Introduction -->
  <section>
    <h3 class="text-xl font-bold mb-3" style="color: var(--accent);">1. Introduction to Uloom-ul-Quran</h3>
    <p class="text-sm leading-relaxed mb-3">
      <strong>Uloom-ul-Quran (Sciences of the Quran)</strong> refers to the vast branch of Islamic knowledge that commentators (<em>Mufassiroon</em>) have derived directly from the contents, style, and context of the Quran. This includes topics such as Makki and Madani Surahs, clear (<em>Muhkamat</em>) and allegorical (<em>Mutashabihat</em>) verses, background of revelation (<em>Asbab al-Nuzul</em>), disjointed letters (<em>Huroof-e-Muqatta'at</em>), and abrogating and abrogated verses (<em>Nasikh wa Mansookh</em>).
    </p>
    <p class="text-sm leading-relaxed mb-3">
      The Holy Quran is the literal Word of Allah and His final divine book, revealed to the Last Prophet, <strong>Hazrat Muhammad ﷺ</strong>, over a period of approximately <strong>twenty-three (23) years</strong>. It serves as universal guidance for all of humanity and stands as the greatest living miracle of the Prophet ﷺ until the Day of Judgment.
    </p>
    <p class="text-sm leading-relaxed">
      The Holy Quran summarizes, consolidates, and perfects the core teachings of all previous heavenly scriptures. Furthermore, Allah Almighty has designated the Holy Quran as the guardian and overseer (<em>Muhaimin</em>) over all preceding revelations.
    </p>
  </section>

  <!-- Key Characteristics -->
  <section>
    <h3 class="text-xl font-bold mb-4" style="color: var(--accent);">2. Distinctive Characteristics of the Holy Quran</h3>

    <!-- 1. Universality -->
    <div class="mb-5 p-4 rounded-xl border" style="background-color: var(--bg-card); border-color: var(--border);">
      <h4 class="text-base font-bold mb-2 flex items-center gap-2" style="color: var(--gold);">
        🌍 (i) Universality (عالمگیریت — Alamgeeriyat)
      </h4>
      <p class="text-sm leading-relaxed mb-3">
        Universality means that the Holy Quran addresses the whole of mankind, not a specific race, nation, or region. While previous divine scriptures were sent to specific communities for a limited period, the Quran is an all-encompassing book containing endless treasures of wisdom and divine intent for all generations.
      </p>
      <p class="text-sm leading-relaxed mb-3">
        In numerous verses, the Quran directly addresses humanity using the universal phrase <em>"Ya Ayyuhan-Naas"</em> (O Mankind!).
      </p>
      <blockquote class="p-4 rounded-lg border-l-4 text-sm italic mb-2" style="background-color: var(--accent-light); border-color: var(--accent);">
        <p class="font-bold mb-1 text-base text-right font-serif">هٰذَا بَلٰغٌ لِّلنَّاسِ</p>
        <p>"This [Quran] is a notification for the people..." <em>(Surah Ibrahim, 14:52)</em></p>
      </blockquote>
      <p class="text-xs opacity-80">Hence, Quranic teachings apply universally across all eras, geographical locations, and civilizations.</p>
    </div>

    <!-- 2. Perfection / Completeness -->
    <div class="mb-5 p-4 rounded-xl border" style="background-color: var(--bg-card); border-color: var(--border);">
      <h4 class="text-base font-bold mb-2" style="color: var(--gold);">
        ✨ (ii) Perfection & Completeness (کاملیت — Kamiliyat)
      </h4>
      <p class="text-sm leading-relaxed mb-3">
        Perfection implies that the guidance in the Holy Quran is entirely complete, flawless, and conclusive. The long chain of divine revelation (<em>Wahi</em>) that began with Hazrat Adam (AS) reached its absolute culmination with Prophet Muhammad ﷺ.
      </p>
      <p class="text-sm leading-relaxed mb-3">
        The religion of Islam was completed upon him, making the Holy Quran the perfected compilation of divine wisdom and an unalterable, complete code of life (<em>Zabita-e-Hayat</em>).
      </p>
      <blockquote class="p-4 rounded-lg border-l-4 text-sm italic" style="background-color: var(--accent-light); border-color: var(--accent);">
        <p class="font-bold mb-1 text-base text-right font-serif">اِنْ هُوَ اِلَّا ذِكْرٌ لِّلْعٰلَمِيْنَ</p>
        <p>"It is not except a reminder to the worlds." <em>(Surah At-Takweer, 81:27)</em></p>
      </blockquote>
    </div>

    <!-- 3. Comprehensiveness -->
    <div class="mb-5 p-4 rounded-xl border" style="background-color: var(--bg-card); border-color: var(--border);">
      <h4 class="text-base font-bold mb-2" style="color: var(--gold);">
        📚 (iii) Comprehensiveness (جامعیت — Jami'iyyat)
      </h4>
      <p class="text-sm leading-relaxed mb-3">
        Comprehensiveness indicates that the Holy Quran provides complete guidance for every single sphere of human existence. While some earlier scriptures focused solely on moral advice, others on supplications, or strictly on legal codes, the Quran unites beliefs (<em>Aqa'id</em>), acts of worship (<em>Ibadat</em>), interpersonal transactions (<em>Mu'amalat</em>), social etiquette (<em>Mu'asharat</em>), morality (<em>Akhlaqiyyat</em>), and state laws into a unified whole.
      </p>
      <blockquote class="p-4 rounded-lg border-l-4 text-sm italic" style="background-color: var(--accent-light); border-color: var(--accent);">
        <p class="font-bold mb-1 text-base text-right font-serif">وَنَزَّلْنَا عَلَيْكَ الْكِتٰبَ تِبْيَانًا لِّكُلِّ شَيْءٍ</p>
        <p>"And We have sent down to you the Book as clarification for all things..." <em>(Surah An-Nahl, 16:89)</em></p>
      </blockquote>
    </div>

    <!-- 4. Eternity / Perpetuity -->
    <div class="p-4 rounded-xl border" style="background-color: var(--bg-card); border-color: var(--border);">
      <h4 class="text-base font-bold mb-2" style="color: var(--gold);">
        ⏳ (iv) Eternity / Perpetuity (ابدیت — Abadiyyat)
      </h4>
      <p class="text-sm leading-relaxed">
        Eternity signifies that the teachings, values, and laws of the Holy Quran are valid for all times to come. It serves as an everlasting criterion (<em>Meezan</em>) for distinguishing right from wrong. Its teachings align with pure human nature (<em>Fitrah</em>), ensuring that every generation finds fresh, practical solutions to modern problems without any need for revision or replacement.
      </p>
    </div>
  </section>

  <!-- Sacred Names Table -->
  <section>
    <h3 class="text-xl font-bold mb-3" style="color: var(--accent);">3. Sacred Names of the Holy Quran</h3>
    <p class="text-sm leading-relaxed mb-4">
      The Holy Quran mentions multiple personal and attributive titles that highlight its nature, prestige, and divine function:
    </p>

    <div class="overflow-x-auto rounded-xl border" style="border-color: var(--border);">
      <table class="w-full text-xs sm:text-sm text-left border-collapse">
        <thead>
          <tr style="background-color: var(--accent); color: white;">
            <th class="p-3 font-bold border-b">#</th>
            <th class="p-3 font-bold border-b">Sacred Name</th>
            <th class="p-3 font-bold border-b">English Meaning & Significance</th>
          </tr>
        </thead>
        <tbody class="divide-y" style="divide-color: var(--border);">
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">1</td>
            <td class="p-3 font-semibold">Al-Quran (الْقُرْآنُ)</td>
            <td class="p-3">The Most Frequently Recited Book in existence.</td>
          </tr>
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">2</td>
            <td class="p-3 font-semibold">Al-Dhikr (الذِّكْرُ)</td>
            <td class="p-3">The Reminder, full of admonition and counsel.</td>
          </tr>
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">3</td>
            <td class="p-3 font-semibold">Al-Furqan (الْفُرْقَانُ)</td>
            <td class="p-3">The Criterion that decisively separates truth from falsehood.</td>
          </tr>
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">4</td>
            <td class="p-3 font-semibold">Al-Kitab (الْكِتَابُ)</td>
            <td class="p-3">The Supreme Divine Book of Allah.</td>
          </tr>
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">5</td>
            <td class="p-3 font-semibold">Al-Tanzeel (التَّنْزِيْلُ)</td>
            <td class="p-3">The Divine Revelation sent down from on high.</td>
          </tr>
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">6</td>
            <td class="p-3 font-semibold">Al-Noor (النُّوْرُ)</td>
            <td class="p-3">The Illuminating Light that guides humanity out of darkness.</td>
          </tr>
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">7</td>
            <td class="p-3 font-semibold">Al-Burhan (الْبُرْهَانُ)</td>
            <td class="p-3">The Clear and Undeniable Proof.</td>
          </tr>
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">8</td>
            <td class="p-3 font-semibold">Al-Mubeen (الْمُبِيْنُ)</td>
            <td class="p-3">The Manifest and Self-Evident Guidance.</td>
          </tr>
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">9</td>
            <td class="p-3 font-semibold">Al-Azeez (الْعَزِيْزُ)</td>
            <td class="p-3">The Mighty and Inimitable Book that cannot be defeated.</td>
          </tr>
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">10</td>
            <td class="p-3 font-semibold">Al-Kareem (الْكَرِيْمُ)</td>
            <td class="p-3">The Noble and Generous Scripture.</td>
          </tr>
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">11</td>
            <td class="p-3 font-semibold">Al-Shifa (الشِّفَاءُ)</td>
            <td class="p-3">The Source of Spiritual and Moral Healing.</td>
          </tr>
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">12</td>
            <td class="p-3 font-semibold">Al-Ilm (الْعِلْمُ)</td>
            <td class="p-3">The True Reservoir of Knowledge and Divine Insight.</td>
          </tr>
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">13</td>
            <td class="p-3 font-semibold">Al-Hakeem (الْحَكِيْمُ)</td>
            <td class="p-3">The Book full of Wisdom and Prudence.</td>
          </tr>
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">14</td>
            <td class="p-3 font-semibold">Al-Majeed (الْمَجِيْدُ)</td>
            <td class="p-3">The Glorious and Sublime Revelation.</td>
          </tr>
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">15</td>
            <td class="p-3 font-semibold">Al-Mubarak (الْمُبَارَكُ)</td>
            <td class="p-3">The Blessed Scripture loaded with eternal benefit.</td>
          </tr>
          <tr class="hover:bg-emerald-500/5">
            <td class="p-3 font-bold" style="color: var(--accent);">16</td>
            <td class="p-3 font-semibold">Al-Haqq (الْحَقُّ)</td>
            <td class="p-3">The Absolute Truth and Pure Reality.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Makki vs Madani Surahs -->
  <section>
    <h3 class="text-xl font-bold mb-3" style="color: var(--accent);">4. Makki and Madani Surahs</h3>
    <p class="text-sm leading-relaxed mb-4">
      The Holy Quran consists of <strong>114 Surahs</strong>. Scholars categorize these based on the major turning point in Islamic history: the <strong>Migration (Hijrah) to Madinah</strong>.
    </p>

    <div class="grid md:grid-cols-2 gap-4 mb-4">
      <div class="p-4 rounded-xl border" style="background-color: var(--bg-card); border-color: var(--border);">
        <h4 class="font-bold text-sm mb-2" style="color: var(--accent);">📍 Makki Surahs (Revealed before Hijrah)</h4>
        <ul class="text-xs space-y-1.5 list-disc list-inside opacity-90 leading-relaxed">
          <li><strong>Primary Audience:</strong> Polytheists (<em>Mushrikeen</em>) of Makkah.</li>
          <li><strong>Core Themes:</strong> Oneness of Allah (<em>Tawheed</em>), Prophethood (<em>Risalat</em>), Resurrection, and the Day of Judgment (<em>Akhirat</em>).</li>
          <li><strong>Style & Characteristics:</strong> Highly eloquent, brief, rhyming verses refuting idolatry; narratives of previous nations; moral reform and perseverance under persecution.</li>
        </ul>
      </div>

      <div class="p-4 rounded-xl border" style="background-color: var(--bg-card); border-color: var(--border);">
        <h4 class="font-bold text-sm mb-2" style="color: var(--gold);">🏛️ Madani Surahs (Revealed after Hijrah)</h4>
        <ul class="text-xs space-y-1.5 list-disc list-inside opacity-90 leading-relaxed">
          <li><strong>Primary Audience:</strong> Believers (<em>Mu'minoon</em>), People of the Book, and Hypocrites.</li>
          <li><strong>Core Themes:</strong> Establishment of the Islamic state, legal rulings, family laws, civil conduct, inheritance, treaties, and rules of engagement (<em>Jihad</em>).</li>
          <li><strong>Style & Characteristics:</strong> Clear, elaborate, and structured tone; frequently addresses believers with: <em>"O you who have believed!"</em> (یٰۤاَیُّهَا الَّذِیْنَ اٰمَنُوْا).</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Ayat al-Ahkam -->
  <section>
    <h3 class="text-xl font-bold mb-2" style="color: var(--accent);">5. Verses of Legal Rulings (Ayat al-Ahkam)</h3>
    <p class="text-sm leading-relaxed mb-3">
      <strong>Ayat al-Ahkam</strong> are those specific verses of the Holy Quran that prescribe legal injunctions, statutory duties, and commandments of Shariah. These encompass rituals of worship, financial transactions, matrimonial laws, criminal justice, and penal sanctions (<em>Hudood & Qisas</em>).
    </p>
    <p class="text-sm leading-relaxed">
      Islamic jurists (<em>Fuqaha</em>) rely on these verses as the primary bedrock for formulating Islamic Jurisprudence (<em>Fiqh</em>). History bears witness that nations that adhered to Quranic ordinances achieved unmatched prosperity and leadership in this world and eternal success in the hereafter.
    </p>
  </section>

  <!-- Solved Exercises -->
  <section class="mt-10 pt-6 border-t" style="border-color: var(--border);">
    <h3 class="text-2xl font-extrabold mb-6" style="color: var(--accent);">📝 Textbook Exercise (Solved)</h3>

    <!-- Question 1: MCQs -->
    <div class="mb-8">
      <h4 class="font-bold text-base mb-4" style="color: var(--gold);">Q1: Choose the correct option.</h4>
      
      <div class="space-y-4 text-sm">
        <div class="p-3 rounded-lg border" style="background-color: var(--bg-card); border-color: var(--border);">
          <p class="font-semibold mb-2">(i) The greatest miracle of the Holy Prophet Muhammad ﷺ is:</p>
          <div class="grid grid-cols-2 gap-2 text-xs opacity-90">
            <span class="p-2 rounded font-bold" style="background-color: var(--accent-light); color: var(--accent);">✔ (A) The Holy Quran</span>
            <span>(B) Isra and Mi'raj</span>
            <span>(C) Splitting of the Moon</span>
            <span>(D) Vision of the Sun</span>
          </div>
        </div>

        <div class="p-3 rounded-lg border" style="background-color: var(--bg-card); border-color: var(--border);">
          <p class="font-semibold mb-2">(ii) Regarding previous heavenly scriptures, the Holy Quran is a:</p>
          <div class="grid grid-cols-2 gap-2 text-xs opacity-90">
            <span>(A) Translation</span>
            <span class="p-2 rounded font-bold" style="background-color: var(--accent-light); color: var(--accent);">✔ (B) Guardian/Overseer (Muhaimin)</span>
            <span>(C) Commentary</span>
            <span>(D) Preface</span>
          </div>
        </div>

        <div class="p-3 rounded-lg border" style="background-color: var(--bg-card); border-color: var(--border);">
          <p class="font-semibold mb-2">(iii) The definitive solutions and guidance for all problems till the Day of Judgment reside in:</p>
          <div class="grid grid-cols-2 gap-2 text-xs opacity-90">
            <span>(A) The Torah</span>
            <span>(B) The Gospel (Injeel)</span>
            <span>(C) The Psalms (Zabur)</span>
            <span class="p-2 rounded font-bold" style="background-color: var(--accent-light); color: var(--accent);">✔ (D) The Holy Quran</span>
          </div>
        </div>

        <div class="p-3 rounded-lg border" style="background-color: var(--bg-card); border-color: var(--border);">
          <p class="font-semibold mb-2">(iv) The book possessing a comprehensive narrative on beliefs, worship, social life, and ethics is:</p>
          <div class="grid grid-cols-2 gap-2 text-xs opacity-90">
            <span class="p-2 rounded font-bold" style="background-color: var(--accent-light); color: var(--accent);">✔ (A) The Holy Quran</span>
            <span>(B) The Torah</span>
            <span>(C) The Gospel</span>
            <span>(D) The Psalms</span>
          </div>
        </div>

        <div class="p-3 rounded-lg border" style="background-color: var(--bg-card); border-color: var(--border);">
          <p class="font-semibold mb-2">(v) The Makki Surahs mainly articulate:</p>
          <div class="grid grid-cols-2 gap-2 text-xs opacity-90">
            <span>(A) Civil and family laws</span>
            <span>(B) Affairs of state governance</span>
            <span>(C) Rules of Jihad and armed combat</span>
            <span class="p-2 rounded font-bold" style="background-color: var(--accent-light); color: var(--accent);">✔ (D) Tawheed (Monotheism) and Risalat (Prophethood)</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Question 2: Short Answers -->
    <div class="mb-8">
      <h4 class="font-bold text-base mb-4" style="color: var(--gold);">Q2: Short Answer Questions</h4>
      
      <div class="space-y-3 text-sm">
        <details class="p-4 rounded-xl border group" style="background-color: var(--bg-card); border-color: var(--border);">
          <summary class="font-semibold cursor-pointer list-none flex justify-between items-center">
            <span>(i) The Holy Quran is a universal book. Explain briefly.</span>
            <span class="text-xs font-bold transition group-open:rotate-180" style="color: var(--accent);">▼</span>
          </summary>
          <p class="mt-3 text-xs leading-relaxed opacity-90 pt-2 border-t" style="border-color: var(--border);">
            <strong>Answer:</strong> The Holy Quran is universal because its guidance is addressed to all mankind rather than a particular tribe, nation, or era. It uses the call <em>"O Mankind!"</em> and provides eternal principles that govern human life across all eras and geographical borders.
          </p>
        </details>

        <details class="p-4 rounded-xl border group" style="background-color: var(--bg-card); border-color: var(--border);">
          <summary class="font-semibold cursor-pointer list-none flex justify-between items-center">
            <span>(ii) Write a brief note on the Eternity (Abadiyyat) of the Holy Quran.</span>
            <span class="text-xs font-bold transition group-open:rotate-180" style="color: var(--accent);">▼</span>
          </summary>
          <p class="mt-3 text-xs leading-relaxed opacity-90 pt-2 border-t" style="border-color: var(--border);">
            <strong>Answer:</strong> The teachings of the Quran are preserved from alteration and remain fully applicable till the Day of Resurrection. Because its tenets reflect universal human nature, people of all times find relevant, practical guidance within its verses.
          </p>
        </details>

        <details class="p-4 rounded-xl border group" style="background-color: var(--bg-card); border-color: var(--border);">
          <summary class="font-semibold cursor-pointer list-none flex justify-between items-center">
            <span>(iii) Give the meanings of any four sacred names of the Holy Quran.</span>
            <span class="text-xs font-bold transition group-open:rotate-180" style="color: var(--accent);">▼</span>
          </summary>
          <div class="mt-3 text-xs leading-relaxed opacity-90 pt-2 border-t space-y-1" style="border-color: var(--border);">
            <p><strong>1. Al-Furqan:</strong> The Criterion that distinguishes truth from falsehood.</p>
            <p><strong>2. Al-Noor:</strong> The Illuminating Light that clears doubts and darkness.</p>
            <p><strong>3. Al-Shifa:</strong> The divine cure for spiritual, moral, and ideological ailments.</p>
            <p><strong>4. Al-Dhikr:</strong> The sacred reminder and advice for humanity.</p>
          </div>
        </details>

        <details class="p-4 rounded-xl border group" style="background-color: var(--bg-card); border-color: var(--border);">
          <summary class="font-semibold cursor-pointer list-none flex justify-between items-center">
            <span>(iv) State any two differences between Makki and Madani Surahs.</span>
            <span class="text-xs font-bold transition group-open:rotate-180" style="color: var(--accent);">▼</span>
          </summary>
          <div class="mt-3 text-xs leading-relaxed opacity-90 pt-2 border-t space-y-1.5" style="border-color: var(--border);">
            <p><strong>1. Timeline:</strong> Makki Surahs were revealed before the Hijrah to Madinah, whereas Madani Surahs were revealed after the Hijrah.</p>
            <p><strong>2. Content:</strong> Makki Surahs emphasize basic creed (Tawheed, Risalat, Akhirat) and concise eloquence, while Madani Surahs outline detailed state laws, social legislation, and community ethics.</p>
          </div>
        </details>

        <details class="p-4 rounded-xl border group" style="background-color: var(--bg-card); border-color: var(--border);">
          <summary class="font-semibold cursor-pointer list-none flex justify-between items-center">
            <span>(v) What is meant by Ayat al-Ahkam?</span>
            <span class="text-xs font-bold transition group-open:rotate-180" style="color: var(--accent);">▼</span>
          </summary>
          <p class="mt-3 text-xs leading-relaxed opacity-90 pt-2 border-t" style="border-color: var(--border);">
            <strong>Answer:</strong> <em>Ayat al-Ahkam</em> are the legal verses of the Holy Quran that specify Shariah laws pertaining to acts of worship, financial transactions, marital life, inheritance, and penal codes. Jurists use them as the primary foundation for Islamic Law (Fiqh).
          </p>
        </details>
      </div>
    </div>

    <!-- Question 3: Long Question -->
    <div>
      <h4 class="font-bold text-base mb-3" style="color: var(--gold);">Q3: Long Answer Question</h4>
      <div class="p-4 rounded-xl border" style="background-color: var(--bg-card); border-color: var(--border);">
        <p class="font-semibold text-sm mb-2">Write a detailed essay on the distinctive characteristics of the Holy Quran.</p>
        <p class="text-xs opacity-80 leading-relaxed">
          <em>Tip for Board Exams:</em> In your response, structure your answer under the four major pillars: <strong>(1) Universality (Alamgeeriyat)</strong> with Surah Ibrahim: 52, <strong>(2) Perfection (Kamiliyat)</strong> with Surah At-Takweer: 27, <strong>(3) Comprehensiveness (Jami'iyyat)</strong> with Surah An-Nahl: 89, and <strong>(4) Perpetuity & Inimitability (Abadiyyat)</strong>. Refer directly to the main body notes above.
        </p>
      </div>
    </div>
  </section>

</div>
`,
      },

      // ----------------- SECTION B -----------------
      {
        slug: "uloom-ul-hadith",
        titleEn: "Sciences of Hadith (Uloom-ul-Hadith)",
        titleUr: "Sciences of Hadith",
        page: 5,
        content: `
<div class="space-y-8 text-left">

  <!-- SLOs -->
  <div class="p-5 rounded-xl border" style="background-color: var(--accent-light); border-color: var(--accent);">
    <h3 class="text-lg font-bold mb-3 flex items-center gap-2" style="color: var(--accent);">
      🎯 Student Learning Outcomes (SLOs)
    </h3>
    <p class="text-sm mb-2 font-medium">After studying this lesson, students will be able to:</p>
    <ul class="text-sm space-y-1.5 list-disc list-inside opacity-90">
      <li>Understand the absolute authority (<em>Hujjiyyah</em>) and preservation of Hadith in Islamic law.</li>
      <li>Examine the collection and systematic compilation of Hadith across the First, Second, and Third Eras.</li>
      <li>Identify the canonical books of Hadith (<em>Sihah al-Sittah</em> and <em>Usul al-Arba'ah</em>) and Hadith terminologies.</li>
      <li>Analyze the prescribed Hadiths and comprehend their practical application in daily living.</li>
      <li>Refute the misconceptions and skepticism fabricated by Hadith rejectors (<em>Munkireen-e-Hadith</em>) and Orientalists (<em>Mustashriqeen</em>).</li>
    </ul>
  </div>

  <!-- Definition & Authority of Hadith -->
  <section>
    <h3 class="text-xl font-bold mb-3" style="color: var(--accent);">1. Definition & Status of Hadith</h3>
    <p class="text-sm leading-relaxed mb-3">
      The Holy Quran is the supreme foundation of Islamic faith and law. Allah Almighty revealed it to His Final Messenger, Hazrat Muhammad ﷺ, and entrusted him with the vital responsibility of interpreting, demonstrating, and expounding its verses.
    </p>

    <!-- Technical Definition -->
    <div class="p-4 rounded-xl border mb-4" style="background-color: var(--bg-card); border-color: var(--border);">
      <h4 class="font-bold text-sm mb-2" style="color: var(--gold);">Definition of Hadith in Shariah:</h4>
      <p class="text-sm leading-relaxed mb-3">
        In Islamic terminology, <strong>Hadith</strong> refers to any <strong>saying (<em>Qawl</em>)</strong>, <strong>action (<em>Fi'l</em>)</strong>, <strong>tacit approval (<em>Taqreer</em>)</strong>, or <strong>physical/moral attribute (<em>Sifah / Shama'il</em>)</strong> of the Prophet Muhammad ﷺ.
      </p>
      <ul class="text-xs space-y-1.5 list-disc list-inside opacity-90">
        <li><strong>Tacit Approval (Taqreer):</strong> Any statement or action performed by a Companion in the presence of the Prophet ﷺ which he witnessed and did not forbid or object to.</li>
        <li><strong>Attributes (Sifah / Shama'il):</strong> Descriptions of the Prophet's physical appearance (e.g., complexion, hair) and his sublime moral virtues.</li>
      </ul>
    </div>

    <p class="text-sm leading-relaxed mb-3">
      Just as believing in the Holy Quran is mandatory upon every Muslim, obeying and implementing the Hadith of the Prophet ﷺ is a fundamental requirement of faith. The entire Muslim Ummah is in complete consensus (<em>Ijma</em>) that the Quran cannot be properly understood or implemented without the Prophetic Sunnah.
    </p>

    <blockquote class="p-4 rounded-lg border-l-4 text-sm italic" style="background-color: var(--accent-light); border-color: var(--accent);">
      <p class="font-bold mb-1 text-base text-right font-serif">وَمَاۤ اٰتٰىكُمُ الرَّسُوْلُ فَخُذُوْهُ ۪ وَمَا نَهٰىكُمْ عَنْهُ فَانْتَهُوْا ۚ</p>
      <p>"And whatever the Messenger gives you, take it; and what he forbids you, abstain from it." <em>(Surah Al-Hashr, 59:7)</em></p>
    </blockquote>
  </section>

  <!-- Three Eras of Compilation -->
  <section>
    <h3 class="text-xl font-bold mb-4" style="color: var(--accent);">2. The Three Eras of Hadith Compilation</h3>

    <!-- 1st Era -->
    <div class="mb-5 p-4 rounded-xl border" style="background-color: var(--bg-card); border-color: var(--border);">
      <h4 class="font-bold text-sm mb-2" style="color: var(--gold);">
        📜 First Era: The Prophetic Era & Companions (Ehd-e-Sahabah)
      </h4>
      <p class="text-sm leading-relaxed mb-2">
        During the lifetime of the Prophet ﷺ and the era of the Sahabah (RA), the preservation of Hadith was conducted with extraordinary vigilance through memorization, practical modeling, and written manuscripts.
      </p>
      <ul class="text-xs space-y-1 list-disc list-inside opacity-90">
        <li>Written collections existed in the possession of prominent Sahabah such as <strong>Hazrat Ali (RA)</strong>, <strong>Hazrat Abu Hurairah (RA)</strong>, <strong>Hazrat Jabir ibn Abdullah (RA)</strong>, and <strong>Hazrat Abdullah ibn Amr ibn al-Aas (RA)</strong> (his famous manuscript: <em>Al-Sahifah al-Sadiqah</em>).</li>
        <li>In the subsequent generation of Successors (<em>Tabi'un</em>), Hadith preservation grew into an organized movement led by scholars like <strong>Saeed ibn al-Musayyib</strong>, <strong>Hasan al-Basri</strong>, and <strong>Muhammad ibn Sirin (RA)</strong>.</li>
      </ul>
    </div>

    <!-- 2nd Era -->
    <div class="mb-5 p-4 rounded-xl border" style="background-color: var(--bg-card); border-color: var(--border);">
      <h4 class="font-bold text-sm mb-2" style="color: var(--gold);">
        🏛️ Second Era: Systematic State Compilation (99 AH onwards)
      </h4>
      <p class="text-sm leading-relaxed mb-2">
        Official, state-backed compilation of Hadith began under the righteous Umayyad Caliph <strong>Hazrat Umar ibn Abdul Aziz (RA)</strong> around 99 AH.
      </p>
      <ul class="text-xs space-y-1.5 list-disc list-inside opacity-90">
        <li>Key scholars: <strong>Imam Ibn Shihab al-Zuhri</strong>, <strong>Imam Sha'bi</strong>, <strong>Imam Ja'far al-Sadiq</strong>, <strong>Imam Abu Hanifa</strong>, <strong>Imam Malik</strong>, <strong>Imam Sufyan al-Thawri</strong>, and <strong>Imam al-Shafi'i (RA)</strong>.</li>
        <li>Hadiths were categorized by subject matter into dedicated formats such as <em>Muwatta</em>, <em>Musnad</em>, <em>Sunan</em>, and <em>Musannaf</em>.</li>
        <li>Famous works of this era: <em>Muwatta Imam Malik</em>, <em>Musnad Ahmad ibn Hanbal</em>, <em>Musannaf Abd al-Razzaq</em>, and <em>Musannaf Ibn Abi Shaybah</em>.</li>
      </ul>
    </div>

    <!-- 3rd Era -->
    <div class="p-4 rounded-xl border" style="background-color: var(--bg-card); border-color: var(--border);">
      <h4 class="font-bold text-sm mb-2" style="color: var(--gold);">
        ⭐ Third Era: Golden Age of Scrutiny & Canonical Books (3rd Century AH)
      </h4>
      <p class="text-sm leading-relaxed mb-2">
        The 3rd Century Hijri marks the zenith of Hadith scholarship. In this era, rigorous scientific verification methods were developed to scrutinize the text (<em>Matn</em>) and the chain of narrators (<em>Isnad</em>).
      </p>
      <ul class="text-xs space-y-1.5 list-disc list-inside opacity-90">
        <li><strong>Ilm Asma' al-Rijal & Jarh wa Ta'deel:</strong> Critical biographical evaluation of narrators was established to test the honesty, memory, and accuracy of every narrator.</li>
        <li>Rigid separation of authentic narrations (<em>Sahih</em>) from weak (<em>Da'if</em>) or fabricated narrations.</li>
        <li>Compilation of the master canonical collections: <strong>Sihah al-Sittah</strong>.</li>
      </ul>
    </div>
  </section>

  <!-- Canonical Books Tables -->
  <section>
    <h3 class="text-xl font-bold mb-3" style="color: var(--accent);">3. Canonical Books of Hadith</h3>

    <!-- Sihah Sittah -->
    <div class="mb-6">
      <h4 class="text-sm font-bold mb-2" style="color: var(--gold);">
        📚 Al-Sihah al-Sittah (The Six Authentic Books of Hadith - Sunni Tradition)
      </h4>
      <div class="overflow-x-auto rounded-xl border" style="border-color: var(--border);">
        <table class="w-full text-xs sm:text-sm text-left border-collapse">
          <thead>
            <tr style="background-color: var(--accent); color: white;">
              <th class="p-2.5 border-b font-bold">#</th>
              <th class="p-2.5 border-b font-bold">Book Title</th>
              <th class="p-2.5 border-b font-bold">Author / Compiler</th>
            </tr>
          </thead>
          <tbody class="divide-y" style="divide-color: var(--border);">
            <tr><td class="p-2.5 font-bold" style="color: var(--accent);">(i)</td><td class="p-2.5 font-semibold">Sahih al-Bukhari</td><td class="p-2.5">Muhammad ibn Isma'il al-Bukhari (RA)</td></tr>
            <tr><td class="p-2.5 font-bold" style="color: var(--accent);">(ii)</td><td class="p-2.5 font-semibold">Sahih Muslim</td><td class="p-2.5">Muslim ibn al-Hajjaj al-Qushayri (RA)</td></tr>
            <tr><td class="p-2.5 font-bold" style="color: var(--accent);">(iii)</td><td class="p-2.5 font-semibold">Sunan Abi Dawood</td><td class="p-2.5">Sulayman ibn al-Ash'ath al-Sijistani (RA)</td></tr>
            <tr><td class="p-2.5 font-bold" style="color: var(--accent);">(iv)</td><td class="p-2.5 font-semibold">Jami' al-Tirmidhi</td><td class="p-2.5">Muhammad ibn 'Isa al-Tirmidhi (RA)</td></tr>
            <tr><td class="p-2.5 font-bold" style="color: var(--accent);">(v)</td><td class="p-2.5 font-semibold">Sunan al-Nasa'i</td><td class="p-2.5">Ahmad ibn Shu'ayb al-Nasa'i (RA)</td></tr>
            <tr><td class="p-2.5 font-bold" style="color: var(--accent);">(vi)</td><td class="p-2.5 font-semibold">Sunan Ibn Majah</td><td class="p-2.5">Muhammad ibn Yazid Ibn Majah (RA)</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Usul al-Arba'ah -->
    <div>
      <h4 class="text-sm font-bold mb-2" style="color: var(--gold);">
        📖 Al-Usul al-Arba'ah (The Four Fundamental Books - Shia Tradition)
      </h4>
      <div class="overflow-x-auto rounded-xl border" style="border-color: var(--border);">
        <table class="w-full text-xs sm:text-sm text-left border-collapse">
          <thead>
            <tr style="background-color: var(--accent); color: white;">
              <th class="p-2.5 border-b font-bold">#</th>
              <th class="p-2.5 border-b font-bold">Book Title</th>
              <th class="p-2.5 border-b font-bold">Author / Compiler</th>
            </tr>
          </thead>
          <tbody class="divide-y" style="divide-color: var(--border);">
            <tr><td class="p-2.5 font-bold" style="color: var(--accent);">1</td><td class="p-2.5 font-semibold">Al-Kafi</td><td class="p-2.5">Abu Ja'far Muhammad ibn Ya'qub al-Kulayni (RA)</td></tr>
            <tr><td class="p-2.5 font-bold" style="color: var(--accent);">2</td><td class="p-2.5 font-semibold">Man La Yahduruhu al-Faqih</td><td class="p-2.5">Abu Ja'far Muhammad ibn Ali ibn Babawayh al-Qummi (RA)</td></tr>
            <tr><td class="p-2.5 font-bold" style="color: var(--accent);">3</td><td class="p-2.5 font-semibold">Al-Istibsar</td><td class="p-2.5">Abu Ja'far Muhammad ibn al-Hasan al-Tusi (RA)</td></tr>
            <tr><td class="p-2.5 font-bold" style="color: var(--accent);">4</td><td class="p-2.5 font-semibold">Tahdhib al-Ahkam</td><td class="p-2.5">Abu Ja'far Muhammad ibn al-Hasan al-Tusi (RA)</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Terminology & Orientalists -->
  <section class="grid md:grid-cols-2 gap-4">
    <div class="p-4 rounded-xl border" style="background-color: var(--bg-card); border-color: var(--border);">
      <h4 class="font-bold text-sm mb-2" style="color: var(--gold);">⚖️ Key Hadith Classifications</h4>
      <ul class="text-xs space-y-1.5 opacity-90 leading-relaxed">
        <li><strong>Marfu' (مرفوع):</strong> A narration directly attributed to the Prophet Muhammad ﷺ.</li>
        <li><strong>Mawquf (موقوف):</strong> A narration attributed to a Sahabi (Companion).</li>
        <li><strong>Sahih (صحیح):</strong> An authentic Hadith with an unbroken chain of upright, reliable narrators.</li>
        <li><strong>Da'if (ضعیف):</strong> A weak Hadith that lacks one or more conditions of authenticity.</li>
      </ul>
    </div>

    <div class="p-4 rounded-xl border" style="background-color: var(--bg-card); border-color: var(--border);">
      <h4 class="font-bold text-sm mb-2" style="color: var(--gold);">🛡️ Refuting the Orientalists (Mustashriqeen)</h4>
      <p class="text-xs leading-relaxed opacity-90">
        <strong>Orientalists</strong> are Western non-Muslim writers who studied Islamic sciences with the underlying motive of stirring doubts regarding Islamic heritage.
      </p>
      <p class="text-xs leading-relaxed opacity-90 mt-2">
        Their assertion that Hadiths were not recorded until the 3rd century AH is historically fraudulent. The 3rd century was not the beginning of compilation, but the peak era of verification, categorization, and encyclopedia-level indexing.
      </p>
    </div>
  </section>

  <!-- Selected Prescribed Hadiths -->
  <section>
    <h3 class="text-xl font-bold mb-3" style="color: var(--accent);">4. Selected Hadiths in Syllabus</h3>

    <div class="space-y-4">
      <!-- Hadith 1 -->
      <div class="p-4 rounded-xl border" style="background-color: var(--bg-card); border-color: var(--border);">
        <p class="font-bold text-xs mb-2" style="color: var(--accent);">HADITH #1: Value of Religious Understanding</p>
        <blockquote class="text-base font-serif text-right mb-2 p-2 rounded" style="background-color: var(--accent-light);">
          مَنْ يُّرِدِ اللّٰهُ بِهٖ خَيْرًا يَّفَقِّهْهُ فِي الدِّيْنِ
        </blockquote>
        <p class="text-xs font-semibold mb-1">
          "Whomever Allah intends good for, He grants him deep comprehension (Fiqh) of the religion."
        </p>
        <p class="text-[10px] opacity-70">Sources: Sahih al-Bukhari (71), Al-Kafi (Vol. 1, p. 33)</p>
      </div>

      <!-- Hadith 2 -->
      <div class="p-4 rounded-xl border" style="background-color: var(--bg-card); border-color: var(--border);">
        <p class="font-bold text-xs mb-2" style="color: var(--accent);">HADITH #2: Importance of Noble Character</p>
        <blockquote class="text-base font-serif text-right mb-2 p-2 rounded" style="background-color: var(--accent-light);">
          فَمَا شَيْءٌ اَثْقَلُ فِيْ مِيْزَانِ الْمُؤْمِنِ يَوْمَ الْقِيٰمَةِ مِنْ خُلُقٍ حَسَنٍ وَاِنَّ اللّٰهَ لَيُبْغِضُ الْفَاحِشَ الْبَذِيْءَ
        </blockquote>
        <p class="text-xs font-semibold mb-1">
          "There is nothing heavier on the scale of a believer on the Day of Resurrection than good character, and indeed Allah detests the shameless, foul-mouthed person."
        </p>
        <p class="text-[10px] opacity-70">Sources: Jami' al-Tirmidhi (2002), Mustadrak al-Wasa'il (Vol. 8, p. 443)</p>
      </div>
    </div>
  </section>

</div>
`,
      },
    ],
  },

  // ==================== CHAPTER 2 ====================
  {
    slug: "chapter-2",
    number: 2,
    titleEn: "Faith & Worship",
    titleUr: "ایمانیات و عبادات",
    icon: "🕌",
    sections: [
      {
        slug: "tauheed",
        titleEn: "Arguments & Demands of Tawheed",
        titleUr: "توحید کے دلائل اور تقاضے",
        page: 13,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "risalat",
        titleEn: "Characteristics of Prophethood of Muhammad ﷺ",
        titleUr: "رسالتِ محمدی ﷺ کی خصوصیات",
        page: 20,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "malaika",
        titleEn: "Belief in Angels",
        titleUr: "ملائکہ پر ایمان",
        page: 26,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "kutub",
        titleEn: "Belief in Divine Books",
        titleUr: "کتبِ سماویہ پر ایمان",
        page: 29,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "akhirat",
        titleEn: "Belief in the Hereafter",
        titleUr: "آخرت پر ایمان",
        page: 33,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "namaz",
        titleEn: "Philosophy of Salah (Prayer)",
        titleUr: "فلسفۂ نماز",
        page: 38,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "zakat",
        titleEn: "Philosophy of Zakat & Charity",
        titleUr: "فلسفۂ زکوٰۃ و صدقات",
        page: 43,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "saum",
        titleEn: "Philosophy of Fasting",
        titleUr: "فلسفۂ صوم",
        page: 47,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "hajj",
        titleEn: "Philosophy of Hajj & Sacrifice",
        titleUr: "فلسفۂ حج و قربانی",
        page: 51,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
    ],
  },

  // ==================== CHAPTER 3 ====================
  {
    slug: "chapter-3",
    number: 3,
    titleEn: "Seerah of the Prophet ﷺ",
    titleUr: "سیرتِ نبوی ﷺ",
    icon: "🌙",
    sections: [
      {
        slug: "family-head",
        titleEn: "The Prophet ﷺ as an Ideal Family Head",
        titleUr: "نبی کریم ﷺ بطورِ مثالی سربراہِ خاندان",
        page: 55,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "state-head",
        titleEn: "The Prophet ﷺ as an Ideal Head of State",
        titleUr: "نبی کریم ﷺ بطورِ مثالی سربراہِ ریاست",
        page: 59,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "commander",
        titleEn: "The Prophet ﷺ as an Ideal Commander",
        titleUr: "نبی کریم ﷺ بطورِ مثالی سپہ سالار",
        page: 63,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "economic",
        titleEn: "Economic Teachings of the Prophet ﷺ",
        titleUr: "نبی کریم ﷺ کی معاشی تعلیمات",
        page: 67,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
    ],
  },

  // ==================== CHAPTER 4 ====================
  {
    slug: "chapter-4",
    number: 4,
    titleEn: "Ethics & Manners",
    titleUr: "اخلاق و آداب",
    icon: "🤝",
    sections: [
      {
        slug: "social-welfare",
        titleEn: "Social Welfare & Respect for Humanity",
        titleUr: "اجتماعی خیر خواہی اور احترامِ انسانیت",
        page: 71,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "moral-vices",
        titleEn: "Avoidance of Moral Vices",
        titleUr: "اخلاقی رذائل سے اجتناب",
        page: 76,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "social-relations",
        titleEn: "Ethics of Social Relationships",
        titleUr: "معاشرتی تعلقات کے اخلاق و آداب",
        page: 81,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
    ],
  },

  // ==================== CHAPTER 5 ====================
  {
    slug: "chapter-5",
    number: 5,
    titleEn: "Good Dealings & Social Conduct",
    titleUr: "حسنِ معاملات و معاشرت",
    icon: "⚖️",
    sections: [
      {
        slug: "huqooq-ul-ibad",
        titleEn:
          "Rights of People (Teachers, Staff, Spouses, Children, Widows)",
        titleUr: "حقوق العباد (اساتذہ کرام، معاون عملہ، زوجین، اولاد، بیوہ)",
        page: 85,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "inheritance",
        titleEn: "Islamic Teachings on Inheritance",
        titleUr: "وراثت کی اسلامی تعلیمات",
        page: 91,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "nikah-talaq",
        titleEn: "Islamic Teachings on Marriage & Divorce",
        titleUr: "نکاح و طلاق کی اسلامی تعلیمات",
        page: 95,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
    ],
  },

  // ==================== CHAPTER 6 ====================
  {
    slug: "chapter-6",
    number: 6,
    titleEn: "Sources of Guidance & Islamic Personalities",
    titleUr: "ہدایت کے سرچشمے اور مشاہیرِ اسلام",
    icon: "🌟",
    sections: [
      {
        slug: "khilafat-rashida",
        titleEn: "The Rightly Guided Caliphate (Khilafat-e-Rashida)",
        titleUr: "خلافتِ راشدہ",
        page: 101,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "aima-ahlul-bayt",
        titleEn: "Imams of Ahl ul Bayt (RA)",
        titleUr: "ائمہ اہل بیتِ اطہار رضی اللہ تعالیٰ عنہم",
        page: 107,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "sufia",
        titleEn:
          "Sufi Saints (Pir Mehr Ali Shah RA, Mian Sher Muhammad Sharqpuri RA)",
        titleUr: "صوفیائے کرام رحمۃ اللہ علیہم",
        page: 115,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
    ],
  },

  // ==================== CHAPTER 7 ====================
  {
    slug: "chapter-7",
    number: 7,
    titleEn: "Islamic Teachings & Modern Era Demands",
    titleUr: "اسلامی تعلیمات اور عصرِ حاضر کے تقاضے",
    icon: "🏛️",
    sections: [
      {
        slug: "law-obedience",
        titleEn: "Obedience to Law",
        titleUr: "قانون کی پاسداری",
        page: 119,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "islamic-renaissance",
        titleEn: "Islamic Renaissance & Muslim Responsibilities",
        titleUr: "نظامِ اسلام کی نشاۃِ ثانیہ اور مسلمانوں کی ذمہ داریاں",
        page: 123,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
      {
        slug: "islamophobia",
        titleEn: "Islamophobia & Our Responsibilities",
        titleUr: "اسلاموفوبیا اور ہماری ذمہ داریاں",
        page: 127,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold">Coming Soon</p></div>`,
      },
    ],
  },
];

// Helper functions
export function getChapter(slug: string) {
  return chapters.find((c) => c.slug === slug);
}

export function getSection(chapterSlug: string, sectionSlug: string) {
  const chapter = getChapter(chapterSlug);
  if (!chapter) return null;
  const section = chapter.sections.find((s) => s.slug === sectionSlug);
  if (!section) return null;
  return { chapter, section };
}

export function getAllSections() {
  const paths: { chapterSlug: string; sectionSlug: string }[] = [];
  chapters.forEach((ch) => {
    ch.sections.forEach((sec) => {
      paths.push({ chapterSlug: ch.slug, sectionSlug: sec.slug });
    });
  });
  return paths;
}
