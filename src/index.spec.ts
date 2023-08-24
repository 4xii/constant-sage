import { describe, expect, it } from 'vitest'
import { defineConstants } from './'

describe('defineConstants', () => {
  it('should generate constants with default labelspace', () => {
    const defs = [
      { key: 'KEY_1', value: 'VALUE_1', name: 'Name 1' },
      { key: 'KEY_2', value: 'VALUE_2', name: 'Name 2' },
      { key: 'KEY_3', value: 'VALUE_3', name: 'Name 3' },
    ]

    const constants = defineConstants(defs)

    expect(constants.KEYS).to.deep.equal(['KEY_1', 'KEY_2', 'KEY_3'])
    expect(constants.VALUES).to.deep.equal(['VALUE_1', 'VALUE_2', 'VALUE_3'])
    expect(constants.KV).to.deep.equal({
      KEY_1: 'VALUE_1',
      KEY_2: 'VALUE_2',
      KEY_3: 'VALUE_3',
    })
    expect(constants.VK).to.deep.equal({
      VALUE_1: 'KEY_1',
      VALUE_2: 'KEY_2',
      VALUE_3: 'KEY_3',
    })
    expect(constants.MAP_BY_KEY).to.deep.equal({
      KEY_1: { key: 'KEY_1', value: 'VALUE_1', name: 'Name 1' },
      KEY_2: { key: 'KEY_2', value: 'VALUE_2', name: 'Name 2' },
      KEY_3: { key: 'KEY_3', value: 'VALUE_3', name: 'Name 3' },
    })
    expect(constants.MAP_BY_VALUE).to.deep.equal({
      VALUE_1: { key: 'KEY_1', value: 'VALUE_1', name: 'Name 1' },
      VALUE_2: { key: 'KEY_2', value: 'VALUE_2', name: 'Name 2' },
      VALUE_3: { key: 'KEY_3', value: 'VALUE_3', name: 'Name 3' },
    })
    expect(constants.MAP_BY_KEY).to.deep.equal({
      KEY_1: { key: 'KEY_1', value: 'VALUE_1', name: 'Name 1' },
      KEY_2: { key: 'KEY_2', value: 'VALUE_2', name: 'Name 2' },
      KEY_3: { key: 'KEY_3', value: 'VALUE_3', name: 'Name 3' },
    })
    expect(constants.MAP).to.deep.equal({
      KEY_1: 'VALUE_1',
      KEY_2: 'VALUE_2',
      KEY_3: 'VALUE_3',
    })
    expect(constants.KN).to.deep.equal({
      KEY_1: 'Name 1',
      KEY_2: 'Name 2',
      KEY_3: 'Name 3',
    })
    expect(constants.VN).to.deep.equal({
      VALUE_1: 'Name 1',
      VALUE_2: 'Name 2',
      VALUE_3: 'Name 3',
    })
    expect(constants.LIST).to.deep.equal(defs)
  })

  it('should generate constants with custom labelspace', () => {
    const defs = [
      { key: 'KEY_1', value: 'VALUE_1', name: 'Name 1' },
      { key: 'KEY_2', value: 'VALUE_2', name: 'Name 2' },
      { key: 'KEY_3', value: 'VALUE_3', name: 'Name 3' },
    ]

    const constants = defineConstants(defs, 'PREFIX')

    expect(constants.PREFIX_KEYS).to.deep.equal(['KEY_1', 'KEY_2', 'KEY_3'])
    expect(constants.PREFIX_VALUES).to.deep.equal([
      'VALUE_1',
      'VALUE_2',
      'VALUE_3',
    ])
    expect(constants.PREFIX_KV).to.deep.equal({
      KEY_1: 'VALUE_1',
      KEY_2: 'VALUE_2',
      KEY_3: 'VALUE_3',
    })
    expect(constants.PREFIX_VK).to.deep.equal({
      VALUE_1: 'KEY_1',
      VALUE_2: 'KEY_2',
      VALUE_3: 'KEY_3',
    })
    expect(constants.PREFIX_MAP_BY_KEY).to.deep.equal({
      KEY_1: { key: 'KEY_1', value: 'VALUE_1', name: 'Name 1' },
      KEY_2: { key: 'KEY_2', value: 'VALUE_2', name: 'Name 2' },
      KEY_3: { key: 'KEY_3', value: 'VALUE_3', name: 'Name 3' },
    })
    expect(constants.PREFIX_MAP_BY_VALUE).to.deep.equal({
      VALUE_1: { key: 'KEY_1', value: 'VALUE_1', name: 'Name 1' },
      VALUE_2: { key: 'KEY_2', value: 'VALUE_2', name: 'Name 2' },
      VALUE_3: { key: 'KEY_3', value: 'VALUE_3', name: 'Name 3' },
    })
    expect(constants.PREFIX_MAP).to.deep.equal({
      KEY_1: 'VALUE_1',
      KEY_2: 'VALUE_2',
      KEY_3: 'VALUE_3',
    })
    expect(constants.PREFIX_KN).to.deep.equal({
      KEY_1: 'Name 1',
      KEY_2: 'Name 2',
      KEY_3: 'Name 3',
    })
    expect(constants.PREFIX_VN).to.deep.equal({
      VALUE_1: 'Name 1',
      VALUE_2: 'Name 2',
      VALUE_3: 'Name 3',
    })
    expect(constants.PREFIX_LIST).to.deep.equal(defs)
  })
})
