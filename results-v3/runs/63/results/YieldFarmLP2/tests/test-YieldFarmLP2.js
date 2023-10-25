const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2tqML9v = await YieldFarmLP2.new({from: accounts[2]});
		const uintsUz55J = BigInt("1879")
		const address9gdgPl = accounts[3]
		const uintqSbrA3p = await YieldFarmLP2tqML9v.massHarvest.call({from: accounts[0]});
		const uintbmEDusB = await YieldFarmLP2tqML9v.getCurrentEpoch.call({from: accounts[3]});
		const uintgGddrUc = await YieldFarmLP2tqML9v.getEpochStake.call(address9gdgPl, uintsUz55J, {from: accounts[0]});
		const uintck7un9u = await YieldFarmLP2tqML9v.getCurrentEpoch.call({from: accounts[1]});

		await expect(YieldFarmLP2tqML9v.massHarvest.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2aLqjOg = await YieldFarmLP2.new({from: accounts[3]});
		const uintUUa1Nbr = BigInt("443")
		const addressjxB1y78 = accounts[3]
		const uintK6sMLLF = BigInt("1310")
		const uintM5zpPo7 = BigInt("566")
		const uinteL5WL1J = await YieldFarmLP2aLqjOg.getCurrentEpoch.call({from: accounts[0]});
		const uint65S2RP = await YieldFarmLP2aLqjOg.getEpochStake.call(addressjxB1y78, uintUUa1Nbr, {from: accounts[5]});
		const uintYtoyWk9 = await YieldFarmLP2aLqjOg.getPoolSize.call(uintK6sMLLF, {from: accounts[0]});
		const uintWmFvolB = await YieldFarmLP2aLqjOg.getPoolSize.call(uintM5zpPo7, {from: accounts[4]});
		const uintPPjho1b = await YieldFarmLP2aLqjOg.userLastEpochIdHarvested.call({from: accounts[2]});

		await expect(YieldFarmLP2aLqjOg.getCurrentEpoch.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2n1r67Lg = await YieldFarmLP2.new({from: accounts[0]});
		const uintfi5Xzyo = BigInt("826")
		const addressKdvEyp = accounts[2]
		const addressCVKo8si = accounts[1]
		const uintZoz4kh = await YieldFarmLP2n1r67Lg.getPoolSize.call(uintfi5Xzyo, {from: accounts[1]});
		const uintFwqUq9M = await YieldFarmLP2n1r67Lg.getCurrentEpoch.call({from: accounts[1]});
		const uintBRZbrP = await YieldFarmLP2n1r67Lg.userLastEpochIdHarvested.call({from: accounts[0]});
		const uintDyvFcLq = await YieldFarmLP2n1r67Lg.claimable.call(addressKdvEyp, {from: accounts[3]});
		const uintFOolhcd = await YieldFarmLP2n1r67Lg.claimable.call(addressCVKo8si, {from: accounts[0]});

		await expect(YieldFarmLP2n1r67Lg.getPoolSize.call(uintfi5Xzyo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2A3rFqk9 = await YieldFarmLP2.new({from: accounts[3]});
		const uintFMt7JJT = BigInt("1995")
		const addressGIVQbO8 = accounts[0]
		const addressxpYypdl = accounts[3]
		const addressd4J8r1e = accounts[4]
		const addressREr3tq4 = accounts[0]
		const uintztWzbkI = BigInt("460")
		const uintnru583l = BigInt("6")
		const addresshr9KD2Z = accounts[4]
		const uintgMCdo9G = await YieldFarmLP2A3rFqk9.harvest.call(uintFMt7JJT, {from: accounts[0]});
		const uintmPLrOCT = await YieldFarmLP2A3rFqk9.userLastEpochIdHarvested.call({from: accounts[1]});
		const addresslipWMQ = await YieldFarmLP2A3rFqk9.initialize.call(addressREr3tq4, addressd4J8r1e, addressxpYypdl, addressGIVQbO8, {from: accounts[3]});
		const uintxFa3M23 = await YieldFarmLP2A3rFqk9.getPoolSize.call(uintztWzbkI, {from: accounts[0]});
		const uintAWWD5vA = await YieldFarmLP2A3rFqk9.getEpochStake.call(addresshr9KD2Z, uintnru583l, {from: accounts[2]});

		await expect(YieldFarmLP2A3rFqk9.harvest.call(uintFMt7JJT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2E7FuO7Y = await YieldFarmLP2.new({from: accounts[1]});
		const uintOYisYVj = BigInt("779")
		const uintsXPhFVD = await YieldFarmLP2E7FuO7Y.userLastEpochIdHarvested.call({from: accounts[0]});
		const uintISK3XKi = await YieldFarmLP2E7FuO7Y.harvest.call(uintOYisYVj, {from: accounts[4]});

		assert.equal(uintsXPhFVD, BigInt("0"))
		await expect(YieldFarmLP2E7FuO7Y.harvest.call(uintOYisYVj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2uCyrTLR = await YieldFarmLP2.new({from: accounts[0]});
		const address6NgWS1 = accounts[2]
		const uintDdY8MVX = BigInt("486")
		const addressTnZ7dW = accounts[1]
		const uintvko211y = await YieldFarmLP2uCyrTLR.claimable.call(address6NgWS1, {from: accounts[4]});
		const uintf1K3p2M = await YieldFarmLP2uCyrTLR.getPoolSize.call(uintDdY8MVX, {from: accounts[2]});
		const uintmKQXiqu = await YieldFarmLP2uCyrTLR.claimable.call(addressTnZ7dW, {from: accounts[0]});
		const uintgTa1QNC = await YieldFarmLP2uCyrTLR.massHarvest.call({from: accounts[3]});

		await expect(YieldFarmLP2uCyrTLR.claimable.call(address6NgWS1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2A3rFqk9 = await YieldFarmLP2.new({from: accounts[3]});
		const addressRWOHFp6 = accounts[0]
		const addressoPrfdbh = accounts[3]
		const addressfq1SYX = accounts[4]
		const addressumXvRDq = accounts[0]
		const uintGVX16uD = BigInt("460")
		const uintI2Xs4J = BigInt("1823")
		const addressnyDTHwz = accounts[3]
		const uintrDWqbfQ = BigInt("6")
		const addressDUADkDO = accounts[4]
		const uintmPLrOCT = await YieldFarmLP2A3rFqk9.userLastEpochIdHarvested.call({from: accounts[1]});
		const addresslipWMQ = await YieldFarmLP2A3rFqk9.initialize.call(addressumXvRDq, addressfq1SYX, addressoPrfdbh, addressRWOHFp6, {from: accounts[3]});
		const uintxFa3M23 = await YieldFarmLP2A3rFqk9.getPoolSize.call(uintGVX16uD, {from: accounts[0]});
		const uintVYFahJr = await YieldFarmLP2A3rFqk9.massHarvest.call({from: accounts[4]});
		const uintleJlv4I = await YieldFarmLP2A3rFqk9.getEpochStake.call(addressnyDTHwz, uintI2Xs4J, {from: accounts[4]});
		const uintAWWD5vA = await YieldFarmLP2A3rFqk9.getEpochStake.call(addressDUADkDO, uintrDWqbfQ, {from: accounts[2]});

		assert.equal(uintmPLrOCT, BigInt("0"))
		await expect(YieldFarmLP2A3rFqk9.initialize.call(addressumXvRDq, addressfq1SYX, addressoPrfdbh, addressRWOHFp6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2nUCAyzB = await YieldFarmLP2.new({from: accounts[5]});
		const uintiY9CU0k = BigInt("1602")
		const addressjssIwJn = accounts[2]
		const addressmv24gE = accounts[4]
		const uintobcYZub = BigInt("315")
		const addressF5UQTrT = accounts[2]
		const uintDHb8q1i = BigInt("943")
		const uintPAMOgBC = BigInt("1378")
		const uintVl8Q86F = await YieldFarmLP2nUCAyzB.userLastEpochIdHarvested.call({from: accounts[1]});
		const uintuuxL9O = await YieldFarmLP2nUCAyzB.getEpochStake.call(addressjssIwJn, uintiY9CU0k, {from: accounts[0]});
		const uintu6aVVXk = await YieldFarmLP2nUCAyzB.claimable.call(addressmv24gE, {from: accounts[1]});
		const uintFV0WBtc = await YieldFarmLP2nUCAyzB.getCurrentEpoch.call({from: accounts[3]});
		const uintiCyvjk4 = await YieldFarmLP2nUCAyzB.getPoolSize.call(uintobcYZub, {from: accounts[1]});
		const uintGpHmiHE = await YieldFarmLP2nUCAyzB.claimable.call(addressF5UQTrT, {from: accounts[1]});
		const uintBWKANOd = await YieldFarmLP2nUCAyzB.getPoolSize.call(uintDHb8q1i, {from: accounts[3]});
		const uintNkaOrkP = await YieldFarmLP2nUCAyzB.harvest.call(uintPAMOgBC, {from: accounts[3]});

		assert.equal(uintVl8Q86F, BigInt("0"))
		await expect(YieldFarmLP2nUCAyzB.getEpochStake.call(addressjssIwJn, uintiY9CU0k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2mhpvjsR = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBepBNS7 = BigInt("1577")
		const uintnSLfsix = BigInt("348")
		const addressbfPh4ob = accounts[1]
		const uintcOTQI0Y = BigInt("1423")
		const uintiJYA98y = BigInt("2044")
		const uintda1ZEul = await YieldFarmLP2mhpvjsR.getPoolSize.call(uintBepBNS7, {from: accounts[3]});
		const uintoP6IWHK = await YieldFarmLP2mhpvjsR.getEpochStake.call(addressbfPh4ob, uintnSLfsix, {from: "0x0000000000000000000000000000000000000001"});
		const uintyr7N89 = await YieldFarmLP2mhpvjsR.getPoolSize.call(uintcOTQI0Y, {from: "0x0000000000000000000000000000000000000001"});
		const uintAQ4kclr = await YieldFarmLP2mhpvjsR.getPoolSize.call(uintiJYA98y, {from: accounts[0]});
		const uintVIkjWY3 = await YieldFarmLP2mhpvjsR.getCurrentEpoch.call({from: accounts[4]});
	});
})