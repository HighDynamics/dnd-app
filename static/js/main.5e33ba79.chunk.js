(this.webpackJsonpdnd=this.webpackJsonpdnd||[]).push([[0],{25:function(e,t,a){},37:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),c=a.n(r),i=a(11),s=(a(25),a(1)),o=function(e){var t=Object(n.useContext)(H),a=Object(s.a)(t,2),r=a[0],c=a[1];function i(e){return l.a.createElement("button",{id:e,onClick:function(){return c(e)},className:r===e?"navbarItemsOn":"navbarItemsOff"},e)}return l.a.createElement("div",null,l.a.createElement("ul",{id:"abilitySelector",className:"navbarContainer"},i("Spells"),i("Abilities"),i("SLAs")))},u=function(e){var t=Object(n.useContext)(H),a=Object(s.a)(t,2),r=a[0],c=a[1];function i(e){return l.a.createElement("button",{id:e,onClick:function(){return c(e)},className:r===e?"navbarItemsOn":"navbarItemsOff"},e)}return l.a.createElement("div",null,l.a.createElement("ul",{id:"statsSelector",className:"navbarContainer"},i("Skills"),i("Scores"),i("Passive")))},m=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"secondaryNavbar"},function(e){switch(e){case"stats":return l.a.createElement(u,null);case"ability":return l.a.createElement(o,null);case null:return null;default:return l.a.createElement(u,null)}}(e.display)))},p=function(e){var t=l.a.createElement("i",{id:"statIcon",className:"far fa-chart-bar"}),a=l.a.createElement("i",{id:"spellIcon",className:"fas fa-hand-sparkles"}),n=l.a.createElement("i",{id:"itemIcon",className:"fas fa-scroll"});function r(t,a,n){return l.a.createElement("button",{id:t,onClick:function(){return function(t,a){e.setDisplay(t),null!==a&&e.setDisplayTwo(a)}(t,n)},className:e.display===t?"navbarItemsOn":"navbarItemsOff"},a)}return l.a.createElement("div",null,l.a.createElement("ul",{id:"primaryNavbar",className:"navbarContainer"},r("stats",t,"Skills"),r("ability",a,"Spells"),r(null,n,"Items")))},d=function(e){return l.a.createElement("span",null,e.value," / ")},v=function(e){return l.a.createElement("li",null,e.value)},E=function(e){var t=Object(n.useContext)(R),a=Object(n.useContext)(T),r=Object(s.a)(a,1)[0],c=Object(n.useState)(!1),i=Object(s.a)(c,2),o=i[0],u=i[1],m=t.hitPoints.total-t.hitPoints.damage+t.hitPoints.temporaryHitPoints,p=t.type.map((function(e){return l.a.createElement(d,{key:e,value:e})})),E=t.class.map((function(e){return l.a.createElement(v,{key:e,value:e})}));return l.a.createElement("div",null,l.a.createElement("div",{className:"topContainer"},l.a.createElement("button",{className:o?"moreButtonOn":"moreButtonOff",onClick:function(){return u(!o)}},l.a.createElement("h1",{id:"nameAndLevel"},t.name," (",t.level,")"),l.a.createElement("em",{id:"moreLess"},o?"(less)":"(more)")),!0===o&&l.a.createElement("div",{id:"characterInfo"},l.a.createElement("div",{id:"characterType"},"type: ",l.a.createElement("br",null)," ",p),l.a.createElement("ul",{id:"classList"},"class: ",l.a.createElement("br",null)," ",E)),l.a.createElement("div",{id:"HPACDiceWrapper"},l.a.createElement("div",{id:"hpacWrapper"},l.a.createElement("p",{id:"hp"},"hp: ",m),l.a.createElement("p",{id:"ac"},"ac: ",t.armorClass.ac.total)),l.a.createElement("div",{id:"diceRollResultWrapper"},r))))},f=function(e){var t=Object(n.useContext)(B),a=Object(s.a)(t,2),r=a[0],c=a[1],i=e.value,o=i.replace(/_/g," "),u="spellButtons "+i;return l.a.createElement("button",{className:u,onClick:function(){return c(!r)}},o)},b=function(e){var t=Object(n.useContext)(R);return l.a.createElement("div",null,l.a.createElement("h1",null,"Items"),l.a.createElement("div",{className:"spellContainer"},l.a.createElement("div",{className:"spellItems"},l.a.createElement("p",{className:"spellList"},Object.values(t.items).map((function(e){return l.a.createElement(f,{key:e,value:e})}))))))},h=function(e){var t=Object(n.useContext)(B),a=Object(s.a)(t,2),r=a[0],c=a[1],i=e.value,o=i.replace(/_/g," "),u="spellButtons "+i;return l.a.createElement("button",{className:u,onClick:function(){return c(!r)}},o)},g=function(e){var t=Object(n.useContext)(R);function a(e){return Object.values(t.magic.slas[e]).map((function(e){return l.a.createElement(h,{key:e,value:e})}))}function r(e,t,n){return l.a.createElement("div",{className:"spellItems"},l.a.createElement("div",{className:"spellLevelWrapper"},l.a.createElement("h2",{className:"spellLevelHeader"},"Level ",n)),l.a.createElement("p",{className:"spellList"},a(e)),l.a.createElement("hr",null))}return l.a.createElement("div",null,l.a.createElement("div",{className:"spellContainer"},l.a.createElement("div",{className:"spellItems"},l.a.createElement("div",{className:"spellLevelWrapper"},l.a.createElement("h2",{className:"spellLevelHeader"},t.magic.type.arcane&&t.magic.type.divine?"Cantrips & Orisons":t.magic.type.divine?"Orisons":t.magic.type.arcane?"Cantrips":void 0)),l.a.createElement("p",{className:"spellList"},a("zero")),l.a.createElement("hr",null)),r("one",0,"I"),r("two",0,"II"),r("three",0,"III"),r("four",0,"IV"),r("five",0,"V"),r("six",0,"VI"),r("seven",0,"VII"),r("eight",0,"VIII"),r("nine",0,"IX")))},O=function(e){var t=Object(n.useContext)(B),a=Object(s.a)(t,2),r=a[0],c=a[1],i=e.value,o=i.replace(/_/g," "),u="spellButtons "+i;return l.a.createElement("button",{className:u,onClick:function(){return c(!r)}},o)},_=function(e){var t=Object(n.useContext)(R);return l.a.createElement("div",{className:"spellContainer"},l.a.createElement("div",{className:"spellItems"},l.a.createElement("p",{className:"spellList"},Object.values(t.characterAbilities.active).map((function(e){return l.a.createElement(O,{key:e,value:e})})))))},C=function(e){var t=Object(n.useContext)(R),a=Object(n.useContext)(B),r=Object(s.a)(a,2),c=(r[0],r[1]),i=Object(n.useContext)(W),o=Object(s.a)(i,1)[0],u=o.replace(/_/g," ");return l.a.createElement("div",{id:"spellInfo",className:"infoSheet"},l.a.createElement("button",{id:"useSpell"},"Use Spell"),l.a.createElement("button",{id:"closeButton",onClick:function(){return c("Off")}},"x"),l.a.createElement("h3",null,u),"Level: ",function(e){var a=null;return Object.keys(t.magic.spells).forEach((function(n){Object.values(t.magic.spells[n]).includes(e)&&(a=n)})),a}(o),l.a.createElement("br",null),"Components:",l.a.createElement("br",null),"Casting Time:",l.a.createElement("br",null),"Range:",l.a.createElement("br",null),"Target or Area:",l.a.createElement("br",null),"Duration:",l.a.createElement("br",null),"Saving Throw:",l.a.createElement("br",null),"SpellResistance:",l.a.createElement("br",null))},j=function(e){var t=Object(n.useContext)(B),a=Object(s.a)(t,2),r=a[0],c=a[1],i=e.value,o=i.replace(/_/g," "),u="spellButtons "+i;return l.a.createElement("button",{className:u,onClick:function(){return c(!r)}},o)},y=function(e){var t=Object(n.useContext)(R),a=Object(n.useContext)(V),r=Object(s.a)(a,1)[0],c=Object(n.useContext)(H),i=Object(s.a)(c,2),o=(i[0],i[1]);function u(e){return Object.values(t.magic.spellbook[e]).map((function(e){return l.a.createElement(j,{key:e,value:e})}))}function m(e,a,n){return l.a.createElement("div",{className:"spellItems"},l.a.createElement("div",{className:"spellLevelWrapper"},l.a.createElement("h2",{className:"spellLevelHeader"},"Level ",n),l.a.createElement("em",{className:"remainingSpells"},F(t,r,e,a)," remaining today")),l.a.createElement("p",{className:"spellList"},u(e)),l.a.createElement("hr",null))}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("button",{id:"returnToSpells",onClick:function(){return o("Spells")}},l.a.createElement("i",{className:"fas fa-arrow-left"})),l.a.createElement("div",{className:"spellContainer"},l.a.createElement("div",{className:"spellItems"},l.a.createElement("div",{className:"spellLevelWrapper"},l.a.createElement("h2",{id:"levelZeroHeaderPrep",className:"spellLevelHeader"},t.magic.type.arcane&&t.magic.type.divine?"Cantrips & Orisons":t.magic.type.divine?"Orisons":t.magic.type.arcane?"Cantrips":void 0),l.a.createElement("em",{className:"remainingSpells"},F(t,r,"zero",0)," remaining today")),l.a.createElement("p",{className:"spellList"},u("zero")),l.a.createElement("hr",null))," ",m("one",1,"I"),m("two",2,"II"),m("three",3,"III"),m("four",4,"IV"),m("five",5,"V"),m("six",6,"VI"),m("seven",7,"VII"),m("eight",8,"VIII"),m("nine",9,"IX"))))},S=function(e){var t=Object(n.useContext)(B),a=Object(s.a)(t,2),r=(a[0],a[1]),c=Object(n.useContext)(W),i=Object(s.a)(c,2),o=(i[0],i[1]),u=e.value,m=u.replace(/_/g," "),p="spellButtons "+u;return l.a.createElement("button",{className:p,onClick:function(){return function(e){r("Spell"),o(e)}(u)}},m+" \u221e")},I=function(e){var t=Object(n.useContext)(R),a=Object(n.useContext)(V),r=Object(s.a)(a,1)[0],c=Object(n.useContext)(H),i=Object(s.a)(c,2),o=(i[0],i[1]);function u(e){return Object.values(t.magic.spells[e]).map((function(e){return l.a.createElement(S,{key:e,value:e})}))}function m(e,a,n){return l.a.createElement("div",{className:"spellItems"},l.a.createElement("div",{className:"spellLevelWrapper"},l.a.createElement("h2",{className:"spellLevelHeader"},"Level ",n),l.a.createElement("em",{className:"remainingSpells"},F(t,r,e,a)," remaining today")),l.a.createElement("p",{className:"spellList"},u(e)),l.a.createElement("hr",null))}return l.a.createElement("div",null,l.a.createElement("button",{id:"prepSpellsButton",onClick:function(){return o("Prep")}},l.a.createElement("i",{className:"fas fa-book"}),l.a.createElement("span",null,"PREP")),l.a.createElement("div",{className:"spellContainer"},l.a.createElement("div",{className:"spellItems"},l.a.createElement("div",{className:"spellLevelWrapper"},l.a.createElement("h2",{id:"levelZeroHeader",className:"spellLevelHeader"},t.magic.type.arcane&&t.magic.type.divine?"Cantrips & Orisons":t.magic.type.divine?"Orisons":t.magic.type.arcane?"Cantrips":void 0),l.a.createElement("em",{className:"remainingSpells"},F(t,r,"zero",0)," remaining today")),l.a.createElement("p",{className:"spellList"},u("zero")),l.a.createElement("hr",null)),m("one",1,"I"),m("two",2,"II"),m("three",3,"III"),m("four",4,"IV"),m("five",5,"V"),m("six",6,"VI"),m("seven",7,"VII"),m("eight",8,"VIII"),m("nine",9,"IX")))},N=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],c=a[1],i=e.value,o=i.replace(/_/g," "),u="spellButtons "+i;return l.a.createElement("button",{className:u,onClick:function(){return c(!r)}},o)},k=function(e){var t=Object(n.useContext)(R);return l.a.createElement("div",{className:"spellContainer"},l.a.createElement("div",{className:"spellItems"},l.a.createElement("p",{className:"spellList"},Object.values(t.characterAbilities.passive).map((function(e){return l.a.createElement(N,{key:e,value:e})})))))},x=function(e){var t=Object(n.useContext)(R),a=t.abilities.score.strength,r=t.abilities.score.dexterity,c=t.abilities.score.constitution,i=t.abilities.score.intelligence,o=t.abilities.score.wisdom,u=t.abilities.score.charisma,m=z(t,"strength"),p=z(t,"dexterity"),d=z(t,"constitution"),v=z(t,"intelligence"),E=z(t,"wisdom"),f=z(t,"charisma"),b=Object(n.useContext)(T),h=Object(s.a)(b,2),g=(h[0],h[1]);function O(e,t,a){return l.a.createElement("p",{className:"abilityScores"},l.a.createElement("button",{className:"rollAbility",onClick:function(){return g(M(20,a,e))}},"roll"),e,": ",t," | ",a)}return l.a.createElement("div",null,l.a.createElement("div",{id:"statsContainer"},l.a.createElement("h1",{id:"abilityScoresHeader"},"Abilities"),l.a.createElement("div",{id:"abilityScoresWrapper"},O("STR",a,m),O("DEX",r,p),O("CON",c,d),O("INT",i,v),O("WIS",o,E),O("CHA",u,f))))},P=a(23),L=function(e){var t=Object(n.useContext)(R),a=Object(n.useContext)(T),r=Object(s.a)(a,2),c=(r[0],r[1]),i=e.skills,o=i[0].replace(/_/g," ");o=o.replace(/ledge/g,":");var u,m=i[1];return l.a.createElement("button",{className:"skills ".concat((u=i[0],t.classSkills.hasOwnProperty(u)?"classSkills":"")," ").concat(i[0]),onClick:function(){return c(M(20,m,o))}},o," | ",l.a.createElement("span",{className:"skillPoints"},m))},w=function(e){var t=Object(n.useContext)(R),a=Object.keys(t.skills).map((function(e){return[e,t.skills[e]]})),r=Object.keys(t.classSkills).map((function(e){return[e,t.classSkills[e]]})),c=[].concat(Object(P.a)(a),Object(P.a)(r)).sort().map((function(e){return l.a.createElement(L,{key:e,skills:e})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{id:"skillsHeader"},"Skills"),l.a.createElement("ul",{id:"skillsListWrapper",style:{listStyleType:"none"}},l.a.createElement("div",{id:"skillsWrapper"},c)))},A=function(e){var t=Object(n.useContext)(B),a=Object(s.a)(t,2),r=a[0],c=(a[1],Object(n.useContext)(H)),i=Object(s.a)(c,1)[0],o=Object(n.useState)(""),u=Object(s.a)(o,2),m=u[0],p=u[1];return l.a.createElement("div",null,l.a.createElement(W.Provider,{value:[m,p]},l.a.createElement("div",{id:"infoSheet"},function(e){switch(e){case"Spell":return l.a.createElement(C,null);case"Off":default:return null}}(r)),l.a.createElement("div",{id:"mainContent"},function(e){switch(e){case"Skills":return l.a.createElement(w,null);case"Scores":return l.a.createElement(x,null);case"Passive":return l.a.createElement(k,null);case"Spells":return l.a.createElement(I,null);case"Abilities":return l.a.createElement(_,null);case"SLAs":return l.a.createElement(g,null);case"Prep":return l.a.createElement(y,null);case"Items":return l.a.createElement(b,null);default:return l.a.createElement(w,null)}}(i))))};function M(e,t,a){var n=Math.floor(Math.random()*e+1);return l.a.createElement("span",null,l.a.createElement("span",{id:"rollUse"},a),l.a.createElement("div",{id:"rollTopLine"},l.a.createElement("span",{id:"rollTotal",className:function(e){return 1===e?"natOne":20===e?"natTwenty":null}(n)},n)," ",l.a.createElement("span",{id:"modTotal"}," + ",t," =")),l.a.createElement("p",{id:"rollModTotal"},n+t))}var T=l.a.createContext(null),D=l.a.createContext(null),H=l.a.createContext(null),B=l.a.createContext(null),W=l.a.createContext(null),R=l.a.createContext(null),V=l.a.createContext(null);function z(e,t){return"--"===e.abilities.score[t]?"--":Math.floor((e.abilities.score[t]-10)/2)}function F(e,t,a,n){return e.magic.spellsPerDay[a]+function(e){return Math.ceil((t-(e-1))/4)}(n)}var G=function(e){var t=Object(n.useState)("stats"),a=Object(s.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)("Skills"),o=Object(s.a)(i,2),u=o[0],d=o[1],v=Object(n.useState)(!1),f=Object(s.a)(v,2),b=f[0],h=f[1],g=Object(n.useState)("Good luck,\n"+e.character.name),O=Object(s.a)(g,2),_=O[0],C=O[1],j=Object(n.useState)(z(e.character,"charisma")),y=Object(s.a)(j,2),S=y[0],I=y[1];return Object(n.useEffect)((function(){document.title=e.character.name}),[e.character]),l.a.createElement(R.Provider,{value:e.character},l.a.createElement("div",{id:"appWrapper"},l.a.createElement("div",null,l.a.createElement("div",{id:"topWrapper"},l.a.createElement(T.Provider,{value:[_,C]},l.a.createElement(E,null)),l.a.createElement(p,{display:r,setDisplay:c,setDisplayTwo:d}),l.a.createElement(H.Provider,{value:[u,d]},l.a.createElement(m,{display:r}))),l.a.createElement(D.Provider,{value:[r,c]},l.a.createElement(H.Provider,{value:[u,d]},l.a.createElement(B.Provider,{value:[b,h]},l.a.createElement(T.Provider,{value:[_,C]},l.a.createElement(V.Provider,{value:[S,I]},l.a.createElement(A,null)))))),l.a.createElement("div",{id:"bottomSpacer"}))))},U=function(){var e=Object(i.b)("/api/characters").data;return e?l.a.createElement(G,{character:e.characters[0]}):l.a.createElement(l.a.Fragment,null,"Loading...")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(19),J=[{name:"Arn Hachem",type:["Human","Sanctified","Deathless","Spellstitched","Archlich"],hitPoints:{dieSize:12,total:255,damage:0,temporaryHitPoints:0},armorClass:{ac:{total:37,armor:6,shield:0,dexterity:12,size:0,naturalArmor:5,deflection:4,misc:0},touch:22,flatFooted:23},size:"Medium",alignment:"Lawful-Good",abilities:{score:{strength:18,dexterity:24,constitution:"--",intelligence:22,wisdom:17,charisma:35}},speed:30,level:"20",class:["Sorcerer(1)","Mindtender(2)","Fleshwarper(2)","Malconvoker(7)","Binder(1)","Bard(1)","Master Of Masks(5)"],skills:{Balance:12,Climb:4,Concentration:27,Craft_Tailor:13,Escape_Artist:12,Hide:25,Jump:4,Listen:4,Move_Silently:12,Ride:12,Search:6,Spot:4,Survival:4,Swim:12,Use_Rope:12},classSkills:{Appraise:10,Bluff:41,Decipher_Script:23,Diplomacy:18,Diguise:39,Forgery:6,Gather_Information:9,Heal:16,Intimidate:19,Knowledge_Arcana:26,Knowledge_Dungeoneering:14,Knowledge_Religion:16,Knowledge_Planes:8,Perception:19,Perform_Acting:36,Perform_Dancing:13,SenseMotive:21,Spellcraft:28,Stealth:28,Use_Magic_Device:12},characterAbilities:{active:["Light_Ray","Paralyzing_Touch","Positive_Energy_Touch","Turn_Undead"],passive:["Aura_Of_Menace"]},magic:{slas:{zero:"",one:["Chill_Touch","Floating_Disk"],two:["Command_Undead","Acid_Arrow"],three:["Vampiric_Touch","Phantom_Steed"],four:["Affliction","Enervation"],five:["Mage's_Faithful_Hound","Wall_Of_Force"],six:["Contingency"],seven:"",eight:"",nine:""},spellcaster:!0,type:{arcane:!0,divine:!1},spells:{zero:["Mending","Arcane_Mark","Ghost_Sound","Detect_Magic","Mage_Hand","Message","Light","Read Magic","Acid_Splash","Lullaby","Know_Direction","Open/Close","Prestidigitation"],one:["Silent_Image","Disguise_Self","Magic_Missile","Mage_Armor","Charm_Person"],two:["Ghoul_Touch","Arcane_Lock","Knock","Alter_Fortune","Scorching_Ray"],three:["Shrink_Item","Tiny_Hut","Ray_Of_Exhaustion","Explosive_Runes"],four:["Resilient_Sphere","Create_Fetch","Dimension_Door","Polymorph"],five:["Telekinesis","Sending","Passwall","Planar_Binding,_Lesser","Feeblemind"],six:["Disintigrate","Freezing_Sphere","Planar_Binding","Permanent_Image"],seven:["Teleport_Object","Stun_Ray","Waves_Of_Exhaustion"],eight:["Polymorph_Any_Object","Horrid_Wilting","Planar_Binding,_Greater","Last_Judgment"],nine:["Replicate_Casting","Sphere_Of_Ultimate_Destruction","Crushing_Hand"]},spellbook:{zero:["Arcane_Mark","Prestidigitation","Mage_Hand","Resistance","Disrupt Undead","Touch_Of_Fatigue","Mending","Message","Open/Close","Preserve_Organ","No-Light","Slash_Tongue","Silent_Portal"],one:["a"],two:["a"],three:["a"],four:["a"],five:["a"],six:["a"],seven:["a"],eight:["a"],nine:["a"]},spellsPerDay:{zero:8,one:6,two:6,three:6,four:6,five:6,six:6,seven:6,eight:6,nine:6}},items:["Mesmerist's_Gloves","Nolzure's_Orb","Vanisher_Cloak","GateBreaker_Ballista_Bolt"]}];!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.environment,a=void 0===t?"test":t,n=new K.c({environment:a,models:{character:K.a},serializers:{application:K.b},seeds:function(e){J.forEach((function(t){return e.create("character",t)}))},routes:function(){this.namespace="api",this.get("/characters",(function(e){return e.characters.all()}))}})}({environment:"development"}),c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,{value:{fetcher:function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))}}},l.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.5e33ba79.chunk.js.map