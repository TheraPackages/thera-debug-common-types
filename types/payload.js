'use strict'
'use babel'

class Payload {
  constructor (command) {
    this.command = command
  }
}

class CallStackPayload extends Payload {
  constructor (callFrames, reason, hitBreakpoints, currentCallFrameId) {
    super(COMMAND.UPDATE_CALLSTACK)
    this.callFrames = callFrames
    this.reason = reason
    this.hitBreakpoints = hitBreakpoints
    this.currentCallFrameId = currentCallFrameId
  }
}

class CallFramePayload extends Payload {
  constructor (id, functionName, scopeChain, location) {
    super(COMMAND.CALLFRAME)
    this.id = id
    this.functionName = functionName
    this.scopeChain = scopeChain
    this.location = location
  }
}

class ResolveBreakpointPayload extends Payload {
  constructor (breakpoint) {
    super(COMMAND.RESOLVE_BREAKPOINT)
    this.breakpoint = breakpoint
  }
}

class RemoveBreakpointPayload extends Payload {
  constructor (path, line) {
    super(COMMAND.REMOVE_BREAKPOINT)
    this.path = path
    this.line = line
  }
}

var COMMAND = Object.freeze({
  UPDATE_CALLSTACK: 'UPDATE_CALLSTACK',
  RESOLVE_BREAKPOINT: 'RESOLVE_BREAKPOINT',
  REMOVE_BREAKPOINT: 'REMOVE_BREAKPOINT',
  CALLFRAME: 'CALLFRAME'
})

module.exports = {
  COMMAND: COMMAND,
  CallStackPayload: CallStackPayload,
  ResolveBreakpointPayload: ResolveBreakpointPayload,
  RemoveBreakpointPayload: RemoveBreakpointPayload,
  CallFramePayload: CallFramePayload
}
