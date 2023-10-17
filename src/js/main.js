function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {

            change.target.classList.add('animation');
        } else {
            change.target.classList.remove('animation');
        }
    });
}

let options = {
    thresgold: [0.5]
};
let observer = new
IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.members');

for (let elm of elements) {
    observer.observe(elm)
}