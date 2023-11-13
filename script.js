new Vue({
    el: '#app',
    data: {
        cards: [
            { id: 1, image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/72cd29df-61f1-4fd7-90b9-169bce5856cf/ddxxfar-bf04d72a-7590-4005-a964-847256382705.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcyY2QyOWRmLTYxZjEtNGZkNy05MGI5LTE2OWJjZTU4NTZjZlwvZGR4eGZhci1iZjA0ZDcyYS03NTkwLTQwMDUtYTk2NC04NDcyNTYzODI3MDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IQmpResJw2bZmt-1_a-qkfn4SXUbAVYTyndtiBssLZU', flipped: false, matched: false },
            { id: 1, image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/72cd29df-61f1-4fd7-90b9-169bce5856cf/ddxxfar-bf04d72a-7590-4005-a964-847256382705.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcyY2QyOWRmLTYxZjEtNGZkNy05MGI5LTE2OWJjZTU4NTZjZlwvZGR4eGZhci1iZjA0ZDcyYS03NTkwLTQwMDUtYTk2NC04NDcyNTYzODI3MDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IQmpResJw2bZmt-1_a-qkfn4SXUbAVYTyndtiBssLZU', flipped: false, matched: false },
            { id: 2, image: 'https://pbs.twimg.com/profile_images/1452387523951476742/b31mT3XI_400x400.jpg', flipped: false, matched: false },
            { id: 2, image: 'https://pbs.twimg.com/profile_images/1452387523951476742/b31mT3XI_400x400.jpg', flipped: false, matched: false },
            { id: 3, image: 'https://i.pinimg.com/280x280_RS/a9/92/4f/a9924f87099f87ae6489a6ffad2036eb.jpg', flipped: false, matched: false },
            { id: 3, image: 'https://i.pinimg.com/280x280_RS/a9/92/4f/a9924f87099f87ae6489a6ffad2036eb.jpg', flipped: false, matched: false },
            { id: 4, image: 'https://i.pinimg.com/1200x/6f/1d/a0/6f1da0ded06aa48b963c6da042562f50.jpg', flipped: false, matched: false },
            { id: 4, image: 'https://i.pinimg.com/1200x/6f/1d/a0/6f1da0ded06aa48b963c6da042562f50.jpg', flipped: false, matched: false },
            { id: 5, image: 'https://pbs.twimg.com/media/CZmnvqWWIAEXFYl.jpg', flipped: false, matched: false },
            { id: 5, image: 'https://pbs.twimg.com/media/CZmnvqWWIAEXFYl.jpg', flipped: false, matched: false },
            { id: 6, image: 'https://i.pinimg.com/736x/4c/50/ec/4c50ec2bd8f2396c6f95ecac107db959.jpg', flipped: false, matched: false },
            { id: 6, image: 'https://i.pinimg.com/736x/4c/50/ec/4c50ec2bd8f2396c6f95ecac107db959.jpg', flipped: false, matched: false },
            { id: 7, image: 'https://i.pinimg.com/originals/4d/17/d0/4d17d069fe00aee87e354ba10b89c2fa.png', flipped: false, matched: false },
            { id: 7, image: 'https://i.pinimg.com/originals/4d/17/d0/4d17d069fe00aee87e354ba10b89c2fa.png', flipped: false, matched: false },
            { id: 8, image: 'https://i.pinimg.com/originals/2b/45/06/2b45062c86af72696ad5179da3a46b40.jpg', flipped: false, matched: false },
            { id: 8, image: 'https://i.pinimg.com/originals/2b/45/06/2b45062c86af72696ad5179da3a46b40.jpg', flipped: false, matched: false }, 
            // Duplicate for each card
        ],
        flippedCards: [],
        matchesFound: 0,
        flipCount: 0 
    },
    methods: {
        shuffleCards() {
            // Shuffle the cards
            this.cards = this.cards.sort(() => Math.random() - 0.5);
        },
        flipCard(index) {
            const card = this.cards[index];

            if (card.flipped || this.flippedCards.length === 2) {
                return; // Do nothing if the card is already flipped or two cards are flipped
            }

            card.flipped = true;
            this.flipCount++;   
            this.flippedCards.push(card);

            if (this.flippedCards.length === 2) {
                this.checkForMatch();
            }
        },
        checkForMatch() {
            setTimeout(() => {
                const [firstCard, secondCard] = this.flippedCards;

                if (firstCard.id === secondCard.id) {
                    firstCard.matched = secondCard.matched = true;
                    this.matchesFound += 1;
                } else {
                    firstCard.flipped = secondCard.flipped = false;
                }

                this.flippedCards = [];

                if (this.matchesFound === this.cards.length / 2) {
                    alert('Congratulations! You found all matches!');
                    this.resetGame();
                }
            }, 1000);
        },
        resetGame() {
            this.cards.forEach(card => {
                card.flipped = false;
                card.matched = false;
            });
            this.matchesFound = 0;
            this.flipCount = 0;
            this.shuffleCards();
        }
    },
    mounted() {
        this.shuffleCards();
    }
});

