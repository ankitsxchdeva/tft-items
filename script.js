const baseItems = [
    'B.F. Sword', 'Chain Vest', 'Giant\'s Belt', 'Needlessly Large Rod', 
    'Negatron Cloak', 'Recurve Bow', 'Sparring Gloves', 'Spatula', 'Tear of the Goddess'
];

const craftedItems = {
    'B.F. Sword': { 'B.F. Sword': 'Deathblade', 'Chain Vest': 'Edge of Night', 'Giant\'s Belt': 'Sterak\'s Gage', 'Needlessly Large Rod': 'Hextech Gunblade', 'Negatron Cloak': 'Bloodthirster', 'Recurve Bow': 'Giant Slayer', 'Sparring Gloves': 'Infinity Edge', 'Spatula': 'Ghostly Emblem', 'Tear of the Goddess': 'Spear of Shojin' },
    'Chain Vest': { 'B.F. Sword': 'Edge of Night', 'Chain Vest': 'Bramble Vest', 'Giant\'s Belt': 'Sunfire Cape', 'Needlessly Large Rod': 'Crownguard', 'Negatron Cloak': 'Gargoyle Stoneplate', 'Recurve Bow': 'Titan’s Resolve', 'Sparring Gloves': 'Steadfast Heart', 'Spatula': 'Storyweaver Emblem', 'Tear of the Goddess': 'Protector’s Vow' },
    'Giant\'s Belt': { 'B.F. Sword': 'Sterak\'s Gage', 'Chain Vest': 'Sunfire Cape', 'Giant\'s Belt': 'Warmog’s Armor', 'Needlessly Large Rod': 'Morellonomicon', 'Negatron Cloak': 'Evenshroud', 'Recurve Bow': 'Nashor’s Tooth', 'Sparring Gloves': 'Guardbreaker', 'Spatula': 'Dryad Emblem', 'Tear of the Goddess': 'Redemption' },
    'Needlessly Large Rod': { 'B.F. Sword': 'Hextech Gunblade', 'Chain Vest': 'Crownguard', 'Giant\'s Belt': 'Morellonomicon', 'Needlessly Large Rod': 'Rabadon’s Deathcap', 'Negatron Cloak': 'Ionic Spark', 'Recurve Bow': 'Guinsoo’s Rageblade', 'Sparring Gloves': 'Jeweled Gauntlet', 'Spatula': 'Fated Emblem', 'Tear of the Goddess': 'Archangel’s Staff' },
    'Negatron Cloak': { 'B.F. Sword': 'Bloodthirster', 'Chain Vest': 'Gargoyle Stoneplate', 'Giant\'s Belt': 'Evenshroud', 'Needlessly Large Rod': 'Ionic Spark', 'Negatron Cloak': 'Dragon’s Claw', 'Recurve Bow': 'Runaan’s Hurricane', 'Sparring Gloves': 'Quicksilver', 'Spatula': 'Heavenly Emblem', 'Tear of the Goddess': 'Adaptive Helm' },
    'Recurve Bow': { 'B.F. Sword': 'Giant Slayer', 'Chain Vest': 'Titan’s Resolve', 'Giant\'s Belt': 'Nashor’s Tooth', 'Needlessly Large Rod': 'Guinsoo’s Rageblade', 'Negatron Cloak': 'Runaan’s Hurricane', 'Recurve Bow': 'Red Buff', 'Sparring Gloves': 'Last Whisper', 'Spatula': 'Porcelain Emblem', 'Tear of the Goddess': 'Statikk Shiv' },
    'Sparring Gloves': { 'B.F. Sword': 'Infinity Edge', 'Chain Vest': 'Steadfast Heart', 'Giant\'s Belt': 'Guardbreaker', 'Needlessly Large Rod': 'Jeweled Gauntlet', 'Negatron Cloak': 'Quicksilver', 'Recurve Bow': 'Last Whisper', 'Sparring Gloves': 'Thief’s Gloves', 'Spatula': 'Umbral Emblem', 'Tear of the Goddess': 'Hand of Justice' },
    'Spatula': { 'B.F. Sword': 'Ghostly Emblem', 'Chain Vest': 'Storyweaver Emblem', 'Giant\'s Belt': 'Dryad Emblem', 'Needlessly Large Rod': 'Fated Emblem', 'Negatron Cloak': 'Heavenly Emblem', 'Recurve Bow': 'Porcelain Emblem', 'Sparring Gloves': 'Umbral Emblem', 'Spatula': 'Tactician\'s Crown', 'Tear of the Goddess': 'Mythic Emblem' },
    'Tear of the Goddess': { 'B.F. Sword': 'Spear of Shojin', 'Chain Vest': 'Protector’s Vow', 'Giant\'s Belt': 'Redemption', 'Needlessly Large Rod': 'Archangel’s Staff', 'Negatron Cloak': 'Adaptive Helm', 'Recurve Bow': 'Statikk Shiv', 'Sparring Gloves': 'Hand of Justice', 'Spatula': 'Mythic Emblem', 'Tear of the Goddess': 'Blue Buff' }
};

