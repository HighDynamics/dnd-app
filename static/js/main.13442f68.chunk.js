(this.webpackJsonpdnd=this.webpackJsonpdnd||[]).push([[0],{13:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),i=t.n(r),c=(t(6),t(4)),s=t(1),o={name:"Arn Hachem",type:["Human","Sanctified","Deathless","Spellstitched","Archlich"],hitPoints:{dieSize:12,total:255,damage:0,temporaryHitPoints:0},armorClass:{ac:{total:37,armor:6,shield:0,dexterity:12,size:0,naturalArmor:5,deflection:4,misc:0},touch:22,flatFooted:23},size:"Medium",alignment:"Lawful-Good",abilities:{score:{strength:18,dexterity:24,constitution:"--",intelligence:22,wisdom:17,charisma:35}},speed:30,level:"20",class:["Sorcerer(1)","Mindtender(2)","Fleshwarper(2)","Malconvoker(7)","Binder(1)","Bard(1)","Master Of Masks(5)"],skills:{Balance:12,Climb:4,Concentration:27,Craft_Tailor:13,Escape_Artist:12,Hide:25,Jump:4,Listen:4,Move_Silently:12,Ride:12,Search:6,Spot:4,Survival:4,Swim:12,Use_Rope:12},classSkills:{Appraise:10,Bluff:41,Decipher_Script:23,Diplomacy:18,Diguise:39,Forgery:6,Gather_Information:9,Heal:16,Intimidate:19,Knowledge_Arcana:26,Knowledge_Dungeoneering:14,Knowledge_Religion:16,Knowledge_Planes:8,Perception:19,Perform_Acting:36,Perform_Dancing:13,SenseMotive:21,Spellcraft:28,Stealth:28,Use_Magic_Device:12},characterAbilities:{active:["Light_Ray","Paralyzing_Touch","Positive_Energy_Touch","Turn_Undead"],passive:["Aura_Of_Menace"]},magic:{slas:{zero:"",one:["Chill_Touch","Floating_Disk"],two:["Command_Undead","Acid_Arrow"],three:["Vampiric_Touch","Phantom_Steed"],four:["Affliction","Enervation"],five:["Mage's_Faithful_Hound","Wall_Of_Force"],six:["Contingency"],seven:"",eight:"",nine:""},spellcaster:!0,type:{arcane:!0,divine:!1},spells:{zero:["Mending","Arcane_Mark","Ghost_Sound","Detect_Magic","Mage_Hand","Message","Light","Read Magic","Acid_Splash","Lullaby","Know_Direction","Open/Close","Prestidigitation"],one:["Silent_Image","Disguise_Self","Magic_Missile","Mage_Armor","Charm_Person"],two:["Ghoul_Touch","Arcane_Lock","Knock","Alter_Fortune","Scorching_Ray"],three:["Shrink_Item","Tiny_Hut","Ray_Of_Exhaustion","Explosive_Runes"],four:["Resilient_Sphere","Create_Fetch","Dimension_Door","Polymorph"],five:["Telekinesis","Sending","Passwall","Planar_Binding,_Lesser","Feeblemind"],six:["Disintigrate","Freezing_Sphere","Planar_Binding","Permanent_Image"],seven:["Teleport_Object","Stun_Ray","Waves_Of_Exhaustion"],eight:["Polymorph_Any_Object","Horrid_Wilting","Planar_Binding,_Greater","Last_Judgment"],nine:["Replicate_Casting","Sphere_Of_Ultimate_Destruction","Crushing_Hand"]},spellbook:{zero:["Arcane_Mark","Prestidigitation","Mage_Hand","Resistance","Disrupt Undead","Touch_Of_Fatigue","Mending","Message","Open/Close","Preserve_Organ","No-Light","Slash_Tongue","Silent_Portal"],one:["a"],two:["a"],three:["a"],four:["a"],five:["a"],six:["a"],seven:["a"],eight:["a"],nine:["a"]},spellsPerDay:{zero:8,one:6,two:6,three:6,four:6,five:6,six:6,seven:6,eight:6,nine:6}},items:["Mesmerist's_Gloves","Nolzure's_Orb","Vanisher_Cloak","GateBreaker_Ballista_Bolt"]},m=l.a.useState,u=l.a.useContext;l.a.useEffect;function p(e,a,t){var n=Math.floor(Math.random()*e+1);return l.a.createElement("span",null,l.a.createElement("span",{id:"rollUse"},t),l.a.createElement("div",{id:"rollTopLine"},l.a.createElement("span",{id:"rollTotal",className:function(e){return 1===e?"natOne":20===e?"natTwenty":null}(n)},n)," ",l.a.createElement("span",{id:"modTotal"}," + ",a," =")),l.a.createElement("p",{id:"rollModTotal"},n+a))}document.title=o.name;var d=l.a.createContext(null),v=l.a.createContext(null),E=l.a.createContext(null),f=l.a.createContext(null),g=l.a.createContext(null),h=l.a.createContext(null),b=o.abilities.score.strength,_=o.abilities.score.dexterity,y=o.abilities.score.constitution,I=o.abilities.score.intelligence,O=o.abilities.score.wisdom,S=o.abilities.score.charisma;function N(e){return"--"===o.abilities.score[e]?"--":Math.floor((o.abilities.score[e]-10)/2)}var k=N("strength"),C=N("dexterity"),P=N("constitution"),j=N("intelligence"),L=N("wisdom"),w=N("charisma"),A=w;function M(e,a){return o.magic.spellsPerDay[e]+function(e){return Math.ceil((A-(e-1))/4)}(a)}var T=function(e){var a=u(g),t=Object(s.a)(a,2),n=t[0],r=t[1],i=e.value,c=i.replace(/_/g," "),o="spellButtons "+i;return l.a.createElement("button",{className:o,onClick:function(){return r(!n)}},c)},D=function(e){var a=u(g),t=Object(s.a)(a,2);t[0],t[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"Items"),l.a.createElement("div",{className:"spellContainer"},l.a.createElement("div",{className:"spellItems"},l.a.createElement("p",{className:"spellList"},Object.values(o.items).map((function(e){return l.a.createElement(T,{key:e,value:e})}))))))},H=function(e){var a=u(g),t=Object(s.a)(a,2),n=t[0],r=t[1],i=e.value,c=i.replace(/_/g," "),o="spellButtons "+i;return l.a.createElement("button",{className:o,onClick:function(){return r(!n)}},c)},x=function(e){var a=u(g),t=Object(s.a)(a,2);t[0],t[1];function n(e){return Object.values(o.magic.slas[e]).map((function(e){return l.a.createElement(H,{key:e,value:e})}))}function r(e,a,t){return l.a.createElement("div",{className:"spellItems"},l.a.createElement("div",{className:"spellLevelWrapper"},l.a.createElement("h2",{className:"spellLevelHeader"},"Level ",t)),l.a.createElement("p",{className:"spellList"},n(e)),l.a.createElement("hr",null))}return l.a.createElement("div",null,l.a.createElement("div",{className:"spellContainer"},l.a.createElement("div",{className:"spellItems"},l.a.createElement("div",{className:"spellLevelWrapper"},l.a.createElement("h2",{className:"spellLevelHeader"},o.magic.type.arcane&&o.magic.type.divine?"Cantrips & Orisons":o.magic.type.divine?"Orisons":o.magic.type.arcane?"Cantrips":void 0)),l.a.createElement("p",{className:"spellList"},n("zero")),l.a.createElement("hr",null)),r("one",0,"I"),r("two",0,"II"),r("three",0,"III"),r("four",0,"IV"),r("five",0,"V"),r("six",0,"VI"),r("seven",0,"VII"),r("eight",0,"VIII"),r("nine",0,"IX")))},B=function(e){var a=m(!1),t=Object(s.a)(a,2),n=t[0],r=t[1],i=e.value,c=i.replace(/_/g," "),o="spellButtons "+i;return l.a.createElement("button",{className:o,onClick:function(){return r(!n)}},c)},W=function(e){var a=u(g),t=Object(s.a)(a,2);t[0],t[1];return l.a.createElement("div",{className:"spellContainer"},l.a.createElement("div",{className:"spellItems"},l.a.createElement("p",{className:"spellList"},Object.values(o.characterAbilities.active).map((function(e){return l.a.createElement(B,{key:e,value:e})})))))},R=function(e){var a=u(g),t=Object(s.a)(a,2),n=(t[0],t[1]),r=u(h),i=Object(s.a)(r,2),c=i[0],m=(i[1],c.replace(/_/g," "));function p(e){Object.keys(o.magic.spells).forEach((function(a){if(Object.values(o.magic.spells[a]).includes(e))return a}))}return console.log(Object.keys(o.magic.spells)),console.log(Object.values(o.magic.spells.zero).includes(c)),console.log(p(c)),l.a.createElement("div",{id:"spellInfo",className:"infoSheet"},l.a.createElement("button",{id:"useSpell"},"Use Spell"),l.a.createElement("button",{id:"closeButton",onClick:function(){return n("Off")}},"x"),l.a.createElement("h3",null,m),"Level: ",p(c),l.a.createElement("br",null),"Components:",l.a.createElement("br",null),"Casting Time:",l.a.createElement("br",null),"Range:",l.a.createElement("br",null),"Target or Area:",l.a.createElement("br",null),"Duration:",l.a.createElement("br",null),"Saving Throw:",l.a.createElement("br",null),"SpellResistance:",l.a.createElement("br",null))},V=function(e){var a=u(g),t=Object(s.a)(a,2),n=t[0],r=t[1],i=e.value,c=i.replace(/_/g," "),o="spellButtons "+i;return l.a.createElement("button",{className:o,onClick:function(){return r(!n)}},c)},z=function(e){var a=u(f),t=Object(s.a)(a,2),n=(t[0],t[1]);function r(e){return Object.values(o.magic.spellbook[e]).map((function(e){return l.a.createElement(V,{key:e,value:e})}))}function i(e,a,t){return l.a.createElement("div",{className:"spellItems"},l.a.createElement("div",{className:"spellLevelWrapper"},l.a.createElement("h2",{className:"spellLevelHeader"},"Level ",t),l.a.createElement("em",{className:"remainingSpells"},M(e,a)," remaining today")),l.a.createElement("p",{className:"spellList"},r(e)),l.a.createElement("hr",null))}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("button",{id:"returnToSpells",onClick:function(){return n("Spells")}},l.a.createElement("i",{class:"fas fa-arrow-left"})),l.a.createElement("div",{className:"spellContainer"},l.a.createElement("div",{className:"spellItems"},l.a.createElement("div",{className:"spellLevelWrapper"},l.a.createElement("h2",{id:"levelZeroHeaderPrep",className:"spellLevelHeader"},o.magic.type.arcane&&o.magic.type.divine?"Cantrips & Orisons":o.magic.type.divine?"Orisons":o.magic.type.arcane?"Cantrips":void 0),l.a.createElement("em",{className:"remainingSpells"},M("zero",0)," remaining today")),l.a.createElement("p",{className:"spellList"},r("zero")),l.a.createElement("hr",null))," ",i("one",1,"I"),i("two",2,"II"),i("three",3,"III"),i("four",4,"IV"),i("five",5,"V"),i("six",6,"VI"),i("seven",7,"VII"),i("eight",8,"VIII"),i("nine",9,"IX"))))},F=function(e){var a=u(g),t=Object(s.a)(a,2),n=(t[0],t[1]),r=u(h),i=Object(s.a)(r,2),c=(i[0],i[1]),o=e.value,m=o.replace(/_/g," "),p="spellButtons "+o;return l.a.createElement("button",{className:p,onClick:function(){return function(e){n("Spell"),c(e)}(o)}},m+" \u221e")},G=function(e){var a=u(g),t=Object(s.a)(a,2),n=(t[0],t[1],u(f)),r=Object(s.a)(n,2),i=(r[0],r[1]);function c(e){return Object.values(o.magic.spells[e]).map((function(e){return l.a.createElement(F,{key:e,value:e})}))}function m(e,a,t){return l.a.createElement("div",{className:"spellItems"},l.a.createElement("div",{className:"spellLevelWrapper"},l.a.createElement("h2",{className:"spellLevelHeader"},"Level ",t),l.a.createElement("em",{className:"remainingSpells"},M(e,a)," remaining today")),l.a.createElement("p",{className:"spellList"},c(e)),l.a.createElement("hr",null))}return l.a.createElement("div",null,l.a.createElement("button",{id:"prepSpellsButton",onClick:function(){return i("Prep")}},l.a.createElement("i",{class:"fas fa-book"}),l.a.createElement("span",null,"PREP")),l.a.createElement("div",{className:"spellContainer"},l.a.createElement("div",{className:"spellItems"},l.a.createElement("div",{className:"spellLevelWrapper"},l.a.createElement("h2",{id:"levelZeroHeader",className:"spellLevelHeader"},o.magic.type.arcane&&o.magic.type.divine?"Cantrips & Orisons":o.magic.type.divine?"Orisons":o.magic.type.arcane?"Cantrips":void 0),l.a.createElement("em",{className:"remainingSpells"},M("zero",0)," remaining today")),l.a.createElement("p",{className:"spellList"},c("zero")),l.a.createElement("hr",null)),m("one",1,"I"),m("two",2,"II"),m("three",3,"III"),m("four",4,"IV"),m("five",5,"V"),m("six",6,"VI"),m("seven",7,"VII"),m("eight",8,"VIII"),m("nine",9,"IX")))},U=function(e){var a=u(f),t=Object(s.a)(a,2),n=t[0],r=t[1];function i(e){return l.a.createElement("button",{id:e,onClick:function(){return r(e)},className:n===e?"navbarItemsOn":"navbarItemsOff"},e)}return l.a.createElement("div",null,l.a.createElement("ul",{id:"abilitySelector",className:"navbarContainer"},i("Spells"),i("Abilities"),i("SLAs")))},K=function(e){var a=m(!1),t=Object(s.a)(a,2),n=t[0],r=t[1],i=e.value,c=i.replace(/_/g," "),o="spellButtons "+i;return l.a.createElement("button",{className:o,onClick:function(){return r(!n)}},c)},J=function(e){var a=u(g),t=Object(s.a)(a,2);t[0],t[1];return l.a.createElement("div",{className:"spellContainer"},l.a.createElement("div",{className:"spellItems"},l.a.createElement("p",{className:"spellList"},Object.values(o.characterAbilities.passive).map((function(e){return l.a.createElement(K,{key:e,value:e})})))))},X=function(e){var a=u(d);function t(e,t,n){return l.a.createElement("p",{className:"abilityScores"},l.a.createElement("button",{className:"rollAbility",onClick:function(){return a(p(20,n,e))}},"roll"),e,": ",t," | ",n)}return l.a.createElement("div",null,l.a.createElement("div",{id:"statsContainer"},l.a.createElement("h1",{id:"abilityScoresHeader"},"Abilities"),l.a.createElement("div",{id:"abilityScoresWrapper"},t("STR",b,k),t("DEX",_,C),t("CON",y,P),t("INT",I,j),t("WIS",O,L),t("CHA",S,w))))},Z=function(e){var a=u(d),t=e.skills,n=t[0].replace(/_/g," ");n=n.replace(/ledge/g,":");var r,i=t[1];return l.a.createElement("button",{className:"skills ".concat((r=t[0],o.classSkills.hasOwnProperty(r)?"classSkills":"")," ").concat(t[0]),onClick:function(){return a(p(20,i,n))}},n," | ",l.a.createElement("span",{className:"skillPoints"},i))},$=function(e){var a=Object.keys(o.skills).map((function(e){return[e,o.skills[e]]})),t=Object.keys(o.classSkills).map((function(e){return[e,o.classSkills[e]]})),n=[].concat(Object(c.a)(a),Object(c.a)(t)).sort().map((function(e){return l.a.createElement(Z,{key:e,skills:e})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{id:"skillsHeader"},"Skills"),l.a.createElement("ul",{id:"skillsListWrapper",style:{listStyleType:"none"}},l.a.createElement("div",{id:"skillsWrapper"},n)))},q=function(e){var a=u(f),t=Object(s.a)(a,2),n=t[0],r=t[1];function i(e){return l.a.createElement("button",{id:e,onClick:function(){return r(e)},className:n===e?"navbarItemsOn":"navbarItemsOff"},e)}return l.a.createElement("div",null,l.a.createElement("ul",{id:"statsSelector",className:"navbarContainer"},i("Skills"),i("Scores"),i("Passive")))},Q=function(e){var a=u(v),t=m(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],c=o.hitPoints.total-o.hitPoints.damage+o.hitPoints.temporaryHitPoints,p=o.type.map((function(e){return l.a.createElement(Y,{key:e,value:e})})),d=o.class.map((function(e){return l.a.createElement(ee,{key:e,value:e})}));return l.a.createElement("div",null,l.a.createElement("div",{className:"topContainer"},l.a.createElement("button",{className:r?"moreButtonOn":"moreButtonOff",onClick:function(){return i(!r)}},l.a.createElement("h1",{id:"nameAndLevel"},o.name," (",o.level,")"),l.a.createElement("em",{id:"moreLess"},r?"(less)":"(more)")),!0===r&&l.a.createElement("div",{id:"characterInfo"},l.a.createElement("div",{id:"characterType"},"type: ",l.a.createElement("br",null)," ",p),l.a.createElement("ul",{id:"classList"},"class: ",l.a.createElement("br",null)," ",d)),l.a.createElement("div",{id:"HPACDiceWrapper"},l.a.createElement("div",{id:"hpacWrapper"},l.a.createElement("p",{id:"hp"},"hp: ",c),l.a.createElement("p",{id:"ac"},"ac: ",o.armorClass.ac.total)),l.a.createElement("div",{id:"diceRollResultWrapper"},a))))},Y=function(e){return l.a.createElement("span",null,e.value," / ")},ee=function(e){return l.a.createElement("li",null,e.value)},ae=function(e){var a=u(g),t=Object(s.a)(a,2),n=t[0],r=(t[1],u(f)),i=Object(s.a)(r,2),c=i[0],o=(i[1],m("")),p=Object(s.a)(o,2),d=p[0],v=p[1];return l.a.createElement("div",null,l.a.createElement(h.Provider,{value:[d,v]},l.a.createElement("div",{id:"infoSheet"},function(e){switch(e){case"Spell":return l.a.createElement(R,null);case"Off":default:return null}}(n)),l.a.createElement("div",{id:"mainContent"},function(e){switch(e){case"Skills":return l.a.createElement($,null);case"Scores":return l.a.createElement(X,null);case"Passive":return l.a.createElement(J,null);case"Spells":return l.a.createElement(G,null);case"Abilities":return l.a.createElement(W,null);case"SLAs":return l.a.createElement(x,null);case"Prep":return l.a.createElement(z,null);case"Items":return l.a.createElement(D,null);default:return l.a.createElement($,null)}}(c))))},te=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"secondaryNavbar"},function(e){switch(e){case"stats":return l.a.createElement(q,null);case"ability":return l.a.createElement(U,null);case null:return null;default:return l.a.createElement(q,null)}}(e.display)))},ne=function(e){var a=l.a.createElement("i",{id:"statIcon",className:"far fa-chart-bar"}),t=l.a.createElement("i",{id:"spellIcon",className:"fas fa-hand-sparkles"}),n=l.a.createElement("i",{id:"itemIcon",className:"fas fa-scroll"});function r(a,t,n){return l.a.createElement("button",{id:a,onClick:function(){return function(a,t){e.setDisplay(a),null!==t&&e.setDisplayTwo(t)}(a,n)},className:e.display==a?"navbarItemsOn":"navbarItemsOff"},t)}return l.a.createElement("div",null,l.a.createElement("ul",{id:"primaryNavbar",className:"navbarContainer"},r("stats",a,"Skills"),r("ability",t,"Spells"),r(null,n,"Items")))},le=function(){var e=m("stats"),a=Object(s.a)(e,2),t=a[0],n=a[1],r=m("Skills"),i=Object(s.a)(r,2),c=i[0],u=i[1],p=m(!1),h=Object(s.a)(p,2),b=h[0],_=h[1],y=m("Good luck,\n"+o.name),I=Object(s.a)(y,2),O=I[0],S=I[1];return l.a.createElement("div",{id:"appWrapper"},l.a.createElement("div",null,l.a.createElement("div",{id:"topWrapper"},l.a.createElement(v.Provider,{value:O},l.a.createElement(Q,null)),l.a.createElement(ne,{display:t,setDisplay:n,setDisplayTwo:u}),l.a.createElement(f.Provider,{value:[c,u]},l.a.createElement(te,{display:t}))),l.a.createElement(E.Provider,{value:[t,n]},l.a.createElement(f.Provider,{value:[c,u]},l.a.createElement(g.Provider,{value:[b,_]},l.a.createElement(d.Provider,{value:S},l.a.createElement(ae,null))))),l.a.createElement("div",{id:"bottomSpacer"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){},8:function(e,a,t){e.exports=t(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.13442f68.chunk.js.map