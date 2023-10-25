const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractLMOUyk = await ERC20.new({from: accounts[5]});
		const addedValuePAG55BB = BigInt("1940")
		const spenderCt71Tv = accounts[2]
		const valueWb7Dxry = BigInt("2030")
		const toHfqRaxS = accounts[4]
		const fromT4cNIKt = accounts[3]
		const ownergOWEdYp = accounts[3]
		const valueQibEdU = BigInt("1363")
		const toYjneL5F = "0x0000000000000000000000000000000000000001"
		const valueBOmAOSf = BigInt("1186")
		const tofk0mWWU = "0x0000000000000000000000000000000000000001"
		const fromw0c872Y = accounts[2]
		const valuenMCJcyh = BigInt("103")
		const toI0t5MXQ = accounts[5]
		const nullsDsnPLV = await contractLMOUyk.increaseAllowance.call(spenderCt71Tv, addedValuePAG55BB, {from: accounts[2]});
		const nullMRJQEAg = await contractLMOUyk.transferFrom.call(fromT4cNIKt, toHfqRaxS, valueWb7Dxry, {from: accounts[3]});
		const nullXGeacTs = await contractLMOUyk.balanceOf.call(ownergOWEdYp, {from: accounts[0]});
		const nullIFM2vP = await contractLMOUyk.transfer.call(toYjneL5F, valueQibEdU, {from: accounts[0]});
		const nullggHBoLm = await contractLMOUyk.transferFrom.call(fromw0c872Y, tofk0mWWU, valueBOmAOSf, {from: accounts[3]});
		const nullRUeFn0j = await contractLMOUyk.transfer.call(toI0t5MXQ, valuenMCJcyh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullsDsnPLV, true)
		await expect(contractLMOUyk.transferFrom.call(fromT4cNIKt, toHfqRaxS, valueWb7Dxry, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractClgBEvB = await ERC20.new({from: accounts[4]});
		const ownerTlysH3B = accounts[4]
		const valueg9FEvt4 = BigInt("2045")
		const tocYq4H1 = accounts[1]
		const value9oEFpW = BigInt("800")
		const totQV7kjw = accounts[2]
		const fromY1A91Si = accounts[1]
		const valuedMs3I75 = BigInt("1103")
		const tooYvzZJc = accounts[3]
		const fromyPVjEt = accounts[5]
		const addedValueqoLXqZ4 = BigInt("1021")
		const spenderKVrTJXk = accounts[5]
		const spenderTHXsoGQ = accounts[3]
		const ownergwsFpU = accounts[2]
		const nullJyEQHGR = await contractClgBEvB.balanceOf.call(ownerTlysH3B, {from: accounts[0]});
		const nullJsSyOaV = await contractClgBEvB.transfer.call(tocYq4H1, valueg9FEvt4, {from: accounts[3]});
		const nullu9p050 = await contractClgBEvB.transferFrom.call(fromY1A91Si, totQV7kjw, value9oEFpW, {from: accounts[2]});
		const nullM0u5hlL = await contractClgBEvB.transferFrom.call(fromyPVjEt, tooYvzZJc, valuedMs3I75, {from: accounts[4]});
		const nulleGNEpO = await contractClgBEvB.increaseAllowance.call(spenderKVrTJXk, addedValueqoLXqZ4, {from: accounts[3]});
		const nullmDzIja = await contractClgBEvB.allowance.call(ownergwsFpU, spenderTHXsoGQ, {from: accounts[5]});

		assert.equal(nullJyEQHGR, 0)
		await expect(contractClgBEvB.transfer.call(tocYq4H1, valueg9FEvt4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractAu8oFqv = await ERC20.new({from: accounts[4]});
		const valueUcEo2IW = BigInt("1251")
		const spenderCmbDvu = accounts[5]
		const addedValueULbtN3t = BigInt("669")
		const spenderoJjd3J8 = accounts[2]
		const ownerQRCcIRk = "0x0000000000000000000000000000000000000001"
		const nullxapyRAL = await contractAu8oFqv.approve.call(spenderCmbDvu, valueUcEo2IW, {from: accounts[0]});
		const nullxBF6mTj = await contractAu8oFqv.increaseAllowance.call(spenderoJjd3J8, addedValueULbtN3t, {from: accounts[5]});
		const nullozn4TGL = await contractAu8oFqv.balanceOf.call(ownerQRCcIRk, {from: accounts[3]});

		assert.equal(nullozn4TGL, 0)
		assert.equal(nullxBF6mTj, true)
		assert.equal(nullxapyRAL, true)
	});

	it('test for ERC20', async () => {
		const contractl0vY30P = await ERC20.new({from: accounts[4]});
		const valuepp7qOtT = BigInt("610")
		const toyGgQZLS = "0x0000000000000000000000000000000000000001"
		const nullqkOfVWo = await contractl0vY30P.totalSupply.call({from: accounts[3]});
		const nullXS8DI4y = await contractl0vY30P.transfer.call(toyGgQZLS, valuepp7qOtT, {from: accounts[3]});
		const nullUhWw0G7 = await contractl0vY30P.totalSupply.call({from: accounts[2]});

		assert.equal(nullqkOfVWo, 0)
		await expect(contractl0vY30P.transfer.call(toyGgQZLS, valuepp7qOtT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractg5P90ae = await ERC20.new({from: accounts[4]});
		const subtractedValueEzIQIAf = BigInt("1542")
		const spenderkWYvhy5 = accounts[4]
		const valuedM91Jg9 = BigInt("850")
		const toQEY1DFz = accounts[2]
		const fromapve74n = accounts[3]
		const valueClMqNVh = BigInt("675")
		const toQweZn3N = "0x0000000000000000000000000000000000000001"
		const addedValueARHdraK = BigInt("1721")
		const spenderLBwtdjq = accounts[3]
		const nullNw4Swx4 = await contractg5P90ae.decreaseAllowance.call(spenderkWYvhy5, subtractedValueEzIQIAf, {from: "0x0000000000000000000000000000000000000001"});
		const nullA1awuMy = await contractg5P90ae.transferFrom.call(fromapve74n, toQEY1DFz, valuedM91Jg9, {from: accounts[1]});
		const nullNBcuHeV = await contractg5P90ae.transfer.call(toQweZn3N, valueClMqNVh, {from: accounts[3]});
		const nullZ5L6kNT = await contractg5P90ae.increaseAllowance.call(spenderLBwtdjq, addedValueARHdraK, {from: accounts[0]});

		await expect(contractg5P90ae.decreaseAllowance.call(spenderkWYvhy5, subtractedValueEzIQIAf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractg0tIknC = await ERC20.new({from: accounts[4]});
		const valueIJWsnFs = BigInt("1251")
		const spenderNMYa8Ae = accounts[5]
		const ownerGMVHzYG = "0x0000000000000000000000000000000000000001"
		const spendergtaAOKu = accounts[1]
		const ownerXYWQ3wo = accounts[0]
		const nullhPSdXfp = await contractg0tIknC.approve.call(spenderNMYa8Ae, valueIJWsnFs, {from: accounts[0]});
		const nullkyNK9Gn = await contractg0tIknC.balanceOf.call(ownerGMVHzYG, {from: accounts[3]});
		const nullrgiXLvP = await contractg0tIknC.allowance.call(ownerXYWQ3wo, spendergtaAOKu, {from: accounts[3]});

		assert.equal(nullhPSdXfp, true)
		assert.equal(nullkyNK9Gn, 0)
		assert.equal(nullrgiXLvP, 0)
	});

	it('test for ERC20', async () => {
		const contractuipwWd8 = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const ownerUuEkDt = accounts[1]
		const subtractedValue5gy7DK = BigInt("681")
		const spendersidm1XY = accounts[5]
		const nullowpIpU4 = await contractuipwWd8.totalSupply.call({from: accounts[5]});
		const nullKHobCe = await contractuipwWd8.balanceOf.call(ownerUuEkDt, {from: accounts[1]});
		const nullIlqEFXg = await contractuipwWd8.decreaseAllowance.call(spendersidm1XY, subtractedValue5gy7DK, {from: accounts[4]});
	});
})