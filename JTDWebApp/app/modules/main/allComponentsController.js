appHotelOne.controller('allComponentsController', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
    // Modal - Begin
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    // Modal - End


    //------------------------------------------------------------------

    // Routes
    // ======
    $scope.displaySummary = true;
    var localSettings = window.appHotelOneSettings;
    var localUrl = localSettings.urls.urlApplicationPath;
    $scope.innButtons = localUrl + "/app/views/all-components/inn-buttons.html";
    $scope.innCardInformation = localUrl + "/app/views/all-components/inn-card-information.html";
    $scope.innCardCheckInformation = localUrl + "/app/views/all-components/inn-card-check-information.html";
    $scope.innCardMinInformation = localUrl + "/app/views/all-components/inn-card-min-information.html";
    $scope.innCardTabsInformation = localUrl + "/app/views/all-components/inn-card-tabs-information.html";
    $scope.innCardNote = localUrl + "/app/views/all-components/inn-card-note.html";
    $scope.innInputs = localUrl + "/app/views/all-components/inn-inputs.html";
    $scope.innTags = localUrl + "/app/views/all-components/inn-tags.html";
    $scope.fixingOlder = localUrl + "/app/views/all-components/fixing-older.html";

    //------------------------------------------------------------------

    // Functions
    // =========

    // innCardMinInformation - Begin
    $scope.listInnCardMinInformation = [
        { Picture: '', Name: 'Lorem 1 Ipsum', QtyProp: 2 },
        { Picture: '', Name: 'Lorem 2 Ipsum', QtyProp: 3 },
        { Picture: '', Name: 'Lorem 3 Ipsum', QtyProp: 6 },
        { Picture: '', Name: 'Lorem 4 Ipsum', QtyProp: 1 },
        { Picture: '', Name: 'Lorem 5 Ipsum', QtyProp: 5 },
        { Picture: '', Name: 'Lorem 6 Ipsum', QtyProp: 4 }
    ];
    // innCardMinInformation - End

    // innTags - Begin
    $scope.listTags = [
        {
            text1: 'Lorem',
            Selected: true
        },
        {
            text1: 'Lorem',
            Selected: false
        },
        {
            text1: 'Lorem',
            Selected: false
        },
        {
            text1: 'Lorem Ipsum',
            Selected: false
        },
        {
            text1: 'Lorem Ipsum',
            Selected: false
        },
        {
            text1: 'Lorem Ipsum',
            Selected: false
        },
        {
            text1: '00000 00000 00000',
            Selected: false
        },
        {
            text1: '00000 00000 00000',
            Selected: false
        },
        {
            text1: '00000 00000 00000',
            Selected: false
        },
        {
            text1: '11111 11111 11111',
            text2: '11111 11111 11111',
            text3: '11111 11111 11111 11111 11111 11111',
            text4: '111111111111111111111111111111111111111111111111',
            Selected: false
        },
        {
            text1: '22222 22222 22222',
            text2: '22222 22222 22222',
            Selected: false
        },
        {
            text1: '33333 33333 33333',
            text2: '33333 33333 33333',
            text3: '33333 33333 33333 33333 33333 33333',
            text4: '333333333333333333333333333333333333333333333333',
            Selected: false
        },
        {
            text1: '44444 44444 44444',
            text2: '44444 44444 44444',
            text3: '44444 44444 44444 44444 44444 44444',
            text4: '444444444444444444444444444444444444444444444444',
            Selected: false
        },
        {
            text1: '55555 55555 55555 55555',
            text2: '55555 55555 55555',
            text3: '55555 55555 55555 55555 55555 55555',
            text4: '5555555555555555555555555555555555555555555555555555555555555555555',
            Selected: false
        },
        {
            text1: '66666 66666 66666',
            text2: '66666 66666 66666',
            text3: '66666 66666 66666 66666 66666 66666',
            text4: '666666666666666666666666666666666666666666666666',
            Selected: false
        },
        {
            text1: '77777 77777 77777',
            text2: '77777 77777 77777',
            text3: '77777 77777 77777 77777 77777 77777',
            text4: '777777777777777777777777777777777777777777777777',
            Selected: false
        },
        {
            text1: '88888 88888 88888',
            text2: '88888 88888 88888',
            text3: '88888 88888 88888 88888 88888 88888',
            text4: '888888888888888888888888888888888888888888888888',
            Selected: false
        },
        {
            text1: '99999 99999 99999',
            text2: '99999 99999 99999',
            text3: '99999 99999 99999 99999 99999 99999',
            text4: '999999999999999999999999999999999999999999999999',
            Selected: false
        }
    ];
    $scope.changeTagsState = function (item) {
        if(item.Selected === true) {
            item.Selected = false;
        }
        else {
            item.Selected = true;
        }
    }
    // innTags - End

    //------------------------------------------------------------------

    // Older
    // =====

    // Cards - Card Button Information - Begin
    $scope.cardButtonInformation = [
        {
            Name: 'Name Lorem Ipsum',
            Contact1: '17 1111-2222',
            CompanyName: 'Company Lorem Ipsum',
            Type: 0,
            Accessibility: true,
            Main: true
        },
        {
            Name: 'Name Lorem Ipsum',
            Contact1: '17 1111-2222',
            CompanyName: 'Company Lorem Ipsum',
            Type: 0
        },
        {
            Name: 'Name Lorem Ipsum',
            Contact1: '17 1111-2222',
            CompanyName: 'Company Lorem Ipsum',
            Type: 1
        }
    ];
    $scope.selectCardButtonInformation = function (obj) {
        obj.selected = !obj.selected;
    };
    $scope.selectTypeGuest = function (guest, type) {
        guest.Type = type;
    };
    $scope.cardInformationEdit = function () {
        $scope.cardInformationAlertClicked = 'edit';
    };
    $scope.cardInformationDescription = function () {
        $scope.cardInformationAlertClicked = 'description';
    };
    // Cards - Card Information - End

    // Card Tabs Information - Begin
    $scope.listNotes = [
        { name: "Note Type Code 111111111111111111111111111", description: "111 111 111 111 111 111 111 111 111.", notes: [{ description: "Sidney", status: "created" }, { description: "Bruno in 23/02", status: "modified" }, { description: "Bruno in 20/03", status: "modified" }], isEditing: false },
        { name: "22222222222222222222222222", description: "222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222 222.", notes: [{ description: "Sidney", status: "created" }, { description: "Bruno in 23/02", status: "modified" }, { description: "Bruno in 20/03", status: "modified" }] },
        { name: "Note Type Code 33333333333333333333333333333333333333", description: "333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333.", notes: [{ description: "Sidney", status: "created" }, { description: "Bruno in 23/02", status: "modified" }, { description: "Bruno in 20/03", status: "modified" }]}
    ];
    $scope.informationTagAdd = function () {
        $scope.currentNote.isEditing = true;
    };
    $scope.informationTagEdit = function () {
        $scope.currentNote.isEditing = true;
    };
    $scope.informationTagDelete = function () {  };
    $scope.informationTagEditConfirm = function () {
        $scope.currentNote.isEditing = false;
    };
    $scope.informationTagEditCancel = function () {
        $scope.currentNote.isEditing = false;
    };



    //Do not change this:
    $scope.currentNote = $scope.listNotes[0];
    $scope.currentNoteIndex = 0;
    $scope.changeCurrent = function (item) {
        $scope.currentNoteIndex = item;
        $scope.currentNote = $scope.listNotes[item];
    };
    $scope.clickLeft = function () {
        document.getElementById('id-folio-detail-tabs-title').scrollLeft -= 150;
    };
    $scope.clickRight = function () {
        document.getElementById('id-folio-detail-tabs-title').scrollLeft += 150;
    };
    // Card Tabs Information - End

    // One Input - Select Search - Begin
    $scope.roomsFloors = [];
    $scope.growableOptions2 = {
        addText: "New",
        onAdd: function (newItem) {
            var addNewItem = {};
            addNewItem.Id = newItem;
            addNewItem.Name = newItem;
            $scope.roomsFloors.push(addNewItem);
            return addNewItem;
        }
    };
    // One Input - Select Search - End

    // One Input - Chips - Begin
    $scope.detailProductService = {
        Act: true,
        IdProduct: 0,
        Type: 1,
        Category: 4,
        Name: '',
        Value: 0,
        Unit: '',
        FeesTaxTypes: [],
        FeesView: [],
        Departments: [],
        DepartmentsView: [],
        Tags: [],
        TagsView: [],
        Codes: []
    };
    // One Input - Chips - End

    // New Card Standard - Begin
    $scope.floatingGender = false;
    // New Card Standard - End
}]);
