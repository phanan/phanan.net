import isLinkObject from '~/validators/isLinkObject'

describe('isLinkObject', () => {
  it('validates name', () => {
    expect(isLinkObject({
      url: 'https://foo.bar'
    })).toBe(false)

    expect(isLinkObject({
      name: null,
      url: 'https://foo.bar'
    })).toBe(false)

    expect(isLinkObject({
      name: '',
      url: 'https://foo.bar'
    })).toBe(false)
  })

  it('validates URL', () => {
    expect(isLinkObject({
      name: 'Foo'
    })).toBe(false)

    expect(isLinkObject({
      name: 'Foo',
      url: null
    })).toBe(false)

    expect(isLinkObject({
      name: 'Foo',
      url: 'malform/foo.bar'
    })).toBe(false)
  })

  it('accepts valid value', () => {
    expect(isLinkObject({
      name: 'Foo',
      url: 'http://foo.bar'
    })).toBe(true)

    expect(isLinkObject({
      name: 'Foo',
      url: 'https://sub.foo.bar/baz'
    })).toBe(true)
  })
})
