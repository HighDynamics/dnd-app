(this.webpackJsonpdnd=this.webpackJsonpdnd||[]).push([[0],{25:function(e,t,a){},37:function(e,t,a){e.exports=a(45)},42:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),i=a.n(l),s=a(11),c=(a(25),a(1)),o=function(e){var t=Object(n.useContext)(W),a=Object(c.a)(t,2),l=a[0],i=a[1];function s(e){return r.a.createElement("button",{id:e,onClick:function(){return i(e)},className:l===e?"navbarItemsOn":"navbarItemsOff"},e)}return r.a.createElement("div",null,r.a.createElement("ul",{id:"abilitySelector",className:"navbarContainer"},s("Spells"),s("Abilities"),s("SLAs")))},u=function(e){var t=Object(n.useContext)(W),a=Object(c.a)(t,2),l=a[0],i=a[1];function s(e){return r.a.createElement("button",{id:e,onClick:function(){return i(e)},className:l===e?"navbarItemsOn":"navbarItemsOff"},e)}return r.a.createElement("div",null,r.a.createElement("ul",{id:"statsSelector",className:"navbarContainer"},s("Skills"),s("Scores"),s("Passive")))},m=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"secondaryNavbar"},function(e){switch(e){case"stats":return r.a.createElement(u,null);case"ability":return r.a.createElement(o,null);case null:return null;default:return r.a.createElement(u,null)}}(e.display)))},p=function(e){var t=r.a.createElement("i",{id:"statIcon",className:"far fa-chart-bar"}),a=r.a.createElement("i",{id:"spellIcon",className:"fas fa-hand-sparkles"}),n=r.a.createElement("i",{id:"itemIcon",className:"fas fa-scroll"});function l(t,a,n){return r.a.createElement("button",{id:t,onClick:function(){return function(t,a){e.setDisplay(t),null!==a&&e.setDisplayTwo(a)}(t,n)},className:e.display===t?"navbarItemsOn":"navbarItemsOff"},a)}return r.a.createElement("div",null,r.a.createElement("ul",{id:"primaryNavbar",className:"navbarContainer"},l("stats",t,"Skills"),l("ability",a,"Spells"),l(null,n,"Items")))},d=function(e){return r.a.createElement("span",null,e.value," / ")},v=function(e){return r.a.createElement("li",null,e.value)},b=function(e){var t=Object(n.useContext)(R),a=Object(n.useContext)(H),l=Object(c.a)(a,1)[0],i=Object(n.useState)(!1),s=Object(c.a)(i,2),o=s[0],u=s[1],m=t.hitPoints.total-t.hitPoints.damage+t.hitPoints.temporaryHitPoints,p=t.type.map((function(e){return r.a.createElement(d,{key:e,value:e})})),b=t.class.map((function(e){return r.a.createElement(v,{key:e,value:e})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"topContainer"},r.a.createElement("button",{className:o?"moreButtonOn":"moreButtonOff",onClick:function(){return u(!o)}},r.a.createElement("h1",{id:"nameAndLevel"},t.name," (",t.level,")"),r.a.createElement("em",{id:"moreLess"},o?"(less)":"(more)")),!0===o&&r.a.createElement("div",{id:"characterInfo"},r.a.createElement("div",{id:"characterType"},"type: ",r.a.createElement("br",null)," ",p),r.a.createElement("ul",{id:"classList"},"class: ",r.a.createElement("br",null)," ",b)),r.a.createElement("div",{id:"HPACDiceWrapper"},r.a.createElement("div",{id:"hpacWrapper"},r.a.createElement("p",{id:"hp"},"hp: ",m),r.a.createElement("p",{id:"ac"},"ac: ",t.armorClass.ac.total)),r.a.createElement("div",{id:"diceRollResultWrapper"},l))))},f=function(e){var t=Object(n.useContext)(V),a=Object(c.a)(t,2),l=a[0],i=a[1],s=e.value,o=s.replace(/_/g," "),u="spellButtons "+s;return r.a.createElement("button",{className:u,onClick:function(){return i(!l)}},o)},E=function(e){var t=Object(n.useContext)(R);return r.a.createElement("div",null,r.a.createElement("h1",null,"Items"),r.a.createElement("div",{className:"spellContainer"},r.a.createElement("div",{className:"spellItems"},r.a.createElement("p",{className:"spellList"},Object.values(t.items).map((function(e){return r.a.createElement(f,{key:e,value:e})}))))))},h=function(e){var t=Object(n.useContext)(V),a=Object(c.a)(t,2),l=a[0],i=a[1],s=e.value,o=s.replace(/_/g," "),u="spellButtons "+s;return r.a.createElement("button",{className:u,onClick:function(){return i(!l)}},o)},g=function(e){var t=Object(n.useContext)(R);function a(e){return Object.values(t.magic.slas[e]).map((function(e){return r.a.createElement(h,{key:e,value:e})}))}function l(e,t,n){return r.a.createElement("div",{className:"spellItems"},r.a.createElement("div",{className:"spellLevelWrapper"},r.a.createElement("h2",{className:"spellLevelHeader"},"Level ",n)),r.a.createElement("p",{className:"spellList"},a(e)),r.a.createElement("hr",null))}return r.a.createElement("div",null,r.a.createElement("div",{className:"spellContainer"},r.a.createElement("div",{className:"spellItems"},r.a.createElement("div",{className:"spellLevelWrapper"},r.a.createElement("h2",{className:"spellLevelHeader"},t.magic.type.arcane&&t.magic.type.divine?"Cantrips & Orisons":t.magic.type.divine?"Orisons":t.magic.type.arcane?"Cantrips":void 0)),r.a.createElement("p",{className:"spellList"},a("zero")),r.a.createElement("hr",null)),l("one",0,"I"),l("two",0,"II"),l("three",0,"III"),l("four",0,"IV"),l("five",0,"V"),l("six",0,"VI"),l("seven",0,"VII"),l("eight",0,"VIII"),l("nine",0,"IX")))},O=function(e){var t=Object(n.useContext)(V),a=Object(c.a)(t,2),l=a[0],i=a[1],s=e.value,o=s.replace(/_/g," "),u="spellButtons "+s;return r.a.createElement("button",{className:u,onClick:function(){return i(!l)}},o)},y=function(e){var t=Object(n.useContext)(R);return r.a.createElement("div",{className:"spellContainer"},r.a.createElement("div",{className:"spellItems"},r.a.createElement("p",{className:"spellList"},Object.values(t.characterAbilities.active).map((function(e){return r.a.createElement(O,{key:e,value:e})})))))},_={spells:[{name:"Mending",type:"Transmutation",level:"Brd 0, Clr 0, Drd 0, Sor/Wiz 0",components:"V, S",castingTime:"1 standard action",range:"10 ft.",target:"One object of up to 1 lb.",duration:"Instantaneous",savingThrow:"Will negates (harmless, object)",spellResistance:"Yes (harmless, object)",description:"Mending repairs small breaks or tears in objects (but not warps, such as might be caused by a warp wood spell). It will weld broken metallic objects such as a ring, a chain link, a medallion, or a slender dagger, providing but one break exists.\n\nCeramic or wooden objects with multiple breaks can be invisibly rejoined to be as strong as new. A hole in a leather sack or a wineskin is completely healed over by mending. The spell can repair a magic item, but the item\u2019s magical abilities are not restored. The spell cannot mend broken magic rods, staffs, or wands, nor does it affect creatures (including constructs)."},{name:"Arcane_Mark",type:"Universal",level:"Sor/Wiz 0",components:"V, S",castingTime:"1 standard action",range:"0 ft.",effect:"One personal rune or mark, all of which must fit within 1 sq. ft.",duration:"Permanent",savingThrow:"None",spellResistance:"No",description:"This spell allows you to inscribe your personal rune or mark, which can consist of no more than six characters. The writing can be visible or invisible. An arcane mark spell enables you to etch the rune upon any substance without harm to the material upon which it is placed. If an invisible mark is made, a detect magic spell causes it to glow and be visible, though not necessarily understandable.\n\nSee invisibility, true seeing, a gem of seeing, or a robe of eyes likewise allows the user to see an invisible arcane mark. A read magic spell reveals the words, if any. The mark cannot be dispelled, but it can be removed by the caster or by an erase spell.\n\nIf an arcane mark is placed on a living being, normal wear gradually causes the effect to fade in about a month.\n\nArcane mark must be cast on an object prior to casting instant summons on the same object (see that spell description for details)."}]},C=(a(42),function(e){var t=e.property;var a=e.value.replace(/_/g," ");return r.a.createElement("div",{className:"infoSheetContent",id:t},r.a.createElement("span",{className:"property"},function(e){switch(e){case"name:":case"type:":return"";case"description:":return r.a.createElement("hr",null);default:return e.replace(/([A-Z])/g," $1").trim()}}(t+":")," "),r.a.createElement("span",{className:"value"},a))}),j=function(e){Object(n.useContext)(R);var t=Object(n.useContext)(V),a=Object(c.a)(t,2),l=(a[0],a[1]),i=Object(n.useContext)(z),s=Object(c.a)(i,1)[0];s.replace(/_/g," ");var o,u=_.spells.find((function(e){return e.name===s}));return r.a.createElement("div",{id:"spellInfo",className:"infoSheet"},r.a.createElement("button",{id:"useSpell"},"Use Spell"),r.a.createElement("button",{id:"closeButton",onClick:function(){return l("Off")}},"x"),void 0!==u&&r.a.createElement("div",null,(o=u,Object.keys(o).map((function(e){return r.a.createElement(C,{key:e,property:e,value:u[e]})})))))},k=function(e){var t=Object(n.useContext)(V),a=Object(c.a)(t,2),l=a[0],i=a[1],s=e.value,o=s.replace(/_/g," "),u="spellButtons "+s;return r.a.createElement("button",{className:u,onClick:function(){return i(!l)}},o)},S=function(e){var t=Object(n.useContext)(R),a=Object(n.useContext)(F),l=Object(c.a)(a,1)[0],i=Object(n.useContext)(W),s=Object(c.a)(i,2),o=(s[0],s[1]);function u(e){return Object.values(t.magic.spellbook[e]).map((function(e){return r.a.createElement(k,{key:e,value:e})}))}function m(e,a,n){return r.a.createElement("div",{className:"spellItems"},r.a.createElement("div",{className:"spellLevelWrapper"},r.a.createElement("h2",{className:"spellLevelHeader"},"Level ",n),r.a.createElement("em",{className:"remainingSpells"},G(t,l,e,a)," remaining today")),r.a.createElement("p",{className:"spellList"},u(e)),r.a.createElement("hr",null))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("button",{id:"returnToSpells",onClick:function(){return o("Spells")}},r.a.createElement("i",{className:"fas fa-arrow-left"})),r.a.createElement("div",{className:"spellContainer"},r.a.createElement("div",{className:"spellItems"},r.a.createElement("div",{className:"spellLevelWrapper"},r.a.createElement("h2",{id:"levelZeroHeaderPrep",className:"spellLevelHeader"},t.magic.type.arcane&&t.magic.type.divine?"Cantrips & Orisons":t.magic.type.divine?"Orisons":t.magic.type.arcane?"Cantrips":void 0),r.a.createElement("em",{className:"remainingSpells"},G(t,l,"zero",0)," remaining today")),r.a.createElement("p",{className:"spellList"},u("zero")),r.a.createElement("hr",null))," ",m("one",1,"I"),m("two",2,"II"),m("three",3,"III"),m("four",4,"IV"),m("five",5,"V"),m("six",6,"VI"),m("seven",7,"VII"),m("eight",8,"VIII"),m("nine",9,"IX"))))},I=function(e){var t=Object(n.useContext)(V),a=Object(c.a)(t,2),l=(a[0],a[1]),i=Object(n.useContext)(z),s=Object(c.a)(i,2),o=(s[0],s[1]),u=e.value,m=u.replace(/_/g," "),p="spellButtons "+u;return r.a.createElement("button",{className:p,onClick:function(){return function(e){l("Spell"),o(e)}(u)}},m+" \u221e")},N=function(e){var t=Object(n.useContext)(R),a=Object(n.useContext)(F),l=Object(c.a)(a,1)[0],i=Object(n.useContext)(W),s=Object(c.a)(i,2),o=(s[0],s[1]);function u(e){return Object.values(t.magic.spells[e]).map((function(e){return r.a.createElement(I,{key:e,value:e})}))}function m(e,a,n){return r.a.createElement("div",{className:"spellItems"},r.a.createElement("div",{className:"spellLevelWrapper"},r.a.createElement("h2",{className:"spellLevelHeader"},"Level ",n),r.a.createElement("em",{className:"remainingSpells"},G(t,l,e,a)," remaining today")),r.a.createElement("p",{className:"spellList"},u(e)),r.a.createElement("hr",null))}return r.a.createElement("div",null,r.a.createElement("button",{id:"prepSpellsButton",onClick:function(){return o("Prep")}},r.a.createElement("i",{className:"fas fa-book"}),r.a.createElement("span",null,"PREP")),r.a.createElement("div",{className:"spellContainer"},r.a.createElement("div",{className:"spellItems"},r.a.createElement("div",{className:"spellLevelWrapper"},r.a.createElement("h2",{id:"levelZeroHeader",className:"spellLevelHeader"},t.magic.type.arcane&&t.magic.type.divine?"Cantrips & Orisons":t.magic.type.divine?"Orisons":t.magic.type.arcane?"Cantrips":void 0),r.a.createElement("em",{className:"remainingSpells"},G(t,l,"zero",0)," remaining today")),r.a.createElement("p",{className:"spellList"},u("zero")),r.a.createElement("hr",null)),m("one",1,"I"),m("two",2,"II"),m("three",3,"III"),m("four",4,"IV"),m("five",5,"V"),m("six",6,"VI"),m("seven",7,"VII"),m("eight",8,"VIII"),m("nine",9,"IX")))},w=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],i=a[1],s=e.value,o=s.replace(/_/g," "),u="spellButtons "+s;return r.a.createElement("button",{className:u,onClick:function(){return i(!l)}},o)},x=function(e){var t=Object(n.useContext)(R);return r.a.createElement("div",{className:"spellContainer"},r.a.createElement("div",{className:"spellItems"},r.a.createElement("p",{className:"spellList"},Object.values(t.characterAbilities.passive).map((function(e){return r.a.createElement(w,{key:e,value:e})})))))},P=function(e){var t=Object(n.useContext)(R),a=t.abilities.score.strength,l=t.abilities.score.dexterity,i=t.abilities.score.constitution,s=t.abilities.score.intelligence,o=t.abilities.score.wisdom,u=t.abilities.score.charisma,m=U(t,"strength"),p=U(t,"dexterity"),d=U(t,"constitution"),v=U(t,"intelligence"),b=U(t,"wisdom"),f=U(t,"charisma"),E=Object(n.useContext)(H),h=Object(c.a)(E,2),g=(h[0],h[1]);function O(e,t,a){return r.a.createElement("p",{className:"abilityScores"},r.a.createElement("button",{className:"rollAbility",onClick:function(){return g(D(20,a,e))}},"roll"),e,": ",t," | ",a)}return r.a.createElement("div",null,r.a.createElement("div",{id:"statsContainer"},r.a.createElement("h1",{id:"abilityScoresHeader"},"Abilities"),r.a.createElement("div",{id:"abilityScoresWrapper"},O("STR",a,m),O("DEX",l,p),O("CON",i,d),O("INT",s,v),O("WIS",o,b),O("CHA",u,f))))},L=a(23),A=function(e){var t=Object(n.useContext)(R),a=Object(n.useContext)(H),l=Object(c.a)(a,2),i=(l[0],l[1]),s=e.skills,o=s[0].replace(/_/g," ");o=o.replace(/ledge/g,":");var u,m=s[1];return r.a.createElement("button",{className:"skills ".concat((u=s[0],t.classSkills.hasOwnProperty(u)?"classSkills":"")," ").concat(s[0]),onClick:function(){return i(D(20,m,o))}},o," | ",r.a.createElement("span",{className:"skillPoints"},m))},T=function(e){var t=Object(n.useContext)(R),a=Object.keys(t.skills).map((function(e){return[e,t.skills[e]]})),l=Object.keys(t.classSkills).map((function(e){return[e,t.classSkills[e]]})),i=[].concat(Object(L.a)(a),Object(L.a)(l)).sort().map((function(e){return r.a.createElement(A,{key:e,skills:e})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{id:"skillsHeader"},"Skills"),r.a.createElement("ul",{id:"skillsListWrapper",style:{listStyleType:"none"}},r.a.createElement("div",{id:"skillsWrapper"},i)))},M=function(e){var t=Object(n.useContext)(V),a=Object(c.a)(t,2),l=a[0],i=(a[1],Object(n.useContext)(W)),s=Object(c.a)(i,1)[0],o=Object(n.useState)(""),u=Object(c.a)(o,2),m=u[0],p=u[1];return r.a.createElement("div",null,r.a.createElement(z.Provider,{value:[m,p]},r.a.createElement("div",{id:"infoSheet"},function(e){switch(e){case"Spell":return r.a.createElement(j,null);case"Off":default:return null}}(l)),r.a.createElement("div",{id:"mainContent"},function(e){switch(e){case"Skills":return r.a.createElement(T,null);case"Scores":return r.a.createElement(P,null);case"Passive":return r.a.createElement(x,null);case"Spells":return r.a.createElement(N,null);case"Abilities":return r.a.createElement(y,null);case"SLAs":return r.a.createElement(g,null);case"Prep":return r.a.createElement(S,null);case"Items":return r.a.createElement(E,null);default:return r.a.createElement(T,null)}}(s))))};function D(e,t,a){var n=Math.floor(Math.random()*e+1);return r.a.createElement("span",null,r.a.createElement("span",{id:"rollUse"},a),r.a.createElement("div",{id:"rollTopLine"},r.a.createElement("span",{id:"rollTotal",className:function(e){return 1===e?"natOne":20===e?"natTwenty":null}(n)},n)," ",r.a.createElement("span",{id:"modTotal"}," + ",t," =")),r.a.createElement("p",{id:"rollModTotal"},n+t))}var H=r.a.createContext(null),B=r.a.createContext(null),W=r.a.createContext(null),V=r.a.createContext(null),z=r.a.createContext(null),R=r.a.createContext(null),F=r.a.createContext(null);function U(e,t){return"--"===e.abilities.score[t]?"--":Math.floor((e.abilities.score[t]-10)/2)}function G(e,t,a,n){return e.magic.spellsPerDay[a]+function(e){return Math.ceil((t-(e-1))/4)}(n)}var K=function(e){var t=Object(n.useState)("stats"),a=Object(c.a)(t,2),l=a[0],i=a[1],s=Object(n.useState)("Skills"),o=Object(c.a)(s,2),u=o[0],d=o[1],v=Object(n.useState)(!1),f=Object(c.a)(v,2),E=f[0],h=f[1],g=Object(n.useState)("Good luck,\n"+e.character.name),O=Object(c.a)(g,2),y=O[0],_=O[1],C=Object(n.useState)(U(e.character,"charisma")),j=Object(c.a)(C,2),k=j[0],S=j[1];return Object(n.useEffect)((function(){document.title=e.character.name}),[e.character]),r.a.createElement(R.Provider,{value:e.character},r.a.createElement("div",{id:"appWrapper"},r.a.createElement("div",null,r.a.createElement("div",{id:"topWrapper"},r.a.createElement(H.Provider,{value:[y,_]},r.a.createElement(b,null)),r.a.createElement(p,{display:l,setDisplay:i,setDisplayTwo:d}),r.a.createElement(W.Provider,{value:[u,d]},r.a.createElement(m,{display:l}))),r.a.createElement(B.Provider,{value:[l,i]},r.a.createElement(W.Provider,{value:[u,d]},r.a.createElement(V.Provider,{value:[E,h]},r.a.createElement(H.Provider,{value:[y,_]},r.a.createElement(F.Provider,{value:[k,S]},r.a.createElement(M,null)))))),r.a.createElement("div",{id:"bottomSpacer"}))))},J=function(){var e=Object(s.b)("/api/characters").data;return e?r.a.createElement(K,{character:e.characters[0]}):r.a.createElement(r.a.Fragment,null,"Loading...")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(19),Z=[{name:"Arn Hachem",type:["Human","Sanctified","Deathless","Spellstitched","Archlich"],hitPoints:{dieSize:12,total:255,damage:0,temporaryHitPoints:0},armorClass:{ac:{total:37,armor:6,shield:0,dexterity:12,size:0,naturalArmor:5,deflection:4,misc:0},touch:22,flatFooted:23},size:"Medium",alignment:"Lawful-Good",abilities:{score:{strength:18,dexterity:24,constitution:"--",intelligence:22,wisdom:17,charisma:35}},speed:30,level:"20",class:["Sorcerer(1)","Mindtender(2)","Fleshwarper(2)","Malconvoker(7)","Binder(1)","Bard(1)","Master Of Masks(5)"],skills:{Balance:12,Climb:4,Concentration:27,Craft_Tailor:13,Escape_Artist:12,Hide:25,Jump:4,Listen:4,Move_Silently:12,Ride:12,Search:6,Spot:4,Survival:4,Swim:12,Use_Rope:12},classSkills:{Appraise:10,Bluff:41,Decipher_Script:23,Diplomacy:18,Diguise:39,Forgery:6,Gather_Information:9,Heal:16,Intimidate:19,Knowledge_Arcana:26,Knowledge_Dungeoneering:14,Knowledge_Religion:16,Knowledge_Planes:8,Perception:19,Perform_Acting:36,Perform_Dancing:13,SenseMotive:21,Spellcraft:28,Stealth:28,Use_Magic_Device:12},characterAbilities:{active:["Light_Ray","Paralyzing_Touch","Positive_Energy_Touch","Turn_Undead"],passive:["Aura_Of_Menace"]},magic:{slas:{zero:"",one:["Chill_Touch","Floating_Disk"],two:["Command_Undead","Acid_Arrow"],three:["Vampiric_Touch","Phantom_Steed"],four:["Affliction","Enervation"],five:["Mage's_Faithful_Hound","Wall_Of_Force"],six:["Contingency"],seven:"",eight:"",nine:""},spellcaster:!0,type:{arcane:!0,divine:!1},spells:{zero:["Mending","Arcane_Mark","Ghost_Sound","Detect_Magic","Mage_Hand","Message","Light","Read Magic","Acid_Splash","Lullaby","Know_Direction","Open/Close","Prestidigitation"],one:["Silent_Image","Disguise_Self","Magic_Missile","Mage_Armor","Charm_Person"],two:["Ghoul_Touch","Arcane_Lock","Knock","Alter_Fortune","Scorching_Ray"],three:["Shrink_Item","Tiny_Hut","Ray_Of_Exhaustion","Explosive_Runes"],four:["Resilient_Sphere","Create_Fetch","Dimension_Door","Polymorph"],five:["Telekinesis","Sending","Passwall","Planar_Binding,_Lesser","Feeblemind"],six:["Disintigrate","Freezing_Sphere","Planar_Binding","Permanent_Image"],seven:["Teleport_Object","Stun_Ray","Waves_Of_Exhaustion"],eight:["Polymorph_Any_Object","Horrid_Wilting","Planar_Binding,_Greater","Last_Judgment"],nine:["Replicate_Casting","Sphere_Of_Ultimate_Destruction","Crushing_Hand"]},spellbook:{zero:["Arcane_Mark","Prestidigitation","Mage_Hand","Resistance","Disrupt Undead","Touch_Of_Fatigue","Mending","Message","Open/Close","Preserve_Organ","No-Light","Slash_Tongue","Silent_Portal"],one:["a"],two:["a"],three:["a"],four:["a"],five:["a"],six:["a"],seven:["a"],eight:["a"],nine:["a"]},spellsPerDay:{zero:8,one:6,two:6,three:6,four:6,five:6,six:6,seven:6,eight:6,nine:6}},items:["Mesmerist's_Gloves","Nolzure's_Orb","Vanisher_Cloak","GateBreaker_Ballista_Bolt"]}];!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.environment,a=void 0===t?"test":t,n=new X.c({environment:a,models:{character:X.a},serializers:{application:X.b},seeds:function(e){Z.forEach((function(t){return e.create("character",t)}))},routes:function(){this.namespace="api",this.get("/characters",(function(e){return e.characters.all()}))}})}({environment:"development"}),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{value:{fetcher:function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))}}},r.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.f9f1b810.chunk.js.map