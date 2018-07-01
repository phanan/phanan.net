import ProjectList from '~/components/ProjectList'

describe('ProjectList.vue', () => {
  it('renders correctly', () => {
    const projects = [
      { name: 'Foo', url: 'http://foo.net' },
      { name: 'Bar', url: 'http://bar.com' },
      { name: 'Baz', url: 'https://sub.baz.org' }
    ]

    expect(mount(ProjectList, {
      data: () => ({ projects })
    }).findAll('li')).toHaveLength(3)
  })
})
