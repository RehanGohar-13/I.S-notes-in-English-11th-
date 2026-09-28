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
  // ==================== CHAPTER 1 ====================
  {
    slug: "chapter-1",
    number: 1,
    titleEn: "Quran & Hadith Sciences",
    titleUr: "قرآن مجید و حدیثِ نبوی ﷺ",
    icon: "📖",
    sections: [
      {
        slug: "uloom-ul-quran",
        titleEn: "Sciences of the Quran (Uloom ul Quran)",
        titleUr: "علوم القرآن",
        page: 1,
        content: `
<h3 class="urdu-heading text-xl font-bold mb-4" style="color: var(--accent);">حاصلاتِ تعلّم</h3>
<p class="urdu-text mb-2">اس سبق کو پڑھنے کے بعد طلبہ اس قابل ہو جائیں گے کہ وہ:</p>
<ul class="urdu-text mb-6 space-y-2 pr-4">
  <li>• قرآن مجید کے فضائل اور خصوصیات (عالمگیریت، ابدیت، جامعیت، اور کاملیت) جان سکیں۔</li>
  <li>• قرآن مجید کے اسمائے مبارکہ اور ان کے معانی کے بارے میں آگاہ ہو سکیں۔</li>
  <li>• مکی، مدنی سورتوں کی تعریف اور خصوصیات جانتے ہوئے آیاتِ احکام کے بنیادی تصور سے آگاہ ہو سکیں۔</li>
  <li>• اس بات پر ایمان پختہ کر سکیں کہ قرآن مجید ایک آسمانی اور معجزاتی کتاب ہے۔</li>
  <li>• قرآن مجید کے معجزہ ہونے پر یقین رکھتے ہوئے قرآن مجید کو آخری اور ابدی سرچشمہ ہدایت سمجھتے ہوئے اس کی تعلیمات پر عمل پیرا ہو سکیں۔</li>
</ul>

<h3 class="urdu-heading text-xl font-bold mb-3" style="color: var(--accent);">قرآن مجید کی خصوصیات</h3>
<p class="urdu-text mb-4">علوم القرآن سے مراد وہ علوم ہیں جو مفسرین قرآن نے مضامینِ قرآن سے اخذ کیے ہیں۔ مکی و مدنی سورتیں، محکمات و متشابہات، سورتوں اور آیات کے شانِ نزول، حروفِ مقطعات اور ناسخ و منسوخ وغیرہ۔</p>
<p class="urdu-text mb-4">قرآن مجید اللہ تعالیٰ کا کلام اور اس کی آخری کتاب ہے جو اللہ تعالیٰ نے اپنے آخری نبی حضرت محمد رسول اللہ ﷺ پر تقریباً تئیس (23) سال کے عرصے میں نازل فرمائی۔ قرآن مجید اللہ تعالیٰ کی طرف سے انسانوں کی ہدایت کا پیغام ہے اور نبی کریم ﷺ کے معجزات میں سے سب سے بڑا معجزہ ہے، جو قیامت تک زندہ رہے گا۔ قرآن مجید سابقہ آسمانی کتابوں کی تعلیمات کا خلاصہ اور نچوڑ ہے۔ اللہ تعالیٰ نے قرآن مجید کو دیگر آسمانی کتب کا نگران بھی قرار دیا ہے۔ قرآن مجید بے شمار خصوصیات کا حامل اور ہر اعتبار سے بے مثل کلام ہے۔ قرآن کریم کی نمایاں خصوصیات درج ذیل ہیں:</p>

<h4 class="urdu-heading text-lg font-bold mb-2" style="color: var(--gold);">عالمگیریت</h4>
<p class="urdu-text mb-3">عالمگیریت سے مراد ہے کہ قرآن مجید کا مخاطب پوری انسانیت ہے۔ پہلی آسمانی کتابیں کسی خاص قوم، علاقے یا نسل کے لیے نازل ہوئی تھیں لیکن قرآن مجید ایک ایسی عالمگیر کتاب ہے جو ہر قسم کے علوم و معارف کا خزینہ ہے اور اللہ تعالیٰ کی منشا جاننے کا ذریعہ ہے۔ قرآن مجید کی متعدد آیات میں ''یٰۤاَیُّهَا النَّاسُ'' کے الفاظ سے تمام انسانیت کو مخاطب کیا گیا ہے۔ اسی طرح یہ صراحت کی گئی ہے کہ قرآن مجید تمام انسانوں کے لیے ہدایت کا پیغام اور نصیحت ہے، ارشاد باری تعالیٰ ہے:</p>
<blockquote class="urdu-text mb-3 p-4 rounded-xl border-r-4" style="background-color: var(--accent-light); border-color: var(--accent);">
  <strong>هٰذَا بَلٰغٌ لِّلنَّاسِ</strong> <em>(سُورَةُ إِبْرٰهِيْمَ: 52)</em><br/>
  <strong>ترجمہ:</strong> یہ (قرآن) انسانوں کے لیے (اللہ تعالیٰ کا) پیغام ہے۔
</blockquote>
<p class="urdu-text mb-6">الغرض قرآن مجید کی تعلیمات ہر دور، ہر علاقے اور ہر نسل کے لیے ہیں اور یہی اس کی عالمگیریت ہے۔</p>

<h4 class="urdu-heading text-lg font-bold mb-2" style="color: var(--gold);">کاملیت</h4>
<p class="urdu-text mb-3">کاملیت کا معنی ہے کہ قرآن مجید کی ہدایات کامل اور مکمل ہیں۔ وحی کا وہ سلسلہ جو حضرت آدم علیہ السلام سے شروع ہوا تھا وہ نبی کریم ﷺ پر آ کر ختم ہو گیا۔ آپ ﷺ پر دین مکمل کر دیا گیا ہے۔ آپ ﷺ پر نازل کردہ کتاب قرآن مجید سابقہ تمام آسمانی کتابوں کی تعلیمات کی کامل ترین شکل ہے۔ قرآن مجید ایک مکمل ضابطۂ حیات ہے۔ ارشاد باری تعالیٰ ہے:</p>
<blockquote class="urdu-text mb-3 p-4 rounded-xl border-r-4" style="background-color: var(--accent-light); border-color: var(--accent);">
  <strong>اِنْ هُوَ اِلَّا ذِكْرٌ لِّلْعٰلَمِيْنَ</strong> <em>(سُورَةُ التَّكْوِيْرِ: 27)</em><br/>
  <strong>ترجمہ:</strong> (قرآن) تو تمام جہان والوں کے لیے نصیحت ہے۔
</blockquote>

<h4 class="urdu-heading text-lg font-bold mb-2" style="color: var(--gold);">جامعیت</h4>
<p class="urdu-text mb-3">جامعیت سے مراد ہے کہ قرآن مجید میں تمام شعبوں کے لیے مکمل راہ نمائی ہے۔ قرآن مجید زندگی کے تمام پہلوؤں کے لیے ہدایت اور جامع کتاب ہے۔ بعض آسمانی کتابوں میں صرف اخلاقی ہدایات کا بیان تھا، بعض میں صرف عقائد و عبادات اور دعاؤں کا بیان تھا اور بعض میں صرف قانونی مسائل ذکر ہوئے تھے لیکن قرآن مجید ایک ایسی جامع کتاب ہے جس میں عقائد، عبادات، معاملات، معاشرت، اخلاقیات اور قوانین کا جامع بیان موجود ہے۔ ارشاد باری تعالیٰ ہے:</p>
<blockquote class="urdu-text mb-3 p-4 rounded-xl border-r-4" style="background-color: var(--accent-light); border-color: var(--accent);">
  <strong>وَنَزَّلْنَا عَلَيْكَ الْكِتٰبَ تِبْيَانًا لِّكُلِّ شَيْءٍ</strong> <em>(سُورَةُ النَّحْلِ: 89)</em><br/>
  <strong>ترجمہ:</strong> اور ہم نے آپ ﷺ پر ایسی کتاب نازل فرمائی ہے جس میں ہر چیز کا واضح بیان ہے۔
</blockquote>
<p class="urdu-text mb-6">الغرض قرآن مجید ایک ایسی جامع کتاب ہے جس میں تمام مسائل کے حل کے لیے راہ نمائی موجود ہے۔</p>

<h4 class="urdu-heading text-lg font-bold mb-2" style="color: var(--gold);">ابدیت</h4>
<p class="urdu-text mb-6">ابدیت سے مراد ہے کہ قرآن مجید کی تعلیمات ہمیشہ ہمیشہ کے لیے ہیں۔ یہ کتاب ہدایت، دین و دنیا کی سعادت کا سرچشمہ اور تمام امور کے لیے میزان ہے۔ قرآن مجید کی تعلیمات ہر زمانے کے لیے قابلِ عمل ہیں۔ قرآن مجید کی تعلیمات ایسی فطری ہیں کہ ہر عہد کے انسان کو یوں محسوس ہوتا ہے کہ یہ تعلیمات اس کی راہ نمائی کے لیے نازل ہوئی ہیں۔ قرآن مجید کی تعلیمات قیامت تک کے لوگوں کے لیے یکساں نفع بخش اور قابلِ عمل ہیں۔</p>

<h3 class="urdu-heading text-xl font-bold mb-3" style="color: var(--accent);">قرآن مجید کے اسمائے مبارکہ</h3>
<p class="urdu-text mb-4">قرآن مجید کے متعدد ذاتی اور صفاتی نام ہیں جن میں سے چند درج ذیل ہیں:</p>

<div class="overflow-x-auto mb-6">
<table class="w-full text-sm border-collapse">
  <thead>
    <tr style="background-color: var(--accent); color: white;">
      <th class="p-2 text-center rounded-tr-lg">نمبر</th>
      <th class="p-2 text-right">اسمِ مبارک</th>
      <th class="p-2 text-right">معنی / مفہوم</th>
      <th class="p-2 text-center">نمبر</th>
      <th class="p-2 text-right">اسمِ مبارک</th>
      <th class="p-2 text-right rounded-tl-lg">معنی / مفہوم</th>
    </tr>
  </thead>
  <tbody class="urdu-text text-sm" style="line-height: 2.4;">
    <tr style="border-bottom: 1px solid var(--border);">
      <td class="p-2 text-center font-bold" style="color: var(--accent);">1</td>
      <td class="p-2 text-right font-bold">الْقُرْآنُ</td>
      <td class="p-2 text-right">سب سے زیادہ پڑھی جانے والی کتاب</td>
      <td class="p-2 text-center font-bold" style="color: var(--accent);">2</td>
      <td class="p-2 text-right font-bold">الذِّكْرُ</td>
      <td class="p-2 text-right">وعظ و نصیحت پر مبنی کتاب</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border); background-color: var(--bg);">
      <td class="p-2 text-center font-bold" style="color: var(--accent);">3</td>
      <td class="p-2 text-right font-bold">الْفُرْقَانُ</td>
      <td class="p-2 text-right">حق اور باطل میں امتیاز کرنے والی کتاب</td>
      <td class="p-2 text-center font-bold" style="color: var(--accent);">4</td>
      <td class="p-2 text-right font-bold">الْكِتَابُ</td>
      <td class="p-2 text-right">اللہ تعالیٰ کی خاص کتاب</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td class="p-2 text-center font-bold" style="color: var(--accent);">5</td>
      <td class="p-2 text-right font-bold">التَّنْزِيْلُ</td>
      <td class="p-2 text-right">اللہ تعالیٰ کی جانب سے نازل کردہ کتاب</td>
      <td class="p-2 text-center font-bold" style="color: var(--accent);">6</td>
      <td class="p-2 text-right font-bold">النُّوْرُ</td>
      <td class="p-2 text-right">روشنی دکھانے والی کتاب</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border); background-color: var(--bg);">
      <td class="p-2 text-center font-bold" style="color: var(--accent);">7</td>
      <td class="p-2 text-right font-bold">الْبُرْهَانُ</td>
      <td class="p-2 text-right">واضح دلیل</td>
      <td class="p-2 text-center font-bold" style="color: var(--accent);">8</td>
      <td class="p-2 text-right font-bold">الْمُبِيْنُ</td>
      <td class="p-2 text-right">کھلی اور واضح راہ نمائی</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td class="p-2 text-center font-bold" style="color: var(--accent);">9</td>
      <td class="p-2 text-right font-bold">الْعَزِيْزُ</td>
      <td class="p-2 text-right">زبردست کتاب</td>
      <td class="p-2 text-center font-bold" style="color: var(--accent);">10</td>
      <td class="p-2 text-right font-bold">الْكَرِيْمُ</td>
      <td class="p-2 text-right">عزت والی کتاب</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border); background-color: var(--bg);">
      <td class="p-2 text-center font-bold" style="color: var(--accent);">11</td>
      <td class="p-2 text-right font-bold">الشِّفَاءُ</td>
      <td class="p-2 text-right">شفاء دینے والی کتاب</td>
      <td class="p-2 text-center font-bold" style="color: var(--accent);">12</td>
      <td class="p-2 text-right font-bold">الْعِلْمُ</td>
      <td class="p-2 text-right">علم و معرفت کا خزانہ</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td class="p-2 text-center font-bold" style="color: var(--accent);">13</td>
      <td class="p-2 text-right font-bold">الْحَكِيْمُ</td>
      <td class="p-2 text-right">حکمت و دانائی سے بھرپور کتاب</td>
      <td class="p-2 text-center font-bold" style="color: var(--accent);">14</td>
      <td class="p-2 text-right font-bold">الْمَجِيْدُ</td>
      <td class="p-2 text-right">بزرگی والی کتاب</td>
    </tr>
    <tr>
      <td class="p-2 text-center font-bold" style="color: var(--accent);">15</td>
      <td class="p-2 text-right font-bold">الْمُبَارَكُ</td>
      <td class="p-2 text-right">بابرکت کتاب</td>
      <td class="p-2 text-center font-bold" style="color: var(--accent);">16</td>
      <td class="p-2 text-right font-bold">الْحَقُّ</td>
      <td class="p-2 text-right">حق و صداقت کا بیان</td>
    </tr>
  </tbody>
</table>
</div>

<h3 class="urdu-heading text-xl font-bold mb-3" style="color: var(--accent);">مکی اور مدنی سورتیں</h3>
<p class="urdu-text mb-3">قرآن مجید میں ۱۱۴ سورتیں ہیں۔ جو سورتیں ہجرتِ مدینہ سے پہلے نازل ہوئیں وہ مکی سورتیں کہلاتی ہیں۔ مکہ مکرمہ میں نبی کریم ﷺ کے مخاطب مشرکینِ مکہ تھے چنانچہ مکی سورتوں میں توحید، رسالت اور آخرت کے مباحث بیان کیے گئے ہیں۔ نبی کریم ﷺ اور مسلمانوں کو صبر و استقامت کی تلقین کی گئی ہے، گزشتہ امتوں کے واقعات بیان کیے گئے ہیں، عقائد کی درستی اور اخلاق کی اصلاح پر زور دیا گیا ہے اور بت پرستی کی مدلل تردید کی گئی ہے۔ کئی سورتوں میں اہل عرب کی فصاحت و بلاغت کے تناظر میں قرآن مجید کے لفظی محاسن اور معجزانہ شان کا اظہار کیا گیا ہے۔</p>
<p class="urdu-text mb-3">ہجرتِ مدینہ کے بعد نازل ہونے والی سورتوں کو مدنی سورتیں کہا جاتا ہے۔ نبی کریم ﷺ نے مدینہ منورہ تشریف لاتے ہی اسلامی ریاست کی بنیاد رکھی، لہٰذا مدنی سورتوں میں جہاد و قتال کے احکام، حقوق و فرائض اور خاندانی و تمدنی قوانین بیان ہوئے ہیں۔ مدنی سورتوں میں عموماً <strong>''يٰۤاَيُّهَا الَّذِيْنَ اٰمَنُوْا''</strong> کے الفاظ سے اہل ایمان سے خطاب کیا گیا ہے۔ مدنی سورتوں کا اندازِ بیان سادہ اور سلیس ہے۔</p>

<h3 class="urdu-heading text-xl font-bold mb-3" style="color: var(--accent);">آیاتِ احکام</h3>
<p class="urdu-text mb-3">آیاتِ احکام سے مراد قرآن مجید کی وہ آیات ہیں جن میں اسلامی شریعت کے احکام اور قوانین بیان کیے گئے ہیں۔ ان آیات میں عبادات، معاملات، اخلاقیات، معاشیات، معاشرت اور حدود و قصاص جیسے موضوعات شامل ہیں۔ آیاتِ احکام کو فقہائے اسلام، اسلامی قانون کے اصولوں کی بنیاد کے طور پر استعمال کرتے ہیں۔</p>
<p class="urdu-text mb-3">ہمیں چاہیے کہ قرآن مجید کی عالمگیریت، کاملیت، جامعیت اور ابدیت پر یقین رکھتے ہوئے نہ صرف اس کو سمجھیں بلکہ اس پر عمل بھی کریں کیونکہ قرآن مجید ایک دستورِ حیات ہے، جس کے ذریعے اللہ تعالیٰ قوموں کو عروج و زوال سے ہم کنار کرتا ہے۔</p>

<div class="p-4 rounded-xl border-2 border-dashed mt-6 mb-4" style="border-color: var(--gold); background-color: var(--gold-light);">
  <p class="text-sm font-bold" style="color: var(--gold);">⚠️ Note: Content continues on Page 4. The scraper stopped mid-sentence at "تاریخ گواہ". Remaining content will be added when available.</p>
</div>
`,
      },
      {
        slug: "uloom-ul-hadith",
        titleEn: "Sciences of Hadith (Uloom ul Hadith)",
        titleUr: "علوم الحديث",
        page: 5,
        content: `<div class="p-6 text-center"><p class="text-4xl mb-3">🕐</p><p class="font-bold mb-1">Content Coming Soon</p><p class="text-sm" style="color: var(--fg-secondary);">Waiting for scraped text from Page 5 onwards.</p></div>`,
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
