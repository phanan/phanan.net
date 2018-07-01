import { renderToString } from '@vue/server-test-utils'
import SiteHeader from '~/components/SiteHeader'

describe('SiteHeader.vue', () => {
  it('matches snapshot', () => {
    expect(renderToString(SiteHeader)).toMatchSnapshot()
  })
})
