## React Learning

### Sakhtar koli Project(file va directory ha): <br/>

`package.json & package-lock.json`: etelaat koli project mesl package ha va library haye morede niaz va version o description ro unja peyda mikonim.<br/>
`vite.config.js`: tanzimat vite.<br/>
`eslint.config.js`: eslint yek package komaki baraye hazf error ha va komak kardan be debug rahat tar hast.<br/>
`index.html`: file html website ke code ha baad az load site dar an gharar migirand.<br/>
`node_modules`: directory ke data va file haye nasbi tamami package ha va library hayi ke dar package.json nam bordim ro dare.<br/>
`public`: directory ke file hayi mesl aks, logo va chiz hayi ke dar hame jaye project estefade mishan ro dare.<br/>
`src`: directory ke hame code haye asli website ro dare.<br/>
`src -> assets`: file haye dame dasti baraye estefade dar code ha.<br/>
`src -> App.css & index.css`: file haye css project.<br/>
`src -> app.jsx & main.jsx`: file haye asli react(file `main.jsx` dar nahayat file asli ast ke dar website render mishavad).<br/>

<br/>

### JSX Chist? <br/>

mokhafaf javascript xml hast ke dar vaghe bekhater tarkib html va js dar yek file ast. ma ba jsx code haye html ra dar file haye js minevisim.<br/>

<br/>

### Component Chist? <br/>

dar vaghe component ha ghete hayi az code ha hastan ke ui site ro tashkil midan. masalan header yek site bakhshi az un website hast va yeki az component ha hast. baazi az component ha chon dar jahaye mokhtalef website estefade mishan, yeksan sakhte shode va faghad mohtavaye un avaz mishe, masalan yek search bar dar website momkene dar chand ja estefade beshe pas behtare yek bar un ro code bezanim va un component ro dar chand ja estefade konim. component birooni parent va dakheli child hastand. be ebarati digar comonent ha usable code block hastand yani ghete code hayi ke mitoonan bar ha estefade beshan. <br/>
sakhtar component yek fnction ast ke gheir az code haye js dar un html ham gharar dade mishe. <br/>
baraye sakht component 2 kar lazem ast:<br/>

1. sakht function ke bayad baraye component ha ba harf bozorg shoru shavad vagrna kar nemikonad. bayad code haye ma behamrah html dakhel yek `return("code ha inja bashand"):` ghrar begire ta kar kone vagrna faghad line aval return mishe.<br/>
2. an ra export konim ke be soorat default az `export default "Name"` estefade mikonim.<br/>
3. html khod ra dakhel component benevisim.<br/>

<br/>

### Ravesh sakht component? <br/>

1. yek file jsx baraye an misazim. masalan inja file `Test.jsx` dar directory src khahad bood.<br/>
2. function component ra minevisim va dar akhar an ra export mikonim.<br/>
3. dar file haye digar masalan `App.jsx` import va az component ha estefade mikonim. be soorat `<Test/>` neveshte mishe.<br/>

<br/>

### Anjam code haye js dar JSX: <br/>

agar bekhayim code haye js ra dar tag haye component ha estefade konim bayad az {} dar bein anha estefade konim. masalan `<p>{Math.round(Math.random() * 100)}</p>`<br/>

<br/>

### Adjasent Tags: <br/>

moghe render kardan component hame tag ha bayad yek tag parent dashte bashand ta error nadahand.<br/>
vaghti ma 2 ya chand tag div kenar ham dashte bashim error mikhorim. mesl:<br/>

```
  return (
    <div>
      <h1>Parsa Sorsori</h1>
      <Test/>
    </div>
    <div>
      <h1>second div</h1>
      <Test/>
    </div>
  )
```

<br/>
baraye dorost kardan in mozu hame tag haro dakhel yek div dige mizarim ke moghe return yek tag parent dashte bashim:<br/>

```
  return (
    <div>
        <div>
            <h1>Parsa Sorsori</h1>
            <Test/>
        </div>
        <div>
            <h1>second div</h1>
            <Test/>
        </div>
    </div>
  )
```

<br/>

### React Fragment: <br/>

agar yek tag div baraye parent ezafe konim dar style dehi be moshkel mikhorim. pas dar file component react ro import mikonim(`import React from "react";`), va bejaye tag div parent, `<React.Fragment></React.Fragment>` ra estefade mikonim.<br/>
Barname in shekli mishe:<br/>

