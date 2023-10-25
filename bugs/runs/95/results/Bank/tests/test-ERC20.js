const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractgESRqY = await ERC20.new({from: accounts[3]});
		const valuegagziEq = BigInt("1303")
		const tog9PcKyj = accounts[0]
		const fromviMThak = accounts[4]
		const valuebsVEavW = BigInt("1633")
		const spenderdxdP7pB = "0x0000000000000000000000000000000000000001"
		const nullCJyW21Y = await contractgESRqY.transferFrom.call(fromviMThak, tog9PcKyj, valuegagziEq, {from: accounts[3]});
		const nullNrcFj4f = await contractgESRqY.approve.call(spenderdxdP7pB, valuebsVEavW, {from: accounts[1]});
		const nullIX7faFa = await contractgESRqY.totalSupply.call({from: accounts[1]});

		await expect(contractgESRqY.transferFrom.call(fromviMThak, tog9PcKyj, valuegagziEq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractUWXhxSQ = await ERC20.new({from: accounts[3]});
		const valueVwvXcIu = BigInt("163")
		const spendervlWGVIU = accounts[4]
		const valueGOSLjxq = BigInt("2027")
		const spendergmfhNKI = accounts[0]
		const ownerLWkwFGG = accounts[4]
		const valueZ9ltZIL = BigInt("898")
		const toel7Stl = accounts[0]
		const addedValueTSllKIr = BigInt("253")
		const spenderHTwHLM = accounts[5]
		const addedValueWPdhUY9 = BigInt("597")
		const spenderAW2A8Py = accounts[3]
		const nulloHgtHK9 = await contractUWXhxSQ.approve.call(spendervlWGVIU, valueVwvXcIu, {from: accounts[5]});
		const nullDF4antK = await contractUWXhxSQ.approve.call(spendergmfhNKI, valueGOSLjxq, {from: accounts[1]});
		const nullvTNiD6 = await contractUWXhxSQ.balanceOf.call(ownerLWkwFGG, {from: accounts[4]});
		const nullVjaf7AA = await contractUWXhxSQ.transfer.call(toel7Stl, valueZ9ltZIL, {from: accounts[0]});
		const nullOOMGoMR = await contractUWXhxSQ.increaseAllowance.call(spenderHTwHLM, addedValueTSllKIr, {from: accounts[2]});
		const nulloz2pOxH = await contractUWXhxSQ.increaseAllowance.call(spenderAW2A8Py, addedValueWPdhUY9, {from: accounts[1]});

		assert.equal(nullDF4antK, true)
		assert.equal(nulloHgtHK9, true)
		assert.equal(nullvTNiD6, 0)
		await expect(contractUWXhxSQ.transfer.call(toel7Stl, valueZ9ltZIL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractGxuJMX3 = await ERC20.new({from: accounts[5]});
		const spenderJpJuZpC = accounts[4]
		const ownerBsS8cKv = accounts[2]
		const valuevDmugzV = BigInt("320")
		const spenderAuKLlqm = accounts[1]
		const ownerC2nk4xo = accounts[0]
		const valueDh95YbU = BigInt("786")
		const toqKs8AUR = accounts[1]
		const spenderYuW9tID = accounts[3]
		const owneraHmcwLd = accounts[5]
		const nulluDwlMie = await contractGxuJMX3.allowance.call(ownerBsS8cKv, spenderJpJuZpC, {from: accounts[3]});
		const nullzpQfgD = await contractGxuJMX3.approve.call(spenderAuKLlqm, valuevDmugzV, {from: accounts[0]});
		const nullvucMjO = await contractGxuJMX3.balanceOf.call(ownerC2nk4xo, {from: accounts[3]});
		const nullCbrL7OK = await contractGxuJMX3.transfer.call(toqKs8AUR, valueDh95YbU, {from: accounts[2]});
		const nullR9ghY9b = await contractGxuJMX3.totalSupply.call({from: accounts[2]});
		const nullgLCcCxg = await contractGxuJMX3.allowance.call(owneraHmcwLd, spenderYuW9tID, {from: accounts[1]});

		assert.equal(nulluDwlMie, 0)
		assert.equal(nullvucMjO, 0)
		assert.equal(nullzpQfgD, true)
		await expect(contractGxuJMX3.transfer.call(toqKs8AUR, valueDh95YbU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractVLvhZYb = await ERC20.new({from: accounts[5]});
		const addedValuexHAUOLY = BigInt("1921")
		const spenderS6NkZC3 = accounts[3]
		const valuedueJD8 = BigInt("1348")
		const toy1mpEGc = accounts[3]
		const nullQnk72Zv = await contractVLvhZYb.increaseAllowance.call(spenderS6NkZC3, addedValuexHAUOLY, {from: accounts[3]});
		const nullXLXhG12 = await contractVLvhZYb.transfer.call(toy1mpEGc, valuedueJD8, {from: accounts[0]});

		assert.equal(nullQnk72Zv, true)
		await expect(contractVLvhZYb.transfer.call(toy1mpEGc, valuedueJD8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractJJYMR9u = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const spenderRJAQSyr = accounts[2]
		const ownerOqYwkuP = accounts[2]
		const valueHLAujKB = BigInt("939")
		const toBxl414v = "0x0000000000000000000000000000000000000001"
		const valuesTw0E2h = BigInt("994")
		const tomcPZ7Vf = accounts[4]
		const fromyAwphoZ = accounts[4]
		const valueovWHCHD = BigInt("1506")
		const toEzn6Y0m = accounts[0]
		const fromAd8gUWC = accounts[1]
		const subtractedValuedlriqau = BigInt("147")
		const spenderuRME2w5 = accounts[0]
		const nullAB2TG6 = await contractJJYMR9u.allowance.call(ownerOqYwkuP, spenderRJAQSyr, {from: accounts[2]});
		const null83zX7A = await contractJJYMR9u.transfer.call(toBxl414v, valueHLAujKB, {from: accounts[2]});
		const null8168Jq = await contractJJYMR9u.transferFrom.call(fromyAwphoZ, tomcPZ7Vf, valuesTw0E2h, {from: accounts[1]});
		const nullArMKiTC = await contractJJYMR9u.transferFrom.call(fromAd8gUWC, toEzn6Y0m, valueovWHCHD, {from: accounts[2]});
		const nullcbxnV3 = await contractJJYMR9u.decreaseAllowance.call(spenderuRME2w5, subtractedValuedlriqau, {from: accounts[0]});
	});

	it('test for ERC20', async () => {
		const contractyWqhRDT = await ERC20.new({from: accounts[2]});
		const spendertIXZc0H = accounts[4]
		const ownerkk7apu1 = accounts[2]
		const valueiDiEvHM = BigInt("1879")
		const toKOC6OSH = "0x0000000000000000000000000000000000000001"
		const fromLT7odx3 = accounts[5]
		const nullRhDxjei = await contractyWqhRDT.totalSupply.call({from: accounts[1]});
		const nullrHxlAGJ = await contractyWqhRDT.allowance.call(ownerkk7apu1, spendertIXZc0H, {from: accounts[1]});
		const nullZ2syPm6 = await contractyWqhRDT.transferFrom.call(fromLT7odx3, toKOC6OSH, valueiDiEvHM, {from: accounts[4]});

		assert.equal(nullRhDxjei, 0)
		assert.equal(nullrHxlAGJ, 0)
		await expect(contractyWqhRDT.transferFrom.call(fromLT7odx3, toKOC6OSH, valueiDiEvHM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractU5fHzLj = await ERC20.new({from: accounts[1]});
		const addedValueRdjPAz1 = BigInt("659")
		const spenderoqlhGiI = accounts[2]
		const subtractedValueKcGBPe3 = BigInt("1022")
		const spenderSYeIFTV = "0x0000000000000000000000000000000000000001"
		const nullgCIPX8y = await contractU5fHzLj.increaseAllowance.call(spenderoqlhGiI, addedValueRdjPAz1, {from: accounts[3]});
		const nullj3FCbL = await contractU5fHzLj.decreaseAllowance.call(spenderSYeIFTV, subtractedValueKcGBPe3, {from: accounts[1]});

		assert.equal(nullgCIPX8y, true)
		await expect(contractU5fHzLj.decreaseAllowance.call(spenderSYeIFTV, subtractedValueKcGBPe3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})