'use babel'
'use strict'

// https://chromedevtools.github.io/debugger-protocol-viewer/tot/Debugger/#type-Scope
class Scope {
  // @type. string. Scope type. Allowed values: global, local, with, closure, catch, block, script, eval, module.
  // @object. RemoteObject
  constructor (type, object) {
    this.type = type
    this.object = object
  }
}

// https://chromedevtools.github.io/debugger-protocol-viewer/tot/Runtime/#type-RemoteObject
class RemoteObject {
  // @type: string. Object type. Allowed values: object, function, undefined, string, number, boolean, symbol.
  // @className: string. Object class (constructor) name. Specified for object type values only.
  // @value: any. Remote object value in case of primitive values or JSON values (if it was requested).
  // @id. string. Unique object identifier (for non-primitive values).
  // @properties. array[PropertyDescriptor]. properties of a given object
  constructor (type, className, value, id, properties) {
    this.type = type
    this.className = className
    this.value = value
    this.id = id
    this.properties = properties
  }
}

// https://chromedevtools.github.io/debugger-protocol-viewer/tot/Runtime/#type-PropertyDescriptor
class PropertyDescriptor {
  // @name: string. Property name or symbol description.
  // @value: RemoteObject. The value associated with the property.
  constructor (name, value) {
    this.name = name
    this.value = value
  }
}

module.exports = {
  Scope: Scope,
  RemoteObject: RemoteObject,
  PropertyDescriptor: PropertyDescriptor
}
