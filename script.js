// MARATHON DATA
const marathonData = {
    marathonStart: "2025-10-27T00:00:00Z",
    marathonEnd: "2025-11-24T00:00:00Z",
    isLive: true,
    stats: {
        totalSubs: 15420,
        marathonSubs: 387,
        marathonFollowers: 1205,
        totalBits: 45680
    },
    topSubGifters: [
        {username: "GamerGod99", amount: 50},
        {username: "StreamSupporter", amount: 42},
        {username: "MarlonFan2025", amount: 35},
        {username: "TwitchLegend", amount: 28},
        {username: "SubMaster", amount: 25},
        {username: "GenerousViewer", amount: 20},
        {username: "EpicDonor", amount: 18},
        {username: "ChatChamp", amount: 15},
        {username: "SupportSquad", amount: 12},
        {username: "MarlonArmy", amount: 10}
    ],
    topBitDonors: [
        {username: "BitBoss", amount: 10000},
        {username: "MegaDonor", amount: 8500},
        {username: "GenerousGamer", amount: 6200},
        {username: "TwitchWhale", amount: 5000},
        {username: "BitKing", amount: 3800},
        {username: "StreamSupport", amount: 2500},
        {username: "CheerLeader", amount: 2000},
        {username: "BitMaster", amount: 1500},
        {username: "DonationHero", amount: 1200},
        {username: "SupporterPro", amount: 1000}
    ],
    topChatters: [
        {username: "ChattyKathy", messages: 5420},
        {username: "MessageMaster", messages: 4890},
        {username: "TalkativeTom", messages: 4200},
        {username: "ConvoKing", messages: 3650},
        {username: "ActiveViewer", messages: 3100},
        {username: "ChatChampion", messages: 2800},
        {username: "MessageMachine", messages: 2400},
        {username: "FrequentChatter", messages: 2100},
        {username: "EngagedFan", messages: 1850},
        {username: "RegularViewer", messages: 1500}
    ],
    dailyData: {
        day1: {
            date: "2025-10-27",
            subGifters: [
                {username: "FirstDayHero", amount: 15},
                {username: "EarlySupporter", amount: 10},
                {username: "LaunchDayFan", amount: 8},
                {username: "DayOneViewer", amount: 5},
                {username: "MarathonStarter", amount: 3}
            ],
            bitDonors: [
                {username: "BigSpender", amount: 2500},
                {username: "GenerousStart", amount: 1800},
                {username: "BitOpener", amount: 1200},
                {username: "FirstDayBits", amount: 800},
                {username: "LaunchSupport", amount: 500}
            ],
            chatters: [
                {username: "SuperChatter", amount: 450},
                {username: "TalkativeFan", amount: 380},
                {username: "ActiveDay1", amount: 320},
                {username: "ChatStarter", amount: 280},
                {username: "EngagedViewer", amount: 240}
            ]
        },
        day2: {
            date: "2025-10-28",
            subGifters: [
                {username: "Day2Champion", amount: 12},
                {username: "SecondDayPro", amount: 9},
                {username: "ContinuedSupport", amount: 7},
                {username: "Day2Fan", amount: 6},
                {username: "ConsistentGifter", amount: 4}
            ],
            bitDonors: [
                {username: "Day2Whale", amount: 3000},
                {username: "BitContinues", amount: 2000},
                {username: "SecondDayDonor", amount: 1500},
                {username: "ConsistentBits", amount: 1000},
                {username: "Day2Support", amount: 750}
            ],
            chatters: [
                {username: "ChatKing2", amount: 520},
                {username: "Day2Active", amount: 440},
                {username: "TalkativeDay2", amount: 390},
                {username: "MessagePro", amount: 350},
                {username: "ActiveChatter2", amount: 310}
            ]
        },
        day3: {
            date: "2025-10-29",
            subGifters: [
                {username: "ThirdDayMVP", amount: 20},
                {username: "Day3Legend", amount: 14},
                {username: "MidWeekSupport", amount: 10},
                {username: "ThirdDayFan", amount: 8},
                {username: "Day3Gifter", amount: 5}
            ],
            bitDonors: [
                {username: "HugeDay3Donor", amount: 4000},
                {username: "BitDay3", amount: 2800},
                {username: "ThirdDayBits", amount: 2200},
                {username: "Day3Generous", amount: 1600},
                {username: "MidWeekBits", amount: 1100}
            ],
            chatters: [
                {username: "Day3ChatKing", amount: 580},
                {username: "SuperActive3", amount: 510},
                {username: "ThirdDayTalker", amount: 460},
                {username: "ChatDay3", amount: 420},
                {username: "ActiveDay3", amount: 370}
            ]
        },
        day4: {
            date: "2025-10-30",
            subGifters: [
                {username: "Day4Star", amount: 18},
                {username: "FourthDayHero", amount: 13},
                {username: "Day4Support", amount: 11},
                {username: "FourthDayGifter", amount: 7},
                {username: "Day4Fan", amount: 6}
            ],
            bitDonors: [
                {username: "Day4Whale", amount: 3500},
                {username: "FourthDayBits", amount: 2600},
                {username: "BitDay4", amount: 1900},
                {username: "Day4Donor", amount: 1400},
                {username: "FourthDaySupport", amount: 900}
            ],
            chatters: [
                {username: "ChatMasterDay4", amount: 540},
                {username: "Day4Chatter", amount: 480},
                {username: "ActiveDay4", amount: 430},
                {username: "TalkDay4", amount: 390},
                {username: "Day4Messages", amount: 340}
            ]
        },
        day5: {
            date: "2025-10-31",
            subGifters: [
                {username: "HalloweenGifter", amount: 25},
                {username: "SpookySupporter", amount: 16},
                {username: "Day5Legend", amount: 12},
                {username: "HalloweenFan", amount: 9},
                {username: "ScaryGoodGifter", amount: 7}
            ],
            bitDonors: [
                {username: "HalloweenWhale", amount: 5000},
                {username: "SpookyBits", amount: 3200},
                {username: "Day5Generous", amount: 2400},
                {username: "HalloweenDonor", amount: 1800},
                {username: "ScaryBits", amount: 1300}
            ],
            chatters: [
                {username: "SpookyChatter", amount: 620},
                {username: "HalloweenChat", amount: 550},
                {username: "Day5Active", amount: 490},
                {username: "SpookyTalker", amount: 440},
                {username: "HalloweenMessages", amount: 380}
            ]
        }
    }
};

