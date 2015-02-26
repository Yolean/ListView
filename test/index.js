var chai = require('chai');
chai.should();
var sinon = require('sinon');

describe('ItemView', function () {

  it('should render when its model changes');
});

describe('ListView', function () {

  describe('when its collection triggers its first sync event', function () {

    it('should add views for existing models within the collection');

    describe('when the add event is triggered', function () {

      it('should construct and store a new view from the model');

      it('should re-render (after the view is created)');
    });

    describe('when the remove event is triggered', function () {

      it('should remove the subView');

      it('should set the sub view to undefined');
    });

    describe('when its collection triggers another sync event', function () {

      it('should not set up the same listeners again');
    });
  });

  describe('render', function () {

    it('should list the subviews in order of the collection');
  });
});