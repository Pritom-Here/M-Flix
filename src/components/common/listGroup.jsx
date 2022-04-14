import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const {
      compContainerClasses,
      listGrpContainerClasses,
      items,
      handleItemSelect,
      valueProperty,
      textProperty,
    } = this.props;
    return (
      <div className={compContainerClasses}>
        <div className={listGrpContainerClasses}>
          <ul className="list-group">
            {items.map((item) => (
              <li
                key={item[valueProperty]}
                className={this.getSelectedItemClasses(item)}
                onClick={() => handleItemSelect(item)}
              >
                {item[textProperty]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  getSelectedItemClasses = (item) => {
    const { valueProperty, selectedItem } = this.props;
    let classes =
      "list-group-item my-2 bg-black font-rubik-700 font-size-12 border-0 cursor-pointer ";
    return (classes +=
      item[valueProperty] === selectedItem[valueProperty]
        ? "text-light"
        : "text-grey-light");
  };
}

export default ListGroup;
