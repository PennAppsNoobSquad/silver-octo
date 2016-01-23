'use strict';

/**
 * @ngdoc service
 * @name silverOctoTestApp.houndify
 * @description
 * # houndify
 * Factory in the silverOctoTestApp.
 */
angular.module('silverOctoTestApp')
  .factory('houndify', function ($log) {

    //CONFIG
    var clientID = "9cCASvpjjiR3qHc7BjObPQ==";
    var baseURL = "https://localhost:3446";

    //HTML ELEMENTS FOR DISPLAYING RESPONSE AND INFO JSON's
    var data = {};

    var jsonElet = document.getElementById("responseJSON");
    var infoElet = document.getElementById("infoJSON");

    //REQUEST INFO JSON
    var requestInfo = {

       PartialTranscriptsDesired: true,
       ClientID: clientID
    };

    //INITIALIZE COMMON CONVERSATION OBJECT FOR STORING CONVERSATION STATE
    var myConversation = new Hound.Conversation();

    //INITIALIZE VOICE SEARCH OBJECT
    var voiceSearch = new Hound.VoiceSearch({

      // provide client information here if connection is secure
      // to skip the authentication on server side
      client: {
        clientId: "ZT1j1QT7Q7sC93SauHS2vA==",
        clientKey: "bkzCrOwxtF7VqG8UnT6hUH3hSmQuar8PEpASRSCrDcDg5jhLi331XN4A6JlSv7PGiImf15B0V69eBgkXwqM8bA=="
      },

      // authenticationURI: baseURL + "/voiceSearchAuth",

      conversation: myConversation,

      enableVAD: true,

      onTranscriptionUpdate: function(trObj) {
        var transcriptElt = document.getElementById("query");
        transcriptElt.value = trObj.PartialTranscript;
      },

      onResponse: function(response, info) {
        if (response.AllResults && response.AllResults[0] !== undefined) {
          $log.debug("voiceSearch response:", response, info);
          data.response = response;
          data.info = info;
          // Maybe fire event here.
          // jsonElet.value = JSON.stringify(response, undefined, 2);
          // infoElet.value = JSON.stringify(info, undefined, 2);
        }
      },

      onAbort: function(info) {},

      onError: function(err, info) {
        data.info = info;
        $log.warn("voiceSearch error:", err, info);
        // infoElet.value = JSON.stringify(info, undefined, 2);
        document.getElementById("voiceIcon").className = "unmute big icon";
      },

      onRecordingStarted: function() {
        $log.debug("Recording started");
        document.getElementById("voiceIcon").className = "selected radio icon big red";
      },

      onRecordingStopped: function(recording) {
        $log.debug("Recording stopped.");
        document.getElementById("voiceIcon").className = "unmute big icon";
        document.getElementById("textSearchButton").disabled = false;
        document.getElementById("query").readOnly = false;
      },

      onAudioFrame: function(frame) {}

    });


    //START OR STOP VOICE SEARCH
    var startStopVoiceSearch = function startStopVoiceSearch() {
      if (voiceSearch.isState("streaming")) {
        voiceSearch.stop();
        return false;
      } else {
        voiceSearch.start(requestInfo);
        return true;
        document.getElementById("voiceIcon").className = "loading circle notched icon big";
        document.getElementById("textSearchButton").disabled = true;
        document.getElementById("query").readOnly = true;  
      }
    };

    //UPLOAD AUDIO FILE
    // function onFileUpload() {
    //   var fileElt = document.getElementById("file");
    //   var file = fileElt.files[0];
    //   if (!file) return;

    //   var reader = new FileReader();
    //   reader.onload = function(){
    //     var arrayBuffer = reader.result;
    //     voiceSearch.upload(arrayBuffer, requestInfo);
    //   };
    //   reader.readAsArrayBuffer(file);
    // }


    //INITIALIZE TEXT SEARCH OBJECT
    var textSearch = new Hound.TextSearch({

      client: {
        clientId: "ZT1j1QT7Q7sC93SauHS2vA==",
        clientKey: "bkzCrOwxtF7VqG8UnT6hUH3hSmQuar8PEpASRSCrDcDg5jhLi331XN4A6JlSv7PGiImf15B0V69eBgkXwqM8bA=="
      },

      conversation: myConversation,

      onResponse: function(response, info) {
        if (response.AllResults && response.AllResults[0] !== undefined) {
          data.response = response;
          data.info = info;
          $log.debug("textSearch response", response, info);
          // jsonElet.value = JSON.stringify(response, undefined, 2);
          // infoElet.value = JSON.stringify(info, undefined, 2);
        }
      },

      onError: function(err, info) {
        data.info = info;
        $log.warn("textSearch error", err, info);
        // infoElet.value = JSON.stringify(info, undefined, 2);
      }

    });

    // Public API here
    return {
      toggleVoiceSearch: function toggleVoiceSearch() {
        $log.debug("Toggle voice search.");
        return startStopVoiceSearch();
      },
      textSearch: function textSearch(query) {
        textSearch.search(query, requestInfo);
      }
    };
  });
