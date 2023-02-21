const validate = (req, res, next) => {
  const { email_user, password_user, alamat, phone_number, name_user } =
    req.body;
  const err = [];
  try {
    if (!email_user || !isNaN(email_user) || email_user.length < 3)
      err.push("name must more than 3 character");
    if (!password_user || !isNaN(password_user) || password_user.length < 8)
      err.push("password must more than 8 character");
    if (!alamat || !isNaN(alamat) || alamat.length < 8)
      err.push("alamat must more than 8 character");
    if (!phone_number || !isNaN(phone_number) || phone_number.length < 8)
      err.push("phone number must more than 8 character");
    if (!name_user || !isNaN(name_user) || name_user.length < 8)
      err.push("name must more than 8 character");
    if (err.length > 0) {
      throw new Error(err.toString());
    }

    next();
  } catch (err) {
    console.log(err);
    res.json({ error: `${err}` });
  }
};
module.exports = { validate };
