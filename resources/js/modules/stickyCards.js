export default function stickyCards() {
  return {
    cards: [],
    stickyTop: 0,

    init() {
      this.$nextTick(() => {
        const els = [...this.$el.querySelectorAll('.post-item')];
        if (els.length < 2) return;

        this.stickyTop = parseFloat(getComputedStyle(els[0]).top) || 0;
        this.cards = els.map((el) => ({
          el,
          originalTop: el.getBoundingClientRect().top + window.scrollY,
          height: el.offsetHeight,
        }));

        window.addEventListener('scroll', () => this.update(), {
          passive: true,
        });
      });
    },

    update() {
      const total = this.cards.length;
      // Total spread is fixed — the deepest card is always at most this many px below the top card,
      // regardless of how many cards are in the list.
      const totalSpread = 48;
      const totalScale = 0.1; // max cumulative scale reduction across the whole stack

      this.cards.forEach((card, i) => {
        if (i === total - 1) {
          card.el.style.transform = '';
          card.el.style.filter = '';
          return;
        }

        // Each card only watches the immediately next card's stacking progress.
        // Once that progress reaches 1, this card's transform is final and never moves again.
        const next = this.cards[i + 1];
        const stackPoint = next.originalTop - this.stickyTop;
        const progress = Math.max(
          0,
          Math.min(
            1,
            (window.scrollY - (stackPoint - card.height)) / card.height,
          ),
        );

        if (progress <= 0) {
          card.el.style.transform = '';
          card.el.style.filter = '';
          return;
        }

        // depthRatio: 1 for the first card (deepest), approaches 0 for the last buried card
        const depthRatio = (total - 1 - i) / (total - 1);
        const nudge = depthRatio * totalSpread * progress;
        const scale = 1 - depthRatio * totalScale * progress;
        const brightness = 1 - depthRatio * 0.4 * progress;
        card.el.style.transform = `translateY(-${nudge}px) scale(${scale})`;
        card.el.style.filter = `brightness(${brightness})`;
      });
    },
  };
}
