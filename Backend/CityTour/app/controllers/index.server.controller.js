exports.render = function (req, res) {
    res.render(
        'index', {
            'title': 'CityTour',
            userFullName: req.user ? req.user.fullName : ''

        });
}