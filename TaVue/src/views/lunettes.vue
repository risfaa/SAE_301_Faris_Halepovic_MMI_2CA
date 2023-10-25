
import { RouterLink } from 'vue-router';
<template>
    <!-- text intro -->
    <div>
        <h1 class="font-bold text-xl mt-16 ml-80">Nos lunettes</h1>
    </div>

    <!-- description lunettes 1 -->
    <div class="flex mx-80 mt-32 items-center">

        <div class="mr-14 mt-4">
            <img class="w-[480px] h-[100px]" src="../assets/img/lunette_pont.webp" alt="image lunette">
        </div>

        <!-- text description -->
        <div>
            <div>
                <h3 class="font-medium">Parisienne Élégance</h3>
            </div>

            <div class="mt-4 mr-60">
                <p>
                    Ces lunettes incarnent un style sophistiqué parfait pour les citadins modernes. 
                    Leur monture fine et élégante s'adapte à toutes les tenues, de jour comme de nuit. 
                    Elles sont conçues pour refléter la confiance et le raffinement de ceux qui les portent.
                </p>
            </div>

            <div class="mt-6">
                <RouterLink to="/personnalisation"> <button  class="font-montserrat bg-gray-300 text-black px-3 py-1 z-50 self-end">Personnaliser vos lunettes ici</button></RouterLink>
            </div>
        </div>
    </div>

    <!-- description lunettes 2 -->
    <div class="flex mx-80 mt-32 items-center">

        <div class="mr-14 mt-4">
            <img class="w-[480px] h-[100px]" src="../assets/img/lunette_base.webp" alt="image lunette">
        </div>

        <!-- text description -->
        <div>
            <div>
                <h3 class="font-medium">Montmartre chic</h3>
            </div>

            <div class="mt-4 mr-60">
                <p>
                    Les lunettes "Montmartre chic" sont conçues pour vous faire ressentir une connexion profonde avec le monde qui vous entoure. 
                    Leur monture en matériaux durables s'inspire de la nature, tout en offrant un confort optimal pour vos yeux, 
                    que ce soit en plein air ou en intérieur.
                </p>
            </div>

            <div class="mt-6">
                <RouterLink to="/personnalisation"> <button class="font-montserrat bg-gray-300 text-black px-3 py-1 z-50 self-end">Personnaliser vos lunettes ici</button> </RouterLink>
            </div>
        </div>
    </div>

<!-- description lunettes 3 -->
<div class="flex mx-80 mt-32 items-center">

        <div class="mr-14 mt-4">
            <img class="w-[480px] h-[100px]" src="../assets/img/lunette_ronde.webp" alt="image lunette">
        </div>

        <!-- text description -->
        <div>
            <div>
                <h3 class="font-medium">Bordeaux Charme</h3>
            </div>

            <div class="mt-4 mr-60">
                <p>
                    Pour les esprits contemporains, ces lunettes incarnent l'innovation et le style. 
                    Leur design épuré et minimaliste s'intègre parfaitement dans l'univers moderne. 
                    Ces lunettes sont le reflet de l'évolution et de l'audace dans la mode optique.
                </p>
            </div>

            <div class="mt-6">
                <RouterLink to="/personnalisation">  <button class="font-montserrat bg-gray-300 text-black px-3 py-1 z-50 self-end">Personnaliser vos lunettes ici</button> </RouterLink>
            </div>
        </div>
</div>

<!-- description lunettes 4 -->
<div class="flex mx-80 mt-32 items-center mb-32">

        <div class="mr-14 mt-4">
            <img class="w-[480px] h-[100px]" src="../assets/img/lunette_large.webp" alt="image lunette">
        </div>

        <!-- text description -->
        <div>
            <div>
                <h3 class="font-medium">Bordeaux Charme</h3>
            </div>

            <div class="mt-4 mr-60">
                <p>
                    Ces lunettes sont conçues pour une vision nette et précise, mais elles ne font aucun compromis sur le style. 
                    La monture allie fonctionnalité et esthétique, tout en soulignant l'importance de prendre soin de vos yeux. 
                    Elles sont l'expression d'une vision claire et d'un mode de vie sain.
                </p>
            </div>

            <div class="mt-6">
                <RouterLink to="/personnalisation"> <button class="font-montserrat bg-gray-300 text-black px-3 py-1 z-50 self-end">Personnaliser vos lunettes ici</button> </RouterLink>
            </div>
        </div>
</div>

</template>