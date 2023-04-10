import MainContainer from './MainContainer';
import Item from './items/Item';

function Homepage() {
  const frutas = [{ name: 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML', price: 12 }, { name: 'BEBIDA ENERG�TICA VIBE 2L', price: 15 }, { name: 'ENERG�TICO RED BULL ENERGY DRINK 250ML', price: 2 }, { name: 'DESODORANTE AEROSOL REXONA ANTIBACTERIANO + INVISIBLE PROTECTION FEMININO 150ML', price: 9 }, { name: 'melão', price: 122 }, { name: 'laranja', price: 5 }, { name: 'uva', price: 3 }, { name: 'melancia', price: 45 }, { name: 'maçã', price: 1 }];

  return (
    <MainContainer>
      {frutas.map((data) => <Item data={data} />)}
    </MainContainer>
  );
}

export default Homepage;
