var path, position, max;
var count = 0;
var grow = false;

var raster = new Raster('pankti');
raster.visible = false;
raster.on('load', resetSpiral);

var text = new PointText({
  justification: 'right',
  fontSize: 12,
});

function onFrame(event) {
  if (grow) {
    if (raster.loaded && (view.center - position).length < max) {
      for (var i = 0, l = count / 50 + 1; i < l; i++) {
        growSpiral();
      }
      path.smooth();
    } else {
      grow = false;
    }
  }
}

function growSpiral() {
  count++;
  var vector = new Point({
    angle: count * 5,
    length: count / 100,
  });
  var rot = vector.rotate(90);
  var color = raster.getAverageColor(position + vector / 2);
  var value = color ? (1 - color.gray) * 3.7 : 0;
  rot.length = value;
  path.add(position + vector - rot);
  path.insert(0, position + vector + rot);
  position += vector;
}

function resetSpiral() {
  grow = true;
  // Transform the raster, so it fills the view:
  raster.fitBounds(view.bounds);

  if (path) path.remove();
  count = 0;
  path = new Path({
    fillColor: '#025',
    closed: true,
  });

  position = view.center;
  max = Math.min(raster.bounds.width, raster.bounds.height) * 0.5;
}

function onResize() {
  if (raster.loaded) resetSpiral();
  text.point = view.bounds.bottomRight - [30, 30];
}

function onKeyDown(event) {
  if (event.key == 'space') {
    path.selected = !path.selected;
  }
}

tool.fixedDistance = 25;


// // Create a raster item using the image tag with id='mona'
// var raster = new Raster('pankti');

// // Hide the raster:
// raster.visible = false;

// // The size of our grid cells:
// var gridSize = 12;

// // Space the cells by 120%:
// var spacing = 1.2;

// // As the web is asynchronous, we need to wait for the raster to load
// // before we can perform any operation on its pixels.
// raster.on('load', function() {
// 	// Since the example image we're using is much too large,
// 	// and therefore has way too many pixels, lets downsize it to
// 	// 40 pixels wide and 30 pixels high:
// 	raster.size = new Size(70, 70);

// 	for (var y = 0; y < raster.height; y++) {
// 		for(var x = 0; x < raster.width; x++) {
// 			// Get the color of the pixel:
// 			var color = raster.getPixel(x, y);

// 			// Create a circle shaped path:
// 			var path = new Path.Circle({
// 				center: new Point(x, y) * gridSize,
// 				radius: gridSize / 2 / spacing
// 			});

// 			// Set the fill color of the path to the color
// 			// of the pixel:
// 			path.fillColor = color;
// 		}
// 	}

// 	// Move the active layer to the center of the view, so all
// 	// the created paths in it appear centered.
// 	project.activeLayer.position = view.center;
// });

// // Move the active layer to the center of the view:
// project.activeLayer.position = view.center;
