const mygamelist = [
    {
        gid: "g1",
        name: "UNC vs. Duke",
        type: "NCAA Men's Basketball",
        logo1: "/logos/unc.png",
        logo2: "/logos/duke.png",
        date: "Oct 1",
        time: "1PM",
        location: "Dean Dome",
        quizNum: 80,
        qidlist:[1,2,3]
    },
    {
        gid: "g2",
        name: "Wake Forest vs. Florida",
        type: "NCAA Men's Basketball",
        logo1: "/logos/wake_forest.png",
        logo2: "/logos/florida.png",
        date: "Oct 11",
        time: "5PM",
        location: "XXX",
        quizNum: 10,
        qidlist:[1,2]
    },
    {
        gid: "g3",
        name: "Michigan vs. Rutgers",
        type: "NCAA Men's Basketball",
        logo1: "/logos/michigan.png",
        logo2: "/logos/rutgers.png",
        date: "Oct 21",
        time: "6PM",
        location: "XXX",
        quizNum: 20,
        qidlist:[1,2,3,4]
    },
    {
        gid: "g4",
        name: "Virginia vs. Miami",
        type: "NCAA Men's Basketball",
        logo1: "/logos/virginia.png",
        logo2: "/logos/miami.png",
        date: "Oct 29",
        time: "2PM",
        location: "XXX",
        quizNum: 30,
        qidlist:[1,4]
    }
]

const newgamelist = [
        {
        gid: "g5",
        name: "Duke vs. Florida",
        type: "NCAA Men's Basketball",
        logo1: "/logos/unc.png",
        logo2: "/logos/duke.png",
        date: "Oct 8",
        time: "2PM",
        location: "XXX",
        quizNum: 30
    },
    {
        gid: "g6",
        name: "NC state vs. Virginia",
        type: "NCAA Men's Basketball",
        logo1: "/logos/wake_forest.png",
        logo2: "/logos/florida.png",
        date: "Oct 10",
        time: "6PM",
        location: "XXX",
        quizNum: 30
    },
    {
        gid: "g7",
        name: "UCLA vs. Oregon",
        type: "NCAA Men's Basketball",
        logo1: "/logos/michigan.png",
        logo2: "/logos/rutgers.png",
        date: "Nov 20",
        time: "1PM",
        location: "XXX",
        quizNum: 30
    },
    {
        gid: "g8",
        name: "UCLA vs. Oregon",
        type: "NCAA Men's Basketball",
        logo1: "/logos/michigan.png",
        logo2: "/logos/rutgers.png",
        date: "Nov 24",
        time: "5PM",
        location: "XXX",
        quizNum: 30
    }
]

const quizlist=[
    {
        qid: 1,
        title:"Which coach has the most career NCAA fourmament wins?",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: 4,
    },
    {
        qid: 2,
        title:"I was drafted by the Golden State Warriors and won the Slam Dunk Competition in Oakland. Who am I?",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: 3,
    },
    {
        qid: 3,
        title:"Playing in the early 1990s, what number did Eric Montross wear on his unifom?",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: 3,
    },
    {
        qid: 4,
        title:"Prior to the beginning of the NCAA Tournament in 1939, North Carolina was undefeated and voted National Champions in what year?",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: 3,
    },
]

export {mygamelist, newgamelist, quizlist}