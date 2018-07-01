import SocialProfileList from '~/components/SocialProfileList'

describe('SocialProfileList.vue', () => {
  it('renders correctly', () => {
    const profiles = [
      { name: 'Foo', url: 'http://foo.net' },
      { name: 'Bar', url: 'http://bar.com' },
      { name: 'Baz', url: 'https://sub.baz.org' }
    ]

    expect(mount(SocialProfileList, {
      data: () => ({ profiles })
    }).findAll('li')).toHaveLength(3)
  })
})
