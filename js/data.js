var companies = [
    {
        name: "Sterling Dynamics",
        type: "Holding",
        founding: new Date(2020, 03, 12, 03, 12, 34),
        founder: "Maxwell Achilles Sterling",
        value: "1.06 b"
    },
    {
        name: "Placeholder",
        type: "Holding",
        founding: new Date(2020, 03, 12, 03, 12, 34),
        founder: "Lost to time",
        value: "100 b"
    },
    {
        name: "Rustler.co",
        type: "Holding",
        founding: new Date(2023, 04, 04, 09, 30, 00),
        founder: "Johnathan Rustler",
        value: "25 b"
    },
    {
        name: "Ride Free Motorcycle Services",
        type: "Bike Mods",
        founding: new Date(1964, 08, 07, 12, 00, 00),
        founder: "Merle Dixon",
        value: "1.8 m"
    },
    {
        name: "Tobacco Comapany Placeholder",
        type: "Tobacco Company",
        founding: new Date(1724, 08, 07, 12, 00, 00),
        founder: "Placeholder",
        value: "900 m"
    },
    {
        name: "Gateway Mortgage Advisors",
        type: "Mortgage Company",
        founding: new Date(1957, 08, 05, 09, 00, 00),
        founder: "Benjamin Michael Taylor",
        value: "62 m"
    },
    {
        name: "Woods Business Loans",
        type: "Business Loans",
        founding: new Date(2024, 07, 26, 12, 00, 00),
        founder: "Ryan Cole Woods",
        value: "10 m"
    },
    {
        name: "Ratewire",
        type: "Technology",
        founding: new Date(2021, 03, 18, 12, 00, 00),
        founder: "Jack Fritz",
        value: "20 m"
    }
];

