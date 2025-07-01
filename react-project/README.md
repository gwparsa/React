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

1. yek file jsx baraye an misazim. masalan inja file `Test.jsx` dar directory src khahad bood.
2. function component ra minevisim va dar akhar an ra export mikonim.
3. dar file haye digar masalan `App.jsx` import va az component ha estefade mikonim. be soorat `<Test/>` neveshte mishe.
