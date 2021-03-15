import Model from "../model/message";

module.exports = {
  getMessages: (req, res) => {
    Model.Message.find({}, null, { sort: "name" }, (err, allitems) => {
      // console.log('\n\n\n\n=============> [ allitems Info ]\n', allitems);
      if (err) {
        return res.json({
          message: "Error",
          errors: ["Unable to find Messages"],
        });
      } // respond with JSON
      else {
        return res.json({ message: "Success", items: allitems });
      } // respond with JSON
    });
  },

  getMessage: (req, res) => {
    Model.Message.findById(req.params.id, (err, item) => {
      // console.log('\n\n\n\n=============> [ item Info ]\n', item);
      if (err) {
        return res.json({ message: "Error", errors: err });
      } // respond with JSON
      else {
        return res.json({ message: "Success", item: item });
      } // respond with JSON
    });
  },

  editMessage: (req, res) => {
    Model.Message.findById({ _id: req.params.id }, (err, item) => {
      // console.log('\n| => Returned ERROR:\n', err.errors);
      if (err) {
        return res.json({
          message: "Sorry! couldn't update item info",
          errors: err,
        });
      } else {
        (item.name = req.body.name),
          (item.cuisine = req.body.cuisine),
          item.save((err) => {
            if (err) {
              return res.json({
                message: "Sorry! couldn't update item info",
                errors: err,
              });
            } else {
              return res.json({
                message: "item info has been updated!",
                item: item,
              });
            }
          });
      }
    });
  },

  updateMessage: (req, res) => {
    Model.Message.update({ _id: req.body.id }, req.body, (err, item) => {
      // console.log('\n| => Returned ERROR:\n', err.errors);
      if (err) {
        return res.json({
          message: "Sorry! couldn't update item info",
          errors: err,
        });
      } else {
        return res.json({ message: "item info has been updated!", item: item });
      }
    });
  },

  addMessage: (req, res) => {
    // console.log(req.body);
    let item = new Model.Message({
      name: req.body.name,
      cuisine: req.body.cuisine,
    });
    item.save((err) => {
      if (err) {
        return res.json({
          msg: "Sorry... something went wrong creating this item!",
          errors: err,
        });
      }
      return res.json({ msg: "Successfully added a item!" });
    });
  },

  deleteMessage: (req, res) => {
    // console.log('We are on DELETE =================\n\n\n');
    Model.Message.findByIdAndRemove(
      { _id: req.params.id },
      req.body,
      (err, item) => {
        console.log("item: ", item);
        if (err) {
          return res.json({
            message: "Sorry! Something went wrong. item was not deleted!",
            errors: err,
          });
        } else {
          return res.json({ message: "Deleted Record" });
        }
      }
    );
  },
};
