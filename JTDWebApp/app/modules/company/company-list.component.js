import angular from "angular";

export const companyListComponent = {
    template: require('./company-list.html'),
    controller: ['$scope', 'companyServices', 'blockUI', ($scope, companyServices, $blockUI) => {

        $scope.companies = [];

        $scope.openModalCnpj = () => {
            Swal.fire({
                title: 'Informe o CNPJ da empresa abaixo: ',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                customClass: {
                    input: 'ml-5 mr-5 w-75'
                },
                showCancelButton: true,
                confirmButtonText: 'Buscar',
                showLoaderOnConfirm: true,
                preConfirm: (cnpj) =>
                    companyServices.searchCnpj(cnpj).then(rs => {
                        if (!rs)
                            throw rs;
                        return rs;
                    }),
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
                if (result.value.status === 200) {
                    Swal.fire({
                        title: `CNPJ Encontrado!`,
                        text: `${result.value.data.FantasyName || result.value.data.Person.Name}`,
                        icon: 'info',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        cancelButtonText: 'Esta errado, quero cancelar.',
                        confirmButtonText: 'Esta correto, pode salvar.'
                    });
                }
            })
        }

        $scope.teste = (t) => alert("Editando usuario: " + t);

        companyServices.getCompanies()
            .success(r => $scope.companies = r)
            .error(e => { throw e; });
    }]
};