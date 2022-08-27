
window.addEventListener('mousemove', (e) => {

	let area = document.querySelector('div');
	let span = document.createElement('section');
	area.append(span);
	span.style.backgroundColor = 'purple';
	// span.style.width = '1px';
	// span.style.height = '1px';
	span.style.position = 'absolute';
	span.style.left = `${e.clientX}px`;
	span.style.top = `${e.clientY}px`; 

})



// class ClickAndHold {
// 	/**
// 	* @param {EventTarget} target 
// 	* @param {Function} callBack
// */
//    constructor(target, callback) {
//    	this.target = target;
//     this.callback = callback;
//     this.isHeld = false;
//     this.activeHoldTimeoutId = null;

//     ["mousedown", "touchstart"].forEach(type => {
//       this.target.addEventListener(type, this._onHoldStart.blind(this));


//     });
//     ["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel"].forEach(type => {
//       this.target.addEventListener(type, this._onHoldEnd.blind(this));
      

//     });
//    }
//    _onHoldStart() {
//    	this.isHeld = true;

//    	this.activeHoldTimeoutId = setTimeout(() => {
//       if (this.isHeld) {
//       	this.callback();
//       }
//    	}, 1000)
//    }
//    _onHoldEnd() {
//    	this.isHeld = false;
//    	clearTimeout(this.activeHoldTimeoutId);
//    }
//  }

//  new ClickAndHold(window, (e) => {

// 		let area = document.querySelector('div');
// 	let span = document.createElement('section');
// 	area.append(span);
// 	span.style.backgroundColor = 'purple';
// 	// span.style.width = '1px';
// 	// span.style.height = '1px';
// 	span.style.position = 'absolute';
// 	span.style.left = `${e.clientX}px`;
// 	span.style.top = `${e.clientY}px`;    
// })