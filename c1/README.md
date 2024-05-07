### API (Application Programming Interface)
    - In this context (API) the word Application refers to any software with a distinc function
    - the word Programming refers to that it is coded (programed)
    - Interface can be thought of as a contract of service, behavior between two applications or parts of the same application

    APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols.

 ### Types of API

    1. First party APIs (internal)
        APIs that we have on our system, on our end, locally in most cases.
    2. Third party APIs (External)

### API usage restriction

## Rate limit

    - Rate limiting na API od treti strani (third-party) vi e mehanizam koj go kontrolira brojot na baranja sto klientot (vo ovoj slucaj toa sme nie, odnosno nasata aplikacija) moze da gi upati (odnosno da bidat istite procesirani) do third party API vo odreden vremenski period
    - So rate limiting se spravuvame na toj nacin sto voveduvame kesiranje (caching)

### Caching

    - Kesiranjeto e tehnika koja se koristi vo presmetkite za skladiranje i upravuvanje so kopii od podatoci ili cesto dostapni resursi na nacin sto ovozmozuva pobrzo prebaruvanje i namaleno optovaruvanje na originalniot izvor na podatocite.
    - Se koristi najcesto za podatoci koi ne se cesto promenlivi - username i password, mailgun i sendgrid, vremenska prognoza

    - Tipovi kesiranje
        1. Vo databaza - zacuvuvanje na rezultati od cesti i najcesto skapi prebaruvanja (query) kon bazata na podatoci vo memorija ili drug brz cache se so cel da se podobrat performansite (najcesto se misli na brzina) na aplikaciite.
        Ovoj tip na kesiranje ima za cel da go namali brojot na baranja kon bazata na podatoci i da ovozmozi pobrz pristap do rezultatite. 

        2. Vo memorija (RAM) - tehnika koja vklucuva zacuvuvanje na podatoci ili rezultati vo operativnata memorija (toa vi e vsusnost RAM) na vasiot kompjuter (client) ili serverot.
        Primer: clientot ja kesira stranata sto ja otvarate poveke pati, a serverot go kesira vasiot request

### Memorizacija

    Imame funkcija calculator (a, b, operacija)

    prv pat ja povikuvame calculator(1, 2, sobiranje) - serverot odi niz funkcijata, ja izvrsuva, i ni go vraka rezultatot, megutoa ja kesira (i pravi caching, go zacuvuva rezultatot)

    vtor pat stom povikame calculator (1, 2) - funkcijata ni e veke kesirana i ke se ignorira ovoj request.

    - Tehnika za optimizacija (najcesto znaci ubrzuvanje na izvrsuvanjeto na aplikacijata) koja se koristi vo kompjuterskoto programiranje i algoritmite za podobruvanje na efikasnosta na funkciite ili metodite so kesiranje na rezultatite od skapite ( moze da bidat skapi i finansiski vo nekoi slucai, megutoa najcesto samo vremenski) na funkcii i nivna povtorna upotreba koga istite vlezovi ke se pojavat povtorno.
    - Memorizacija e koga go pravite povikot poveke od ednas i ja koristite kesiranata vrednost.

### API keys

    - JWT tokenite ni bea vo predhodniot modul edinstveni indikatori za avtentikacija i avtorizacija na korisnik vo program za povikuvanje API
    - Toa nas vsusnost ni predstavuvase API key vo aplikaciite od tie predavanja
    - JWT e samo eden nacin i primer za API key, postojat mnogu drugi.

### Envirionment Variables

    - In Node.js, envirionment variables can be accessed via the 'process.env' object.
    They are commonly used to store sensitive or configurable information, such as API keys or database credentials (primer: username i password na MongoDB cluster)