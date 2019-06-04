import { Topic } from './model'
import _clone from 'clone'
import _debounce from 'debounce'

/**
 * Instantiates plain objects.
 *
 * @param   objects   an array of plain objects
 * @param   clazz     the class to instantiate
 *
 * @return  array of instantiated objects
 */
function instantiateMany (objects, clazz) {
  return objects.map(object => new clazz(object))
}

// ---

function instantiateChilds (childs) {
  const _childs = {}
  for (var compDefUri in childs) {
    _childs[compDefUri] = _instantiateChild(childs[compDefUri])
  }
  return _childs
}

function _instantiateChild (child) {
  if (Array.isArray(child)) {
    return child.map(topic => new Topic(topic))
  } else {
    return new Topic(child)
  }
}

// ---

function clone (o) {
  return _clone(o)
}

function debounce (func, delay, immediate) {
  return _debounce(func, delay, immediate)
}

// ---

function mapById (objects) {
  return _mapByProp(objects, 'id')
}

function mapByUri (objects) {
  return _mapByProp(objects, 'uri')
}

function mapByTypeUri (objects) {
  return _mapByProp(objects, 'typeUri')
}

function _mapByProp (objects, prop) {
  const map = {}
  objects.forEach(object => map[object[prop]] = object)
  return map
}

// ---

function forEach (object, visitor) {
  for (var key in object) {
    visitor(object[key])
  }
}

function filter (object, predicate) {
  const map = {}
  for (var key in object) {
    const val = object[key]
    if (predicate(val)) {
      map[key] = val
    }
  }
  return map
}

function isEmpty (object) {
  return !Object.keys(object).length
}

// ---

/**
 * Returns a cookie value.
 *
 * @param   name    the name of the cookie, e.g. "dmx_workspace_id".
 *
 * @return  the cookie value (string) or <code>null</code> if no such cookie exist.
 */
function getCookie(name) {
  // Note: document.cookie contains all cookies as one string, e.g. "dmx_workspace_id=1234; dmx_topicmap_id=2345"
  const match = document.cookie.match(new RegExp(`\\b${name}=(\\w*)`))
  return match && match[1]
}

function setCookie (name, value) {
  document.cookie = `${name}=${value};path=/`
}

// ---

export default {
  instantiateMany,
  instantiateChilds,
  clone,
  debounce,
  mapById,
  mapByUri,
  mapByTypeUri,
  forEach,
  filter,
  isEmpty,
  getCookie,
  setCookie
}
