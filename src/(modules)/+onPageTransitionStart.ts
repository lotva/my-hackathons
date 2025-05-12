import type { OnPageTransitionStartAsync } from 'vike/types'

export const onPageTransitionStart: OnPageTransitionStartAsync = async () => {
	document.querySelector('body')?.classList.add('_is-transitioning')
}
