const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    // console.log(err);
    if (err.errors && err.errors.length > 0) {
      const messages = err.errors[0].message;
      res.status(400).json({ msg: messages });
    } else {
      res.status(400).json({ msg: "Validation failed" });
    }
  }
};

module.exports = validate;
