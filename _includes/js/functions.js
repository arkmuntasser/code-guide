// Return early from functions
// Bad example
function isPercentage(val) {
    if (val >= 0) {
        if (val < 100) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// Better example
function isPercentage(val) {
    if (val < 0) {
        return false;
    }

    if (val > 100) {
        return false;
    }

    return true;
}

// Even better example
function isPercentage(val) {
    var isInRange = (val >= 0 && val <= 100);
    return isInRange;
}


// Limit nested closures
// Bad example
setTimeout(function() {
    client.connect(function() {
        widget.on('init', function() {
            $(this).find('[data-widget-items]').each(function() {
                console.log('losing');
            });
        });
    });
}, 1000);

// Better example
setTimeout(function() {
    client.connect(initWidget);
}, 1000);

function initWidget() {
    widget.on('init', function() {
        $(this).find('[data-widget-items]').each(function() {
            console.log('winning');
        });
    });
}

// Method chaining
// Bad example
User
.findOne({ name: 'foo' })
.populate('bar')
.exec(function(err, user) {
    return true;
});

User.findOne({ name: 'foo' })
    .populate('bar')
    .exec(function(err, user) {
        return true;
    });

User.findOne({ name: 'foo' }).populate('bar')
.exec(function(err, user) {
    return true;
});

User.findOne({ name: 'foo' }).populate('bar')
    .exec(function(err, user) {
        return true;
    });

// Good example
User
    .findOne({ name: 'foo' })
    .populate('bar')
    .exec(function(err, user) {
        return true;
    });
