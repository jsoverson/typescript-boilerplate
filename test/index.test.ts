import src from '../src';

import pkg from '../package.json';

describe('main', function () {
  describe('package.json', function () {
    it('name should be filled out', () => {
      expect(pkg.name).not.toEqual('');
    });
    it('description should be filled out', () => {
      expect(pkg.description).not.toEqual('');
    });
    it('author should be filled out', () => {
      expect(pkg.author).not.toEqual('');
    });
  });
});
