import React from "react";
import {connect} from "react-redux";
import {Stories} from "./Stories.view";
import {
    addStoryGroupYear,
    deleteStoryGroupYear,
    saveStories,
    selectedStoryGroup,
    selectedStoryYear
} from "./Stories.action-creators.view";

const mapStateToProps = state => ({
    groups: state.root.MeetingReducer.groups,
    years: state.root.StoriesReducer.years,
    groupYears: state.root.StoriesReducer.groupYears,
    selectedGroup: state.root.StoriesReducer.selectedGroup,
    selectedYear: state.root.StoriesReducer.selectedYear,
    password: state.root.PasswordReducer.password,
    errorMsg: state.root.StoriesReducer.errorMsg,
    saveError: state.root.StoriesReducer.saveError
});

const mapDispatchToProps = dispatch => ({
    selectGroup: group => dispatch(selectedStoryGroup(group)),
    selectYear: year => dispatch(selectedStoryYear(year)),
    addGroupYear: () => dispatch(addStoryGroupYear()),
    deleteGroupYear: groupYear => dispatch(deleteStoryGroupYear(groupYear)),
    save: (groupYears, password) => dispatch(saveStories(groupYears, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
