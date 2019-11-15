import angular from "angular";

export const companyListComponent = {
    template: require('./company-list.html'),
    controller: ['$scope', 'companyServices', 'blockUI', ($scope, companyServices, $blockUI) => {

        $scope.companies = [];

        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 3000
        });

        var CNPJIsValid = (value) => {

            var cnpj = value.replace(/[\.\-//]?/g, '');

            if (/[\D]/g.test(cnpj))
                return 'O CNPJ deve conter apenas numeros.';

            if (cnpj.length !== 14)
                return 'O valor informado nao e um CNPJ valido.';
        };

        var searchCNPJ = (cnpj) => 
            companyServices.searchCnpj(cnpj)
                           .then(rs => {
                                if (!rs)
                                    throw rs;
                                return rs;
                            });

        var saveCompany = company =>
            companyServices.saveCompany(company)
            .then(rs => {
                console.log(rs);
                Toast.fire({
                    icon: "success",
                    title: "Operacao Concluida!",
                });
                getCompanies();
                return rs;
            });

            var getCompanies = () =>  
                companyServices.getCompanies()
                .success(r => $scope.companies = r)
                .error(e => { throw e; });

        $scope.openModalCnpj = () => {
            Swal.fire({
                title: 'Informe o CNPJ da empresa abaixo: ',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off',
                    'ui-br-cnpj-mask': true,
                    'max-length': 18
                },
                customClass: {
                    input: 'ml-5 mr-5 w-75'
                },
                showCancelButton: true,
                confirmButtonText: 'Buscar',
                showLoaderOnConfirm: true,
                inputValidator: CNPJIsValid,
                preConfirm: searchCNPJ,
                allowOutsideClick: () => !Swal.isLoading()
            })
            .then((result) => {
                if (result.value.status === 200) {
                    Swal.fire({
                        title: `CNPJ Encontrado!`,
                        text: `${result.value.data.FantasyName || result.value.data.Person.Name}`,
                        icon: 'info',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        cancelButtonText: 'Esta errado, quero cancelar.',
                        confirmButtonText: 'Esta correto, pode salvar.',
                        preConfirm: () => saveCompany(result.value.data),
                    });
                }
            })
        }

        $scope.openOptions = (t) => 
            new window.$.confirm({
                title: t,
                titleClass: 'd-inline-block text-truncate',
                content: 'Selecione uma das opções abaixo...',
                type: 'dark',
                animateFromElement: false,
                animation: 'scale',
                closeAnimation: 'scale',
                animationBounce: 1.5,
                typeAnimated: true,
                backgroundDismiss: true,
                bgOpacity: true,
                buttons: {
                    Exclude: {
                        text: 'Excluir',
                        btnClass: 'btn btn-red float-left',
                        action: function () {
                            console.log(this);
                            alert('Excluir');
                        }
                    },
                    Travel: {
                        text: 'Viagem',
                        btnClass: 'btn-dark',
                        action: () => alert('VIAGEM')
                    },
                    Edit: {
                        text: 'Editar',
                        btnClass: 'btn btn-outline-secondary',
                        action: function () {
                            console.log(this);
                            alert('Editar');
                        }
                    },
            },
        });
    
        getCompanies();
       
    }]
};