function sanitize(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}

const imageMapping = {
    'BFSword': 'BFSword.png',
    'ChainVest': 'ChainVest.png',
    'GiantsBelt': 'GiantsBelt.png',
    'NeedlesslyLargeRod': 'NeedlesslyLargeRod.png',
    'NegatronCloak': 'NegatronCloak.png',
    'RecurveBow': 'RecurveBow.png',
    'SparringGloves': 'SparringGloves.png',
    'Spatula': 'Spatula.png',
    'TearoftheGoddess': 'TearoftheGoddess.png',
    'Deathblade': 'Deathblade.png',
    'EdgeofNight': 'EdgeofNight.png',
    'SteraksGage': 'SteraksGage.png',
    'HextechGunblade': 'HextechGunblade.png',
    'Bloodthirster': 'Bloodthirster.png',
    'GiantSlayer': 'GiantSlayer.png',
    'InfinityEdge': 'InfinityEdge.png',
    'GhostlyEmblem': 'GhostlyEmblem.png',
    'SpearofShojin': 'SpearofShojin.png',
    'BrambleVest': 'BrambleVest.png',
    'SunfireCape': 'SunfireCape.png',
    'Crownguard': 'Crownguard.png',
    'GargoyleStoneplate': 'GargoyleStoneplate.png',
    'TitansResolve': 'TitansResolve.png',
    'SteadfastHeart': 'SteadfastHeart.png',
    'StoryweaverEmblem': 'StoryweaverEmblem.png',
    'ProtectorsVow': 'ProtectorsVow.png',
    'WarmogsArmor': 'WarmogsArmor.png',
    'Morellonomicon': 'Morellonomicon.png',
    'Evenshroud': 'Evenshroud.png',
    'NashorsTooth': 'NashorsTooth.png',
    'Guardbreaker': 'Guardbreaker.png',
    'DryadEmblem': 'DryadEmblem.png',
    'Redemption': 'Redemption.png',
    'RabadonsDeathcap': 'RabadonsDeathcap.png',
    'IonicSpark': 'IonicSpark.png',
    'GuinsoosRageblade': 'GuinsoosRageblade.png',
    'JeweledGauntlet': 'JeweledGauntlet.png',
    'FatedEmblem': 'FatedEmblem.png',
    'ArchangelsStaff': 'ArchangelsStaff.png',
    'DragonsClaw': 'DragonsClaw.png',
    'RunaansHurricane': 'RunaansHurricane.png',
    'Quicksilver': 'Quicksilver.png',
    'HeavenlyEmblem': 'HeavenlyEmblem.png',
    'AdaptiveHelm': 'AdaptiveHelm.png',
    'RedBuff': 'RedBuff.png',
    'LastWhisper': 'LastWhisper.png',
    'PorcelainEmblem': 'PorcelainEmblem.png',
    'StatikkShiv': 'StatikkShiv.png',
    'ThiefsGloves': 'ThiefsGloves.png',
    'UmbralEmblem': 'UmbralEmblem.png',
    'HandofJustice': 'HandofJustice.png',
    'TacticiansCrown': 'TacticiansCrown.png',
    'MythicEmblem': 'MythicEmblem.png',
    'BlueBuff': 'BlueBuff.png'
};

