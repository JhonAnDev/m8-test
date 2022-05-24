import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Box,
  Center,
  Heading,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  SimpleGrid,
  Button
} from '@chakra-ui/react'
import { useState } from 'react';
import axios from 'axios'

interface player {
  first_name: '',
  h_in: '',
  h_meters: '',
  last_name: ''
}

const Home: NextPage = () => {
  const [isData, setIsData] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [playersToRender, setPlayersToRender] = useState([])

  const apiUrl = "https://mach-eight.uc.r.appspot.com/";

  const fetchData = async (url: string) => {
    const { data } = await axios.get(url);

    return data.values;
  }

  const handleChange = (value: string) => {
    setInputValue(value)
  }

  const renderList = () =>
    playersToRender.map((player) => (
      <>
        <Box textAlign='center' border='1px solid green'>
          <Text>{ player[0] }</Text>
        </Box>
        <Box textAlign='center' border='1px solid green'>
          <Text>{ player[1] }</Text>
        </Box>
      </>
    ))

  const handleClick = async () => {
    try {
      const data = await fetchData(apiUrl)

      data ? setIsData(true) : setIsData(false)

      const hashedPlayers: any = []
      const pairedPlayers: any = []

      data.map((player: player) => {
        const heightDiff = Number(inputValue) - Number(player.h_in)

        hashedPlayers.push([player, heightDiff])

        hashedPlayers.forEach((elem: any) => {
          player.h_in == elem[1] &&
            pairedPlayers.push([`${player.first_name} ${player.last_name}`, `${elem[0].first_name} ${elem[0].last_name}`])
        })
      })

      setPlayersToRender(pairedPlayers)

    } catch {
      console.error("There was an error, please try again");
    }
  }

  return (
    <Box p='100px 120px' w='100%'>
      <Head>
        <title>Mach 8 Test</title>
        <meta name="description" content="Mach 8 Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box id='search'>
        <Center>
          <Heading as='h1' size='2xl' color='green.600' mb='60px'>
            M8 Test - NBA player heights
          </Heading>
        </Center>

        <Center>
          <Text mb='4'>
            Please enter player height below
          </Text>
        </Center>

        <Center>
          <NumberInput onChange={handleChange}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Button colorScheme='green' ml='4' onClick={handleClick}>
            Search
          </Button>
        </Center>
      </Box>

      <Box id='list' mt='50px'>
        <SimpleGrid columns={2} spacing={2}>
          {isData && playersToRender.length > 0 &&
            renderList()
          }
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Home