// COUNTDOWN TIMER
function updateCountdown() {
    const now = new Date().getTime();
    const endTime = new Date(marathonData.marathonEnd).getTime();
    const distance = endTime - now;

    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// PROGRESS BAR
function updateProgress() {
    const now = new Date().getTime();
    const startTime = new Date(marathonData.marathonStart).getTime();
    const endTime = new Date(marathonData.marathonEnd).getTime();
    const totalDuration = endTime - startTime;
    const elapsed = now - startTime;
    const percentage = Math.min(Math.max((elapsed / totalDuration) * 100, 0), 100);

    document.getElementById('progressBar').style.width = percentage + '%';
    document.getElementById('progressText').textContent = percentage.toFixed(1) + '%';
}

// LIVE STATUS
function updateLiveStatus() {
    const liveStatus = document.getElementById('liveStatus');
    if (marathonData.isLive) {
        liveStatus.querySelector('.live-text').textContent = 'LIVE';
        liveStatus.querySelector('.live-dot').style.background = '#ff0000';
    } else {
        liveStatus.querySelector('.live-text').textContent = 'OFFLINE';
        liveStatus.querySelector('.live-dot').style.background = '#808080';
    }
}

// ANIMATE STATS NUMBERS
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// INITIALIZE STATS
function initStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        animateValue(stat, 0, target, 2000);
    });
}

// GET MEDAL EMOJI
function getMedal(rank) {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return rank;
}

// RENDER LEADERBOARD
function renderLeaderboard(containerId, data, type) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    data.forEach((entry, index) => {
        const item = document.createElement('div');
        item.className = 'leaderboard-item';
        
        const rank = document.createElement('div');
        rank.className = 'leaderboard-rank';
        rank.textContent = getMedal(index + 1);
        
        const username = document.createElement('div');
        username.className = 'leaderboard-username';
        username.textContent = entry.username;
        
        const amount = document.createElement('div');
        amount.className = 'leaderboard-amount';
        
        if (type === 'subs') {
            amount.textContent = entry.amount + ' subs';
        } else if (type === 'bits') {
            amount.textContent = entry.amount.toLocaleString() + ' bits';
        } else if (type === 'messages') {
            amount.textContent = entry.messages.toLocaleString() + ' msgs';
        } else if (type === 'chats') {
            amount.textContent = entry.amount + ' msgs';
        }
        
        item.appendChild(rank);
        item.appendChild(username);
        item.appendChild(amount);
        container.appendChild(item);
    });
}

// TAB SWITCHING
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const leaderboards = document.querySelectorAll('.leaderboard');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            leaderboards.forEach(board => board.classList.remove('active'));
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// DAY SELECTOR
function initDaySelector() {
    const daySelector = document.getElementById('daySelector');
    
    for (let i = 1; i <= 28; i++) {
        const dayBtn = document.createElement('button');
        dayBtn.className = 'day-btn';
        if (i === 1) dayBtn.classList.add('active');
        dayBtn.textContent = 'Day ' + i;
        dayBtn.setAttribute('data-day', 'day' + i);
        
        dayBtn.addEventListener('click', () => {
            document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('active'));
            dayBtn.classList.add('active');
            loadDailyData('day' + i);
        });
        
        daySelector.appendChild(dayBtn);
    }
    
    // Load day 1 by default
    loadDailyData('day1');
}

// LOAD DAILY DATA
function loadDailyData(day) {
    const dayData = marathonData.dailyData[day];
    
    if (dayData) {
        renderLeaderboard('dailySubGifters', dayData.subGifters, 'subs');
        renderLeaderboard('dailyBitDonors', dayData.bitDonors, 'bits');
        renderLeaderboard('dailyChatters', dayData.chatters, 'chats');
    } else {
        // Show "No data yet" for future days
        ['dailySubGifters', 'dailyBitDonors', 'dailyChatters'].forEach(id => {
            const container = document.getElementById(id);
            container.innerHTML = '<div style="text-align: center; color: #b8b8b8; padding: 20px;">No data yet for this day</div>';
        });
    }
}

// INITIALIZE ALL
function init() {
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Update progress bar
    updateProgress();
    setInterval(updateProgress, 60000); // Update every minute
    
    // Update live status
    updateLiveStatus();
    
    // Animate stats on load
    setTimeout(initStats, 500);
    
    // Render leaderboards
    renderLeaderboard('subGifters', marathonData.topSubGifters, 'subs');
    renderLeaderboard('bitDonors', marathonData.topBitDonors, 'bits');
    renderLeaderboard('chatters', marathonData.topChatters, 'messages');
    
    // Initialize tabs
    initTabs();
    
    // Initialize day selector
    initDaySelector();
}

// Run on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
