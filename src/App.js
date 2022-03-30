import React, { useEffect, useState } from 'react';
import { Row } from 'reactstrap';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CardView from './components/cardView'
import { getSpellsData, getSpellByName } from './controllers/spellsControllers';
import DetailView from './components/detailView';
import { toast } from 'react-toastify';

function App() {
  var listOfFavorite = localStorage.getItem('favorite')
  const [spellData, setSpellData] = useState([]);
  const [isOpen, openModalDetailView] = useState(false);
  const [spellDetail, setSpellDetail] = useState({});

  useEffect(() => {
   getData()
  }, []);
 const getData =async ()=>{
  await getSpellsData().then((res) => {
    setSpellData(res.results)
  })
 }
  const getSpecificData = async (url, title) => {
    await getSpellByName(url).then((res) => {
      setSpellDetail(res)
      toggleModal(true)
    })
  }
  const addFavorite = (data) => {
    listOfFavorite = localStorage.getItem('favorite')
    if (listOfFavorite == null) {
      localStorage.setItem('favorite', JSON.stringify([data]))
      toast.success('Your item save as a favorite.')
    } else {
      let favoriteList = JSON.parse(listOfFavorite)
      let findAlreadyFavorite = favoriteList.find((value) => value === data)
      if (findAlreadyFavorite !== undefined) {
        let findAlready = favoriteList.filter((value) => value !== data)
        localStorage.setItem('favorite', JSON.stringify(findAlready))
        toast.error('Your item remove from favorite list.')
      } else {
        toast.success('Your item save as a favorite.')
        favoriteList.push(data)
        localStorage.setItem('favorite', JSON.stringify(favoriteList))
      }
    }
    getData()
    this.forceUpdate()
  }
  const toggleModal = (value) => {
    openModalDetailView(value)
  }
  return (
    <div className="animated fadeIn container">
      <Row>
        {(spellData !== undefined || spellData.length > 1) && spellData.map((value) => {
          return (
            <CardView title={value.name}  url={value.url} addFavorite={addFavorite} getSpecificData={getSpecificData} />
          )
        })}
      </Row>
      <DetailView modal={isOpen} spellDetail={spellDetail} toggleModal={toggleModal} />
    </div>
  );
}

export default App;
