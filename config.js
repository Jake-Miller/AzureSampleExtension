define([], function(){              //Needed for AMD and JSONP support
    return {                      //Returns a well-formed JSON object
        "icon": "", // 40x40px
        "iconSmall": "", // 15x15px
        "key": "ExactTarget.Activities.Redbox", //AppExtensionId
        "partnerApiObjectTypeId": "100110",
        "lang": {
            "en-US": {        //Culture name followed by object
                "name": "Redbox Activity",    // "name" is a reserved word representing the name that appears in the custom activity modal
                description: ""
                // other globalization should occur in the 3rd party's custom js file
            }
            //additional supported cultures may be placed here
        },
        "category": "", //grouping on sidebar?
        "version": "",
        "execute": {
	     InArguments": [
		      {
		        "ArgumentName": "Data",
        		"DefaultValue": "{\"Name\":\"The Birdcage\", \"RentalPrice\":\"5.00\" }"
      		      },
      		      {
		        "ArgumentName": "Name",
		        "DefaultValue": "Princess Bride"
		      },
      		      {
		        "ArgumentName": "RentalPrice",
		        "DefaultValue": "5.00"
		      }],
            "AssemblyName": "InteractionStudio.SampleActivities",
            "TypeName": "InteractionStudio.SampleActivities.AssemblyActivities.RedboxMovieRentedActivity"
        },
        "save": {
            "AssemblyName": "InteractionStudio.SampleActivities",
            "TypeName": "InteractionStudio.SampleActivities.AssemblyActivities.RedboxMovieRentedActivity"
        },
        "publish": {
            "AssemblyName": "InteractionStudio.SampleActivities",
            "TypeName": "InteractionStudio.SampleActivities.AssemblyActivities.RedboxMovieRentedActivity"
        },
        "validate": {
            "AssemblyName": "InteractionStudio.SampleActivities",
            "TypeName": "InteractionStudio.SampleActivities.AssemblyActivities.RedboxMovieRentedActivity"
        },
        "edit": {
            "uri": "",
            "height": 300,
            "width": 600
        }
    };
});