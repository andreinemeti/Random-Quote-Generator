const { createApp } = Vue;

const FALLBACK_QUOTES = [
  { attrib: "Steve Jobs", quote: "Design is not just what it looks like and feels like. Design is how it works." },
  { attrib: "Steve Jobs", quote: "Innovation distinguishes between a leader and a follower." },
  { attrib: "Albert Einstein", quote: "Reality is merely an illusion, albeit a very persistent one." },
  { attrib: "Albert Einstein", quote: "If you can't explain it simply, you don't understand it well enough." },
  { attrib: "Albert Einstein", quote: "Strive not to be a success, but rather to be of value." },
  { attrib: "Steve Jobs", quote: "Your time is limited, so don’t waste it living someone else’s life." },
  { attrib: "Bill Gates", quote: "Success is a lousy teacher. It seduces smart people into thinking they can't lose." },
  { attrib: "Albert Einstein", quote: "Science without religion is lame, religion without science is blind." },
  { attrib: "Henry Ford", quote: "Whether you think you can or you think you can’t, you’re right." }
];


const IMAGES = [
  "img/coding/1.jpg", "img/coding/2.jpg", "img/coding/3.jpg",
  "img/coding/4.jpg", "img/coding/5.jpg", "img/coding/6.jpg",
  "img/coding/7.jpg", "img/coding/8.jpg", "img/coding/9.jpg",
  "img/coding/10.jpg"
];

createApp({
  data() {
    return {
      quotes: [],
      images: IMAGES,
      current: { quote: "Loading…", attrib: "…", permalink: "" },
      currentImage: IMAGES[0]
    };
  },

  async mounted() {
    await this.loadQuotes();
    this.nextQuote();
  },

  methods: {
    rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; },

    async loadQuotes() {
      try {
        // Use no-store so GitHub Pages/local dev won’t aggressively cache JSON changes
        const res = await fetch("js/quotes.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        // Normalize to the app’s shape
        this.quotes = (Array.isArray(data) ? data : []).map(q => ({
          attrib: q.author || "Unknown",
          quote: q.quote || "",
          permalink: q.permalink || ""
        })).filter(q => q.quote.trim().length > 0);

        if (this.quotes.length === 0) this.quotes = FALLBACK_QUOTES;
      } catch (err) {
        console.warn("Failed to load quotes.json:", err);
        this.quotes = FALLBACK_QUOTES;
      }
    },

    nextQuote() {
      const pool = this.quotes.length ? this.quotes : FALLBACK_QUOTES;
      this.current = this.rand(pool);
      this.currentImage = this.rand(this.images);
    },

    asText() {
      return `"${this.current.quote}" — ${this.current.attrib}`;
    },

    nativeShare() {
      const text = this.asText();
      const url = this.current.permalink || window.location.href;
      if (navigator.share) {
        navigator.share({ title: "Inspiring Quote", text, url }).catch(() => { });
      } else {
        this.copyQuote();
        alert("Quote copied to clipboard!");
      }
    },

    copyQuote() {
      const text = `${this.asText()} ${this.current.permalink || window.location.href}`;
      navigator.clipboard?.writeText(text);
    },

    share(network) {
      const text = encodeURIComponent(this.asText());
      const url = encodeURIComponent(this.current.permalink || window.location.href);
      let shareUrl = "";

      switch (network) {
        case "twitter": // X
          shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
          break;
        case "facebook":
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
          break;
        case "linkedin":
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
          break;
      }
      if (shareUrl) window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  }
}).mount("#app");
