document.addEventListener("DOMContentLoaded", function () {
    const projectVideos = document.querySelectorAll(".project-video");

    projectVideos.forEach((video) => {
        video.addEventListener("mouseenter", () => {
            video.play(); // Play video on hover
        });

        video.addEventListener("mouseleave", () => {
            video.pause(); // Pause video when mouse leaves
            video.currentTime = 0; // Reset to first frame
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const introText = document.querySelector(".intro-right");

    if (!introText) {
        console.error("Element .intro-right not found");
        return; // Stop if element is missing
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateX(0)";
                    entry.target.style.transition = "transform 1s ease-out, opacity 1s ease-out";
                }
            });
        },
        { threshold: 0.2 }
    );

    observer.observe(introText);
});
