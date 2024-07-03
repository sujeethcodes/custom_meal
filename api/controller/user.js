import UserModel from "../model/user.js";
import bcrypt from "bcrypt";
import response from "../config/res.js";
import { tokenGenerate } from "../middleware/token.js";

// ### create user api ### //
export const createUser = async (req, res) => {
  try {
    const data = req?.body;
    const findAccount = await UserModel.findOne({
      where: { email: data.email },
    });
    if (findAccount) return res.json(response.FIND_ACCOUNT);
    data.password = bcrypt.hashSync(req?.body?.password, 10);
    const createUsers = await UserModel.create(data);
    if (createUsers) {
      let token = await tokenGenerate(createUsers.id);
      if (!token) return res.json(response.TOKEN_FAILED);
      return res.json({ ...response.ACCOUNT_CREATE_SUCCESS, token });
    } else {
      return res.json(response.ACCOUNT_CREATE_FAILED);
    }
  } catch (err) {
    console.log(err.message);
    return res.json(response.INTERNAL_ERR);
  }
};

// ### edit user api ### //
export const editUser = async (req, res) => {
  try {
    if (req?.user?.id !== req?.body?.id) return res.json(response.INVAILD_USER);
    const [editUsers] = await UserModel.update(
      {
        name: req?.body?.name,
        password: req?.body?.password,
        email: req?.body?.email,
      },
      { where: { id: req?.body?.id } }
    );
    if (editUsers === 0) {
      return res.json(response.USER_ALREADY_UPDATED);
    }
    return res.json(response.USER_UPDATED_SUCCESS);
  } catch (err) {
    console.log(err.message);
    return res.json(response.INTERNAL_ERR);
  }
};

// ### delete user api ### //

export const deleteUser = async (req, res) => {
  try {
    if (req?.user?.id !== req?.body?.id) return res.json(response.INVAILD_USER);
    const deleteUsers = await UserModel.destroy({
      where: { id: req?.body?.id },
    });
    if (!deleteUsers) return res.josn(response.USER_DELETED_FAILED);
    return res.json(response.USER_DELETED_SUCCESS);
  } catch (err) {
    console.log(err.message);
    return res.json(response.INTERNAL_ERR);
  }
};

// ### user details ### //

export const getUserDetails = async (req, res) => {
  try {
    let userId = req.query.userId;

    const getUserDetails = await UserModel.findOne({
      where: {
        id: userId,
      },
    });

    const userDetails = {
      id: getUserDetails.id,
      name: getUserDetails.name,
      email: getUserDetails.email,
      subscription: getUserDetails.subscription,
    };

    if (!getUserDetails) return res.json(response.GET_USER_FAILED);
    return res.json({
      ...response.GET_USER_SUCCESS,
      userDetails,
    });
  } catch (err) {
    console.log(err.message);
    return res.json(response.INTERNAL_ERR);
  }
};
