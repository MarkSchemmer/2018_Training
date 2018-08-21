
/*
    for of  loop in a board.childNodes

    but a better syntax is the board.childNodes.forEach(.....)

    a better way for getting every node in the table...

    !!undefined === to a true/false boolean

    +false === 0 and +true === 1

    +!!undefined===0
*/

let board =  document.getElementById('grid')
const btn = document.getElementById('next')
const btn2 = document.getElementById('autoplay')



class LogicLife {
    constructor(dimensions){
        this.dimensions = dimensions
        this.prevBoard = []
        this.board = this.cloneBoard(this.prevBoard)
    }
    initializeBoard(){
        let board = this.board
        for(let y = 0; y < this.dimensions; y++){
            board[y] = []
            
            for(let x = 0; x < this.dimensions; x++){
                board[y][x] = 0
            }
        }
        this.prevBoard = this.cloneBoard(this.board)
        return board
    }



    cloneBoard(array){
        return array.slice().map(x => x.slice())
    }


    next(board){
        let bd = [];
        [].forEach.call(board.childNodes, 
            (child,index) => { 
                bd[index] = [];
                [].forEach.call(child.childNodes,(gtrChild) => {
                    bd[index].push(gtrChild.childNodes[0].checked?1:0)
                })
            })

            this.board = bd 
            return this.makeNewBoard(this.board)
    }

    aliveNumbers(arr,x,y){
        let sum = 0
        let prevRow = arr[y-1] || []
        let nextRow = arr[y+1] || []
        let neighbors = [
            arr[y][x-1], arr[y][x+1],
            nextRow[x-1], nextRow[x+1], nextRow[x],
            prevRow[x], prevRow[x-1], prevRow[x+1]
        ].forEach(a => {
            sum += +!!a
        })

        return sum 
    }

    makeNewBoard(board){
        this.prevBoard = this.cloneBoard(board)
        for(let y = 0; y < this.prevBoard.length; y++){
            for(let x = 0; x < this.prevBoard[y].length; x++){
                let sum = this.aliveNumbers(this.prevBoard,x,y)
                let live = board[y][x] === 1 
                if(live){
                        if(sum < 2 || sum > 3) board[y][x] = 0
                        else if(sum === 2 || sum === 3) board[y][x] = 1
                } else 
                    if(sum === 3) board[y][x] = 1
                    else board[y][x] = 0
            }
        }
        return board
    }

    toString(){
        return this.board.map(y =>{
            return y.map(x => x).join(' ')
        } ).join('\n')
    }
}


class DisplayLife {
    constructor(dims,board){
        this.table = board
        this.logic = new LogicLife(dims)
        this.board = this.logic.initializeBoard()
        this.DisplayBoard(this.board)
    }


    nextClicked(){
        this.board = this.logic.next(this.table)
        this.DisplayBoard(this.board)
    }

    DisplayBoard(board){
        let fragemnt = document.createDocumentFragment()
        for(let y = 0; y < board.length; y++){
            let row = document.createElement('tr')
            for(let x = 0; x < board[y].length; x++){
                let cell = document.createElement('td')
                let checkbox = document.createElement('input')
                checkbox.type = "checkbox"
                checkbox.checked = board[y][x] === 1 ? true : false
                cell.appendChild(checkbox)
                row.appendChild(cell)
            }
            fragemnt.appendChild(row)
        }
        this.table.innerHTML = ''
        this.table.appendChild(fragemnt)
    }
}

let makeboard = new DisplayLife(12, board)

 btn.addEventListener('click', function(event){
        makeboard.nextClicked()
 })


 btn2.addEventListener('click', function(event){
     setInterval(function(){makeboard.nextClicked()}, 1000)
 })

