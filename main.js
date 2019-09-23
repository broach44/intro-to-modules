console.log('hello!');

const someEvent = () => {
    document.getElementById('firstButton').addEventListener('click', () => {
        alert('This is the absolute best button ever!');
    });
};

someEvent();