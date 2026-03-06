const Application = require("../models/application");

exports.applyJob = async (req, res) => {
  try {

    const jobId = req.params.id;
    const userId = req.user.id;

    const application = new Application({
      job: jobId,
      applicant: userId
    });

    await application.save();

    res.json({
      success: true,
      message: "Job applied successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error applying for job"
    });
  }
};