```
import React from "react";

function Test() {
    return(
        <React.Fragment>
            <p>Salam in yek component test ast!</p>
            <p>{Math.round(Math.random() * 100)}</p>
        </React.Fragment>
    );
}

export default Test
```

<br/>

### Reusable Components: <br/>

vaghti ma yek mohtavaye tekrari dar wbsite darim nabayad baraye hame an ha code haye tekrari benevisim. masalan website ii ke card haye ziadi dare bayad yek component card barash sakhte beshe va faghad ba bahs props mohtavaye dakhel un ha taghir kone.<br/>

<br/>

### Conditional Rendering: <br/>

mikhaiimm tebghe sharayet mokhtalef component haye moljhtalef ro rneder konim tu site. masalan age karbar login nabood bayad headeri namayesh dade beshe ke dokme register ya login dashte bashe. az file `Header.jsx` estefade konid.<br/>

<br/>

### List Rendering: <br/>

vaghti yek array az data darim ke mikhaiim unha ro namayesh bedim bayad az list rendering estefade konim. behtare baraye inke vaghti yek item taghiri mikone, baraye inke nakhaiim kole list ro dobare render konim behtare az index ya key baraye har kodoomeshun estefade konim. file `CourseList.jsx` check shavad.<br/>

<br/>

### Props: <br/>

baraye enteghal data az yek component be componenet dige estefade mishe. dar file `App.jsx` yek data khas ra dar joloye tag componentemun(`<PropsUsage />`) neveshtim va az an dar file `PropsUsage.jsx` estefade mikonim. Nokte: vaght dar file asli App.jsx be component data midim bayad dar file an component, dar function asli an, kalame `props` ro be onvan parameter be an function bedim. pas inshekli mishe:<br/>

```
function PropsUsage(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>the number of componenets: {props.numOfComps}</p>
    </div>
  )
}
```

<br/>
ama baraye sade tar kardan va khana tar kardan barname biaiim va dar bakhsh parameter ha bejaye kalameh props, maghadir haii ke mikhaiim ro azash begirim ya un ro destructure konim:
<br/>
```
function PropsUsage({title, numOfComps}) {
  return (
    <div>
        <h1>{title}</h1>
        <p>the number of componenets: {numOfComps}</p>
    </div>
  )
}
```

<br/>
Nokte2: enteghal data be az paret be child enteghal dade mishe va az an child mitavaned be child haye paiin tar enteghal dade beshe vali baraks nemitunim data be oarent ha ersal konim.

<br/>

### Event Handling: <br/>

khob baraye ineke dar component ha event haro handle konim mitoonid file `Events.jsx` ro check konid. yek button ya element ke event be an dade mishe va balatar az an event ma dar yek function neveshte mishe.

<br/>

### State: <br/>

mesl variables hast va data haye maro dar component hamun negah mide. ba in tafavot ke mitune ui maro ham control kone va component ro re-render kone(vaghti meghdar state ma taghir kone kol component re-rnder mishe).<br/>
useState hook: baraye estefade az state bayad an ra taarif konim: `const [counter, setCounter] = useState(1);`. dar vaghe state be ma yek array ba 2 meghdar mide ke avali data ma hast ke dar () useState be an meghdar dadim va dovomi yek function baraye update kardan an data dar tool component hast. pas ma inja har 2 meghdar ro az array destructure kardim, hala az counter mitunim dar component estefade konim va az setcounter baraye avaz kardan meghdar counter estefade konim, masalan: `setCounter(counter + 1)`. Nokte: be hich vajh mesl js meghdar dakhel state ro avaz nemikonim: `counter = counter + 1`. Nokte2: state ma bayad dar balaye mohtavaye component neveshte beshe.

<br/>

behtare bekhater inke useState ma async hast va ma mamulan be meghdar ghabli statemun niaz darim, bayad az callback function baraye meghdar dehi jadid estefade konim: `setCounter(counter => counter + 1)`.

<br/>

### Forms Handling: <br/>

tooye form ha yekseri event hayi hast ke bayad dar component ha taarif beshe va taghirat dar input haro handle kone. baraye inkar dar tag haye input az onChange estefade mikonim va be onvan meghdar behesh functioni ro midim ke in taghirat ro handle mikone. ma dar file `Form.jsx` yek input baraye password va yek button login darim. dar inputemun yek passwordHandler gharar dare ke gharare value uninput ro dar state ma zakhire kone.