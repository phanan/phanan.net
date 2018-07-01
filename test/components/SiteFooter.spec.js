import { renderToString } from '@vue/server-test-utils'
import SiteFooter from '~/components/SiteFooter'
import SocialProfileList from '~/components/SocialProfileList'

describe('SiteHeader.vue', () => {
  it('contains social profile list', () => {
    expect(mount(SiteFooter).contains(SocialProfileList)).toBe(true)
  })
})
