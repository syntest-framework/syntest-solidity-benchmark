const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringBwPJtks = "wv2FTQdvxHc58zBL5P2Jr5kUd1ACfhHIdJE1duJoKg2Vym3dv1avtWfMnF4BedJIMijfpEIOYdYwRccsMomAJybJ6T"
		const addressIKVqQFY = accounts[4]
		const addressmQALkxM = accounts[3]
		const uint61jq7q = BigInt("1840")
		const uintDTij4aG = BigInt("377")
		const Liquidity_v8OQNummr = await Liquidity_v8.new(stringBwPJtks, addressIKVqQFY, addressmQALkxM, uint61jq7q, uintDTij4aG, {from: accounts[2]});
		const uintEv8gTi9 = BigInt("480")
		const uintvn5VSIG = BigInt("403")
		const uinti6U5FQO = BigInt("1641")
		const uint256i2mM92x = await Liquidity_v8OQNummr.changeLockDuration.call(uintEv8gTi9, {from: accounts[5]});
		const uint256a5CrBD9 = await Liquidity_v8OQNummr.changeLockDuration.call(uintvn5VSIG, {from: accounts[3]});
		const addressUS5CCBr = await Liquidity_v8OQNummr.owner.call({from: accounts[2]});
		const boolq1UxnOo = await Liquidity_v8OQNummr.stake.call(uinti6U5FQO, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringkWpPS1u = "JzxagrzBPADItxwe9Jx8vsBVvjy58JlXVEWEY4VIhmv"
		const addresso6WGt6o = accounts[1]
		const addressWUKRJjR = accounts[5]
		const uintKf0qX1N = BigInt("1926")
		const uintV1lEKT = BigInt("1074")
		const Liquidity_v8Q0DQxTF = await Liquidity_v8.new(stringkWpPS1u, addresso6WGt6o, addressWUKRJjR, uintKf0qX1N, uintV1lEKT, {from: accounts[2]});
		const addressG8SOdo = accounts[1]
		const addresswPOc3jX = accounts[2]
		const addressoAbX767 = accounts[0]
		const uint256AX8ppmX = await Liquidity_v8Q0DQxTF.calculate.call(addressG8SOdo, {from: accounts[3]});
		const 
jCTtDqB = await Liquidity_v8Q0DQxTF.userDeposits.call(addresswPOc3jX, {from: accounts[0]});
		const 
zQsPie5 = await Liquidity_v8Q0DQxTF.userDeposits.call(addressoAbX767, {from: accounts[0]});
		const boolD2tuABG = await Liquidity_v8Q0DQxTF.withdraw.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringjBLMCAE = "uUGjdbAZxpHFNaHEAeVeWQ5xaz"
		const addressoFkFIu = accounts[0]
		const addressIs6d7QW = accounts[4]
		const uintcHLa4p7 = BigInt("701")
		const uintgvl9ro = BigInt("691")
		const Liquidity_v8lidhoMN = await Liquidity_v8.new(stringjBLMCAE, addressoFkFIu, addressIs6d7QW, uintcHLa4p7, uintgvl9ro, {from: accounts[4]});
		const addressoSOS2oj = accounts[4]
		const uintsvzT8Ep = BigInt("728")
		const uintPDtRjoV = BigInt("1894")
		await Liquidity_v8lidhoMN.onlyOwner.call({from: accounts[3]});
		await Liquidity_v8lidhoMN.onlyOwner.call({from: accounts[1]});
		const 
GNpf1RC = await Liquidity_v8lidhoMN.userDeposits.call(addressoSOS2oj, {from: accounts[2]});
		const uint256KAm2BYM = await Liquidity_v8lidhoMN.changeLockDuration.call(uintsvzT8Ep, {from: accounts[1]});
		const uint64v94S9zN = await Liquidity_v8lidhoMN.setRate.call(uintPDtRjoV, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringc1RhI0K = "T696uMbtxu4Cx0TpiTh8HD1Knqw9X5HjRFeGWRia1mmILSYnWGPMrfWAXs4wdF6kTrubXvBHypFd7yl67K8D3pl7"
		const addressspWIqnZ = accounts[2]
		const addressKadIDqa = accounts[0]
		const uintZ6WR2Cz = BigInt("620")
		const uintnxZqiyR = BigInt("543")
		const Liquidity_v8MJKOLY = await Liquidity_v8.new(stringc1RhI0K, addressspWIqnZ, addressKadIDqa, uintZ6WR2Cz, uintnxZqiyR, {from: accounts[3]});
		const uintf439Ult = BigInt("607")
		const boolip6dJpB = await Liquidity_v8MJKOLY.emergencyWithdraw.call({from: accounts[4]});
		await Liquidity_v8MJKOLY.renounceOwnership.call({from: accounts[2]});
		await Liquidity_v8MJKOLY.onlyOwner.call({from: accounts[3]});
		const boolpchHrS = await Liquidity_v8MJKOLY.addReward.call(uintf439Ult, {from: accounts[5]});
		const addressenCk8cC = await Liquidity_v8MJKOLY.owner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringHZktmPs = "HEOh"
		const addressJ6jnZ4o = accounts[4]
		const addressPMd4aKg = accounts[0]
		const uintlK8j8ab = BigInt("1099")
		const uintmehrIzM = BigInt("984")
		const Liquidity_v8XiJbLV1 = await Liquidity_v8.new(stringHZktmPs, addressJ6jnZ4o, addressPMd4aKg, uintlK8j8ab, uintmehrIzM, {from: accounts[1]});
		const addressTEbEwbZ = accounts[0]
		await Liquidity_v8XiJbLV1.renounceOwnership.call({from: accounts[1]});
		const uint256eLgvqLd = await Liquidity_v8XiJbLV1.calculate.call(addressTEbEwbZ, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringkWpPS1u = "JzxagrzBPADItxwe9Jx8vsBVvjy58JlXVEWEY4VIhmv"
		const addressdogL5L = accounts[1]
		const addressDxNmGwV = accounts[5]
		const uintRUBzbY6 = BigInt("1926")
		const uintWEaqLEu = BigInt("1074")
		const Liquidity_v8Q0DQxTF = await Liquidity_v8.new(stringkWpPS1u, addressdogL5L, addressDxNmGwV, uintRUBzbY6, uintWEaqLEu, {from: accounts[2]});
		const addressYAKwCXa = accounts[1]
		const uintkipe22A = BigInt("315")
		const uint256AX8ppmX = await Liquidity_v8Q0DQxTF.calculate.call(addressYAKwCXa, {from: accounts[3]});
		const boolhWNvvFC = await Liquidity_v8Q0DQxTF.addReward.call(uintkipe22A, {from: "0x0000000000000000000000000000000000000001"});
		const boolD2tuABG = await Liquidity_v8Q0DQxTF.withdraw.call({from: accounts[5]});
		const addressfuMCB4B = await Liquidity_v8Q0DQxTF.owner.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringTPJO2qL = "y14GgDHmUHrrtWbKNlA10mhddwjgE8KvUhAX"
		const addressbTnkexO = "0x0000000000000000000000000000000000000001"
		const addressYLYQyk = accounts[1]
		const uintDvdaxOR = BigInt("876")
		const uintb45vTLD = BigInt("1778")
		const Liquidity_v8E27pZlC = await Liquidity_v8.new(stringTPJO2qL, addressbTnkexO, addressYLYQyk, uintDvdaxOR, uintb45vTLD, {from: accounts[4]});
		const uintBxJfXxl = BigInt("286")
		const addressM3cmCiU = await Liquidity_v8E27pZlC.owner.call({from: accounts[4]});
		const uint256bXYj4xK = await Liquidity_v8E27pZlC.changeLockDuration.call(uintBxJfXxl, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringkWpPS1u = "JzxagrzBPADItxwe9Jx8vsBVvjy58JlXVEWEY4VIhmv"
		const addressxvMjU7g = accounts[1]
		const addresshOxGnWM = accounts[5]
		const uintre6XrEd = BigInt("1926")
		const uintq3iYWqN = BigInt("1074")
		const Liquidity_v8Q0DQxTF = await Liquidity_v8.new(stringkWpPS1u, addressxvMjU7g, addresshOxGnWM, uintre6XrEd, uintq3iYWqN, {from: accounts[2]});
		const uintgUP9H2e = BigInt("783")
		const addresscPZx3VR = accounts[1]
		const addressQtRjLu8 = accounts[2]
		const addresskEuaewj = accounts[1]
		const addressvAdnQNv = accounts[0]
		const addressj6wjoJu = accounts[5]
		const uint64sG02QtJ = await Liquidity_v8Q0DQxTF.setRate.call(uintgUP9H2e, {from: accounts[2]});
		const uint256AX8ppmX = await Liquidity_v8Q0DQxTF.calculate.call(addresscPZx3VR, {from: accounts[3]});
		await Liquidity_v8Q0DQxTF.renounceOwnership.call({from: accounts[2]});
		const 
jCTtDqB = await Liquidity_v8Q0DQxTF.userDeposits.call(addressQtRjLu8, {from: accounts[0]});
		const addressuTyt7Z = await Liquidity_v8Q0DQxTF.transferOwnership.call(addresskEuaewj, {from: accounts[2]});
		const 
zQsPie5 = await Liquidity_v8Q0DQxTF.userDeposits.call(addressvAdnQNv, {from: accounts[0]});
		const uint256Nn4OHw = await Liquidity_v8Q0DQxTF.calculate.call(addressj6wjoJu, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringEgU9aDY = "sxrNaQA87jkjSQzVbfeQPUzkfC3RXl8pMonCxWSRUPEfwAglGqj8aBm1WWU7CryglMMZWqIhOT4PqCquXMINyD2dWp2zRWKcM"
		const address9KgZgB = accounts[0]
		const addressyxkTaHT = accounts[2]
		const uintqlRjmpd = BigInt("1267")
		const uintk1Y6yqL = BigInt("1453")
		const Liquidity_v8ikgOmka = await Liquidity_v8.new(stringEgU9aDY, address9KgZgB, addressyxkTaHT, uintqlRjmpd, uintk1Y6yqL, {from: "0x0000000000000000000000000000000000000001"});
		const uinth4ZLF7i = BigInt("757")
		const boolfJigS1a = await Liquidity_v8ikgOmka.emergencyWithdraw.call({from: accounts[0]});
		await Liquidity_v8ikgOmka.renounceOwnership.call({from: accounts[4]});
		const uint256QtWq4L0 = await Liquidity_v8ikgOmka.changeLockDuration.call(uinth4ZLF7i, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringkWpPS1u = "JzxagrzBPADItxwe9Jx8vsBVvjy58JlXVEWEY4VIhmv"
		const addressJeRIsnD = accounts[1]
		const addressJe7rmd = accounts[5]
		const uintOV1gFr8 = BigInt("1926")
		const uintxeKjDVw = BigInt("1074")
		const Liquidity_v8Q0DQxTF = await Liquidity_v8.new(stringkWpPS1u, addressJeRIsnD, addressJe7rmd, uintOV1gFr8, uintxeKjDVw, {from: accounts[2]});
		const addressMWppKrj = accounts[6]
		const uintiZd3IGj = BigInt("370")
		const addressIeVwIV = accounts[1]
		const 
jCTtDqB = await Liquidity_v8Q0DQxTF.userDeposits.call(addressMWppKrj, {from: accounts[0]});
		const uint256o8BY2g = await Liquidity_v8Q0DQxTF.changeLockDuration.call(uintiZd3IGj, {from: accounts[2]});
		const addressT3GQuti = await Liquidity_v8Q0DQxTF.transferOwnership.call(addressIeVwIV, {from: accounts[1]});
	});
})