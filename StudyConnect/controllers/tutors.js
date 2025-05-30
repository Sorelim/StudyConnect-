import myDB from "../db/myDB.js";

/** 
 * function that queries all related tutors in database
 */
export const searchAllTutors = async (req, res) => {
  try {
    const page = req.query.page || 0;
    const keyword = req.query.query;
    const getTutors = await myDB.findTutors(keyword, page);
    res.status(200).json({ data: getTutors });
  } catch (err) {
    console.error(err);
    res.status(404).json({ msg: "Произошла ошибка" });
  }
};

/** 
 * function that gets specific tutor from Tutors Collection in database
 */
export const getTutor = async (req, res) => {
  try {
    const tutorId = req.params.tutorId;
    const getTutor = await myDB.getTutor(tutorId);
    res.status(200).json({ data: getTutor });
  } catch (err) {
    console.error(err);
    res.status(404).json({ msg: "Произошла ошибка" });
  }
};

/**
 * function that updates user class schedule in database
 */
export const updateClass = async (req, res) => {
  try {
    const user = req.session.passport.user;
    const booking = req.body;
    await myDB.makeBooking(user, booking);
    res.status(200).json({ msg: "успешно созданное бронирование" });
  } catch (err) {
    console.error(err);
    res.status(404).json({ msg: "Произошла ошибка" });
  }
};

/** 
 * function that gets user schedule in database
 */
export const getSchedule = async (req, res) => {
  try {
    const user = req.session.passport.user;
    const getSchedule = await myDB.getUserSchedule(user);
    if (getSchedule) {
      res.status(200).json({ data: getSchedule });
    }
  } catch (err) {
    console.error(err);
    res.status(404).json({ msg: `Пользователь не вошел в систему ${err}` });
  }
};
