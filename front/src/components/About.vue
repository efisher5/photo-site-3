<template>
    <div class="page-container">
        <div class="row justify-content-center mt-5">
            <div class="col-4 text-column">
                <h1 class="header-text">About Me</h1>
                <p class="text">
                    Hi! I'm Evan, and I'm a photographer who loves to travel. 
                    When I'm not out travelling or at the destination, I'm likely 
                    planning my next trip or daydreaming about it. I work as a full-time 
                    software developer (I built this website from scratch!) in Washington D.C. 
                    and photography is my not-so-small side project I work on in my free time.
                    I try to get outside as often as possible, and I've found that photography
                    fits seamlessly into my other hobbies like hiking, kayaking, and snowboarding.
                </p>
        
                <p class="text">
                    I got into photography in the midst of the COVID-19 pandemic as 
                    a way to spend time outdoors. I've never been an artsy person, 
                    (I still draw people as stick figures), but one of my close friends 
                    told me to buy a camera because "it would be a good investment."
                    And they were right - I take my camera with me wherever I go. 
                    Whether its capturing the brilliance of nature or some alleyway I stumble upon,
                    I try to make some lasting memories along the way. 
                </p>
            
                <p class="text">
                    Thanks for visiting my website!
                </p>
            </div>
            <div class="col-4">
                <img class="right" src="../../assets/images/IMG_7328.jpeg" />
            </div>
        </div>
        
        <hr class="divider mt-5 mb-5">
        
        <div class="row justify-content-center mb-5">
            <div class="col-4">
                <img src="../../assets/images/Resized_2.jpg"/>
            </div>

            <div class="col-4 text-column">
                <h1 class="header-text gear-text">My Gear</h1>
                <ul>
                    <li class="bulleted-li"><p class="text">Nikon D3500 camera body</p></li>
                    <li class="bulleted-li"><p class="text">Nikon 18-35mm f5.6 lens</p></li>
                    <li class="bulleted-li"><p class="text">Nikon 50mm f2.8 lens</p></li>
                    <li class="bulleted-li"><p class="text">Pro Master filters</p></li>
                    <li class="bulleted-li"><p class="text">MACTREM Professional Camera Tripod</p></li>
                    <li class="bulleted-li"><p class="text">As you can see, my Patagonia puffer jacket and REI beanie are also close at hand.</p></li>
                </ul>
            </div>
        </div>
        
        <hr class="divider mt-5 mb-5">

        <!-- Publications Section -->
        <div class="row justify-content-center mt-5 mb-5">
            <div class="col-4 text-column">
                <h1 class="header-text gear-text">Publications</h1>
                <p class="text">
                    Below is a list of publications and galleries that have featured my work.
                </p>
                <ul>
                    <li class="bulleted-li">
                        <a href="https://www.splitrockreview.org/"><p class="text">Split Rock Review</p></a>
                    </li>
                    <li class="bulleted-li">
                        <a href="https://www.fusionartps.com/"><p class="text">Fusion Art</p></a>
                    </li>
                    <li class="bulleted-li">
                        <a href="https://www.jmanegallery.com/"><p class="text">J. Mane Gallery</p></a>
                    </li>
                    <li class="bulleted-li">
                        <a href="https://www.laslagunaartgallery.com/2022landscapes"><p class="text">Las Laguna Art Gallery</p></a>
                    </li>
                    <li class="bulleted-li">
                        <a href="https://greatlakesreview.org/"><p class="text">Great Lakes Review</p></a>
                    </li>
                </ul>
            </div>

            <div class="col-4">
                <img src="../../assets/images/IMG_7376.jpeg"/>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
export default {
    setup() {

    }
}
</script>

<style lang="scss" scoped>
@import '../styles.scss';

.text-column {
    margin-top: auto;
    margin-bottom: auto;
}

img {
    width: 100%;
}

a {
    color: $highlight-color;
}
</style>