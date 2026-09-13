# Somali AI Academy - Knowledge Base (RAG) Setup

## Waa Maxay RAG?

RAG (Retrieval-Augmented Generation) waa habka AI-ga loogu shubo xog si uu uga jawaabo su'aalaha ku saabsan dukumentiyada aad ku dartay.

Tusaale: Haddii aad ku darto buug ku saabsan "Vibe Coding", AI-ga ayaa awoodi doona inuu ka jawaabo su'aalaha ku saabsan Vibe Coding isagoo isticmaalaya xogta buugga.

## Sida Loo Isticmaalo

### 1. Diyaari Dukumentiyada

Ku shub faylasha aad rabto in AI-ga uu ka akhriyo gudaha folder-kan (`knowledge_base/rag_docs/`):

```
knowledge_base/rag_docs/
├── buug_vibe_coding.pdf
├── cashar_chatgpt.txt
├── koorso_digital_marketing.md
└── ...
```

Noocyada la taageerayo: PDF, TXT, MD, DOCX, PPTX, XLSX

### 2. Abuur Knowledge Base

```bash
# Abuur KB cusub oo lagu magacaabo "somali-courses"
deeptutor kb create somali-courses --doc ./knowledge_base/rag_docs/

# Ama ku dar fayl gaar ah
deeptutor kb create somali-courses --doc ./knowledge_base/rag_docs/buug_vibe_coding.pdf
```

### 3. Tijaabi

```bash
# Weydii su'aal KB-ga ku saabsan
deeptutor run chat "Waa maxay Vibe Coding?" -t rag --kb somali-courses
```

### 4. Maamul

```bash
# Liis garee dhammaan KB-yada
deeptutor kb list

# Ku dar dukumentiyo cusub KB jira
deeptutor kb add somali-courses --doc ./knowledge_base/rag_docs/cashar_cusub.pdf

# Tirtir KB
deeptutor kb delete somali-courses
```

## Tusaale: Ku Shub Koorsooyinka

```bash
# 1. U gudub DeepTutor folder-ka
cd ../DeepTutor

# 2. Abuur KB cusub
deeptutor kb create somali-academy --doc ../AI_Academy_Somali/koorsooyinka/

# 3. Tijaabi inuu shaqeynayo
deeptutor run chat "Maxaa ku jira koorsada Digital Marketing?" -t rag --kb somali-academy

# 4. Haddii aad rabto inaad ku darto buug PDF ah
deeptutor kb add somali-academy --doc ../AI_Academy_Somali/knowledge_base/rag_docs/buug.pdf
```

## Qaabka RAG Docs

Marka aad samaynayso dukumentiyada RAG-ga, raac qaabkan:

```markdown
# Cinwaanka Koorsada

## Hordhac
Sharaxaad kooban oo ku saabsan koorsada...

## Cutubyada
### Cutubka 1: Cinwaanka
Faahfaahinta cutubka...

### Cutubka 2: Cinwaanka
Faahfaahinta cutubka...

## Su'aalaha Inta La Isweydiiyo
S: Su'aal?
J: Jawaab...
```

## Talooyin

- U qor dukumentiyada **Af-Soomaali** si AI-ga u fahmo
- U qaybi cutubyo yaryar si RAG-u u helo xogta si fudud
- Ku dar su'aalo iyo jawaabo (FAQ) si AI-ga u barto qaabka jawaabaha
- Isticmaal cinwaanno cad (##) si loo kala saaro qaybaha
