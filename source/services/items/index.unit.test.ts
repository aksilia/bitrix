import Items from '.'

const mockCall = jest.fn(() => Promise.resolve()) as any
const mockList = jest.fn(() => Promise.resolve()) as any
const items = Items({ call: mockCall, list: mockList })

const ID = '77'

describe('Item', () => {
  beforeEach(() => {
    mockCall.mockClear()
    mockList.mockClear()
  })

  it('should expose API methods', () => {
    expect(items).toMatchSnapshot()
  })

  describe('`create`', () => {
    it('should invoke `call`', async () => {
      await items.create({
        COMMENTS: 'Some comment'
      }, {
        REGISTER_SONET_EVENT: 'Y'
      })
      expect(mockCall.mock.calls).toMatchSnapshot()
    })

    it('should work without optional params', async () => {
      await items.create({
        COMMENTS: 'Some comment'
      })
      expect(mockCall.mock.calls).toMatchSnapshot()
    })
  })

  describe('`get`', () => {
    it('should invoke `call`', async () => {
      await items.get(ID)
      expect(mockCall.mock.calls).toMatchSnapshot()
    })
  })

  describe('`list`', () => {
    it('should invoke `list`', async () => {
      await items.list({
        start: 0,
        order: { COMMENTS: 'ASC' },
        filter: { '>PROBABILITY': 50 },
        select: ['*', 'UF_*']
      })
      expect(mockList.mock.calls).toMatchSnapshot()
    })

    it('should work without optional params', async () => {
      await items.list()
      expect(mockList.mock.calls).toMatchSnapshot()
    })
  })

  describe('`update`', () => {
    it('should invoke `call`', async () => {
      await items.update(ID, {
        COMMENTS: 'Some comment'
      }, {
        REGISTER_SONET_EVENT: 'Y'
      })
      expect(mockCall.mock.calls).toMatchSnapshot()
    })

    it('should work without optional params', async () => {
      await items.update(ID, {
        COMMENTS: 'Some comment'
      })
      expect(mockCall.mock.calls).toMatchSnapshot()
    })
  })
})
