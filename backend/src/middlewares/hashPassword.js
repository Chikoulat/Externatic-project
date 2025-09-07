const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

const hash = async (req, res, next) => {
  try {
    if (!req.body.password.startsWith("$argon2i$")) {
      req.body.hashedPassword = await argon2.hash(
        req.body.password,
        hashingOptions
      );
    } else {
      req.body.hashedPassword = req.body.password;
    }

    delete req.body.password;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { hash };
