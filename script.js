(() => {

    // ==========================
    // LOADING SCREEN
    // ==========================

    window.addEventListener("load", () => {

        setTimeout(() => {

            const loader = document.getElementById("loader");

            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);

        }, 2200);

    });

    // ==========================
    // TYPING EFFECT
    // ==========================

    const title = "ENTER THE FUTURE OF BATTLE";

    const typingTitle = document.getElementById("typingTitle");

    let typingIndex = 0;

    function typingEffect() {

        if (typingIndex < title.length) {

            typingTitle.textContent += title.charAt(typingIndex);

            typingIndex++;

            setTimeout(typingEffect, 80);

        }

    }

    typingEffect();

    // ==========================
    // REWARD SYSTEM
    // ==========================

    const btnReward = document.getElementById("btnReward");

    const rewardText = document.getElementById("reward");

    const rewards = [

        "🎉 100 Gold",
        "🎉 500 Gold",
        "🎉 1000 Gold",
        "🔥 XP Boost x2",
        "🔥 500 XP",
        "⚔ Rare Sword",
        "🛡 Epic Shield",
        "🚀 Legendary Weapon"

    ];

    btnReward.addEventListener("click", () => {

        const reward =
            rewards[Math.floor(Math.random() * rewards.length)];

        rewardText.textContent =
            `Reward berhasil didapat: ${reward}`;

        rewardText.style.color = "#facc15";

        rewardText.style.marginTop = "15px";

        spawnConfetti();

    });

    // ==========================
    // ANIMATED COUNTERS
    // ==========================

    function animateCounter(id, target, speed = 20) {

        const element = document.getElementById(id);

        let count = 0;

        const increment = Math.ceil(target / 250);

        const timer = setInterval(() => {

            count += increment;

            if (count >= target) {

                count = target;

                clearInterval(timer);

            }

            element.textContent =
                count.toLocaleString();

        }, speed);

    }

    animateCounter(
        "playerCounter",
        2500000
    );

    animateCounter(
        "downloadCounter",
        12000000
    );

    animateCounter(
        "guildCounter",
        350000
    );

    // ==========================
    // DAILY COUNTDOWN
    // ==========================

    let totalSeconds = 86400;

    function updateCountdown() {

        const hours =
            Math.floor(totalSeconds / 3600);

        const minutes =
            Math.floor(
                (totalSeconds % 3600) / 60
            );

        const seconds =
            totalSeconds % 60;

        document.getElementById(
            "countdown"
        ).textContent =

            `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        if (totalSeconds > 0) {

            totalSeconds--;

        }

    }

    setInterval(updateCountdown, 1000);

    updateCountdown();

    // ==========================
    // DOWNLOAD SIMULATION
    // ==========================

    const btnDownload =
        document.getElementById("btnDownload");

    const downloadBox =
        document.getElementById("downloadBox");

    const downloadFill =
        document.getElementById("downloadFill");

    const downloadPercent =
        document.getElementById("downloadPercent");

    btnDownload.addEventListener(
        "click",
        () => {

            btnDownload.disabled = true;

            downloadBox.hidden = false;

            let percent = 0;

            const timer = setInterval(() => {

                percent +=
                    Math.floor(
                        Math.random() * 8
                    ) + 1;

                if (percent >= 100) {

                    percent = 100;

                    clearInterval(timer);

                    btnDownload.textContent =
                        "Download Complete";

                    spawnConfetti();

                }

                downloadFill.style.width =
                    percent + "%";

                downloadPercent.textContent =
                    percent + "%";

            }, 120);

        }
    );

    // ==========================
    // SCROLL PROGRESS BAR
    // ==========================

    window.addEventListener(
        "scroll",
        () => {

            const winScroll =
                document.body.scrollTop ||
                document.documentElement.scrollTop;

            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scrolled =
                (winScroll / height) * 100;

            document.getElementById(
                "scrollProgress"
            ).style.width =
                scrolled + "%";

        }
    );

    // ==========================
    // REVEAL ON SCROLL
    // ==========================

    const revealElements =
        document.querySelectorAll(
            ".card, .news-card, .testimonial, .stat-card"
        );

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0px)";

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    revealElements.forEach(el => {

        el.style.opacity = "0";

        el.style.transform =
            "translateY(40px)";

        el.style.transition =
            "all .6s ease";

        revealObserver.observe(el);

    });

    // ==========================
    // PARALLAX HERO IMAGE
    // ==========================

    const heroImage =
        document.querySelector(".hero-image img");

    window.addEventListener(
        "mousemove",
        (e) => {

            if (!heroImage) return;

            const x =
                (window.innerWidth / 2 - e.clientX)
                / 40;

            const y =
                (window.innerHeight / 2 - e.clientY)
                / 40;

            heroImage.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );

    // ==========================
    // NAVBAR SHADOW
    // ==========================

    const header =
        document.querySelector("header");

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 50) {

                header.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,.35)";

            } else {

                header.style.boxShadow =
                    "none";

            }

        }
    );

    // ==========================
    // CONFETTI EFFECT
    // ==========================

    function spawnConfetti() {

        const colors = [

            "#8b5cf6",
            "#60a5fa",
            "#22c55e",
            "#facc15",
            "#ef4444"

        ];

        for (let i = 0; i < 80; i++) {

            const confetti =
                document.createElement("div");

            confetti.style.position = "fixed";

            confetti.style.width = "8px";

            confetti.style.height = "8px";

            confetti.style.left =
                Math.random() * 100 + "vw";

            confetti.style.top = "-20px";

            confetti.style.background =
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ];

            confetti.style.zIndex = "99999";

            confetti.style.borderRadius = "50%";

            document.body.appendChild(confetti);

            const duration =
                Math.random() * 3000 + 1500;

            confetti.animate(
                [

                    {
                        transform:
                            "translateY(0px)"
                    },

                    {
                        transform:
                            `translateY(${window.innerHeight + 100}px)`
                    }

                ],
                {
                    duration,
                    easing: "linear"
                }
            );

            setTimeout(() => {
                confetti.remove();
            }, duration);

        }

    }

})();