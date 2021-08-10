import React from "react";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import { withStyles } from "material-ui/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    width: "47%"
  }
});

class AddFormComponent extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const { postCode } = this.props;
    const author = this.state.author;
    const comment = this.state.comment;
    this.props.onFormSubmit(postCode, author, comment);
    this.setState({
      author: "",
      comment: ""
    });
  }

  state = {
    author: "",
    comment: ""
  };

  handleChange = field => event => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form
        ref="commentForm"
        className={classes.container}
        onSubmit={this.handleSubmit.bind(this)}
        style={{
          width: "100%"
        }}
      >
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="author">Author</InputLabel>
          <Input
            value={this.state.author}
            onChange={this.handleChange("author")}
            placeholder="author"
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-simple">Comment</InputLabel>
          <Input
            value={this.state.comment}
            onChange={this.handleChange("comment")}
            placeholder="comment"
          />
        </FormControl>

        <input type="submit" hidden />
      </form>
    );
  }
}

AddFormComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

// eslint-disable-next-line no-unused-vars
const AddForm = withStyles(styles)(AddFormComponent);

export default AddForm;
