/**
 * CameraServController
 *
 * @description :: Server-side logic for managing Cameraservs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	testing: function (req, res){
		res.send('horeee');
	},

	uploadFoto: function (req, res) {
		
		res.setTimeout(0);

		req.file('gambar')
		.upload({

		// You can apply a file upload limit (in bytes)
		dirname: './assets/foto/',
		maxBytes: 1000000

		}, function whenDone(err, uploadedFiles) {
			if (err) return res.serverError(err);
			else return res.json({
				files: uploadedFiles,
				textParams: req.params.all()
			});
		});
  	}

};

