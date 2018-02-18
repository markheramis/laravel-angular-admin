class BlankController{
    constructor(){
        'ngInject';

        //
    }

    $onInit(){
    }
}

export const BlankComponent = {
    templateUrl: './views/app/components/blank/blank.component.html',
    controller: BlankController,
    controllerAs: 'vm',
    bindings: {}
}
