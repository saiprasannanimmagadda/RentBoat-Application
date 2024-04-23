const express = require('express')
const rentboatController = require('../Controllers/rentboatController')

const router = express.Router() // it creates the new router.

router.route('/').post(rentboatController.rentBoat);
router.route('/:ID/').patch(rentboatController.updateBooking).delete(rentboatController.cancelBooking).get(rentboatController.showBooking);


module.exports = router;