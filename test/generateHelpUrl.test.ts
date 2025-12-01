import tap from 'tap'
import {generateHelpUrl} from '../src'

tap.test('should generate valid url', (t) => {
  t.same(generateHelpUrl('foo-bar'), 'https://www.sanity.io/docs/help/foo-bar')
  t.end()
})
