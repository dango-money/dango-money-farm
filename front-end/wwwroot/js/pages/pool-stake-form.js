﻿FormValidation.formValidation(
    document.getElementById("stake_form"),
    {
        fields: {
            amount: {
                validators: {
                    notEmpty: {
                        message: "Amount of tokens is required"
                    },
                    greaterThan: {
                        message: "Invalid amount to stake",
                        min: 0
                    },
                    numeric: {
                      message: "Invalid amount of stake tokens",
                      thousandsSeparator: "",
                      decimalSeparator: "."
                    }
                }
            }
        },

        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            // Validate fields when clicking the Submit button
            submitButton: new FormValidation.plugins.SubmitButton(),
            // Bootstrap Framework Integration
            bootstrap: new FormValidation.plugins.Bootstrap({
                eleInvalidClass: "",
                eleValidClass: ""
            })
        }
    }
).on("core.form.valid",
    function() {
        if ($("#stakeModal")) {
            $("#stakeModal").modal("hide");
        }
        poolOnStake($("#amount").val(), "");
    });