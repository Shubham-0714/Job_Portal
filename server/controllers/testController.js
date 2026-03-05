const testController = (req, res) => {
    res.json({
        success:true,
        message: " Test API working successfully"
    });
};

module.exports = testController;