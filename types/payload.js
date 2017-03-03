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

class UpdateScopePayload extends Payload {
  // @scope tree of virable values of different scopes.
  constructor (scope) {
    super(COMMAND.UPDATE_SCOPE)
    this.scope = scope
  }
}

var COMMAND = Object.freeze({
  UPDATE_CALLSTACK: 'UPDATE_CALLSTACK',
  RESOLVE_BREAKPOINT: 'RESOLVE_BREAKPOINT',
  REMOVE_BREAKPOINT: 'REMOVE_BREAKPOINT',
  UPDATE_SCOPE: 'UPDATE_SCOPE'
})

module.exports = {
  COMMAND: COMMAND,
  CallStackPayload: CallStackPayload,
  ResolveBreakpointPayload: ResolveBreakpointPayload,
  RemoveBreakpointPayload: RemoveBreakpointPayload,
  UpdateScopePayload: UpdateScopePayload
}
