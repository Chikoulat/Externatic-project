const { z } = require("zod");

const userSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  contactNumber: z.string().min(10).max(15),
  smsNotificationActive: z.boolean(),
  emailNotificationActive: z.boolean(),
});

const validateUserData = (req, res, next) => {
  const user = req.body;

  try {
    if (userSchema.parse(user)) next();
  } catch (e) {
    next(e);
  }
};

module.exports = { validateUserData };
