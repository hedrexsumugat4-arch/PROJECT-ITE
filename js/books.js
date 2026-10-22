// KATHA - books.js: ISANG lugar para sa lahat ng libro (ginagamit ng home at genres)
// n = number ng story (story-NN.html at cover-NN.jpg) | genre = label na lalabas sa card
// Ang bawat 5 kuwento ay napupunta sa isang genre group sa itaas (1-5, 6-10, 11-15, ...)
window.KATHA_GENRES = ["Romance", "Comedy", "Mystery & Horror", "Fantasy & Adventure","Drama", "Sci-Fi"];

window.KATHA_BOOKS = [
{"n": "01", "title": "The Girl in My Classroom", "author": "Hedrex", "genre": "Romance", "tags": ["Romance"], "synopsis": "Isang tahimik na estudyante ang unti-unting nahulog sa bagong kaklase niyang palaging nakangiti."},
    {"n": "02", "title": "Under One Umbrella", "author": "Hedrex", "genre": "Romance", "tags": ["Romance"], "synopsis": "Dalawang estranghero ang napilitang magsalo sa iisang payong sa gitna ng malakas na ulan."},
    {"n": "03", "title": "Letters I Never Sent", "author": "Hedrex", "genre": "Romance / Drama", "tags": ["Romance", "Drama"], "synopsis": "Isang estudyante ang nagsusulat ng liham para sa kanyang matalik na kaibigan ngunit hindi kailanman nagkaroon ng lakas ng loob na ibigay ang mga ito."},
    {"n": "04", "title": "Seven Days with You", "author": "Hedrex", "genre": "Romance", "tags": ["Romance"], "synopsis": "Sa loob ng pitong araw na bakasyon, natutuhan ng dalawang taong magkaiba ang pangarap na pahalagahan ang bawat sandali."},
    {"n": "05", "title": "Across the Window", "author": "Hedrex", "genre": "Romance / Slice of Life", "tags": ["Romance"], "synopsis": "Magkapitbahay sina Noah at Claire, ngunit ang kanilang bintana lamang ang nagiging tulay ng kanilang pagkakaibigan."},
    {"n": "06", "title": "My Seatmate Is Crazy", "author": "Hedrex", "genre": "Comedy", "tags": ["Comedy"], "synopsis": "Tahimik na estudyante si Ben hanggang maging seatmate niya ang pinakamaingay na tao sa klase."},
    {"n": "07", "title": "Barkada Chronicles", "author": "Hedrex", "genre": "Friendship / Comedy", "tags": ["Comedy"], "synopsis": "Limang magkakaibigan ang nangakong magiging successful, pero hindi nila kayang magkasundo kahit sa simpleng group project."},
    {"n": "08", "title": "The Sleepy Top Student", "author": "Hedrex", "genre": "School Comedy", "tags": ["Comedy"], "synopsis": "Ang pinakamataas ang grades sa klase ay palaging inaantok at muntik nang makatulog sa sarili niyang graduation."},
    {"n": "09", "title": "Deadline Warriors", "author": "Hedrex", "genre": "Comedy / College Life", "tags": ["Comedy"], "synopsis": "Isang grupo ng college students ang gumagawa ng limang requirements sa iisang gabi."},
    {"n": "10", "title": "Wrong Chat, Right Person", "author": "Hedrex", "genre": "Romance / Comedy", "tags": ["Romance", "Comedy"], "synopsis": "Nagkamali ng pagpapadalhan ng confession ang isang estudyante at sa halip na sa best friend niya, napunta ito sa class president."},
    {"n": "11", "title": "Room 13", "author": "Hedrex", "genre": "Horror", "tags": ["Mystery & Horror"], "synopsis": "May silid sa lumang paaralan na ipinagbabawal pasukin ng mga estudyante."},
    {"n": "12", "title": "The Black Cat", "author": "Hedrex", "genre": "Mystery", "tags": ["Mystery & Horror"], "synopsis": "Isang itim na pusa ang palaging nakikita sa mga lugar kung saan may nawawalang gamit."},
    {"n": "13", "title": "The Mirror Knows", "author": "Hedrex", "genre": "Supernatural Horror", "tags": ["Mystery & Horror"], "synopsis": "Isang lumang salamin ang nagpapakita ng mga bagay na hindi nakikita ng taong nakatayo sa harap nito."},
    {"n": "14", "title": "The Last Train", "author": "Hedrex", "genre": "Thriller / Mystery", "tags": ["Mystery & Horror"], "synopsis": "Isang pasahero ang sumakay sa tren na walang ibang taong nakakakita."},
    {"n": "15", "title": "The Diary of a Missing Girl", "author": "Hedrex", "genre": "Mystery / Drama", "tags": ["Mystery & Horror"], "synopsis": "Nakahanap ang isang estudyante ng diary na pag-aari ng babaeng nawawala nang sampung taon."},
    {"n": "16", "title": "The Last Mage", "author": "Hedrex", "genre": "Fantasy", "tags": ["Fantasy & Adventure"], "synopsis": "Isang ordinaryong binatilyo ang natuklasang huling salamangkero sa isang kahariang nawawalan na ng mahika."},
    {"n": "17", "title": "Island of Secrets", "author": "Hedrex", "genre": "Adventure", "tags": ["Fantasy & Adventure"], "synopsis": "Apat na magkakaibigan ang nakahanap ng mapa patungo sa isang islang wala sa anumang mapa."},
    {"n": "18", "title": "The Forest Beyond", "author": "Hedrex", "genre": "Fantasy / Adventure", "tags": ["Fantasy & Adventure"], "synopsis": "Isang batang nawawala sa kagubatan ang nakahanap ng mundong puno ng mahiwagang nilalang."},
    {"n": "19", "title": "The Sword of Destiny", "author": "Hedrex", "genre": "Fantasy / Action", "tags": ["Fantasy & Adventure"], "synopsis": "Isang simpleng panday ang nakatakdang humawak sa espadang hindi kayang buhatin ng pinakamalalakas na mandirigma."},
    {"n": "20", "title": "Beyond the Stars", "author": "Hedrex", "genre": "Sci-Fi / Adventure", "tags": ["Fantasy & Adventure"], "synopsis": "Isang batang astronaut ang nakatanggap ng mensahe mula sa isang planetang hindi pa nadidiskubre ng sangkatauhan."},
    {"n": "21", "title": "A Thousand Goodbyes", "author": "Hedrex", "genre": "Drama", "tags": ["Drama"], "synopsis": "Isang binata ang kailangang matutong bumitaw sa mga taong mahal niya habang hinaharap ang mga pagbabago sa kanyang buhay."},
    {"n": "22", "title": "One More Try", "author": "Hedrex", "genre": "Inspirational / School Life", "tags": ["Drama"], "synopsis": "Isang estudyanteng paulit-ulit na bumabagsak sa programming ang nagdesisyong huwag sumuko sa kanyang pangarap."},
    {"n": "23", "title": "Mother's Promise", "author": "Hedrex", "genre": "Family Drama", "tags": ["Drama"], "synopsis": "Isang ina ang nagsisikap na matupad ang pangakong mapagtapos sa pag-aaral ang kanyang anak sa kabila ng maraming pagsubok."},
    {"n": "24", "title": "Chasing Tomorrow", "author": "Hedrex", "genre": "Inspirational", "tags": ["Drama"], "synopsis": "Isang dalagang takot mangarap ang unti-unting natutong maniwala sa sarili."},
    {"n": "25", "title": "Until We Meet Again", "author": "Hedrex", "genre": "Friendship / Drama", "tags": ["Drama"], "synopsis": "Dalawang magkaibigang nangakong mananatiling magkasama ang kailangang maghiwalay dahil sa magkaibang pangarap."},
    {"n": "26", "title": "Shadow Runner", "author": "Hedrex", "genre": "Action", "tags": ["Sci-Fi"], "synopsis": "Isang mabilis tumakbong messenger ang aksidenteng nakakita ng ebidensiyang maaaring magpabagsak sa isang makapangyarihang kriminal."},
    {"n": "27", "title": "The Last Login", "author": "Hedrex", "genre": "Sci-Fi / Tech Thriller", "tags": ["Sci-Fi"], "synopsis": "Isang IT student ang nakatanggap ng mensahe mula sa isang account na pag-aari ng taong matagal nang nawawala."},
    {"n": "28", "title": "The Lantern Keeper", "author": "Hedrex", "genre": "Supernatural Fantasy", "tags": ["Sci-Fi"], "synopsis": "Isang dalagita ang nagmana ng parol na gumagabay sa mga ligaw na kaluluwa pabalik sa kanilang tahanan."},
    {"n": "29", "title": "After the Last Sunrise", "author": "Hedrex", "genre": "Post-Apocalyptic Sci-Fi", "tags": ["Sci-Fi"], "synopsis": "Sa mundong winasak ng isang misteryosong pangyayari, naghahanap ang isang binata ng ligtas na lugar para sa natitirang sangkatauhan."},
    {"n": "30", "title": "The Clock That Stopped Time", "author": "Hedrex", "genre": "Fantasy / Mystery", "tags": ["Sci-Fi"], "synopsis": "Isang estudyante ang nakahanap ng relong kayang huminto sa oras, ngunit bawat paggamit nito ay may kapalit."}
];

// Awtomatikong inilalagay ang bawat libro sa genre group nito (5 kuwento bawat group)




window.KATHA_BOOKS.forEach(function (b) {
  b.cover = "images/covers/cover-" + b.n + ".webp";
});

