import { module, test } from 'qunit'
import { visit, currentURL } from '@ember/test-helpers'
import { setupApplicationTest } from 'ember-qunit'

module('Acceptance | app', function(hooks) {
  setupApplicationTest(hooks)

  test('Should show Homepage', async function(assert) {
    await visit('/')

    assert.equal(currentURL(), '/homepage', 'Should redirect automatically')
  })
})
