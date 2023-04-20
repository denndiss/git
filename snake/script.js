let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        let rows = 20;
        let cols = 30;
        
        let snake = [{
            x: 15, y:15
            }
        ];

        let food;
        let cellWidth = canvas.width / cols;
        let cellHeight = canvas.height / rows;
        let direction = 'LEFT';
        let foodCollected = false;

        placeFood();

        setInterval(gameLoop, 125);
        document.addEventListener('keydown', keyDown);


        draw();
            function draw() {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';
            
            snake.forEach(part => add(part.x, part.y));

            ctx.fillStyle = 'yellow';
            add(food.x, food.y);                                        //FOOD
            
            requestAnimationFrame(draw);
        }

        function changeDirection(){
          if( snake[0].x <0) {
            direction='RIGHT'   
            }

          if( snake[0].x > cols -1) {
            direction='LEFT'   
            }

          if( snake[0].y <0) {
            direction='DOWN'   
            }

          if( snake[0].y >rows -1) {
            direction='UP'   
            }
        }
        
        function placeFood (){
            let randomX = Math.floor(Math.random() *cols);
            let randomY = Math.floor(Math.random() *rows);

            food = {
                x: randomX,
                y: randomY};
        }

        function add(x, y){
            ctx.fillRect(x* cellWidth, y * cellHeight, cellWidth -1, cellHeight -1 );
        }

        function shiftSnake() {
            for (let i = snake.length -1; i > 0; i--) {
                const part = snake[i];
                const lastPart = snake [i - 1];
                part.x = lastPart.x;
                part.y = lastPart.y;                
            }
        }

        function gameLoop(){

            changeDirection();

            if(foodCollected) {
                snake = [{
                    x: snake[0].x,
                    y: snake[0].y
                }, ...snake];

                foodCollected = false;
            }

            shiftSnake();

            if (direction == 'LEFT') {          //Bewegung einstellen
                snake[0].x--;}

            if (direction == 'UP') {
                snake[0].y--;}

            if (direction == 'RIGHT') {
                snake[0].x++;}

            if (direction == 'DOWN') {
                snake[0].y++;}

            if( snake[0].x == food.x &&         //wenn frisst kommt neues Futter
                snake[0].y == food.y) {
                    foodCollected = true;
                    
                    placeFood();
            }
        }

        function keyDown(e) {
            if(e.keyCode == 37){
                direction = 'LEFT';
            }

            if(e.keyCode == 38){
                direction = 'UP';
            }

            if(e.keyCode == 39){
                direction = 'RIGHT';
            }

            if(e.keyCode == 40){
                direction = 'DOWN';
            }
        }