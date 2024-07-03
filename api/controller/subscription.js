import SubscriptionSchema from "../model/subscription.js";
import UserModel from "../model/user.js";
import response from "../config/res.js";
import helperUtils from "../utils/helper.js";

export const createSubscriptionPlan = async (req, res) => {
  try {
    const data = req?.body;

    const findSubscription = await SubscriptionSchema.findOne({
      where: { subscriptionplan: data?.subscriptionPlan },
    });

    if (findSubscription) {
      findSubscription.subscriptionFeature = {
        ...JSON.parse(findSubscription.subscriptionFeature),
        ...data?.subscriptionFeature
      };
      await findSubscription.save();
      return res.json("success"); 
    }

    const createSubscriptionPlans = await SubscriptionSchema.create(data);
    if (!createSubscriptionPlans) return res.json(response.SUBSCRIPTION_FAILED);
    
    return res.json(response.SUBSCRIPTION_SUCCESS);
  } catch (err) {
    console.log(err.message);
    return res.json(response.INTERNAL_ERR);
  }
};



export const getSubscriptionUser = async (req, res) => {
  try {
    let subscriptionplan = req.query.subscriptionplan;
    
    const subscriptionUsers = await SubscriptionSchema.findAll({
      where: { subscriptionplan: subscriptionplan },
      include: {
        model: UserModel,
      },
    });
    
    if (subscriptionUsers && subscriptionUsers.length > 0) {
     
      const getSubscriptionBasedUser = subscriptionUsers.map((each) => ({

        subscriptionPlan: each.User.subscriptionPlan,
        subscriptionFeature: each.subscriptionFeature
          ? helperUtils.getTrueValues(each.subscriptionFeature)
          : [],
        id: each.User.id,
        name: each.User.name,
        email: each.User.email,
      }));

      return res.json({
        ...response.GET_SUBSCRIPTION_USER_SUCCESS,
        getSubscriptionBasedUser,
      });
    } else {
      return res.json(response.GET_SUBSCRIPTION_USER_FAILED);
    }
  } catch (err) {
    console.log(err.message);
    return res.json(response.INTERNAL_ERR);
  }
};
