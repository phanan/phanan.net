import { renderToString } from '@vue/server-test-utils'
import ProjectItem from '~/components/ProjectItem'

describe('ProjectItem.vue', () => {
  it('matches snapshot', () => {
    expect(renderToString(ProjectItem, {
      propsData: {
        project: {
          name: 'Foo Bar',
          url: 'https://foo.bar'
        }
      }
    })).toMatchSnapshot()
  })
})
