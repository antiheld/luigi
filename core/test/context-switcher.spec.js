const assert = require('chai').assert;
const sinon = require('sinon');

const CSHelpers = require('../src/navigation/services/context-switcher')
  .ContextSwitcherHelpers;
const Helpers = require('../src/utilities/helpers.js');

describe('ContextSwitcher', function() {
  afterEach(() => {
    sinon.restore();
    sinon.reset();
  });

  const getMockConfig = () => ({
    defaultLabel: 'Select Environment ...',
    parentNodePath: '/environments/',
    lazyloadOptions: true,
    actions: [
      {
        label: '+ New Environment',
        link: '/create-environment',
        position: 'top'
      }
    ],
    options: []
  });

  const myResolverFn = id => {
    return '##' + id + '##';
  };

  describe('getPreparedParentNodePath()', () => {
    let mockConfig;
    beforeEach(() => {
      mockConfig = getMockConfig();
    });

    it('undefined parentNodePath', () => {
      console.error = sinon.spy();
      CSHelpers.getPreparedParentNodePath({});
      sinon.assert.calledOnce(console.error);
    });

    it('falsy relative parentNodePath', () => {
      console.error = sinon.spy();
      CSHelpers.getPreparedParentNodePath({ parentNodePath: 'relative/path' });
      sinon.assert.calledOnce(console.error);
    });

    it('absolute parentNodePath adds slash', () => {
      const result = CSHelpers.getPreparedParentNodePath({
        parentNodePath: '/environment'
      });
      assert.equal(result, '/environment/');
    });

    it('absolute parentNodePath with slash does not add slash', () => {
      const result = CSHelpers.getPreparedParentNodePath({
        parentNodePath: '/environment/'
      });
      assert.equal(result, '/environment/');
    });

    it('no parentNodePath', () => {
      const result = CSHelpers.getPreparedParentNodePath({
        parentNodePath: '/environment'
      });
      assert.equal(result, '/environment/');
    });
  });

  describe('getFallbackLabel()', () => {
    it('without fallback resolver', async () => {
      const result = await CSHelpers.getFallbackLabel(undefined, 'some_id');
      assert.equal(result, 'some_id');
    });

    it('with fallback resolver', async () => {
      const result = await CSHelpers.getFallbackLabel(myResolverFn, 'some_id');
      assert.equal(result, '##some_id##');
    });
  });

  describe('generateSwitcherNav()', () => {
    it('composes proper values', async () => {
      const result = await CSHelpers.generateSwitcherNav(
        { parentNodePath: '/environment' },
        [{ label: 'Env 1', pathValue: 'env1' }]
      );
      assert.equal(
        JSON.stringify(result),
        JSON.stringify([
          {
            label: 'Env 1',
            path: '/environment/env1',
            id: 'env1'
          }
        ])
      );
    });

    it('composes proper values', async () => {
      const result = await CSHelpers.generateSwitcherNav({}, [
        { label: 'Env 1', pathValue: 'env1' }
      ]);
      assert.equal(
        JSON.stringify(result),
        JSON.stringify([
          {
            label: 'Env 1',
            path: '/env1',
            id: 'env1'
          }
        ])
      );
    });
  });

  describe('getLabelFromOptions()', () => {
    const env1 = { label: 'Env 1', id: 'env1' };
    const env2 = { label: 'Env 2', id: 'env2' };

    it('returns undefined if node is not inside options', () => {
      const result = CSHelpers.getLabelFromOptions([env1, env2], 'env3');
      assert.equal(result, undefined);
    });

    it('returns matching node label', () => {
      const result = CSHelpers.getLabelFromOptions([env1, env2], 'env2');
      assert.equal(result, 'Env 2');
    });
  });

  describe('isContextSwitcherDetailsView()', () => {
    let currentPath;
    let parentNodePath;

    beforeEach(() => {
      parentNodePath = '/home/projects';
      currentPath = '/home/projects/pr1';
      Helpers.addTrailingSlash = sinon.stub().callsFake(s => s + `/`);
    });

    it('returns false if parent node path is falsy', () => {
      parentNodePath = undefined;
      const actual = CSHelpers.isContextSwitcherDetailsView(
        currentPath,
        parentNodePath
      );
      assert.isFalse(actual);
    });

    it('returns false if parent node path is not included in current path', () => {
      parentNodePath = '/home/nomatch';
      const actual = CSHelpers.isContextSwitcherDetailsView(
        currentPath,
        parentNodePath
      );
      assert.isFalse(actual);
    });

    it('returns false if last path segment from parent node is not a full match in currentPath', () => {
      currentPath = '/home/projectsandmore/pr1';
      const actual = CSHelpers.isContextSwitcherDetailsView(
        currentPath,
        parentNodePath
      );
      assert.isFalse(actual);
    });

    it('returns false if current path has no content after parent node path', () => {
      currentPath = '/home/projects';
      const actual = CSHelpers.isContextSwitcherDetailsView(
        currentPath,
        parentNodePath
      );
      assert.isFalse(actual);
    });

    it('returns true if current path has content after parent node path', () => {
      const actual = CSHelpers.isContextSwitcherDetailsView(
        currentPath,
        parentNodePath
      );
      assert.isTrue(actual);
    });
  });

  describe('getSelectedLabel()', () => {
    const parentNodePath = '/environment';

    it('returns undefined when path only partially contains parentNodePath', async () => {
      const result = await CSHelpers.getSelectedLabel(
        '/environmentWhatever',
        [],
        parentNodePath,
        myResolverFn
      );
      assert.equal(result, undefined);
    });

    it('returns undefined if outside current path', async () => {
      const result = await CSHelpers.getSelectedLabel(
        '/something',
        [],
        parentNodePath,
        myResolverFn
      );
      assert.equal(result, undefined);
    });

    it('returns env id', async () => {
      const env1 = { label: 'Env 1', id: 'env1' };
      const env2 = { label: 'Env 2', id: 'env2' };
      const result = await CSHelpers.getSelectedLabel(
        '/environment/env2',
        [env1, env2],
        parentNodePath,
        myResolverFn
      );
      assert.equal(result, env2.label);
    });

    it('returns fallback label if inside parentNodePath', async () => {
      const env1 = { label: 'Env 1', id: 'env1' };
      const env2 = { label: 'Env 2', id: 'env2' };
      const result = await CSHelpers.getSelectedLabel(
        '/environment/env3',
        [env1, env2],
        parentNodePath,
        myResolverFn
      );
      assert.equal(result, '##env3##');
    });
  });
});
