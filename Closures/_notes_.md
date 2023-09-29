# Closure

A closure is a concept that occurs when a function "closes over" its surrounding lexical scope (i.e. the visibility and accessibility of variables within a portion of code), retaining access to variables and parameters from that outer scope even after the outer function has finished executing.

When a function is called, we create a "store of data" (i.e. local memory) for that function's execution context. When the function finishes executing, it's local memory is deleted (except for the returned value)

However, our functions can actually "hold onto" or cache data for persistent memory - returning a function from another function