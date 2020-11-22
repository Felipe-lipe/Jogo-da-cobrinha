let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

    function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
    }

    function criarCobrinha(){
        for(i=0; i < snake.length; i++){
            context.fillStyle = "green";
            context.fillRect(snake[i].x, snake[i].y, box, box);
        }
    }

    function drawFood(){
        context.fillStyle = "red";
        context.fillRect(food.x, food.y, box, box);
    }

    document.addEventListener('keydown', update);

    function update (event){
        if(event.keyCode == 37 && direction != "right") direction = "left";
        if(event.keyCode == 38 && direction != "down") direction = "up";
        if(event.keyCode == 39 && direction != "left") direction ="right"
        if(event.keyCode == 40 && direction != "up") direction ="down"
    }

    function iniciarJogo(){
        if(snake[0].x > 15 * box && direction == "right") snake [0].x = 0; //Se a cobra utrapassar a box na direita, ela vai receber o valor de 0 e aparecerá no outro lado.
        if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
        if(snake[0].y > 15 * box && direction  == "down") snake[0].y = 0;
        if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

        
        for(i = 1; i < snake.length; i++){
            if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
                clearInterval(jogo);
                alert('Game Over :(')
            }
        }

        criarBG();
        criarCobrinha();
        drawFood();

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if(direction == "right") snakeX += box;// Se a posição for direita, acrescente um quadradinho a direita
        if(direction == "left") snakeX -= box;// Se a posição for esquerda, acrescente um quadradinho a esquerda
        if(direction == "up") snakeY -= box;// Se a posição for cima, acrescente um quadradinho a cima
        if(direction == "down") snakeY += box;// Se a posição for baixo, acrescente um quadradinho a baixo

        if(snakeX != food.x || snakeY != food.y){
            snake.pop();
        }
        else{food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
        }

       
        let newHead = {
            x: snakeX,
            y: snakeY
        }

        snake.unshift(newHead)
    }

let jogo = setInterval(iniciarJogo, 100);//Aqui estamos passando um intervalo de 100 milisegundos, pra nossa iniciarJogo e cada 100 milisegundos ela vai estar sendo renovada e ela vai dar continuidade ao nosso jogo sem ele travar



