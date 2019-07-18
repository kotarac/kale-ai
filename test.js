const test = require('tape')
const opinion = require('./')

test('opinion', (t) => {
  t.equal(opinion('test opinion'), 'nije ti to bas tako')
  t.end()
})
