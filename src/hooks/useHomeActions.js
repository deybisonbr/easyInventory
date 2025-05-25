import { useCallback } from 'react';

export default function useHomeActions(navigation) {
  
  const newInspection = useCallback((type) => {
    // navigation.navigate('NovaInspecao', { type });
    console.log('Nova Inspeção: ' + type)
  }, [navigation]);

  const searchCheckList = useCallback(() => {
    // navigation.navigate('ConsultaChecklist');
    console.log('Buscou a Inspeção')
  }, [navigation]);

  const exportCheckList = useCallback((id) => {
    // console.log(`Exportando checklist ID: ${id}`);
    // Aqui você pode acionar download, PDF, etc.
    console.log('Extraiu a Inspeção')
  }, []);

  const viewCheckList = useCallback((id) => {
    // navigation.navigate('VisualizarChecklist', { id });
    console.log('Visualizou a Inspeção')
  }, [navigation]);

  return {
    newInspection,
    searchCheckList,
    exportCheckList,
    viewCheckList,
  };
}
