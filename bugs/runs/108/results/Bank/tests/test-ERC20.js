const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractlcLaZA = await ERC20.new({from: accounts[2]});
		const valueJhE8se3 = BigInt("580")
		const torZ97lQE = accounts[3]
		const valueqi1hhdM = BigInt("448")
		const spenderI0s4eaI = accounts[2]
		const nullgh7FzF = await contractlcLaZA.transfer.call(torZ97lQE, valueJhE8se3, {from: accounts[5]});
		const nulle5Mbq9 = await contractlcLaZA.approve.call(spenderI0s4eaI, valueqi1hhdM, {from: accounts[3]});

		await expect(contractlcLaZA.transfer.call(torZ97lQE, valueJhE8se3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractvk8tSuF = await ERC20.new({from: accounts[1]});
		const spenderH1dtE9d = accounts[0]
		const ownerVrz1ZBq = "0x0000000000000000000000000000000000000001"
		const addedValue6EUkK8 = BigInt("125")
		const spendereRwBHFh = accounts[2]
		const addedValueTvp5Hha = BigInt("744")
		const spenderfbxkGG1 = accounts[4]
		const valueqiG2rnG = BigInt("1531")
		const toBfYoMG = accounts[1]
		const fromf6tIhGn = accounts[0]
		const nullFHbafdC = await contractvk8tSuF.allowance.call(ownerVrz1ZBq, spenderH1dtE9d, {from: accounts[5]});
		const nullzp4SwY1 = await contractvk8tSuF.increaseAllowance.call(spendereRwBHFh, addedValue6EUkK8, {from: accounts[1]});
		const nullYk7cyG7 = await contractvk8tSuF.increaseAllowance.call(spenderfbxkGG1, addedValueTvp5Hha, {from: accounts[4]});
		const nullQQ02UwQ = await contractvk8tSuF.transferFrom.call(fromf6tIhGn, toBfYoMG, valueqiG2rnG, {from: accounts[5]});

		assert.equal(nullFHbafdC, 0)
		assert.equal(nullYk7cyG7, true)
		assert.equal(nullzp4SwY1, true)
		await expect(contractvk8tSuF.transferFrom.call(fromf6tIhGn, toBfYoMG, valueqiG2rnG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractY8kU5dE = await ERC20.new({from: accounts[2]});
		const addedValueYnb9xwv = BigInt("815")
		const spendero4ojWTm = accounts[0]
		const valueRIjZQ77 = BigInt("91")
		const torzXCX5F = accounts[4]
		const fromqHB2c0 = "0x0000000000000000000000000000000000000001"
		const valuesgGCmDc = BigInt("1729")
		const ton8QK2CG = accounts[4]
		const fromzNhvyTo = "0x0000000000000000000000000000000000000001"
		const nullH5mjV3 = await contractY8kU5dE.totalSupply.call({from: accounts[1]});
		const nullDsaYGkI = await contractY8kU5dE.increaseAllowance.call(spendero4ojWTm, addedValueYnb9xwv, {from: accounts[2]});
		const nullJmGNlF = await contractY8kU5dE.transferFrom.call(fromqHB2c0, torzXCX5F, valueRIjZQ77, {from: accounts[2]});
		const nullAycdEGX = await contractY8kU5dE.transferFrom.call(fromzNhvyTo, ton8QK2CG, valuesgGCmDc, {from: accounts[2]});

		assert.equal(nullDsaYGkI, true)
		assert.equal(nullH5mjV3, 0)
		await expect(contractY8kU5dE.transferFrom.call(fromqHB2c0, torzXCX5F, valueRIjZQ77, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractxVoi2q6 = await ERC20.new({from: accounts[4]});
		const addedValuejAauWhc = BigInt("1208")
		const spenderp8KGMY4 = accounts[5]
		const subtractedValuetGhpS4p = BigInt("550")
		const spenderXSfe8lM = accounts[0]
		const subtractedValueRZwYYL = BigInt("616")
		const spenderPhp8jqe = accounts[3]
		const addedValueSamGp0 = BigInt("1332")
		const spenderXhhnG56 = accounts[1]
		const addedValueRySicmN = BigInt("1923")
		const spenderIhm8lJ1 = accounts[2]
		const nulloQ82qmO = await contractxVoi2q6.increaseAllowance.call(spenderp8KGMY4, addedValuejAauWhc, {from: accounts[1]});
		const nullfkESdw6 = await contractxVoi2q6.decreaseAllowance.call(spenderXSfe8lM, subtractedValuetGhpS4p, {from: accounts[2]});
		const nulln2z7aM = await contractxVoi2q6.decreaseAllowance.call(spenderPhp8jqe, subtractedValueRZwYYL, {from: accounts[0]});
		const nullVO0tXY5 = await contractxVoi2q6.increaseAllowance.call(spenderXhhnG56, addedValueSamGp0, {from: accounts[2]});
		const nullqLwEbja = await contractxVoi2q6.increaseAllowance.call(spenderIhm8lJ1, addedValueRySicmN, {from: accounts[4]});

		assert.equal(nulloQ82qmO, true)
		await expect(contractxVoi2q6.decreaseAllowance.call(spenderXSfe8lM, subtractedValuetGhpS4p, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractE60QMl1 = await ERC20.new({from: accounts[2]});
		const ownerwUsx2r = accounts[3]
		const valueJoLrXxl = BigInt("1755")
		const toLj4uWrr = accounts[0]
		const fromDZCiTsb = accounts[5]
		const subtractedValuenavZRZF = BigInt("951")
		const spenderuqMWnfM = accounts[2]
		const nullNgMt8Vy = await contractE60QMl1.balanceOf.call(ownerwUsx2r, {from: accounts[4]});
		const nullSfFi9h5 = await contractE60QMl1.transferFrom.call(fromDZCiTsb, toLj4uWrr, valueJoLrXxl, {from: accounts[4]});
		const nullLWBg3O3 = await contractE60QMl1.decreaseAllowance.call(spenderuqMWnfM, subtractedValuenavZRZF, {from: accounts[2]});

		assert.equal(nullNgMt8Vy, 0)
		await expect(contractE60QMl1.transferFrom.call(fromDZCiTsb, toLj4uWrr, valueJoLrXxl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractjCGFeG = await ERC20.new({from: accounts[2]});
		const spendergSKBfSi = accounts[3]
		const ownerUhyUR7h = accounts[0]
		const valuee0sqfGm = BigInt("286")
		const spenderlRnjRd = accounts[1]
		const subtractedValueOOWU0ke = BigInt("21")
		const spenderpB38i3G = accounts[1]
		const ownersBsAeJ8 = accounts[0]
		const valuekq3uDsy = BigInt("1212")
		const tokQmiMSH = "0x0000000000000000000000000000000000000001"
		const spenderoWLbQ1P = accounts[0]
		const ownerrmAWAqC = accounts[0]
		const nullFzloY8K = await contractjCGFeG.allowance.call(ownerUhyUR7h, spendergSKBfSi, {from: accounts[3]});
		const nullMMZ9G02 = await contractjCGFeG.approve.call(spenderlRnjRd, valuee0sqfGm, {from: accounts[4]});
		const nullctTIYjV = await contractjCGFeG.decreaseAllowance.call(spenderpB38i3G, subtractedValueOOWU0ke, {from: "0x0000000000000000000000000000000000000001"});
		const nullZzEErIN = await contractjCGFeG.balanceOf.call(ownersBsAeJ8, {from: accounts[3]});
		const nullGwZiLyG = await contractjCGFeG.transfer.call(tokQmiMSH, valuekq3uDsy, {from: accounts[0]});
		const nulljeZiJDG = await contractjCGFeG.allowance.call(ownerrmAWAqC, spenderoWLbQ1P, {from: accounts[1]});

		assert.equal(nullFzloY8K, 0)
		assert.equal(nullMMZ9G02, true)
		await expect(contractjCGFeG.decreaseAllowance.call(spenderpB38i3G, subtractedValueOOWU0ke, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractGHSmObr = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const spenderSaWwKw = accounts[4]
		const ownerZpczlCw = accounts[2]
		const addedValue9luOkV = BigInt("559")
		const spenderZ0DtLDL = accounts[2]
		const valuepOfQc0H = BigInt("1759")
		const spenderG2UNve3 = accounts[1]
		const spenderCVn3EgM = accounts[2]
		const ownerpBClMAs = accounts[2]
		const nulll29pGg = await contractGHSmObr.allowance.call(ownerZpczlCw, spenderSaWwKw, {from: accounts[1]});
		const nullnIwOpLW = await contractGHSmObr.increaseAllowance.call(spenderZ0DtLDL, addedValue9luOkV, {from: "0x0000000000000000000000000000000000000001"});
		const nullEAw6aJ5 = await contractGHSmObr.approve.call(spenderG2UNve3, valuepOfQc0H, {from: accounts[0]});
		const nulleBlSWRX = await contractGHSmObr.allowance.call(ownerpBClMAs, spenderCVn3EgM, {from: accounts[1]});
	});
})