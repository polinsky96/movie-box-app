import { ref } from "vue";

export const useScrollHideElement = (topTriggerPoint = 0) => {
    const hiddenElement = ref(false);
    
    const hideElement = (isHidden) => {
        if (isHidden) {
            hiddenElement.value = true;
        } else {
            hiddenElement.value = false;
        }
    }
    
    let lastScrollingPosition = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollingPosition = window.scrollY;

        if (currentScrollingPosition > lastScrollingPosition && currentScrollingPosition >= topTriggerPoint) {
            hideElement(true);
        } else {
            hideElement(false);
        }

        lastScrollingPosition = currentScrollingPosition;
    })

    return { hiddenElement };
};