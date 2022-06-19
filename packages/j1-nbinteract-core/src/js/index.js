import '@babel/polyfill'
import '../css/bqplot.css'
import '../css/widgets.css'

import NbInteract from './NbInteract'

// Define globally for use in browser.
if (typeof window !== 'undefined') {
  window.NbInteract = NbInteract
}

export default NbInteract
