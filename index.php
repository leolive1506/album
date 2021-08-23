<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Patinha</title>


    <link rel="stylesheet" href="./styles/global.css">
    <link rel="stylesheet" href="./styles/index.css">


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Sacramento&family=Style+Script&family=WindSong:wght@400;500&display=swap" rel="stylesheet">

</head>

<body>

    <header>
        <h1 class="title-primary">Senhora patinha</h1>
        <div class="content-filters">
            <h2 class="show-filter" onclick="showFilters()">Modo exibição</h2>
            <div class="filters">
                <p id="selected-album" onclick="album()">Álbum</p>
                <p id="selected-auto" onclick="auto()">Auto Load</p>
                <p id="selected-scroll" onclick="addItens()">Scroll</p>
            </div>
        </div>
    </header>

                    

<main>
        <div class="content">


            <!-- <div id="items-wrapper">
                <div id="items">
                    <div class="item"> 
                        <img src="/imgs/FOFURAAAA.jpg" alt="Fofinha" >
                    </div>
                    <div class="item"> 
                        <img src="/imgs/IMG-20210318-WA0074.jpg" alt="Fofinha" >
                    </div>

                    <div class="item">
                        <img src="/imgs/IMG-20210711-WA0018.jpg" alt="Fofinha" >
                    </div>

                    <div class="item">
                        <img src="/imgs/IMG-20210713-WA0010.jpg" alt="Fofinha" >
                    </div>
                    <div class="item">
                        <img src="/imgs/IMG-20210713-WA0010.jpg" alt="Fofinha" >
                    </div>
                    <div class="item">
                        <img src="/imgs/IMG-20210713-WA0010.jpg" alt="Fofinha" >
                    </div>
                    <div class="item">
                        <img src="/imgs/IMG-20210713-WA0010.jpg" alt="Fofinha" >
                    </div>
                </div>
            </div> -->

            <?php


                            $caminho = "./imgs/";

                            // selecionar só .jpg
                            $imagens = glob($caminho . "*.jpg");

                            // fazer echo de cada imagem
                            foreach ($imagens as $imagem) {

                                echo "
                                
                                <img class='album' src='{$imagem}' alt='Img'>
                                ";
                            }

            ?>

                    
        </div>

    
</main> 
        <script src="./script/script.js"></script>
</body>

</html>