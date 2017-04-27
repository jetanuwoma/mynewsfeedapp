import assign from 'object-assign';
import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';
const NewsSourcesStore = assign({}, EventEmitter.prototype, {
  sources: [],
  getAll() {
    return this.sources;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

});
AppDispatcher.register((payload) => {
  switch (payload.eventName) {
    case AppConstants.GET_SOURCES:
      NewsSourcesStore.sources = payload.newItem;
      NewsSourcesStore.emitChange();
      break;
    default:
      break;
  }

  return true;
});

export default NewsSourcesStore;