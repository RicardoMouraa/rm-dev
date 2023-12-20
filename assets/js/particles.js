particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80, // Reduzido para uma menor densidade
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#493eda"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#252525"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true, // Adicionado aleatoriedade para variar a opacidade
            "anim": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true, // Tamanho aleatório para variar o tamanho das partículas
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#493eda",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3, // Velocidade reduzida para suavizar o movimento
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse",
                "parallax": {
                    "enable": false,
                    "force": 60,
                    "smooth": 10
                }
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 50, // Diminua esse valor para reduzir o espaço
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
