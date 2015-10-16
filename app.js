var twowrestlers = [];
var index;
var voted = false;
var data = [];
var toBeIncreased;

var Wrestler = function(src, wrestler) {
    this.src = src;
    this.name = wrestler;
    data.push({
        value: 0,
        label: wrestler,
        color: '#361A18',
        highlight: '#811B33'
    });
};
var wrestlers = [
    new Wrestler('img/batista.png', 'Batista'),
    new Wrestler('img/cena.png', 'John Cena'),
    new Wrestler('img/iron-sheik.png', 'Iron Sheik'),
    new Wrestler('img/lesnar.png', 'Brock Lesnar'),
    new Wrestler('img/macho-man.png', 'Macho Man'),
    new Wrestler('img/mc-mahon.png', 'Vince McMahon'),
    new Wrestler('img/mc-mahon2.png', 'Ultimate Warrior'),
    new Wrestler('img/orton.png', 'Randy Orton'),
    new Wrestler('img/stone-cold.png', 'Stone Cold Steve Austin'),
    new Wrestler('img/tripple-h.png', 'Triple H'),
    new Wrestler('img/undertaker.png', 'The Undertaker'),
    new Wrestler('img/ventura.png', 'Jesse The Body Ventura')
];
// var batista = data[0].value;
// var json1 = JSON.stringify(batista);

var i = 0;
wrestlers.forEach(function(elem) {
    if (!isNaN(Number(localStorage.getItem(elem.name)))) {
        data[i].value = Number(localStorage.getItem(elem.name));
    }
    i++;
});

function randomWrestler() {
    return Math.round(Math.random() * (wrestlers.length - 1));
}

function getTwoWrestlers() {
    var a = randomWrestler();
    var b = randomWrestler();
    while (a == b) {
        b = randomWrestler();
    }
    return [a, b];
}

function putWrestler1() {
    var div = document.getElementById('img1');
    div.src = wrestlers[twowrestlers[0]].src;
    // document.getElementById("pop1").innerHTML = wrestlers[twowrestlers[0]].pop
}

function putWrestler2() {
    var div = document.getElementById('img2');
    div.src = wrestlers[twowrestlers[1]].src;
    // document.getElementById("pop2").innerHTML = wrestlers[twowrestlers[1]].pop
}

function hilight1() {
    document.getElementById("img2").style.borderColor = "black";
    document.getElementById("img1").style.borderColor = "yellow";
    index = twowrestlers[0];
    voted = true;
}

function hilight2() {
    document.getElementById("img1").style.borderColor = "black";
    document.getElementById("img2").style.borderColor = "yellow";
    index = twowrestlers[1];
    voted = true;
}

function findLabel(array, label) {
    for (var i in array) {
        if (array[i].label === label) {
            return array[i];
        }
    }
}

var votedFor;

function vote() {
    if (voted) {
        wrestlers[index].pop += 1;
        var toBeIncreased = findLabel(data, wrestlers[index].name);
        toBeIncreased.value += 1;
        // data.push({value:toBeIncreased.value, label: wrestlers[index].name,color: '#361A18', highlight: '#811B33'});
        var name = wrestlers[index].name;
        localStorage.setItem(name, Number(localStorage.getItem(name)) + 1);
        voted = false;
        initializeChart();
    }
}

function reset() {
    document.getElementById("img1").style.borderColor = "black";
    document.getElementById("img2").style.borderColor = "black";
    twowrestlers = getTwoWrestlers();
    putWrestler1();
    putWrestler2();
    vote();
}

function initializeChart() {
    var ctx = document.getElementById('graph').getContext('2d');
    var chart = new Chart(ctx).Doughnut(data, {
        //Number - Amount of animation steps
        animationSteps: 100,
        //String - Animation easing effect
        animationEasing: "easeOutBounce",
        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,
        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: true
    });
}

reset();
initializeChart();
