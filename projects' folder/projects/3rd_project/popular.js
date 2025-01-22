const cards = document.querySelectorAll('.sneaker-card');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.3,
    }
);

cards.forEach((card) => {
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
});

document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
     alert('Thank you for subscribing to our newsletter!');
     this.reset();
 });

