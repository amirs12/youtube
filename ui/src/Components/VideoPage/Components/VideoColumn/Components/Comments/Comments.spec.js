import Comments from './Comments.js'

describe('Comment class test', () => {
  beforeEach(() => {
    let comments = new Comments();
  })
  it('Should fetch comments', () => {
    expect(comments.hibur(1, 2)).toBe(3);
  })
})