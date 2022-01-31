import tap from 'tap'
import {generateHelpUrl} from '../src'

tap.test('should generate valid url', (t) => {
  t.same(generateHelpUrl('foo-bar'), 'https://docs.sanity.io/help/foo-bar')
  t.end()
})
