// All the FAQ items are stored here
export const faqItems = []

// Add a FAQ item to the array
export const setClose = (close) => {
  faqItems.push({ close })
}

// Close all the FAQ items
export const closeAll = () => {
  faqItems.forEach((item) => {
    item.close()
  })
}

// Set the max-height of the FAQ item's answer
// This is used to animate the answer's height
export const setMaxHeight = () => {
  document.querySelectorAll('.faq-answer').forEach((el) => {
    el.setAttribute('style', '--max-height: ' + el.scrollHeight + 'px')
  })
}
