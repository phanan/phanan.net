import index from '~/pages/index'
import ProjectList from '~/components/ProjectList'
import SiteHeader from '~/components/SiteHeader'
import SiteFooter from '~/components/SiteFooter'

describe('index.vue', () => {
  it('renders correctly', () => {
    expect(mount(index).containsAll(ProjectList, SiteHeader, SiteFooter)).toBe(true)
  })
})
