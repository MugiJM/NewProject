var PlayersData= new Array();
const game = document.getElementById("jeopardy")
const displayScore = document.getElementById("show-score")
let score = 0;

function  Register()
{
    var form=document.getElementById("register")

    form.addEventListener("submit",function (e)
    {
        e.preventDefault()
        var Age = document.forms["register"]["age"].value;
        var fn = document.forms["register"]["fname"].value;
        var ln = document.forms["register"]["lname"].value;
        var Dob = document.forms["register"]["dob"].value;
        var Email = document.forms["register"]["email"].value;
        var Gender = document.forms["register"]["genders"].value;
        var Street = document.forms["register"]["street"].value;
        var City = document.forms["register"]["city"].value;
        var Town = document.forms["register"]["town"].value;
        var Country = document.forms["register"]["country"].value;
        var Education = document.forms["register"]["education"].value;
        var Picture = document.forms["register"]["picture"].value;

         if(fn==""||ln ==""||Dob==""||Email ==""||Gender==""||Street ==""||City==""||Town ==""||Country==""||Education =="")
         {
             alert("Please Ensure The Form is Properly Filled")
        }
        else
        if(Age<12){
            alert("You are Too Young to Play this Game")
            return false;
        }
        else {
            PlayersData.push({
                fn,
                ln,
                Dob,
                Email,
                Gender,
                Street,
                City,
                Town,
                Country,
                Education,
                Picture,
            });
        }
        alert("Welcome, " + fn + " to Jeopardy Online ");

        document.getElementById("fname").disabled = true;
        document.getElementById("lname").disabled = true;
        document.getElementById("dob").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("genders").disabled = true;
        document.getElementById("street").disabled = true;
        document.getElementById("city").disabled = true;
        document.getElementById("town").disabled = true;
        document.getElementById("country").disabled = true;
        document.getElementById("education").disabled = true;
        document.getElementById("picture").disabled = true;

        document.getElementById("register-button").disabled = true
        document.getElementById("play-Game").disabled = false

        document.getElementById("register-button").disabled = true
        document.getElementById("play-Game").disabled = false

    })
}
    const Categories = [
        {
            genre: "Music",
            questions: [
                {
                    question: "Who reggae artist sung 'Nah Follow Nobody'",
                    answers: ["Chronixx", "Bob Marley", "Koffee", "Buju Banton"],
                    correct: "Chronixx",
                    value: "100",
                },
                {
                    question: "Who sung 'Too Experienced'",
                    answers: ["Chronixx", "Barrington Levy", "Buju Banton", "Alkaline"],
                    correct: "Barrington Levy",
                    value: "200",
                },
                {
                    question: "Which artist made a hit song in the second Ghost Buster movie?",
                    answers: ["Bobby Brown", "Michael Jackson", "Biggie Smalls", "Tupac"],
                    correct: "Bobby Brown",
                    value: "300",
                },
                {
                    question: "Who sung 'Vienna?'",
                    answers: ["Billy Joel", "Frank Sinatra", "Shai", "Thurston Harris"],
                    correct: "Billy Joel",
                    value: "400",
                },
                {
                    question: "Who sung 'Many Tears Ago",
                    answers: ["Patience & Prudence", "Thurston Harris", "Connie Francis", "Tiny Tim"],
                    correct: "Connie Francis",
                    value: "500",
                },
            ],
        },
        {
            genre: "Game",
            questions: [
                {
                    question: "When was the first Call of Duty released?",
                    answers: ["October 29,2003", "May 31,2003", "September 17,2003", "April 20,2003"],
                    correct: "October 29,2003",
                    value: "100",
                },
                {
                    question: "What version is Minecraft currently on?",
                    answers: ["1.19", "1.19.1", "2", "1.19.2"],
                    correct: "1.19.2",
                    value: "200",
                },
                {
                    question: "What is the name of the main villain in Crash Bandicoot ",
                    answers: ["Doctor Neo Cortex", "Ripto", "Evil Coco", "Dingodile"],
                    correct: "Doctor Neo Cortex",
                    value: "300",
                },
                {
                    question: "What was the highest grossing game of 2020?",
                    answers: ["Modern Warfare", "Fall Guys", "Dragon Ball Z: Kakkarot", "The Last of Us Part II"],
                    correct: "Modern Warfare",
                    value: "400",
                },
                {
                    question: "What was the first video game ever made?",
                    answers: ["Tennis for Two", "Bertie the Brain", "007", "OXO"],
                    correct: "Bertie the Brain",
                    value: "500",
                },
            ],
        },
        {
            genre: "Movies",
            questions: [
                {
                    question: "What is the name of Shrek's companion?",
                    answers: ["Donkey", "Chris Rock", "Horse", "Will Smith"],
                    correct: "Tobey Maguire",
                    value: "100",
                },
                {
                    question: "Who was the first Avenger to die in the movie 'Avengers:Infinity Wars?'",
                    answers: ["Black Widow", "Iron Man", "Loki", "Vision"],
                    correct: "Black Widow",
                    value: "200",
                },
                {
                    question: "What's the name of the skyscraper in Die 300?",
                    answers: ["Lotte World Tower", "Empire State Building", "Fox Plaza", "Nakatomi Plaza"],
                    correct: "Nakatomi Plaza",
                    value: "300",
                },
                {
                    question: "Which movie franchise is currently the longest franchise in the world?",
                    answers: ["Carry On", "Star Trek", "Godzilla", "Fast and Furious"],
                    correct: "Carry On",
                    value: "400",
                },
                {
                    question: "Wat was the name of the first actor that played as Spider-Man?",
                    answers: ["Tobey Maguire", "Andrew Garfield", "Takuya Yamashiro", "Nicholas Hammond"],
                    correct: "Nicholas Hammond",
                    value: "500",
                },
            ],
        },
        {
            genre: "History",
            questions: [
                {
                    question: "In what year did Jamaica receive Emancipation?",
                    answers: ["1962", "1838", "1972", "1839"],
                    correct: "1838",
                    value: "100",
                },
                {
                    question: "What are the Mayans best known for?",
                    answers: ["Math", "Warfare", "Swimming", "Athleticism"],
                    correct: "Math",
                    value: "200",
                },
                {
                    question: "What year did World War II end?",
                    answers: ["1945", "1947", "1944", "1946"],
                    correct: "1945",
                    value: "300",
                },
                {
                    question: "In what year did the Cold War start?",
                    answers: ["1946", "1948", "1950", "1947"],
                    correct: "1947",
                    value: "400",
                },
                {
                    question: "What was the second Caribbean Island to receive Independence?",
                    answers: ["Haiti", "Jamaica", "Cuba", "Dominican Republic"],
                    correct: "Dominican Republic",
                    value: "500",
                },
            ],
        },
        {
            genre: "Biology",
            questions: [
                {
                    question: "What is the powerhouse of the cell?",
                    answers: ["Mitochondria", "Nucleus", "Ribosomes", "Lysosomes"],
                    correct: "Mitochondria",
                    value: "100",
                },
                {
                    question: "Who has more bones: A teenager, adult or a baby?",
                    answers: ["Teenager", "Adult", "Baby", "All are the same"],
                    correct: "Baby",
                    value: "200",
                },
                {
                    question: "Which organ do insects NOT have?",
                    answers: ["Heart", "Brain", "Liver", "Lungs"],
                    correct: "Lungs",
                    value: "300",
                },
                {
                    question: "Unlike most other fish, sharks have no ____?",
                    answers: ["Bones", "Gills", "scales", "Liver"],
                    correct: "Bones",
                    value: "400",
                },
                {
                    question: "What was the first genetically engineered organism?",
                    answers: ["Corn", "Sheep", "Tobacco", "Rat"],
                    correct: "Tobacco",
                    value: "500",
                },
            ],
        },
    ]

    function PlayGame(category) {
        const showRow = document.createElement('div')
        showRow.classList.add('row')

        const genreTitle = document.createElement('div')
        genreTitle.classList.add("title")
        genreTitle.innerHTML = category.genre

        showRow.appendChild(genreTitle)
        game.append(showRow)

        category.questions.forEach(question => {
            const board = document.createElement("div")
            board.classList.add("board")
            showRow.append(board)

            if (question.value === "100") {
                board.innerHTML = "$" + 100
            }
            if (question.value === "200") {
                board.innerHTML = "$" + 200
            }
            if (question.value === "300") {
                board.innerHTML = "$" + 300
            }
            if (question.value === "400") {
                board.innerHTML = "$" + 400
            }
            if (question.value === "500") {
                board.innerHTML = "$" + 500
            }

            board.setAttribute("question1", question.question)
            board.setAttribute("answer1", question.answers[0])
            board.setAttribute("answer2", question.answers[1])
            board.setAttribute("answer3", question.answers[2])
            board.setAttribute("answer4", question.answers[3])
            board.setAttribute("correct-answer", question.correct)
            board.setAttribute("value", board.getInnerHTML())

            board.addEventListener("click", PlayGame)
        })
    }
        Categories.forEach(category => showAnswers(category))

        function showAnswers() {
            this.innerHTML = ""
            this.style.fontSize = "30px"
            this.style.lineHeight = "30px"

            const display = document.createElement("div")

            display.classList.add("text")
            display.innerHTML = this.getAttribute("question1");

            const selectAnswer1 = document.createElement("button")
            const selectAnswer2 = document.createElement("button")
            const selectAnswer3 = document.createElement("button")
            const selectAnswer4 = document.createElement("button")

            selectAnswer1.classList.add("select1")
            selectAnswer2.classList.add("select2")
            selectAnswer3.classList.add("select3")
            selectAnswer4.classList.add("select4")

            selectAnswer1.innerHTML = this.getAttribute("answer1")
            selectAnswer2.innerHTML = this.getAttribute("answer2")
            selectAnswer3.innerHTML = this.getAttribute("answer3")
            selectAnswer4.innerHTML = this.getAttribute("answer4")

            selectAnswer1.addEventListener("click", CheckAnswer)
            selectAnswer2.addEventListener("click", CheckAnswer)
            selectAnswer3.addEventListener("click", CheckAnswer)
            selectAnswer4.addEventListener("click", CheckAnswer)
        //allCards==blockBoard, data-value=value,data-correct=correct-answer
            this.append(display, selectAnswer1, selectAnswer2, selectAnswer3, selectAnswer4)

            const blockBoard = Array.from(document.querySelectorAll(".board"))
            blockBoard.forEach(board => board.removeEventListener("click", showQuestion))
            Countdown()
}
function CheckAnswer() {
    const blockBoard =Array.from(document.querySelectorAll(".board"))
    blockBoard.forEach(board => board.addEventListener("click", PlayGame))

    const card= this.parentElement


            if (card.getAttribute("correct-answer") === this.innerHTML) {
                score = score + parseInt(card.getAttribute("value"))
                displayScore.innerHTML = score
                card.classList.add("isCorrect")
                    while (card().firstChild) {
                        card.removeChild(card.lastChild)
                    }
                    score= question.value++;
                    card.innerHTML = card.getAttribute("value")
            }
            else
                {
                    card.classList.add("isIncorrect")
                    setTimeout(()=>{
                        while(card.firstChild){
                            card.removeChild(card.lastChild)
                        }
                        card.innerHTML = 0
                })
    card.removeEventListener("click", PlayGame)
}
    console.log(countDown)
    clearInterval(countDown)

    showAll()
}
function Countdown() {
    const time = document.querySelector('#timer > h3');
    let minute = 60;
    let countDown = null
    displayTime(minute)

    countDown = setInterval(() => {
        minute--;
        displayTime(minute);
        if (minute === 0) {
            alert('TIME IS UP!')
            clearInterval(countDown);
        }
    }, 1000)
    function displayTime(second) {
        const min = Math.floor(second / 60);
        const sec = Math.floor(second % 60);
        time.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`
    }
}
function showpercentage(){
    let correct=0
    let incorrect=0
    let percentage=0;

    fname=document.getElementById("fname").value
    town=document.getElementById("town").value
}
function findPercentageScore(){

}
function showAll(){
    username=document.getElementById("username").value
    age=document.getElementById("age").value
    document.write("All Players: " + username + "," + age)
}
