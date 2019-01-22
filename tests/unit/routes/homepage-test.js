import { module, test } from 'qunit'
import { visit } from '@ember/test-helpers'
import { setupTest } from 'ember-qunit'

module('Unit | Route | homepage', function(hooks) {
  setupTest(hooks)

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:homepage')
    assert.ok(route)
  })

  test('should list posts.', async function(assert) {
    await visit('/')
    assert.equal(this.element.querySelectorAll('.c-post-preview').length, 10, 'should display 10 posts')
  })
})
