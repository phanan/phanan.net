import { renderToString } from '@vue/server-test-utils'
import SocialProfileItem from '~/components/SocialProfileItem'

describe('SocialProfileItem.vue', () => {
  it('matches snapshot', () => {
    expect(renderToString(SocialProfileItem, {
      propsData: {
        profile: {
          name: 'Foo Bar',
          url: 'https://foo.bar'
        }
      }
    })).toMatchSnapshot()
  })
})