let currentQuestion;
let score = 0;
let wrongAnswers = 0;
let lives = 3;
let timer = 30;  // Update the timer to 30 seconds
let interval;
let gameStarted = false;

function startGame() {
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('question-container').style.display = 'flex';
    document.getElementById('options-container').style.display = 'flex';
    document.getElementById('timer').textContent = `Time: ${timer}`;
    updateLivesDisplay();
    updateScoreDisplay();
    generateQuestion();
}

function generateQuestion() {
    if (wrongAnswers >= 3) {
        endGame();
        return;
    }

    const baseItem = baseItems[Math.floor(Math.random() * baseItems.length)];
    const craftedItem = craftedItems[baseItem];
    const correctBaseItem = Object.keys(craftedItem)[Math.floor(Math.random() * Object.keys(craftedItem).length)];
    currentQuestion = { base: baseItem, item: craftedItem[correctBaseItem], correct: correctBaseItem, options: shuffleOptions(correctBaseItem) };
    displayQuestion();
}

function shuffleOptions(correctBaseItem) {
    const options = [...baseItems];
    const index = options.indexOf(correctBaseItem);
    if (index > -1) {
        options.splice(index, 1);
    }
    return shuffle([correctBaseItem, ...options.slice(0, 3)]);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayQuestion() {
    const question = currentQuestion;
    document.getElementById('question').innerHTML = `
        <img src="img/${imageMapping[sanitize(question.base)]}" alt="${question.base}" title="${question.base}">
        <img src="img/plus.png" alt="Plus" title="Plus">
        <img src="img/question.png" alt="Question Mark" id="question-mark">
        <img src="img/equal.png" alt="Equal" title="Equal">
        <img src="img/${imageMapping[sanitize(question.item)]}" alt="${question.item}" title="${question.item}">
    `;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerHTML = `<img src="img/${imageMapping[sanitize(option)]}" alt="${option}"><span class="tooltip">${option}</span>`;
        optionElement.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionElement);
    });
}

function startTimer() {
    interval = setInterval(updateTimer, 1000);
}

function checkAnswer(selectedOption) {
    if (!gameStarted) {
        gameStarted = true;
        startTimer();
    }

    if (selectedOption === currentQuestion.correct) {
        score++;
    } else {
        wrongAnswers++;
        lives--;
    }
    updateLivesDisplay();
    updateScoreDisplay();
    generateQuestion();
}

function updateLivesDisplay() {
    let livesDisplay = '';
    for (let i = 0; i < lives; i++) {
        livesDisplay += '❤️';
    }
    for (let i = 0; i < wrongAnswers; i++) {
        livesDisplay += '❌';
    }
    document.getElementById('score').textContent = livesDisplay;
}

function updateScoreDisplay() {
    document.getElementById('current-score').textContent = `Score: ${score}`;
}

function updateTimer() {
    timer--;
    document.getElementById('timer').textContent = `Time: ${timer}`;
    if (timer === 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(interval);
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('options-container').style.display = 'none';
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('final-score').textContent = `Your score is: ${score}`;
}

function resetGame() {
    score = 0;
    wrongAnswers = 0;
    lives = 3;
    timer = 30;  // Reset the timer to 30 seconds
    gameStarted = false;
    startGame();
}

document.addEventListener('DOMContentLoaded', startGame);
