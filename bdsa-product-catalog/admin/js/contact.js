/*var app = angular.module('bdsachatapp', []);

//controllers
app.controller('mainCtrl', function($scope) {
  $scope.posts = [];
  $scope.newPost = { createdBy: '', text: '', createdAt: '' };
  
   $scope.post = function() {
    $scope.newPost.createdAt = Date.now();
    $scope.posts.push($scope.newPost);
    $scope.newPost = { createdBy: '', text: '', createdAt: ''};    
  };
 
});
*/
//create messages
function sendMessages() {
    var formData = $('#create_message').serializeObject();
    // var formData = formdd();
        console.log(formData);
    createMessage(formData);
}
function createMessage(formData) {
    $.ajax({
        url: '/messages/',
        type: 'POST',
        accepts: {
            json: 'application/json'
        },
        data: formData,
        success: function(data) {
            
            // var row = '<tr id="row_id_'+ data.id +'">'
            // 			+ displayColumns(data)
        				// + '</tr>';
            // $('#articles').append(row);
        } 
    });
}

/*global $*/

// READ recods on page load
$(document).ready(function () {
    readRecords(); // calling function
});

// READ records
function readRecords() {
    $.get("/messages/", {}, function (data, status) {
        data.forEach(function(value) {
            var row = '<tr id="row_id_'+ value.id +'">'
            			+ displayColumns(value)
        				+ '</tr>';
            $('#articles').append(row);
        });
    });
}

function displayColumns(value) {
    return 	'<td>'+value.id+'</td>'
            + '<td class="name">'+value.createdBy+'</td>'
            + '<td class="name">'+value.createdAt+'</td>'
			+ '<td class="text">'+value.text+'</td>'
			+ '<td align="center">'
			+	'<button onclick="viewRecord('+ value.id +')" class="btn btn-edit">Update</button>'
			+ '</td>'
			+ '<td align="center">'
			+	'<button onclick="deleteRecord('+ value.id +')" class="btn btn-danger">Delete</button>'
			+ '</td>';
}

function addRecord() {
    $('#id').val('');
    $('#createdBy').val('');
    $('#createdAt').val('');
    $('#text').val('');
  //  $('#add_new_record_modal').modal('show');
}

function viewRecord(id) {
    var url = "/messages/" + id;
    
    $.get(url, {}, function (data, status) {
        //bind the values to the form fields
        $('#createdBy').val(data.createdBy);
          $('#createdAt').val(data.createdAt);
        $('#text').val(data.text);

        $('#id').val(id);
        
        $('#add_new_record_modal').modal('show');
    });
}

function saveRecord() {
    //get data from the html form
    var formData = $('#record_form').serializeObject();
    
    //decide if it's an edit or create
    if(formData.id) {
        updateRecord(formData);
    } else {
        createRecord(formData);
    }
}


function createRecord(formData) {
    $.ajax({
        url: '/messages/',
        type: 'POST',
        accepts: {
            json: 'application/json'
        },
        data: formData,
        success: function(data) {
            $('#add_new_record_modal').modal('hide');
            
            var row = '<tr id="row_id_'+ data.id +'">'
            			+ displayColumns(data)
        				+ '</tr>';
            $('#articles').append(row);
        } 
    });
}

function updateRecord(formData) {
    $.ajax({
        url: '/messages/'+formData.id,
        type: 'PUT',
        accepts: {
            json: 'application/json'
        },
        data: formData,
        success: function(data) {
            $('#row_id_'+formData.id+'>td.createdBy').html(formData.createdBy);
             $('#row_id_'+formData.id+'>td.createdAt').html(formData.createdAt);
            $('#row_id_'+formData.id+'>td.text').html(formData.text);
            $('#add_new_record_modal').modal('hide');
        } 
    });
}

function deleteRecord(id) {
    $.ajax({
        url: '/mesages/'+id,
        type: 'DELETE',
        success: function(data) {
            $('#row_id_'+id).remove();
        }
    });
}

