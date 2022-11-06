import { ref, computed } from 'vue';
import * as breakpoints from '../assets/styles/breakpoints/_breakoints.module.scss';

export  const useTypeDevices = () => {
    const screenSize = ref(window.innerWidth);

    const isMobile = computed(() => {
        return screenSize.value < breakpoints.tablet
    })

    const isTablet = computed(() => {
        return screenSize.value >= breakpoints.tablet 
        && screenSize.value < breakpoints.laptop
    })

    const isLaptop = computed(() => {
        return screenSize.value >= breakpoints.laptop 
        && screenSize.value < breakpoints.desktop
    })

    const isDesktop = computed(() => {
        return screenSize.value >= breakpoints.desktop
        && screenSize.value < breakpoints.large
    })

    const isLarge = computed(() => {
        return screenSize.value >= breakpoints.large
        && screenSize.value < breakpoints.extraLarge 
    })

    const isExtraLarge = computed(() => {
        return screenSize.value >= breakpoints.extraLarge
    })

    window.addEventListener('resize', () => {
        screenSize.value = window.innerWidth;
    })

    return { isMobile, isTablet, isLaptop, isDesktop, isLarge, isExtraLarge }
}