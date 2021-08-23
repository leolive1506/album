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
                <p id="selected-scroll" onclick="scrollImgs()">Scroll</p>
            </div>
        </div>
    </header>



    <main>
        <div class="content">

            
            <h2 class="show-filter" >Selecione quantidade de imagens desejada</h2>
            <div class="addWidthImgs filters display-block">
                <p>1 imagem</p>
                <p>2 imagens</p>
                <p>3 imagens</p>
            </div>


            <div id="items-wrapper" class="">
                <div id="items" class="">
                    <?php

                        $caminho = "./imgs/";

                        // selecionar só .jpg
                        $imagens = glob($caminho . "*.jpg");

                        // fazer echo de cada imagem
                        foreach ($imagens as $imagem) {

                            echo "<div class='item'>
                                        <img class='' src='{$imagem}' alt='Img'>
                                    </div>
                                    ";
                        }

                ?>
                </div>

            </div>



        </div>


    </main>
    <script src="./script/script.js"></script>
</body>

</html>