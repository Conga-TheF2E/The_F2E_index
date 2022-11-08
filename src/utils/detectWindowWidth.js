import { ref, onMounted, onUnmounted } from 'vue'

export function detectWindowWidth() {
    const windowWidth = ref(window.innerWidth)

    function debounce(func, timeout = 300) {
        let timer
        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                func.apply(this, args)
            }, timeout)
        }
    }
    function saveWidth() {
        windowWidth.value = window.innerWidth
    }
    const detectFn = debounce(() => saveWidth())
    onMounted(() => {
        window.addEventListener('resize', detectFn)
    })
    // 記得要在onUnmounted removeEventListener
    onUnmounted(() => {
        window.removeEventListener('resize', detectFn)
    })

    return {
        windowWidth,
    }
}
