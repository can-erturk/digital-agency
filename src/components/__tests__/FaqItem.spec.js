import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FaqItem from '@/components/ui/FaqItem.vue'

const props = { title: 'Sample Title', answer: 'Sample Answer' }

describe('FaqItem', () => {
  it('Renders FaqItem component correctly', () => {
    const wrapper = mount(FaqItem, { props })
    expect(wrapper.exists()).toBe(true)

    // Check if the question rendered correctly
    const title = wrapper.find('.faq-question')
    expect(title.text()).toBe(props.title)

    // Check if the answer rendered correctly
    const answer = wrapper.find('.faq-answer')
    expect(answer.text()).toBe(props.answer)
  })

  it('toggles open state when clicked.', async () => {
    const wrapper1 = mount(FaqItem, { props })
    const wrapper2 = mount(FaqItem, { props })

    expect(wrapper1.exists()).toBe(true)
    expect(wrapper2.exists()).toBe(true)

    // Define the questions
    const question1 = wrapper1.find('.faq-question')
    const question2 = wrapper2.find('.faq-question')

    // When the first question is clicked, the first answer should open
    // and the second answer should close
    await question1.trigger('click')
    expect(wrapper1.vm.open).toBe(true)
    expect(wrapper2.vm.open).toBe(false)

    // When the second question is clicked, the second answer should open
    // and the first answer should close
    await question2.trigger('click')
    expect(wrapper1.vm.open).toBe(false)
    expect(wrapper2.vm.open).toBe(true)
  })
})
