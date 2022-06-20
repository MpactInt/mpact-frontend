<template>
    <div>
        <survey :survey="survey"></survey>
    </div>
</template>

<script>
/* eslint-disable */
import Api from '../../router/api'
import * as SurveyVue from "survey-vue";
import "survey-vue/defaultV2.css";
SurveyVue.StylesManager.applyTheme("defaultV2");

export default {
    name: "CustomSurvey",
    props: ['surveyProp'],
    data() {
        var json = {
            title: "Popup Survey",
            showProgressBar: "bottom",
            goNextPageAutomatic: true,
            showNavigationButtons: false,
            pages: this.surveyProp
        };
        var model = new SurveyVue.Model(json);
        // model.onComplete.add(function (survey, Api) {
        //     let data = JSON.stringify(survey.data, null, 3)
        //     // this.submitPopupSurvey(JSON.parse(data))
        //     // let dd =  JSON.stringify(sender)
        //     this.surveyRes = JSON.parse(data)
        //     this.$refs.surveyForm.$el.submit()
        //     // document.querySelector("#surveyResult").text = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
        // });

        model.onComplete.add(this.submitPopupSurvey)
        return {
            survey: model,
            surveyRes: ''
        };
    },
    methods: {
        submitPopupSurvey: function (survey) {
            let data = JSON.stringify(survey.data, null, 3)
            this.surveyRes = JSON.parse(data)
            Api.submitPopupSurvey(this.surveyRes).then(response => {

            });
        }
    },
    mounted() {
    }
}
</script>
