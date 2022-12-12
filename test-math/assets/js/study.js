window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';


    /*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

        if (!board.includes(''))
            announce(TIE);
    }

    const announce = (type) => {
        switch (type) {
            case PLAYERO_WON:
                announcer.innerHTML = 'Người Chơi <span class="playerO">O</span> Chiến Thắng';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Người Chơi <span class="playerX">X</span> Chiến Thắng';
                break;
            case TIE:
                announcer.innerText = 'Không Có Ai Chiến Thắng';
        }
        announcer.classList.remove('hide');
    };

    const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O') {
            return false;
        }

        return true;
    };

    const updateBoard = (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove('player${currentPlayer}');
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add('player${currentPlayer}');
    }

    const userAction = (tile, index) => {
        if (isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add('player${currentPlayer}');
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    tiles.forEach((tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);
});
const allTabMenu = document.querySelectorAll('.tab-menu li');
const line = document.querySelector('.tab-menu .line');
const allContent = document.querySelectorAll('.content-pro');

let width = allTabMenu[0].offsetWidth;
let left = allTabMenu[0].offsetLeft;
line.style.width = width + 'px';
line.style.left = left + 'px';

allTabMenu.forEach(item => {
    if (!item.classList.contains('dropdown-toggle')) {
        item.addEventListener('click', function() {
            allTabMenu.forEach(i => {
                i.classList.remove('active-plus');
            })

            if (this.parentElement.classList.contains('dropdown')) {
                width = this.parentElement.parentElement.offsetWidth;
                left = this.parentElement.parentElement.offsetLeft;

                this.parentElement.parentElement.classList.add('active-plus');
                this.classList.add('active-plus');
            } else {
                width = this.offsetWidth;
                left = this.offsetLeft;

                this.classList.add('active-plus');
            }

            line.style.width = width + 'px';
            line.style.left = left + 'px';

            allContent.forEach(content => {
                if (this.dataset.target === content.id) {
                    content.classList.add('active-plus');
                } else {
                    content.classList.remove('active-plus');
                }
            })
        })
    }
})
const allIndicator = document.querySelectorAll('.indicator li');
const allContents = document.querySelectorAll('.content-plus li');

allIndicator.forEach(item => {
    item.addEventListener('click', function() {
        const content = document.querySelector(this.dataset.target);

        allIndicator.forEach(i => {
            i.classList.remove('active-max');
        })

        allContents.forEach(i => {
            i.classList.remove('active-max');
        })

        content.classList.add('active-max');
        this.classList.add('active-max');
    })
})

function searchfunc() {
    let menusearch = document.querySelector('#menu_search');
    let menuitems = Array.from(document.querySelectorAll('.menu_item'));
    menusearch.value = menusearch.value.toLowerCase();
    //ẩn đi và hiện khi search
    menuitems.forEach(function(el) {
        let text = el.innerText;
        if (text.indexOf(menusearch.value) > -1)
            el.style.display = ""
        else el.style.display = "none";
    })
}