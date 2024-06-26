import { CONFIG } from './config'

export const VALIDGUESSES = [
'samdi',
"a'aki",
'ahali',
'ahari',
'ahaya',
'ahomu',
'amana',
'amari',
'anani',
"ant'ɛ",
'aparu',
'ariya',
'arupo',
'ashka',
'atolu',
'awɛhɛ',
'ayiri',
'ayiwo',
'chahi',
'chaki',
'chali',
'chapu',
'chara',
'chari',
'chasa',
'cheki',
'chika',
'chilu',
'chimi',
'china',
'chipu',
'chira',
'chiru',
'chiya',
'chohu',
'choku',
'cholu',
'chomu',
'chuhi',
'chuhu',
'chula',
'chura',
'churu',
'chuwi',
'chɔha',
'chɔra',
'chɛra',
'eksha',
'eneri',
'erusa',
'eshku',
'esini',
'etima',
'etisa',
'eyaru',
'fihch',
'gachi',
'hahka',
'hahku',
'hahpu',
'hahta',
'hehpu',
"hen'a",
'heshu',
'hihki',
'hinto',
'hishi',
'hishu',
'hkeni',
'hperi',
'htati',
'htolu',
'htɛna',
'huchi',
'huhpi',
'hushu',
'hɔhka',
'hɛnta',
'hɛsha',
'ihcha',
'iliya',
'imata',
'imayo',
'inima',
'ishka',
"k'iku",
'kahpu',
'kahti',
'kashi',
'kichu',
'kihti',
'kirka',
'kochu',
'kohku',
'korwa',
'kucha',
'kuhpa',
'kuhpu',
'kushu',
'kɔhpa',
'kɔhta',
'lachu',
'lahka',
'lahku',
'lahpa',
'lahpi',
'laspi',
'lehki',
'lehpi',
'lehtu',
'lihpu',
'lohpu',
'lɔhka',
"ma'an",
'mahka',
'manku',
'mashu',
'mehtu',
'michu',
'mihka',
'mihku',
'mihta',
'mihtu',
'mishi',
'mohti',
'mohtu',
'muchu',
'muhki',
'muhti',
'musha',
'mɔcha',
'nahka',
'nahku',
'nahta',
'nashi',
'nishi',
'nohti',
'nuhka',
'nuhki',
'nɔsha',
'nɛhka',
'nɛsha',
'oneri',
'orusa',
'pahka',
'palka',
'paska',
'penku',
'pihka',
'pihti',
'pihtu',
'pohku',
'pohtu',
'polun',
'puhti',
'puska',
'pɔhta',
'pɛlka',
'pɛlta',
'rahki',
'rahku',
'rahpa',
'rahpu',
'rihki',
'rihku',
'rishi',
'rishu',
'ropti',
"rut'ɛ",
'rɔhka',
'rɔhpa',
'rɔhta',
'sachi',
'sahku',
"sat'ɛ",
'shaha',
'shahu',
'shari',
'shayi',
'shehu',
'shihu',
'shika',
'shiki',
'shila',
'shimi',
'shimu',
'shira',
'shiri',
'shita',
'shkan',
'shohu',
'shoku',
'shuka',
'shuli',
'shuru',
'shuwi',
'shɔwa',
'shɛla',
'shɛya',
"sin'a",
'sinku',
"sit'i",
'sohtu',
'suhpi',
'tahka',
'tahki',
'tahpa',
'tahta',
'takat',
'tehpi',
'teshu',
'tihka',
'tihki',
'tishi',
'tohku',
'tuhki',
'tuhku',
'tɔhka',
'tɛhka',
'tɛhpa',
'tɛrka',
'uhayi',
'uhchi',
'uruna',
'ushpa',
'ushpi',
'uwita',
'wachi',
'wachu',
'wahka',
'washa',
'wichi',
'wihki',
'wihku',
'wihti',
"win'a",
'wishi',
'wista',
"wit'a",
"wit'i",
'wohku',
'wuchi',
'wɛcha',
'yahki',
'yahku',
'yahpa',
'yahpu',
'yasha',
'yashi',
"yat'ɛ",
'yehtu',
'yishi',
"yit'ɛ",
'yuhki',
'yunka',
'yɔska',
'ɔmaka',
'ɔshka',
'ɔshta',
'ɔtaka',
'ɛrama',
'ihkra',
'uhkra',
'unkra',
'inkra',
'ihksa',
'uhksa',
'inksa',
'unksa',
'ihkke',
'uhkke',
'inkke',
'unkke',
'winlu',
'hinlu',
'sinlu',
'winki',
'hinki',
'sinki',
'ihkri',
'uhkri',
'unkri',
'inkri',
"po'ɔn",
"me'ɛn",
"pi'ɛn",
"ya'an",
"na'an",
"leh'a",
"leh'i",
'ɛpati',
'ɛpani',
'ɛpawi',
'ɛpaku',
'ɛpata',
'ɛpaki',
'ɛpaka',
'akani',
'akawi',
'akati',
'akata',
'akaka',
'akaki',
'akaku',
"chu'i",
"chu'ɔ",
'chuni',
'chuwi',
'chuta',
'chuti',
'chuka',
'chuki',
'chuku',
'amiwi',
'amini',
'amiti',
'amita',
'amika',
'amiki',
'amiku',
'ukini',
'ukiwi',
'ukiti',
'ukita',
'ukika',
'ukiki',
'ukiku',
'wensi',
'hensi',
'sensi',
'wenti',
'henti',
'senti',
'uhani',
'uhawi',
'uhati',
'uhata',
'uhaka',
'uhaki',
'uhaku',
'uwani',
'uwawi',
'uwati',
'uwata',
'uwaka',
'uwaki',
'uwaku',
'iruni',
'iruwi',
'iruti',
'iruta',
'iruka',
'iruki',
'iruku',
'eruni',
'eruwi',
'eruti',
'eruta',
'eruka',
'eruki',
'eruku',
'eluni',
'eluwi',
'eluti',
'eluta',
'eluka',
'eluki',
'eluku',
'oniku',
'wɛnsa',
'hɛnsa',
'sɛnsa',
'wenyu',
'henyu',
'senyu',
'eyuni',
'eyuwi',
'eyuti',
'eyuta',
'eyuka',
'eyuki',
'eyuku',
'ɔhani',
'ɔhawi',
'ɔhati',
'ɔhata',
'ɔhaka',
'ɔhaki',
'ɔhaku',
'ɛhani',
'ɛhawi',
'ɛhati',
'ɛhata',
'ɛhaka',
'ɛhaki',
'ɛhaku',
'ɛsala',
"ɛsh'a",
"ɛsh'i",
'ɛmani',
'ɛmawi',
'ɛmati',
'ɛmata',
'ɛmaka',
'ɛmaki',
'ɛmaku',
"sak'a",
"sak'i",
"sak'ɔ",
"sam'i",
"sam'a",
"san'i",
"san'ɛ",
"sap'a",
"sap'ɛ",
"sap'i",
"sar'a",
"sar'ɛ",
"sar'ɔ",
"sar'i",
"sem'i",
"sem'ɛ",
"sih'i",
"sih'ɔ",
"sim'a",
"sim'i",
"sok'i",
"sok'ɛ",
"sol'i",
"sol'ɔ",
"sow'ɛ",
"sow'i",
"tak'a",
"tak'i",
"tam'i",
"tam'a",
"tap'a",
"tap'i",
"tap'ɛ",
"ten'ɛ",
"ten'i",
"ahp'i",
"ahp'ɔ",
"ash'i",
"ash'ɔ",
"onhku",
"enhku",
"ehp'i",
"ehp'ɔ",
"eht'i",
"eht'ɔ",
"ɛsh'a",
"ɛsh'i",
"hah'a",
"hah'i",
"hal'i",
"hal'ɛ",
"han'a",
"han'i",
"hap'a",
"hap'i",
"har'a",
"har'i",
"hen'i",
"hen'ɛ",
"her'i",
"her'ɛ",
"hes'i",
"hes'ɔ",
"hey'i",
"hey'ɔ",
"hɛr'i",
"hɛr'a",
"hɛs'a",
"hɛs'i",
"hil'a",
"hil'i",
"hin'a",
"hin'i",
"hin'ɔ",
"hip'i",
"hip'ɔ",
"hir'i",
"hir'ɔ",
"his'i",
"his'a",
"hiy'i",
"hiy'a",
"hom'i",
"hom'ɔ",
"hon'i",
"hon'ɔ",
"hop'i",
"hop'ɔ",
"hor'i",
"hor'ɔ",
"hot'i",
"hot'ɔ",
"hul'i",
"hul'ɔ",
"hur'a",
"hur'i",
"huw'a",
"huw'i",
"ish'i",
"ish'ɔ",
"kah'a",
"kah'i",
"kah'ɛ",
"kal'ɛ",
"kal'i",
"kal'ɔ",
"kan'a",
"kan'i",
"kar'i",
"kar'ɔ",
"kɔl'a",
"kɔl'i",
"kɔr'a",
"kɔr'i",
"kɔs'a",
"kɔs'i",
"kɔw'a",
"kɔw'i",
"ker'i",
"ker'ɛ",
"kɛr'a",
"kɛr'i",
"kim'i",
"kim'ɔ",
"kip'a",
"kip'i",
"kiy'i",
"kiy'ɔ",
"kir'ɔ",
"kir'i",
"kir'ɛ",
"kol'i",
"kol'ɔ",
"kom'a",
"kom'i",
"kom'ɔ",
"kop'i",
"kop'ɔ",
"kor'i",
"kor'ɔ",
"kot'i",
"kot'ɛ",
"kow'i",
"kow'ɔ",
"kow'ɛ",
"kum'a",
"kum'i",
"kuw'i",
"kuw'ɛ",
"lak'a",
"lak'i",
"lam'a",
"lam'i",
"lam'ɛ",
"lap'i",
"lap'ɔ",
"lɔs'a",
"lɔs'i",
"lɔt'a",
"lɔt'i",
"leh'i",
"leh'ɔ",
"lep'i",
"lep'ɔ",
"ley'i",
"ley'ɔ",
"lɛh'a",
"lɛh'i",
"lɛw'a",
"lɛw'i",
"lim'a",
"lim'i",
"lik'a",
"lik'i",
"lis'i",
"lis'ɔ",
"lup'i",
"lup'ɛ",
"luw'a",
"luw'i",
"mak'i",
"mak'ɔ",
"mal'i",
"mal'ɛ",
"mar'ɛ",
"mar'i",
"mar'ɔ",
"mas'ɛ",
"mas'ɔ",
"mas'i",
"mat'a",
"mat'i",
"mer'i",
"mer'ɔ",
"mɛk'a",
"mɛk'i",
"mir'ɔ",
"mir'i",
"mok'i",
"mok'ɔ",
"muh'i",
"muh'ɛ",
"mun'a",
"mun'i",
"mur'i",
"mur'ɛ",
"nah'a",
"nah'i",
"nam'a",
"nam'i",
"nar'a",
"nar'i",
"nɛl'a",
"nɛl'i",
"nim'i",
"nim'ɔ",
"nir'a",
"nir'i",
"niy'ɔ",
"niy'i",
"nor'i",
"nor'ɔ",
"pal'a",
"pal'i",
"pal'ɔ",
"pal'ɛ",
"pan'i",
"pan'ɔ",
"par'ɛ",
"par'i",
"par'ɔ",
"pas'i",
"pas'a",
"pat'a",
"pat'i",
"pel'i",
"pel'ɔ",
"pɛk'a",
"pɛk'i",
"pih'ɔ",
"pih'i",
"pok'i",
"pok'ɔ",
"pit'i",
"pit'a",
"pit'ɔ",
"por'i",
"por'ɔ",
"pus'a",
"pus'i",
"rah'a",
"rah'i",
"rap'a",
"rap'i",
"rap'ɔ",
"raw'i",
"raw'ɔ",
"rɔh'a",
"rɔh'i",
"rɛm'a",
"rɛm'i",
"rik'i",
"rik'ɛ",
"riy'i",
"riy'ɛ",
"rok'i",
"rok'ɔ",
"ruh'i",
"ruh'ɛ",
"uhk'i",
"ɔnt'a",
"wir'a",
"hɛr'a",
"win'a",
"hɛn'a",
"ach'i",
"wis'a",
"hɛs'a",
"wiy'a",
"hɛy'a",
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
