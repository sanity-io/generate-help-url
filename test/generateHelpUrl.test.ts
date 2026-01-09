import {test, } from 'node:test'
import {generateHelpUrl} from '@sanity/generate-help-url'

test('should generate valid url', (t) => {
  t.assert.equal(generateHelpUrl('foo-bar'), 'https://www.sanity.io/docs/help/foo-bar')
})
