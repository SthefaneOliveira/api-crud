function excluirAluno(alunoId) {
    fetch(`/alunos/${alunoId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 204) {
          console.log('Aluno excluído com sucesso');
          
        } else {
          console.error('Erro ao excluir o aluno');
        }
      })
      .catch((error) => {
        console.error('Erro ao processar a solicitação:', error);
      });
  }
  