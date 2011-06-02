Tweeny
===

Tweeny is a tweening engine for JavaScript.  That's it.  Tweeny is a low level tool that can be encapsulated by higher-level tools.  At its core, it does:

  * Tweening.
  * Extensibility hooks for the tweening.

The Tweeny core doesn't do:

  * Keyframing.
  * Queuing.
  * Drawing.
  * Much else.

If you need functionality like this and more, you can easily extend or wrap Tweeny's core with whatever you need.

Using Tweeny
---

If you just want raw tweening functionality, all you need is `tweeny.core.js`.  This is in the `src` directory.  Just drop that in your page, and you are ready to go.  If you want to use Tweeny extensions, just include them in the page after `tweeny.core.js`.

Currently, there are extensions, included in this repo, for:

  * queueing

Extension source files can also be found in the `src` directory.

API
===

The section explains how to use the Tweeny core.  For information on each extension, explore the `doc/` directory.

##Tweeny core methods##

__Making a tween:__

```javascript
var tween = tweeny.tween( from, to );
````

You can optionally add some fun extra parameters:

```javascript
var tween = tweeny.tween( from, to, duration, callback, easing );
````

Or you can use the configuration object syntax:

````javascript
var tween = tweeny.tween({
  from:       {  },            // Object.  Contains the properties to tween.  This object's properties are modified by Tweeny.
  to:         {  },            // Object.  The "destination" `Number`s that the properties in `from` will tween to.
  duration:   1000,            // Number.  How long the tween lasts for, in milliseconds.
  easing:     'linear',        // String.  Tweening equation to use.  "Linear" is the default.  You can specify any tweening method that was added to `tweeny.formula`.
  step:       function () {},  // Function.  Runs each "frame" that the tween is updated.
  callback:   function () {}   // Function.  Runs when the tween completes.
});
````

This starts a tween.  You can use either format, but the second, longer format give you more hooks and controls.  The method returns an object that you can use to control a tween, as described in the next section.

This method returns an object that you can use to interact with the tween, as outlined below.

__Important!__  The object that is passed as the `from` parameter, regardless of which syntax you use to invoke `tweeny.tween`, is modified.

##Controlling a tween##

Continuing from above...

````javascript
tween.stop( gotoEnd );
````

Stops a tween.

  * `gotoEnd`: Boolean.  Controls whether to jump to the end "to" state or just stop where the tweened values currently are.

````javascript
tween.get();
````

Returns a tween's current values.