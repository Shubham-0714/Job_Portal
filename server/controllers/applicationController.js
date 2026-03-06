const Application = require("../models/application");

exports.applyJob = async (req, res) => {
  try {

    const jobId = req.params.id;
    const userId = req.user._id;

    const alreadyApplied = await Application.findOne({
      job: jobId,
      applicant: userId
    });

    if (alreadyApplied) {
      return res.json({
        success: false,
        message: "You already applied for this job"
      });
    }

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

    console.log("APPLICATION ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Error applying for job"
    });

  }
};