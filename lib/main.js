/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolveGetter = require( '@stdlib/array-base-resolve-getter' );


// MAIN //

/**
* Returns the last element of an array-like object.
*
* @param {Collection} arr - input array
* @returns {*} - last element
*
* @example
* var out = last( [ 1, 2, 3 ] );
* // returns 3
*/
function last( arr ) {
	var get;
	var idx;

	// Resolve an accessor for retrieving input array elements:
	get = resolveGetter( arr );

	// Resolve the last index:
	idx = arr.length - 1;

	// Return the last element:
	if ( idx < 0 ) {
		return;
	}
	return get( arr, idx );
}


// EXPORTS //

module.exports = last;
