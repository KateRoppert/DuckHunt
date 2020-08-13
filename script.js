document.addEventListener('DOMContentLoaded', event => {
    const button = document.querySelector('.start');
    const dog = document.querySelector('.dog');
    const duck = document.querySelector('.duck');
    const score = document.querySelector('.score');
    
        

    window.addEventListener('click', event => {
        const audio = new Audio('10-sfx-gun-shot.mp3');
        audio.play();
    });

    button.addEventListener('click', event => {
        	const audio = new Audio('2-duck-hunt-intro.mp3');
        	audio.play();
        	button.style.display = 'none';
        	dog.classList.add('dog_walk');
        });
        
        dog.addEventListener('transitionend', event => {
        	dog.classList.remove('dog_walk');
        	dog.classList.add('dog_jump');
        });
        dog.addEventListener('transitionend', event => {
        	duck.style.display = 'block';
        	duck.classList.add('duck_fly_right');
        });
        duck.addEventListener('transitionend', event => {
            
        	duck.classList.remove('duck_fly_right');
        	duck.classList.add('duck_fly_left');
        });
        duck.addEventListener('transitionend', event => {
        	duck.classList.remove('duck_fly_left');
        	duck.classList.add('duck_fly_top_left');
        });
        

        let duckClick = function() {
        	let coords = duck.getBoundingClientRect();
        	console.log('coords = ', coords);
        	score.style.left = coords.left + 'px';
        	score.style.top = coords.top + 'px';
        	duck.remove();
        	score.classList.add('score_active');
        	score.addEventListener('transitionend', event => {
        	score.classList.remove('score_active');
        });
        	duck.classList.remove('duck_fly_top_left');
        	duck.classList.add('duck_fly_right')
        }

        duck.addEventListener('click', duckClick);
    });    