var characters = [
    {
        fullname: "Maxwell Achilles Sterling",
        birthday: new Date(2000, 01, 29, 12, 31, 21),
        employment: companies[0],
        gender: "Male",
        networth: "985 m",
        game: "GTA",
        playedby: "Tru3",
        weight: "185",
        height: "6'4",
        eye: "blue",
        hair: "black"
    },
    {
        fullname: "Tyler Michael Devereaux",
        birthday: new Date(1990, 07, 09, 12, 00, 00),
        employment: companies[1],
        gender: "Male",
        networth: "1 b",
        game: "GTA",
        playedby: "Banana",
        weight: "200",
        height: "6'2",
        eye: "brown",
        hair: "black"
    },
    {
        fullname: "Mitchel Allen Grayer",
        birthday: new Date(1995, 00, 08, 12, 33, 02),
        employment: "Private Contracter/Other",
        gender: "Male",
        networth: "380 m",
        game: "GTA",
        playedby: "Jules",
        weight: "218",
        height: "6'4",
        eye: "blue",
        hair: "brown"
    },
    {
        fullname: "Isabel Ann Jones",
        birthday: new Date(1995, 04, 16, 09, 11, 69),
        employment: companies[0],
        gender: "Female",
        networth: "1 b",
        game: "GTA",
        playedby: "Jules",
        weight: "134",
        height: "5'6",
        eye: "green",
        hair: "brown"
    },
    {
        fullname: "Michael Christopher Hall",
        birthday: new Date(1976, 02, 14, 12, 00, 00),
        employment: companies[1],
        gender: "Male",
        networth: "8.6 b",
        game: "GTA",
        playedby: "Banana",
        weight: "220",
        height: "6'3",
        eye: "null",
        hair: "null",
        id: "3mGBm"
    },
    {
        fullname: "Johnathan Rustler",
        birthday: new Date(1992, 05, 12, 03, 15, 00),
        employment: companies[2],
        gender: "Male",
        networth: "120 b",
        game: "GTA",
        playedby: "Faze",
        weight: "190",
        height: "6'1",
        eye: "brown",
        hair: "brown",
        id: "1jGFm"
    },
    {
        fullname: "Khloe Emma Monroe",
        birthday: new Date(2000, 08, 09, 01, 17, 00),
        employment: "Personal Assistant",
        gender: "Female",
        networth: "4 m",
        game: "GTA",
        playedby: "Faze",
        weight: "127",
        height: "5'5",
        eye: "null",
        hair: "null",
        id: "1kGFf"
    },
    {
        fullname: "Colton Kenneth Black",
        birthday: new Date(1991, 10, 30, 07, 02, 45),
        employment: "Entrepreneur",
        gender: "Male",
        networth: "245 b",
        game: "GTA",
        playedby: "Colt",
        weight: "220",
        height: "6'3",
        eye: "blue",
        hair: "blonde",
        id: "1cGCm"
    },
    {
        fullname: "Robert Ronald Kennedy",
        birthday: new Date(1988, 06, 04, 09, 11, 69),
        employment: companies[2],
        gender: "Male",
        networth: "1.1 m",
        game: "GTA",
        playedby: "Rob",
        weight: "150",
        height: "5'10",
        eye: "blue",
        hair: "blonde"
    },
    {
        fullname: "Sarah Lynn Moore",
        birthday: new Date(1992, 11, 08, 08, 00, 00),
        employment: "Mechanic",
        gender: "Female",
        networth: "200 m",
        game: "GTA",
        playedby: "Rob",
        weight: "100",
        height: "5'0",
        eye: "blue",
        hair: "brown"
    },
    {
        fullname: "Zhyxhio James Black",
        birthday: new Date(1997, 07, 26, 14, 08, 00),
        employment: "Pornstar",
        gender: "Male",
        networth: "13.7 m",
        game: "GTA",
        playedby: "Colt",
        eye: "null",
        hair: "null",
        id: "1zGCm"
    },
    {
        fullname: "Nathan Kingston",
        birthday: new Date(1997, 00, 22, 12, 00, 00),
        employment: companies[4],
        gender: "Male",
        networth: "900 m",
        game: "GTA",
        playedby: "Banana",
        weight: "165",
        height: "5'11",
        eye: "null",
        hair: "null",
        id: "1nGBm"
    },
    {
        fullname: "North Marie Bradshaw",
        birthday: new Date(1998, 04, 25, 22, 15, 00),
        employment: "Model",
        gender: "Female",
        networth: "400 k",
        game: "GTA",
        playedby: "Goose",
        weight: "125",
        height: "5'6",
        eye: "null",
        hair: "null",
        id: "2nGGf"
    },
    {
        fullname: "Leo Stone Valdez",
        birthday: new Date(1997, 07, 13, 12, 00, 00),
        employment: "U.S. Military",
        gender: "Male",
        networth: "400 k",
        game: "GRB",
        playedby: "Tru3",
        weight: "200",
        height: "6'1",
        eye: "null",
        hair: "null",
        id: "1lGHTm"
    },
    {
        fullname: "Mark Devereaux",
        birthday: new Date(1990, 07, 09, 12, 00, 00),
        employment: "Private Contracter",
        gender: "Male",
        networth: "3 m",
        game: "GRB",
        playedby: "Banana",
        weight: "200",
        height: "6'2",
        eye: "null",
        hair: "null",
        id: "4mGHBm"
    },
    {
        fullname: "Grant Alexander Hilbert",
        birthday: new Date(1997, 06, 13, 12, 00, 00),
        employment: "U.S. Military",
        gender: "Male",
        networth: "2.5 m",
        game: "GRB",
        playedby: "Jules",
        weight: "210",
        height: "6'0",
        eye: "null",
        hair: "null",
        id: "1gGHJm"
    },
    {
        fullname: "Elana May Smith",
        birthday: new Date(2000, 04, 14, 12, 00, 00),
        employment: "Private Contracter",
        gender: "Female",
        networth: "1.5 m",
        game: "GRB",
        playedby: "Jules",
        weight: "168",
        height: "5'9",
        eye: "null",
        hair: "null",
        id: "1eGHJf"
    },
    {
        fullname: "Richard Thomas Rustler",
        birthday: new Date(1980, 01, 05, 12, 05, 00),
        employment: "U.S. Military",
        gender: "Male",
        networth: "1.3 m",
        game: "GRB",
        playedby: "Faze",
        weight: "200",
        height: "5'10",
        eye: "null",
        hair: "null",
        id: "2rGHFm"
    },
    {
        fullname: "Johnathan Molina Blackwood",
        birthday: new Date(1995, 03, 23, 12, 00, 00),
        employment: "Franchisee",
        gender: "Male",
        networth: "200 m",
        game: "GTA",
        playedby: "Landy",
        weight: "210",
        height: "6'4",
        eye: "blue",
        hair: "black",
        dead: true,
        dateofdeath: new Date(2024, 08, 01, 06, 19, 00),
        id: "2jGLm"
    },
    {
        fullname: "Victor D'Angelo",
        birthday: new Date(1962, 01, 09, 12, 00, 00),
        employment: "Retired",
        gender: "Male",
        networth: "100 m",
        game: "GTA",
        playedby: "Banana",
        weight: "215",
        height: "6'2",
        eye: "brown",
        hair: "gray",
        id: "1vGBm"
    },
    {
        fullname: "Jordyn Ivy Jackson",
        birthday: new Date(1999, 10, 27, 15, 57, 12),
        employment: companies[5],
        gender: "Female",
        networth: "2.5 m",
        game: "GTA",
        playedby: "Tru3",
        weight: "125",
        height: "5'7",
        eye: "green",
        hair: "brown",
        id: "3jGTf"
    },
    {
        fullname: "Kane Robin Barlowe",
        birthday: new Date(1998, 10, 17, 12, 00, 00),
        employment: "Pizza Delivery",
        gender: "Male",
        networth: "1 k",
        game: "GTA",
        playedby: "Landy",
        weight: "205",
        height: "6'4",
        eye: "green",
        hair: "brown",
        id: "2kGLm"
    },
    {
        fullname: "Ryan Cole Woods",
        birthday: new Date(1997, 00, 23, 12, 00, 00),
        employment: companies[6],
        gender: "Male",
        networth: "200 m",
        game: "GTA",
        playedby: "Hosea",
        weight: "190",
        height: "6'1",
        eye: "brown",
        hair: "black",
        id: "3rGHm"
    },
    {
        fullname: "Alex Devereaux",
        birthday: new Date(1995, 07, 11, 12, 00, 00),
        employment: companies[1],
        gender: "Male",
        networth: "200 m",
        game: "GTA",
        playedby: "Banana",
        weight: "200",
        height: "6'2",
        eye: "brown",
        hair: "brown"
    },
    {
        fullname: "Annabeth Elizabeth Clark",
        birthday: new Date(1990, 09, 19, 12, 00, 00),
        employment: "Assassin",
        gender: "Female",
        networth: "22 m",
        game: "GTA",
        playedby: "Tru3",
        weight: "125",
        height: "5'7",
        eye: "blue",
        hair: "blonde",
        alias: "Magnum",
        dead: true,
        dateofdeath: new Date(2023, 06, 01, 12, 00, 00),
    },
    {
        fullname: "Benjamin Ezra Clark",
        birthday: new Date(1984, 09, 02, 12, 00, 00),
        employment: "Retired",
        gender: "Male",
        networth: "1.5 m",
        game: "GTA",
        playedby: "Banana",
        weight: "180",
        height: "5'10",
        eye: "green",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(2022, 10, 02, 12, 00, 00),
    },
    {
        fullname: "Cameron Spencer Kingston",
        birthday: new Date(1994, 09, 11, 12, 00, 00),
        employment: "Unemployed",
        gender: "Male",
        networth: "10 m",
        game: "GTA",
        playedby: "Banana",
        weight: "170",
        height: "5'9",
        eye: "green",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(2022, 11, 18, 12, 00, 00),
    },
    {
        fullname: "Carter Arley Scott",
        birthday: new Date(1998, 04, 27, 12, 00, 00),
        employment: "Mercenary",
        gender: "Male",
        networth: "10",
        game: "GTA",
        playedby: "Tucker",
        weight: "180",
        height: "5'10",
        eye: "blue",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(2022, 09, 23, 12, 00, 00),
        alias: "Stick"
    },
    {
        fullname: "Derrick Soul",
        birthday: new Date(1985, 11, 24, 12, 00, 00),
        employment: "Souls Inc",
        gender: "Male",
        networth: "300 m",
        game: "GTA",
        playedby: "Chaotic",
        weight: "220",
        height: "6'6",
        eye: "brown",
        hair: "black",
        dead: true,
        dateofdeath: new Date(2023, 06, 03, 12, 00, 00),
    },
    {
        fullname: "Eddy Pike Miles",
        birthday: new Date(2003, 01, 03, 12, 00, 00),
        employment: "Pizza Delivery",
        gender: "Male",
        networth: "15 m",
        game: "GTA",
        playedby: "Tru3",
        weight: "134",
        height: "6'1",
        eye: "green",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(2022, 04, 30, 12, 00, 00),
    },
    {
        fullname: "Franklin Tall Smith",
        birthday: new Date(1957, 05, 15, 12, 00, 00),
        employment: "Retired",
        gender: "Male",
        networth: "97 m",
        game: "GTA",
        playedby: "Tru3",
        weight: "170",
        height: "6'3",
        eye: "blue",
        hair: "grey"
    },
    {
        fullname: "Harold Crown",
        birthday: new Date(1949, 11, 29, 12, 00, 00),
        employment: "Pharmaceutical",
        gender: "Male",
        networth: "80 m",
        game: "GTA",
        playedby: "Banana",
        weight: "170",
        height: "5'9",
        eye: "brown",
        hair: "white",
        dead: true,
        dateofdeath: new Date(2022, 11, 30, 08, 00, 00),
    },
    {
        fullname: "Jack Lance Fritz",
        birthday: new Date(2001, 01, 18, 12, 00, 00),
        employment: companies[7],
        gender: "Male",
        networth: "700 m",
        game: "GTA",
        playedby: "Tru3",
        weight: "180",
        height: "6'0",
        eye: "blue",
        hair: "blonde",
        dead: true,
        dateofdeath: new Date(2023, 06, 01, 12, 00, 00),
    },
    {
        fullname: "Jason Perseus Galanis",
        birthday: new Date(1992, 01, 01, 12, 00, 00),
        employment: "Architect",
        gender: "Male",
        networth: "15 b",
        game: "GTA",
        playedby: "Tru3",
        weight: "230",
        height: "6'4",
        eye: "grey",
        hair: "black",
        dead: true,
        dateofdeath: new Date(2023, 06, 01, 12, 00, 00)
    },
    {
        fullname: "Jimmy Tommy Douglas",
        birthday: new Date(1994, 01, 08, 12, 00, 00),
        employment: "Anarchist",
        gender: "Male",
        networth: "1 m",
        game: "GTA",
        playedby: "Tru3",
        weight: "320",
        height: "6'9",
        eye: "blue",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(2023, 06, 01, 12, 00, 00)
    },
    {
        fullname: "Jess Martha Thomas",
        birthday: new Date(2002, 03, 13, 12, 00, 00),
        employment: "Law Clerk",
        gender: "Female",
        networth: "105 k",
        game: "GTA",
        playedby: "Tru3",
        weight: "110",
        height: "5'2",
        eye: "blue",
        hair: "blonde",
        dead: true,
        dateofdeath: new Date(2023, 06, 01, 12, 00, 00),
    },
    {
        fullname: "Jon Paul Maycomb",
        birthday: new Date(1983, 04, 28, 12, 00, 00),
        employment: "LSPD Detective",
        gender: "Male",
        networth: "30 m",
        game: "GTA",
        playedby: "Tru3",
        weight: "179",
        height: "5'11",
        eye: "green",
        hair: "black",
        dead: true,
        dateofdeath: new Date(2023, 00, 08, 12, 00, 00),
    },
    {
        fullname: "Nathaniel Rustler",
        birthday: new Date(1768, 09, 12, 12, 00, 00),
        employment: "The Brotherhood",
        gender: "Male",
        networth: "436 m",
        game: "ACU",
        playedby: "Faze",
        weight: "180",
        height: "5'11",
        eye: "brown",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(1813, 03, 23, 12, 00, 00),
    },
    {
        fullname: "Henry Devereaux",
        birthday: new Date(1740, 02, 04, 12, 00, 00),
        employment: "The Brotherhood",
        gender: "Male",
        networth: "200 b",
        game: "ACU",
        playedby: "Banana",
        weight: "200",
        height: "6'1",
        eye: "brown",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(1825, 03, 02, 12, 00, 00),
    },
    {
        fullname: "William Devereaux",
        birthday: new Date(1840, 05, 09, 12, 00, 00),
        employment: companies[1],
        gender: "Male",
        networth: "500 b",
        game: "RDR",
        playedby: "Banana",
        weight: "200",
        height: "6'1",
        eye: "brown",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(1902, 09, 16, 12, 00, 00),
    },
    {
        fullname: "Nick Rustler",
        birthday: new Date(1850, 10, 10, 12, 00, 00),
        employment: "Outlaw",
        gender: "Male",
        networth: "436 m",
        game: "RDR",
        playedby: "Faze",
        weight: "187",
        height: "6'0",
        eye: "green",
        hair: "blonde",
        dead: true,
        dateofdeath: new Date(1902, 09, 16, 12, 00, 00),
    },
    {
        fullname: "Joseph Marino",
        birthday: new Date(1989, 03, 05, 12, 00, 00),
        employment: "Placeholder",
        gender: "Male",
        networth: "100 m",
        game: "GTA",
        playedby: "Banana",
        weight: "200",
        height: "6'1",
        eye: "brown",
        hair: "brown"
    },
    {
        fullname: "Brandon Lee Hernendez",
        birthday: new Date(2001, 09, 19, 12, 00, 00),
        employment: "Drug Lord",
        gender: "Male",
        networth: "100 m",
        game: "GTA",
        playedby: "Tru3",
        weight: "210",
        height: "6'3",
        eye: "brown",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(2023, 00, 13, 12, 00, 00),
        alias: "Shank"
    },
    {
        fullname: "Natalie Emma Wattson-Rustler",
        birthday: new Date(1995, 08, 09, 12, 00, 00),
        employment: "Placeholder",
        gender: "Female",
        networth: "100 m",
        game: "GTA",
        playedby: "Chaotic",
        weight: "135",
        height: "5'5",
        eye: "blue",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(2023, 01, 01, 12, 00, 00)
    },
    {
        fullname: "Noah Doe",
        birthday: new Date(1998, 04, 27, 12, 00, 00),
        employment: "Placeholder",
        gender: "Male",
        networth: "100 m",
        game: "GTA",
        playedby: "Tucker",
        weight: "200",
        height: "6'1",
        eye: "brown",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(2022, 09, 23, 12, 00, 00)
    },
    {
        fullname: "Pablo Pablo Pablo",
        birthday: new Date(1982, 05, 09, 12, 00, 00),
        employment: "Placeholder",
        gender: "Male",
        networth: "100 m",
        game: "GTA",
        playedby: "Tru3",
        weight: "200",
        height: "6'1",
        eye: "brown",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(2023, 01, 01, 12, 00, 00)
    },
    {
        fullname: "Paul Nelson",
        birthday: new Date(1982, 08, 11, 12, 00, 00),
        employment: "Placeholder",
        gender: "Male",
        networth: "100 m",
        game: "GTA",
        playedby: "Tru3",
        weight: "200",
        height: "6'1",
        eye: "brown",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(2022, 11, 17, 12, 00, 00)
    },
    {
        fullname: "Ronald Kingston",
        birthday: new Date(1971, 02, 03, 12, 00, 00),
        employment: "Placeholder",
        gender: "Male",
        networth: "100 m",
        game: "GTA",
        playedby: "Banana",
        weight: "200",
        height: "6'1",
        eye: "brown",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(2023, 04, 13, 12, 00, 00)
    },
    {
        fullname: "Ryan Pierce",
        birthday: new Date(1999, 11, 23, 12, 00, 00),
        employment: "Placeholder",
        gender: "Male",
        networth: "100 m",
        game: "GTA",
        playedby: "Banana",
        weight: "200",
        height: "6'1",
        eye: "brown",
        hair: "brown"
    },
    {
        fullname: "Theodore Kingston",
        birthday: new Date(1976, 05, 28, 12, 00, 00),
        employment: "Placeholder",
        gender: "Male",
        networth: "100 m",
        game: "GTA",
        playedby: "Banana",
        weight: "200",
        height: "6'1",
        eye: "brown",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(2022, 11, 27, 12, 00, 00)
    },
    {
        fullname: "Vittorio Marino",
        birthday: new Date(1996, 03, 12, 12, 00, 00),
        employment: "Placeholder",
        gender: "Male",
        networth: "100 m",
        game: "GTA",
        playedby: "Banana",
        weight: "200",
        height: "6'1",
        eye: "brown",
        hair: "brown",
        alias: "Vito"
    },
    {
        fullname: "Donovan Sylvester",
        birthday: new Date(1961, 08, 19, 12, 00, 00),
        employment: "Placeholder",
        gender: "Male",
        networth: "100 m",
        game: "GTA",
        playedby: "Banana",
        weight: "200",
        height: "6'1",
        eye: "brown",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(2023, 06, 12, 12, 00, 00),
        alias: "Donnie"
    },
    {
        fullname: "Brian Hall",
        birthday: new Date(1961, 02, 07, 12, 00, 00),
        employment: "Placeholder",
        gender: "Male",
        networth: "100 m",
        game: "GTA",
        playedby: "Banana",
        weight: "200",
        height: "6'1",
        eye: "brown",
        hair: "brown"
    },
    {
        fullname: "Christopher Tucker",
        birthday: new Date(1997, 09, 14, 12, 00, 00),
        employment: "Placeholder",
        gender: "Male",
        networth: "100 m",
        game: "GTA",
        playedby: "Faze",
        weight: "200",
        height: "6'1",
        eye: "brown",
        hair: "brown"
    },
    {
        fullname: "Henry Tucker",
        birthday: new Date(1997, 09, 14, 12, 00, 00),
        employment: "Placeholder",
        gender: "Male",
        networth: "100 m",
        game: "GTA",
        playedby: "Tucker",
        weight: "200",
        height: "6'1",
        eye: "brown",
        hair: "brown",
        dead: true,
        dateofdeath: new Date(2023, 01, 01, 12, 00, 00)
    },
    {
        fullname: "Alice Green",
        birthday: new Date(1997, 09, 14, 12, 00, 00),
        employment: "Placeholder",
        gender: "Female",
        networth: "100 m",
        game: "GTA",
        playedby: "Dark",
        weight: "123",
        height: "5'7",
        eye: "brown",
        hair: "red"
    }
];