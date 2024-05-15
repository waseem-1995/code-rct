import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Table, Tbody, Tr, Td, Image, Select, Input,Thead,Th, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react'

const HomePage = () => {
    const [Data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc')
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(()=>{
        const getData=async()=>{
            try {
                const res=await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}`);
                const newData=await res.data;
                console.log(newData)
                setData(newData)
            } catch (error) {
                
            }
        }

        getData()
  },[selectedCurrency])


  const handlePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCurrency = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

//   const handleSort = () => {
//     setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');

//   };

const handleSort = (event) => {
    setSortOrder(event.target.value);
};

const handleCoinClick = (coin) => {
    setSelectedCoin(coin);
  };

  const handleCloseModal = () => {
    setSelectedCoin(null);
  };


  const filteredCoins = Data.filter((coin) => {
    return(
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  const sortedCoins = filteredCoins.sort((a, b) => {
    const marketCapA = a.market_cap;
    const marketCapB = b.market_cap;

    if (sortOrder === 'asc') {
      return marketCapA - marketCapB;
    } 
    if (sortOrder === 'desc') {
        return marketCapB - marketCapA;
      }
  });

  const coinsPerPage = 10;
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  return (
    <div>
        <div>
        <Select value={selectedCurrency} onChange={handleCurrency} width="250px">
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </Select>
        <Input type="text" placeholder="Search" value={search} onChange={handleSearch}  width="250px" />
        <Select value={sortOrder} onChange={handleSort} width="250px">
          <option value="">sort</option>  
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>   
        </Select>
        {/* <button onClick={handleSort}  style={{
                height: '30px',
                width: '80px',
                backgroundColor: 'red',
                color: 'white',
              }}
            >Sort</button> */}
      </div>
      <Table>
          <Thead bgColor="yellow" >
              <Tr>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Current Price</Th>
                <Th>Price Change 24h</Th> 
                <Th>Market Cap</Th> 
              </Tr>
          </Thead>
            <Tbody>
                {currentCoins.map((coin) => (
                    <Tr key={coin.id} onClick={() => handleCoinClick(coin)} style={{ cursor: 'pointer' }}>
                        <Td>
                            <Image src={coin.image} alt={coin.name} boxSize="25px" />
                        </Td>
                        <Td>{coin.name}</Td>
                        <Td>₹{coin.current_price}</Td>
                        <Td>{coin.price_change_percentage_24h.toFixed(2)}</Td>
                        <Td>{coin.market_cap}</Td>
                    </Tr>
                ))}
            </Tbody>
      </Table>

      <Modal isOpen={selectedCoin !== null} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Coin Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedCoin && (
              <div>
                <p>Market Cap Rank: {selectedCoin.market_cap_rank}</p>
                <p>Image: <Image src={selectedCoin.image} alt={selectedCoin.name} boxSize="25px" /></p>
                <p>Name: {selectedCoin.name}</p>
                <p>Symbol: {selectedCoin.symbol}</p>
                <p>Current Price: {selectedCoin.current_price}</p>
                <p>Price Change 24 Hour: {selectedCoin.price_change_percentage_24h.toFixed(2)}</p>
                <p>Total Volume: {selectedCoin.total_volume}</p>
                <p>Low 24 Hour: {selectedCoin.low_24h}</p>
                <p>High 24 Hour: {selectedCoin.high_24h}</p>
                <p>Total Supply: {selectedCoin.total_supply}</p>
                <p>Max Supply: {selectedCoin.max_supply}</p>
                <p>Circulating Supply: {selectedCoin.circulating_supply}</p>
                <p>All Time High (ath): {selectedCoin.ath}</p>
                <p>Last Updated Date: {selectedCoin.last_updated}</p>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default HomePage